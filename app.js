/* ─────────────────────────────────────────────────────────────────────────
   Spanish Word Tutor — main application logic
   ─────────────────────────────────────────────────────────────────────────
   This file ports the Python/tkinter app to a web browser. It runs entirely
   client-side: no server, no database. Your progress lives in localStorage,
   so the app works offline and keeps your data private to your browser.

   Sections in this file:
     1. Storage helpers       — read/write progress + customizations
     2. SM-2 spaced repetition — the algorithm that schedules reviews
     3. Within-day cooldowns  — research-backed spacing between exposures
     4. Queue building        — what to show this session
     5. Emoji selection       — pick a relevant emoji per word
     6. Pronunciation         — Web Speech API for tap-to-hear
     7. UI: home / study / done / browse / customize
     8. Wiring (event handlers)
   ───────────────────────────────────────────────────────────────────────── */

'use strict';

// ─── Constants ───────────────────────────────────────────────────────────
const DAILY_NEW_LIMIT = 10;        // brand-new words introduced per day

// Cooldown (in seconds) after rating a word, before it can re-appear today
const COOLDOWN_AFTER_RATING = {
  1: 10 * 60,    // Again: 10 min
  2: 30 * 60,    // Hard:  30 min
  3: 60 * 60,    // Good (still learning): 1 hour
  4: 0,          // Easy: SM-2 daily schedule is enough
};

const STORAGE_KEYS = {
  progress:        'spanishTutor:progress',
  customizations:  'spanishTutor:customizations',
  settings:        'spanishTutor:settings',
  conjProgress:    'spanishTutor:conjProgress',   // SM-2 state per conjugation card
  conjUnlocks:     'spanishTutor:conjUnlocks',    // per-verb max unlocked tense idx
};

// A verb is eligible for conjugation drilling when its vocab card has reached
// this confidence in section 1. Tune to taste.
const CONJ_ELIGIBILITY_MIN_REPS   = 3;
const CONJ_ELIGIBILITY_MIN_RATING = 3;   // Good or Easy


// ═══════════════════════════════════════════════════════════════════════════
// 1. STORAGE
// ═══════════════════════════════════════════════════════════════════════════

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn('Failed to load', key, e);
    return fallback;
  }
}
function saveJSON(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    alert('Could not save your progress. Storage may be full.\n\n' + e.message);
  }
}

function loadProgress()       { return loadJSON(STORAGE_KEYS.progress, {}); }
function saveProgress(p)      { saveJSON(STORAGE_KEYS.progress, p); }
function loadCustomizations() { return loadJSON(STORAGE_KEYS.customizations, {}); }
function saveCustomizations(c){ saveJSON(STORAGE_KEYS.customizations, c); }
function loadSettings()       { return loadJSON(STORAGE_KEYS.settings, {}); }
function saveSettings(s)      { saveJSON(STORAGE_KEYS.settings, s); }
function loadConjProgress()   { return loadJSON(STORAGE_KEYS.conjProgress, {}); }
function saveConjProgress(p)  { saveJSON(STORAGE_KEYS.conjProgress, p); }
function loadConjUnlocks()    { return loadJSON(STORAGE_KEYS.conjUnlocks, {}); }
function saveConjUnlocks(u)   { saveJSON(STORAGE_KEYS.conjUnlocks, u); }


function defaultCardState() {
  return {
    ease_factor: 2.5,
    interval: 0,
    repetitions: 0,
    next_review: today(),
    times_seen: 0,
    // first_seen, last_reviewed, last_seen_time, last_rating: set when first rated
  };
}
function getCardState(progress, idx) {
  return progress[String(idx)] || defaultCardState();
}


// ═══════════════════════════════════════════════════════════════════════════
// 2. SM-2 SPACED REPETITION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Update a card's SM-2 schedule based on how the user rated their recall.
 * @param ease  current ease factor
 * @param interval  current interval in days
 * @param reps  current number of successful repetitions
 * @param rating  1=Again, 2=Hard, 3=Good, 4=Easy
 * @returns {[number, number, number]} [newEase, newInterval, newReps]
 */
function sm2Update(ease, interval, reps, rating) {
  if (rating === 1) {
    return [Math.max(1.3, ease - 0.2), 1, 0];   // forgot — back to day 1
  }
  if (rating === 2) {
    ease = Math.max(1.3, ease - 0.15);
    interval = Math.max(1, Math.floor(interval * 1.2));
  } else if (rating === 3) {
    if      (reps === 0) interval = 1;
    else if (reps === 1) interval = 6;
    else                 interval = Math.floor(interval * ease);
  } else if (rating === 4) {
    ease = Math.min(4.0, ease + 0.1);
    if      (reps === 0) interval = 4;
    else if (reps === 1) interval = 10;
    else                 interval = Math.floor(interval * ease * 1.3);
  }
  return [ease, interval, reps + 1];
}


// ═══════════════════════════════════════════════════════════════════════════
// 3. WITHIN-DAY COOLDOWNS
// ═══════════════════════════════════════════════════════════════════════════

function cooldownSeconds(state) {
  const r = state.last_rating;
  if (r === undefined || r === null) return 0;
  if (r === 4) return 0;
  if (r === 3 && (state.repetitions || 0) >= 2) return 0;   // mature
  return COOLDOWN_AFTER_RATING[r] || 0;
}
function secondsUntilReady(state, now) {
  const cooldown = cooldownSeconds(state);
  if (!cooldown || !state.last_seen_time) return 0;
  if (!now) now = new Date();
  const elapsed = (now - new Date(state.last_seen_time)) / 1000;
  return Math.max(0, cooldown - elapsed);
}
function formatWait(seconds) {
  if (seconds < 60) return 'less than a minute';
  const minutes = Math.ceil(seconds / 60);
  if (minutes === 1) return 'about 1 minute';
  if (minutes < 60)  return `about ${minutes} minutes`;
  const hours = Math.round(minutes / 60);
  return `about ${hours} hour${hours !== 1 ? 's' : ''}`;
}


// ═══════════════════════════════════════════════════════════════════════════
// 4. QUEUE BUILDING — today's session
// ═══════════════════════════════════════════════════════════════════════════

function today() { return new Date().toISOString().slice(0, 10); }
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function countNewToday(progress) {
  const t = today();
  return Object.values(progress).filter(s => s.first_seen === t).length;
}

/**
 * Build the queue: reviews from previous days first (shuffled),
 * then up to DAILY_NEW_LIMIT new words.
 */
function getDueCards(progress) {
  const t = today();
  const now = new Date();
  const reviews = [];
  const newPool = [];
  let introducedToday = 0;

  VOCABULARY.forEach((word, i) => {
    const state = getCardState(progress, i);
    if (!state.first_seen) {
      newPool.push({ idx: i, word, state });
    } else {
      if (state.next_review <= t && secondsUntilReady(state, now) === 0) {
        reviews.push({ idx: i, word, state });
      }
      if (state.first_seen === t) introducedToday++;
    }
  });

  shuffle(reviews);
  shuffle(newPool);

  const remaining = Math.max(0, DAILY_NEW_LIMIT - introducedToday);
  return reviews.concat(newPool.slice(0, remaining));
}

function getWaitingCards(progress) {
  const t = today();
  const now = new Date();
  const waiting = [];
  VOCABULARY.forEach((word, i) => {
    const state = getCardState(progress, i);
    if (state.first_seen && state.next_review <= t) {
      const wait = secondsUntilReady(state, now);
      if (wait > 0) waiting.push({ idx: i, word, state, wait });
    }
  });
  return waiting;
}

function getTodayCards(progress) {
  const t = today();
  const now = new Date();
  const cards = [];
  VOCABULARY.forEach((word, i) => {
    const state = getCardState(progress, i);
    if (state.last_reviewed === t && secondsUntilReady(state, now) === 0) {
      cards.push({ idx: i, word, state });
    }
  });
  return cards;
}
function getTodayWaiting(progress) {
  const t = today();
  const now = new Date();
  const waiting = [];
  VOCABULARY.forEach((word, i) => {
    const state = getCardState(progress, i);
    if (state.last_reviewed === t) {
      const wait = secondsUntilReady(state, now);
      if (wait > 0) waiting.push({ idx: i, word, state, wait });
    }
  });
  return waiting;
}


// ═══════════════════════════════════════════════════════════════════════════
// 5. EMOJI SELECTION
// ═══════════════════════════════════════════════════════════════════════════

// Pre-compute keys sorted by length descending — so "ice cream" beats "ice"
const EMOJI_KEYS_SORTED = Object.keys(EMOJI_MAP).sort((a, b) => b.length - a.length);

function getEmojiForWord(english, category) {
  const eng = english.toLowerCase();
  for (const key of EMOJI_KEYS_SORTED) {
    if (eng.includes(key)) return EMOJI_MAP[key];
  }
  return CATEGORY_EMOJI[category] || '📚';
}


// ═══════════════════════════════════════════════════════════════════════════
// 6. PRONUNCIATION (Web Speech API)
// ═══════════════════════════════════════════════════════════════════════════

let cachedVoice = null;

// Names that are male Spanish voices on Apple/Google/Microsoft platforms.
// The picker prefers these when no explicit user choice has been saved.
const MALE_VOICE_NAMES = [
  'juan', 'jorge', 'enrique', 'andrés', 'andres', 'carlos', 'pablo',
  'eddy', 'eddie', 'diego', 'fernando', 'roberto'
];

function isMaleVoice(voice) {
  const n = voice.name.toLowerCase();
  return MALE_VOICE_NAMES.some(m => n.includes(m));
}

/** Pick a Spanish voice. Honors user's saved choice; otherwise prefers
    male Mexican, then male anywhere, then female Mexican, then any Spanish. */
function pickVoice() {
  if (cachedVoice) return cachedVoice;
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;

  // 0. Saved user preference takes priority
  const savedURI = (state.settings || {}).voiceURI;
  if (savedURI) {
    const v = voices.find(x => x.voiceURI === savedURI);
    if (v) { cachedVoice = v; return v; }
  }

  // 1. Male, es-MX
  let v = voices.find(x => x.lang === 'es-MX' && isMaleVoice(x));
  // 2. Male, any es-*
  if (!v) v = voices.find(x => x.lang.startsWith('es') && isMaleVoice(x));
  // 3. Any es-MX (likely Paulina, female)
  if (!v) v = voices.find(x => x.lang === 'es-MX');
  // 4. Any es-* voice at all
  if (!v) v = voices.find(x => x.lang.startsWith('es'));

  cachedVoice = v;
  return v;
}

/** Return a list of available Spanish voices, sorted: es-MX first,
    then by male-first within each language. Used by the picker UI. */
function listSpanishVoices() {
  if (!('speechSynthesis' in window)) return [];
  const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith('es'));
  const langOrder = lang => (lang === 'es-MX' ? 0 : (lang.startsWith('es-4') ? 1 : 2));
  return voices.sort((a, b) => {
    const la = langOrder(a.lang), lb = langOrder(b.lang);
    if (la !== lb) return la - lb;
    if (a.lang !== b.lang) return a.lang.localeCompare(b.lang);
    const ma = isMaleVoice(a) ? 0 : 1, mb = isMaleVoice(b) ? 0 : 1;
    if (ma !== mb) return ma - mb;
    return a.name.localeCompare(b.name);
  });
}

/** Speak text via the device's TTS (Web Speech API). Used as a fallback
    when no pre-recorded MP3 exists, or by the voice-settings preview. */
function speak(text, opts = {}) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();   // stop any in-progress utterance
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-MX';
  u.rate = opts.rate || 0.9;
  const voice = pickVoice();
  if (voice) u.voice = voice;
  if (opts.onstart) u.onstart = opts.onstart;
  if (opts.onend)   u.onend   = opts.onend;
  speechSynthesis.speak(u);
}

// One shared Audio element is reused — keeps memory low and lets us stop
// a previous clip cleanly when the user taps quickly.
let _wordAudio = null;

/** Play the pre-recorded Jorge (es-MX neural) audio for a word. Falls back
    to the device voice if the MP3 is missing, blocked, or the user has
    disabled embedded audio in settings. */
function speakWord(wordIdx, spanishText) {
  // Stop anything currently playing
  if (_wordAudio) { try { _wordAudio.pause(); } catch (_) {} }
  speechSynthesis && speechSynthesis.cancel();

  // Respect a user override: settings.useEmbedded === false → device voice
  if (state.settings && state.settings.useEmbedded === false) {
    return speak(spanishText);
  }

  const src = `audio/${wordIdx}.mp3`;
  const audio = new Audio(src);
  _wordAudio = audio;
  audio.preload = 'auto';
  // If the file isn't there (404) or playback fails, fall back gracefully.
  audio.onerror = () => speak(spanishText);
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => speak(spanishText));
  }
}

// Voices load asynchronously on some browsers; refresh our cached choice when ready.
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => { cachedVoice = null; pickVoice(); };
}


// ═══════════════════════════════════════════════════════════════════════════
// 7. APP STATE & UI
// ═══════════════════════════════════════════════════════════════════════════

const state = {
  progress:       loadProgress(),
  customizations: loadCustomizations(),
  settings:       loadSettings(),    // user prefs (voice, etc.)
  conjProgress:   loadConjProgress(),
  conjUnlocks:    loadConjUnlocks(),
  sessionCards:   [],
  currentIndex:   0,
  sessionCorrect: 0,
  practiceMode:   false,
  previewMode:    false,    // true during "Review All" — never saves progress
  answerRevealed: false,
  customizingWordIdx: null,
  // Conjugation drill state
  conjQueue:           [],
  conjQueueIdx:        0,
  conjSessionCorrect:  0,
  conjAnswerRevealed:  false,
  conjShowingIntro:    false,
  conjIntroShownSet:   new Set(),   // remember intros shown this session
};

const $ = id => document.getElementById(id);

const TIPS = [
  "💡 Study 10–15 minutes daily — consistency beats long cramming sessions.",
  "💡 'Ahorita' sounds like 'right now' but can mean 'in a bit' in Mexico.",
  "💡 The top 300 words cover roughly 65% of everyday Mexican conversation.",
  "💡 Try to think in Spanish, not translate — it builds fluency faster.",
  "💡 'Chido' = cool, 'Órale' = okay/wow — Mexican slang you'll hear daily.",
  "💡 Spanish nouns are masculine (el) or feminine (la) — learn the article.",
  "💡 Tap the 🔊 button to hear the word — recognizing sounds helps speaking.",
];

function showScreen(name) {
  ['home', 'study', 'done', 'browse', 'conj'].forEach(s => {
    $('screen-' + s).hidden = (s !== name);
  });
  window.scrollTo(0, 0);
}


// ═══════════════════════════════════════════════════════════════════════════
// CONJUGATION DRILL SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

/** Is the vocab card for this Spanish infinitive "confirmed as learned"? */
function vocabConfirmed(infinitive) {
  // Find vocabulary index for the infinitive
  for (let i = 0; i < VOCABULARY.length; i++) {
    if (VOCABULARY[i][0] === infinitive) {
      const st = state.progress[String(i)];
      if (!st) return false;
      return (st.repetitions || 0) >= CONJ_ELIGIBILITY_MIN_REPS
          && (st.last_rating || 0) >= CONJ_ELIGIBILITY_MIN_RATING;
    }
  }
  return false;
}

/** Highest tense index unlocked for this verb (0 = present only,
    1 = + preterite, 2 = + future, etc.). Defaults to 0. */
function unlockedTenseIdx(infinitive) {
  if (state.conjUnlocks[infinitive] === undefined) return 0;
  return state.conjUnlocks[infinitive];
}

/** A verb's current-max tense is "mastered" when all 5 forms have
    repetitions ≥ 2 and last rating ≥ Good. Returns boolean. */
function tenseMastered(infinitive, tenseIdx) {
  const tense = TENSE_ORDER[tenseIdx];
  for (let i = 0; i < 5; i++) {
    const id = `${infinitive}__${tense}__${i}`;
    const st = state.conjProgress[id];
    if (!st) return false;
    if ((st.repetitions || 0) < 2) return false;
    if ((st.last_rating || 0) < 3) return false;
  }
  return true;
}

/** Auto-advance a verb to the next tense if it's mastered the current one. */
function maybeUnlockNext(infinitive) {
  const cur = unlockedTenseIdx(infinitive);
  if (cur >= TENSE_ORDER.length - 1) return;
  if (tenseMastered(infinitive, cur)) {
    state.conjUnlocks[infinitive] = cur + 1;
    saveConjUnlocks(state.conjUnlocks);
  }
}

/** Build the conjugation drill queue.
    Each entry: { verb, tense, formIdx, conjugation, sentence_es, sentence_en, state } */
function buildConjQueue() {
  const t = today();
  const queue = [];

  CONJUGATIONS.forEach(verbEntry => {
    if (!vocabConfirmed(verbEntry.infinitive)) return;
    const maxTense = unlockedTenseIdx(verbEntry.infinitive);

    for (let ti = 0; ti <= maxTense; ti++) {
      const tense = TENSE_ORDER[ti];
      const tenseData = verbEntry.tenses[tense];
      if (!tenseData) continue;

      for (let fi = 0; fi < 5; fi++) {
        const id = `${verbEntry.infinitive}__${tense}__${fi}`;
        const st = state.conjProgress[id] || defaultCardState();
        // Only include if past next-review and past any within-day cooldown
        if (st.next_review && st.next_review > t) continue;
        if (_seconds_until_ready(st) > 0) continue;

        queue.push({
          id,
          verb:        verbEntry.infinitive,
          verbEn:      verbEntry.english,
          tense,
          tenseIdx:    ti,
          tenseLabel:  tenseData.label,
          tenseDesc:   tenseData.description,
          formIdx:     fi,
          person:      PERSONS[fi],
          conjugation: tenseData.forms[fi],
          sentenceEs:  tenseData.sentences[fi].es,
          sentenceEn:  tenseData.sentences[fi].en,
          state:       st,
          allForms:    tenseData.forms,
          allSentences:tenseData.sentences,
        });
      }
    }
  });

  shuffle(queue);
  return queue;
}

function _seconds_until_ready(st) {
  // Mirror of the vocab cooldown logic, slightly slimmer
  const r = st.last_rating;
  if (r === undefined || r === null || r === 4) return 0;
  if (r === 3 && (st.repetitions || 0) >= 2) return 0;
  const cool = { 1: 600, 2: 1800, 3: 3600 }[r] || 0;
  if (!cool || !st.last_seen_time) return 0;
  const elapsed = (Date.now() - new Date(st.last_seen_time)) / 1000;
  return Math.max(0, cool - elapsed);
}

function countConjReady() {
  return buildConjQueue().length;
}

function startConjSession() {
  state.conjQueue = buildConjQueue();
  state.conjQueueIdx = 0;
  state.conjSessionCorrect = 0;
  state.conjIntroShownSet = new Set();
  if (!state.conjQueue.length) {
    // Nothing eligible
    alert("No conjugation cards are ready yet.\n\n" +
          "Verbs become eligible once they hit Good rating in vocabulary " +
          "study, with at least 3 repetitions. Keep studying!");
    return;
  }
  showScreen('conj');
  renderConjCard();
}

function renderConjCard() {
  if (state.conjQueueIdx >= state.conjQueue.length) {
    showConjDone();
    return;
  }
  const c = state.conjQueue[state.conjQueueIdx];
  state.conjAnswerRevealed = false;

  // Top progress
  $('conj-progress').textContent =
    `Card ${state.conjQueueIdx + 1} of ${state.conjQueue.length}`;
  $('conj-progress-fill').style.width =
    (100 * state.conjQueueIdx / state.conjQueue.length) + '%';

  // First exposure to this (verb, tense)? Show intro first.
  const introKey = `${c.verb}__${c.tense}`;
  const everSeen = Object.keys(state.conjProgress).some(k =>
    k.startsWith(c.verb + '__' + c.tense + '__'));
  if (!everSeen && !state.conjIntroShownSet.has(introKey)) {
    state.conjIntroShownSet.add(introKey);
    showConjIntro(c);
    return;
  }

  showConjDrill(c);
}

function showConjIntro(c) {
  state.conjShowingIntro = true;
  $('conj-intro').hidden = false;
  $('conj-card').hidden = true;
  $('conj-done').hidden = true;

  $('conj-intro-verb').textContent = c.verb;
  $('conj-intro-verb-en').textContent = '(' + c.verbEn + ')';
  $('conj-intro-tense').textContent = c.tenseLabel;
  $('conj-intro-desc').textContent = c.tenseDesc;

  // Build conjugation table
  const table = $('conj-intro-table');
  table.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = PERSONS[i];
    const td = document.createElement('td');
    td.textContent = c.allForms[i];
    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);
  }

  // Examples (show first 2 for brevity in the intro)
  const ul = $('conj-intro-examples');
  ul.innerHTML = '';
  for (let i = 0; i < Math.min(2, c.allSentences.length); i++) {
    const li = document.createElement('li');
    li.innerHTML = `<div class="es">${escapeHtml(c.allSentences[i].es)}</div>
                    <div class="en">→ ${escapeHtml(c.allSentences[i].en)}</div>`;
    ul.appendChild(li);
  }
}

function showConjDrill(c) {
  state.conjShowingIntro = false;
  $('conj-intro').hidden = true;
  $('conj-card').hidden = false;
  $('conj-done').hidden = true;

  $('conj-card-tense').textContent = c.tenseLabel.toUpperCase();
  $('conj-card-verb').textContent = c.verb;
  $('conj-card-verb-en').textContent = '(' + c.verbEn + ')';
  $('conj-card-person').textContent = c.person;

  // Reset reveal area
  $('conj-form-text').textContent = '';
  $('conj-sentence-es').textContent = '';
  $('conj-sentence-en').textContent = '';
  $('conj-speak-form').hidden = true;
  $('conj-speak-sentence').hidden = true;
  $('conj-btn-reveal').hidden = false;
  $('conj-skip-ahead').hidden = true;
}

function revealConjAnswer() {
  if (state.conjAnswerRevealed) return;
  state.conjAnswerRevealed = true;
  const c = state.conjQueue[state.conjQueueIdx];

  $('conj-form-text').textContent = c.conjugation;
  $('conj-sentence-es').textContent = c.sentenceEs;
  $('conj-sentence-en').textContent = '→ ' + c.sentenceEn;
  $('conj-speak-form').hidden = false;
  $('conj-speak-sentence').hidden = false;
  $('conj-btn-reveal').hidden = true;
  $('conj-skip-ahead').hidden = false;

  // Play form, then sentence
  playConjAudio(c.id, () => {
    setTimeout(() => playConjAudio(c.id + '__s'), 350);
  });
}

function playConjAudio(audioId, onEnd) {
  const audio = new Audio(`audio/conj/${audioId}.mp3`);
  if (onEnd) audio.onended = onEnd;
  audio.onerror = () => onEnd && onEnd();
  audio.play().catch(()=>{ onEnd && onEnd(); });
}

function rateConjCard(rating) {
  const c = state.conjQueue[state.conjQueueIdx];
  const prev = c.state;
  const [ef, interval, reps] = sm2Update(
    prev.ease_factor, prev.interval, prev.repetitions, rating
  );
  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);
  const t = today();
  state.conjProgress[c.id] = {
    ease_factor:    ef,
    interval,
    repetitions:    reps,
    next_review:    nextReview.toISOString().slice(0, 10),
    times_seen:     (prev.times_seen || 0) + 1,
    last_reviewed:  t,
    first_seen:     prev.first_seen || t,
    last_seen_time: new Date().toISOString(),
    last_rating:    rating,
  };
  saveConjProgress(state.conjProgress);
  if (rating >= 3) state.conjSessionCorrect++;

  // Try unlocking next tense for this verb
  maybeUnlockNext(c.verb);

  // "Again" re-inserts with lag, same as vocab
  if (rating === 1) {
    const lag = 3 + Math.floor(Math.random() * 4);
    state.conjQueue.splice(state.conjQueueIdx + 1 + lag, 0, c);
  }

  state.conjQueueIdx++;
  renderConjCard();
}

function skipAheadConj() {
  const c = state.conjQueue[state.conjQueueIdx];
  // Mark all 5 forms of current tense as "learned" so unlocking advances
  const today_iso = today();
  const nowIso = new Date().toISOString();
  for (let i = 0; i < 5; i++) {
    const id = `${c.verb}__${c.tense}__${i}`;
    const prev = state.conjProgress[id] || defaultCardState();
    state.conjProgress[id] = {
      ease_factor:    Math.max(2.5, prev.ease_factor || 2.5),
      interval:       7,
      repetitions:    Math.max(2, prev.repetitions || 0),
      next_review:    new Date(Date.now() + 7*24*60*60*1000).toISOString().slice(0,10),
      times_seen:     (prev.times_seen || 0) + 1,
      last_reviewed:  today_iso,
      first_seen:     prev.first_seen || today_iso,
      last_seen_time: nowIso,
      last_rating:    3,
    };
  }
  saveConjProgress(state.conjProgress);
  maybeUnlockNext(c.verb);
  // Remove this verb-and-tense's remaining cards from queue
  state.conjQueue = state.conjQueue.filter((q, i) =>
    i <= state.conjQueueIdx || !(q.verb === c.verb && q.tense === c.tense));
  state.conjQueueIdx++;
  renderConjCard();
}

function showConjDone() {
  $('conj-intro').hidden = true;
  $('conj-card').hidden = true;
  $('conj-done').hidden = false;
  const total = state.conjQueue.length;
  $('conj-done-tally').textContent =
    `You got ${state.conjSessionCorrect} of ${total} cards correct.`;
}


// ─── HOME ─────────────────────────────────────────────────────────────────

function renderHome() {
  const progress = state.progress;
  const due           = getDueCards(progress);
  const waiting       = getWaitingCards(progress);
  const todays        = getTodayCards(progress);
  const todayWaiting  = getTodayWaiting(progress);
  const learned = VOCABULARY.reduce((acc, _, i) => {
    const st = progress[String(i)];
    return acc + (st && (st.repetitions || 0) > 0 ? 1 : 0);
  }, 0);
  const newUsed = countNewToday(progress);
  const newRemaining = Math.max(0, DAILY_NEW_LIMIT - newUsed);
  const reviewsDue = due.filter(c => c.state.first_seen).length;
  const newInQueue = due.length - reviewsDue;

  $('stat-total').textContent   = VOCABULARY.length;
  $('stat-learned').textContent = learned;
  $('stat-due').textContent     = due.length;

  $('breakdown').textContent =
    `📅 Today's queue: ${reviewsDue} review${reviewsDue !== 1 ? 's' : ''} from previous days · ` +
    `${newInQueue} new word${newInQueue !== 1 ? 's' : ''} to introduce · ` +
    `${newUsed}/${DAILY_NEW_LIMIT} new used today`;

  // Action area: Study Now / waiting / all done
  const studyBtn  = $('btn-study');
  const emptyMsg  = $('msg-empty');
  studyBtn.hidden = true;
  emptyMsg.hidden = true;
  emptyMsg.classList.remove('warn');

  if (due.length) {
    studyBtn.hidden = false;
    studyBtn.textContent = `▶  Study Now  (${due.length} card${due.length !== 1 ? 's' : ''})`;
  } else if (waiting.length) {
    const soonest = Math.min(...waiting.map(w => w.wait));
    emptyMsg.hidden = false;
    emptyMsg.classList.add('warn');
    emptyMsg.innerHTML =
      `⏳ All ${waiting.length} of your due word${waiting.length !== 1 ? 's are' : ' is'} still cooling down.<br>` +
      `Spaced repetition needs time between exposures — come back in <strong>${formatWait(soonest)}</strong>.`;
  } else if (newRemaining === 0) {
    emptyMsg.hidden = false;
    emptyMsg.textContent =
      `✅ Today's ${DAILY_NEW_LIMIT} new words done — no reviews due yet. ` +
      `Use Practice Today to drill them.`;
  } else {
    emptyMsg.hidden = false;
    emptyMsg.textContent = "✅ All due cards done! Practice today's words to lock them in.";
  }

  // Practice Today
  const practiceBtn = $('btn-practice');
  const practiceWaitMsg = $('msg-practice-wait');
  practiceBtn.hidden = true;
  practiceWaitMsg.hidden = true;
  if (todays.length) {
    practiceBtn.hidden = false;
    practiceBtn.textContent = `🔄  Practice Today's Words  (${todays.length} ready)`;
  } else if (todayWaiting.length) {
    const soonest = Math.min(...todayWaiting.map(w => w.wait));
    practiceWaitMsg.hidden = false;
    practiceWaitMsg.textContent =
      `⏳ ${todayWaiting.length} word${todayWaiting.length !== 1 ? 's' : ''} from today still cooling down. ` +
      `Try again in ${formatWait(soonest)}.`;
  }

  $('overall-progress').textContent = `${learned} / ${VOCABULARY.length} words`;
  $('tip').textContent = TIPS[Math.floor(Math.random() * TIPS.length)];

  // Conjugation drill availability
  const conjBtn = $('btn-conj');
  const conjEmpty = $('msg-conj-empty');
  const conjReady = countConjReady();
  // Count eligible verbs to show context if nothing ready right now
  const eligibleVerbs = CONJUGATIONS.filter(v => vocabConfirmed(v.infinitive)).length;
  conjBtn.hidden = true;
  conjEmpty.hidden = true;
  if (conjReady > 0) {
    conjBtn.hidden = false;
    conjBtn.textContent = `💪  Drill Conjugations  (${conjReady} ready)`;
  } else if (eligibleVerbs > 0) {
    conjEmpty.hidden = false;
    conjEmpty.textContent = `💪 ${eligibleVerbs} verb${eligibleVerbs === 1 ? '' : 's'} are eligible for conjugation drilling — all are in cooldown. Come back later.`;
  } else if (CONJUGATIONS && CONJUGATIONS.length) {
    conjEmpty.hidden = false;
    conjEmpty.textContent = `💪 Conjugation drilling unlocks as you master verbs in vocabulary study.`;
  }
}


// ─── STUDY (FLASHCARD) ────────────────────────────────────────────────────

function startSession() {
  state.sessionCards = getDueCards(state.progress);
  state.practiceMode = false;
  state.previewMode  = false;
  beginSession();
}
function startPracticeToday() {
  state.sessionCards = shuffle(getTodayCards(state.progress));
  state.practiceMode = true;
  state.previewMode  = false;
  beginSession();
}
function startReviewAll() {
  state.sessionCards = shuffle(VOCABULARY.map((w, i) =>
    ({ idx: i, word: w, state: getCardState(state.progress, i) })));
  state.practiceMode = false;
  state.previewMode  = true;   // doesn't save anything — pure flip-through
  beginSession();
}

function beginSession() {
  state.currentIndex = 0;
  state.sessionCorrect = 0;
  if (!state.sessionCards.length) { renderHome(); showScreen('home'); return; }
  showScreen('study');
  renderCard();
}

/**
 * Render the visual for a flashcard. Priority order:
 *   1. User customization (custom uploaded image or emoji) — always wins
 *   2. Declared visual strategy in the vocabulary entry
 *      - "photo"   → fetch images/{idx}.jpg, fallback to category emoji
 *      - "digit"   → render the search field as a big number
 *      - "swatch"  → render search field as a CSS color block
 *      - "text"    → render the English word as styled text
 *      - "grammar" → render English word + usage example
 *   3. No strategy → category emoji (legacy 4-field entries)
 */
function renderVisual(wordIdx, english, category, imgTerm, strategy, usage, catBg) {
  const img = $('card-image');
  // Reset
  img.classList.remove('revealed');
  img.style.background = catBg;
  img.style.backgroundImage = '';
  img.style.color = '';
  img.style.fontSize = '';
  img.style.lineHeight = '';
  img.innerHTML = '';

  // 1. User customization wins
  const custom = state.customizations[String(wordIdx)];
  if (custom && custom.type === 'image' && custom.dataUrl) {
    img.style.backgroundImage = `url("${custom.dataUrl}")`;
    return;
  }
  if (custom && custom.type === 'emoji' && custom.emoji) {
    img.textContent = custom.emoji;
    return;
  }

  // 2. Declared strategy
  switch (strategy) {
    case 'photo':
      // Lazy-load the image; if it 404s, fall back to category emoji.
      // Using a probe <img> avoids flashes/empty space if no file exists.
      const probe = new Image();
      probe.onload = () => {
        img.style.backgroundImage = `url("images/${wordIdx}.jpg")`;
      };
      probe.onerror = () => {
        img.textContent = (CATEGORY_EMOJI[category] || '📚');
      };
      probe.src = `images/${wordIdx}.jpg`;
      return;

    case 'digit':
      img.style.fontSize = '120px';
      img.style.color = '#1B4332';
      img.textContent = imgTerm || '?';
      return;

    case 'swatch':
      // imgTerm holds a hex color like "#E53935"
      img.style.background = imgTerm || '#CCCCCC';
      return;

    case 'text': {
      // Show the English word, big and centered, on the category-colored card
      const span = document.createElement('div');
      span.className = 'visual-text';
      span.textContent = english.toUpperCase();
      img.appendChild(span);
      return;
    }

    case 'grammar': {
      const wrap = document.createElement('div');
      wrap.className = 'visual-grammar';
      const head = document.createElement('div');
      head.className = 'visual-grammar-word';
      head.textContent = english;
      wrap.appendChild(head);
      if (usage) {
        const eg = document.createElement('div');
        eg.className = 'visual-grammar-eg';
        eg.textContent = `"${usage}"`;
        wrap.appendChild(eg);
      }
      img.appendChild(wrap);
      return;
    }

    default:
      // Legacy: no strategy set, fall back to emoji
      img.textContent = getEmojiForWord(english, category);
  }
}

function renderCard() {
  if (state.currentIndex >= state.sessionCards.length) {
    renderDone();
    showScreen('done');
    return;
  }
  state.answerRevealed = false;
  const card = state.sessionCards[state.currentIndex];
  const [spanish, english, category, imgTerm, strategy, usage] = card.word;

  // Header / progress
  $('study-progress').textContent =
    `Card ${state.currentIndex + 1} of ${state.sessionCards.length}`;
  $('progress-bar-fill').style.width =
    (100 * state.currentIndex / state.sessionCards.length) + '%';

  // Category tag
  const catBg = CAT_COLORS[category] || '#F5F5F5';
  const catEl = $('card-category');
  catEl.textContent = category.toUpperCase();
  catEl.style.background = catBg;

  // Visual: priority is (1) user customization, (2) declared strategy.
  renderVisual(card.idx, english, category, imgTerm, strategy, usage, catBg);

  // Reset answer area
  $('spanish-text').textContent = '';
  $('spanish-word').classList.remove('revealed');
  $('speak-btn').hidden = true;
  $('english-translation').textContent =
    '(tap the image, or press Reveal Answer below)';
  $('english-translation').classList.remove('revealed');
  $('btn-reveal').hidden = false;

  // Times-seen hint
  const seen = card.state.times_seen || 0;
  $('seen-hint').textContent =
    seen === 0 ? '✨ New word! Take your time.' :
    seen <  4  ? `👀 Seen ${seen} time${seen !== 1 ? 's' : ''}` :
                 `📚 Reviewed ${seen} times`;
}

function revealAnswer() {
  if (state.answerRevealed) return;
  state.answerRevealed = true;
  const card = state.sessionCards[state.currentIndex];
  const [spanish, english] = card.word;

  $('spanish-text').textContent = spanish;
  $('spanish-word').classList.add('revealed');
  $('speak-btn').hidden = false;
  $('english-translation').textContent = '→  ' + english;
  $('english-translation').classList.add('revealed');
  $('btn-reveal').hidden = true;
  $('card-image').classList.add('revealed');

  // Auto-pronounce on reveal — comment out next line to disable
  speakWord(card.idx, spanish);
}

function rateCard(rating) {
  const card = state.sessionCards[state.currentIndex];
  const idx = card.idx;
  const cardState = card.state;
  const t = today();
  const nowIso = new Date().toISOString();
  const firstSeen = cardState.first_seen || t;

  // PREVIEW MODE: pure flip-through. Don't touch progress or schedule.
  // Only re-queue failed cards so you can verify them again in the same pass.
  if (state.previewMode) {
    if (rating >= 3) state.sessionCorrect++;
    if (rating === 1) {
      const lag = 3 + Math.floor(Math.random() * 4);
      state.sessionCards.splice(state.currentIndex + 1 + lag, 0, card);
    }
    state.currentIndex++;
    renderCard();
    return;
  }

  let newState;
  if (state.practiceMode) {
    newState = Object.assign({}, cardState, {
      times_seen:     (cardState.times_seen || 0) + 1,
      last_reviewed:  t,
      first_seen:     firstSeen,
      last_seen_time: nowIso,
      last_rating:    rating,
    });
    if (rating === 1) {
      newState.ease_factor = Math.max(1.3, cardState.ease_factor - 0.2);
      newState.interval    = 0;
      newState.repetitions = 0;
      newState.next_review = t;
    }
  } else {
    const [ef, interval, reps] = sm2Update(
      cardState.ease_factor, cardState.interval, cardState.repetitions, rating
    );
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);
    newState = {
      ease_factor: ef, interval, repetitions: reps,
      next_review: nextReview.toISOString().slice(0, 10),
      times_seen: (cardState.times_seen || 0) + 1,
      last_reviewed:  t,
      first_seen:     firstSeen,
      last_seen_time: nowIso,
      last_rating:    rating,
    };
  }

  state.progress[String(idx)] = newState;
  saveProgress(state.progress);

  if (rating >= 3) state.sessionCorrect++;

  // Failed words re-insert with 3–6 card lag (research-backed within-session spacing)
  if (rating === 1) {
    const lag = 3 + Math.floor(Math.random() * 4);
    state.sessionCards.splice(
      state.currentIndex + 1 + lag, 0,
      { idx, word: card.word, state: newState }
    );
  }

  state.currentIndex++;
  renderCard();
}


// ─── DONE SCREEN ──────────────────────────────────────────────────────────

function renderDone() {
  const total = state.sessionCards.length;
  const pct = total ? Math.round(100 * state.sessionCorrect / total) : 0;
  $('done-pct').textContent = pct + '%';
  $('done-tally').textContent =
    `You got ${state.sessionCorrect} out of ${total} cards correct`;
  $('done-msg').textContent =
    pct >= 80 ? '¡Excelente! You\'re crushing it! 🌟' :
    pct >= 60 ? '¡Muy bien! Keep it up! 💪' :
                '¡Ándale! Practice makes perfect! 📚';
  const learned = VOCABULARY.reduce((acc, _, i) => {
    const st = state.progress[String(i)];
    return acc + (st && (st.repetitions || 0) > 0 ? 1 : 0);
  }, 0);
  $('done-total').textContent =
    `Total words learned: ${learned} / ${VOCABULARY.length}`;
}


// ─── BROWSE / VOCABULARY ──────────────────────────────────────────────────

function renderVocab(filterText) {
  const list = $('vocab-list');
  list.innerHTML = '';
  const term = (filterText || '').toLowerCase().trim();
  let currentCat = null;

  VOCABULARY.forEach((word, i) => {
    const [spanish, english, category] = word;
    if (term && !spanish.toLowerCase().includes(term)
             && !english.toLowerCase().includes(term)
             && !category.toLowerCase().includes(term)) return;

    if (category !== currentCat) {
      currentCat = category;
      const h = document.createElement('div');
      h.className = 'vocab-cat-header';
      h.textContent = category.toUpperCase();
      h.style.background = CAT_COLORS[category] || '#F5F5F5';
      list.appendChild(h);
    }
    const learned = (state.progress[String(i)] || {}).repetitions > 0;
    const row = document.createElement('div');
    row.className = 'vocab-row';
    row.innerHTML = `
      <div class="vocab-status">${learned ? '✅' : '⬜'}</div>
      <div class="vocab-spanish">${spanish}</div>
      <div class="vocab-english">${english}</div>`;
    list.appendChild(row);
  });
}


// ─── CUSTOMIZE MODAL ──────────────────────────────────────────────────────

function openCustomize(idx) {
  state.customizingWordIdx = idx;
  const [spanish, english] = VOCABULARY[idx];
  $('customize-title').textContent = spanish;
  $('customize-english').textContent = '(' + english + ')';
  const current = state.customizations[String(idx)];
  $('emoji-input').value = (current && current.type === 'emoji') ? current.emoji : '';
  $('customize-modal').hidden = false;
}
function closeCustomize() {
  $('customize-modal').hidden = true;
  state.customizingWordIdx = null;
}

/**
 * Resize an Image (or HTMLImageElement) to fit 380x220 letterboxed,
 * return as a data URL. Keeps storage size small and consistent.
 */
function resizeToDataUrl(img, bgHex) {
  const canvas = $('resize-canvas');
  const ctx = canvas.getContext('2d');
  const tw = canvas.width, th = canvas.height;
  ctx.fillStyle = bgHex || '#FFFFFF';
  ctx.fillRect(0, 0, tw, th);
  const ratio = Math.min(tw / img.naturalWidth, th / img.naturalHeight);
  const dw = img.naturalWidth * ratio;
  const dh = img.naturalHeight * ratio;
  ctx.drawImage(img, (tw - dw) / 2, (th - dh) / 2, dw, dh);
  return canvas.toDataURL('image/jpeg', 0.85);
}

/** Take a Blob (from file or clipboard) and store it for the current word. */
function storeBlobAsImage(blob) {
  const idx = state.customizingWordIdx;
  if (idx === null) return;
  const [_, __, category] = VOCABULARY[idx];
  const bg = CAT_COLORS[category] || '#FFFFFF';
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const dataUrl = resizeToDataUrl(img, bg);
    URL.revokeObjectURL(url);
    state.customizations[String(idx)] = { type: 'image', dataUrl };
    saveCustomizations(state.customizations);
    closeCustomize();
    if (!$('screen-study').hidden) renderCard();
  };
  img.onerror = () => {
    URL.revokeObjectURL(url);
    alert("Sorry, couldn't read that image.");
  };
  img.src = url;
}

function pickFile() {
  const input = $('file-image');
  input.value = '';
  input.onchange = () => {
    const f = input.files[0];
    if (f) storeBlobAsImage(f);
  };
  input.click();
}

async function pasteFromClipboard() {
  // Modern Clipboard API path — works in Chrome, Edge, Safari 13.4+
  if (navigator.clipboard && navigator.clipboard.read) {
    try {
      const items = await navigator.clipboard.read();
      for (const item of items) {
        for (const type of item.types) {
          if (type.startsWith('image/')) {
            const blob = await item.getType(type);
            storeBlobAsImage(blob);
            return;
          }
        }
      }
      alert('No image found on the clipboard.\n\nCopy an image first (right-click → Copy Image), then click here.');
    } catch (e) {
      alert("Couldn't read clipboard: " + e.message +
            "\n\nIf your browser asks for permission, click Allow and try again.");
    }
  } else {
    alert('Your browser does not support reading images from the clipboard. ' +
          'Try the file picker instead, or use a recent version of Chrome / Safari.');
  }
}

function setEmoji() {
  const idx = state.customizingWordIdx;
  if (idx === null) return;
  const e = $('emoji-input').value.trim();
  if (!e) return;
  state.customizations[String(idx)] = { type: 'emoji', emoji: e };
  saveCustomizations(state.customizations);
  closeCustomize();
  if (!$('screen-study').hidden) renderCard();
}

function resetCustomization() {
  const idx = state.customizingWordIdx;
  if (idx === null) return;
  delete state.customizations[String(idx)];
  saveCustomizations(state.customizations);
  closeCustomize();
  if (!$('screen-study').hidden) renderCard();
}


// ─── VOICE SETTINGS ───────────────────────────────────────────────────────

const VOICE_SAMPLE = 'Hola, ¿cómo estás? Me llamo Juan.';

function openVoiceSettings() {
  renderVoiceList();
  $('voice-modal').hidden = false;
}
function closeVoiceSettings() {
  speechSynthesis.cancel();
  $('voice-modal').hidden = true;
}

function renderVoiceList() {
  const list = $('voice-list');
  list.innerHTML = '';

  // ── EMBEDDED voice row (Jorge, the pre-recorded MP3 audio)
  const useEmbedded = state.settings.useEmbedded !== false;  // default on
  const jorge = document.createElement('button');
  jorge.className = 'voice-row voice-embedded' + (useEmbedded ? ' active' : '');
  jorge.type = 'button';
  jorge.innerHTML = `
    <span class="voice-check">${useEmbedded ? '✓' : ''}</span>
    <span class="voice-name">Jorge (embedded)</span>
    <span class="voice-lang">es-MX</span>
    <span class="voice-tag tag-male">♂ male</span>
  `;
  jorge.addEventListener('click', () => {
    state.settings.useEmbedded = true;
    saveSettings(state.settings);
    renderVoiceList();
    // Preview by playing any one MP3 (use index 0 = "hola")
    const audio = new Audio('audio/0.mp3');
    audio.play().catch(()=>{});
  });
  list.appendChild(jorge);

  const divider = document.createElement('p');
  divider.className = 'divider voice-divider';
  divider.textContent = '— or use a device voice instead —';
  list.appendChild(divider);

  // ── DEVICE voices (Web Speech API)
  const voices = listSpanishVoices();
  if (!voices.length) {
    const note = document.createElement('p');
    note.className = 'hint-text';
    note.textContent = 'No Spanish device voices detected. See install help below.';
    list.appendChild(note);
    return;
  }

  const savedURI = state.settings.voiceURI;
  voices.forEach(v => {
    const row = document.createElement('button');
    row.className = 'voice-row';
    row.type = 'button';
    const isMale = isMaleVoice(v);
    const checked = !useEmbedded && (savedURI ? v.voiceURI === savedURI
                                              : v === pickVoice());
    row.innerHTML = `
      <span class="voice-check">${checked ? '✓' : ''}</span>
      <span class="voice-name">${escapeHtml(v.name)}</span>
      <span class="voice-lang">${v.lang}</span>
      <span class="voice-tag ${isMale ? 'tag-male' : 'tag-female'}">
        ${isMale ? '♂ male' : '♀ female'}
      </span>
    `;
    row.addEventListener('click', () => selectAndPreview(v));
    list.appendChild(row);
  });
}

function selectAndPreview(voice) {
  state.settings.voiceURI    = voice.voiceURI;
  state.settings.useEmbedded = false;   // user wants device voice now
  saveSettings(state.settings);
  cachedVoice = voice;
  // Re-render so the checkmark moves
  renderVoiceList();
  // Speak the sample using THIS voice (don't go through pickVoice cache races)
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(VOICE_SAMPLE);
  u.lang = voice.lang;
  u.voice = voice;
  u.rate = 0.9;
  speechSynthesis.speak(u);
}


function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => (
    { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]
  ));
}


// ─── EXPORT / IMPORT (cross-device sync) ──────────────────────────────────

function exportProgress() {
  const data = {
    version: 1,
    exported_at: new Date().toISOString(),
    progress: state.progress,
    customizations: state.customizations,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'spanish-tutor-progress.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function importProgress(file) {
  const r = new FileReader();
  r.onload = () => {
    try {
      const data = JSON.parse(r.result);
      if (!data.progress) throw new Error('File is missing progress data.');
      if (!confirm('This will REPLACE your current progress and customizations. Continue?')) return;
      state.progress       = data.progress       || {};
      state.customizations = data.customizations || {};
      saveProgress(state.progress);
      saveCustomizations(state.customizations);
      renderHome();
      alert('Progress imported successfully.');
    } catch (e) {
      alert('Could not import that file:\n\n' + e.message);
    }
  };
  r.readAsText(file);
}


// ═══════════════════════════════════════════════════════════════════════════
// 8. WIRING
// ═══════════════════════════════════════════════════════════════════════════

function bind() {
  // Home actions
  $('btn-study'      ).addEventListener('click', () => startSession());
  $('btn-practice'   ).addEventListener('click', () => startPracticeToday());
  $('btn-review-all' ).addEventListener('click', () => {
    if (confirm(`Browse all ${VOCABULARY.length} words? This is preview-only — ` +
                `nothing you do here will change your study schedule.`)) {
      startReviewAll();
    }
  });
  $('btn-browse').addEventListener('click', () => {
    renderVocab(''); $('search-input').value = ''; showScreen('browse');
  });
  $('btn-conj'   ).addEventListener('click', startConjSession);
  $('btn-voice'  ).addEventListener('click', openVoiceSettings);
  $('btn-export' ).addEventListener('click', exportProgress);
  $('btn-import' ).addEventListener('click', () => $('file-import').click());
  $('file-import').addEventListener('change', e => {
    const f = e.target.files[0];
    if (f) importProgress(f);
    e.target.value = '';
  });

  // Study screen
  $('study-back').addEventListener('click', () => { renderHome(); showScreen('home'); });
  $('btn-reveal').addEventListener('click', revealAnswer);
  $('card-image').addEventListener('click', () => {
    if (!state.answerRevealed) revealAnswer();
  });
  $('spanish-word').addEventListener('click', () => {
    if (state.answerRevealed) {
      const c = state.sessionCards[state.currentIndex];
      speakWord(c.idx, c.word[0]);
    }
  });
  $('speak-btn').addEventListener('click', e => {
    e.stopPropagation();
    const c = state.sessionCards[state.currentIndex];
    speakWord(c.idx, c.word[0]);
  });
  document.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', () => rateCard(parseInt(btn.dataset.rating, 10)));
  });
  $('btn-customize').addEventListener('click', () => {
    openCustomize(state.sessionCards[state.currentIndex].idx);
  });

  // Done screen
  $('btn-study-again').addEventListener('click', () => startSession());
  $('btn-go-home').addEventListener('click', () => { renderHome(); showScreen('home'); });

  // Browse
  $('browse-back').addEventListener('click', () => { renderHome(); showScreen('home'); });
  $('search-input').addEventListener('input', e => renderVocab(e.target.value));

  // Customize modal
  $('btn-pick-file').addEventListener('click', pickFile);
  $('btn-paste-image').addEventListener('click', pasteFromClipboard);
  $('btn-set-emoji').addEventListener('click', setEmoji);
  $('btn-reset-custom').addEventListener('click', resetCustomization);
  $('btn-cancel-custom').addEventListener('click', closeCustomize);
  $('customize-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCustomize();
  });
  // ⌘V / Ctrl+V while modal is open → paste
  document.addEventListener('paste', e => {
    if ($('customize-modal').hidden) return;
    const items = e.clipboardData && e.clipboardData.items;
    if (!items) return;
    for (const it of items) {
      if (it.type.startsWith('image/')) {
        const blob = it.getAsFile();
        if (blob) { storeBlobAsImage(blob); e.preventDefault(); return; }
      }
    }
  });

  // Conjugation drill screen
  $('conj-back').addEventListener('click', () => { renderHome(); showScreen('home'); });
  $('btn-begin-drill').addEventListener('click', () => {
    const c = state.conjQueue[state.conjQueueIdx];
    showConjDrill(c);
  });
  $('conj-btn-reveal').addEventListener('click', revealConjAnswer);
  $('conj-form-text').addEventListener('click', () => {
    if (state.conjAnswerRevealed) {
      const c = state.conjQueue[state.conjQueueIdx];
      playConjAudio(c.id);
    }
  });
  $('conj-speak-form').addEventListener('click', e => {
    e.stopPropagation();
    const c = state.conjQueue[state.conjQueueIdx];
    playConjAudio(c.id);
  });
  $('conj-speak-sentence').addEventListener('click', e => {
    e.stopPropagation();
    const c = state.conjQueue[state.conjQueueIdx];
    playConjAudio(c.id + '__s');
  });
  document.querySelectorAll('[data-conj-rating]').forEach(btn => {
    btn.addEventListener('click', () => rateConjCard(parseInt(btn.dataset.conjRating, 10)));
  });
  $('conj-skip-ahead').addEventListener('click', () => {
    if (confirm('Mark all 5 forms of this verb in this tense as "learned" and unlock the next tense for this verb?')) {
      skipAheadConj();
    }
  });
  $('conj-btn-again').addEventListener('click', () => {
    if (state.conjQueue.length) startConjSession();
  });
  $('conj-btn-home').addEventListener('click', () => { renderHome(); showScreen('home'); });

  // Voice settings modal
  $('btn-close-voice').addEventListener('click', closeVoiceSettings);
  $('voice-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeVoiceSettings();
  });

  // ESC closes any open modal
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!$('customize-modal').hidden) closeCustomize();
    else if (!$('voice-modal').hidden) closeVoiceSettings();
  });
}

// ─── BOOT ────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  bind();
  renderHome();
  showScreen('home');
  // Warm up the voice list (Chrome populates it lazily)
  if ('speechSynthesis' in window) speechSynthesis.getVoices();
});
