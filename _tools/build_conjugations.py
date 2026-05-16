#!/usr/bin/env python3
"""
Convert _tools/conjugations.py into ../conjugations.js for the web app.
Also writes a flat manifest of all (verb, tense, form) tuples that need audio.
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from conjugations import (
    VERBS, PERSONS, PERSON_SUBJECTS, PERSON_EN,
    TENSES, TENSES_DEFAULT_UNLOCKED, TENSES_ADVANCED,
    TENSE_LABEL, TENSE_DESCRIPTION, REGULAR_ENDINGS,
    IRREGULAR_IMPERFECT, IRREGULAR_SUBJ_PRESENT,
)
# Optional auto-generated sentence data for tenses without hand-written examples.
# If generated_sentences.py exists, its sentences are merged into the per-verb
# 'sentences' dict for any tense the verb doesn't already cover.
try:
    from generated_sentences import GENERATED as GENERATED_SENTENCES
except Exception:
    GENERATED_SENTENCES = {}


def derive_forms(infinitive, type_, declared):
    """Return a dict of tense → list of 5 conjugations.
    Order of resolution per tense:
      1. Per-verb 'forms' override declared in conjugations.py
      2. Tense-specific irregular tables (ser/ir/ver imperfect, many subjunctives)
      3. Fall back to regular endings for the verb's -ar/-er/-ir class
    Even verbs flagged 'irregular' fall back to regular endings for any tense
    where they aren't actually irregular (e.g. leer is regular in imperfect)."""
    declared = dict(declared or {})
    result = {}
    ending = infinitive[-2:] if infinitive[-2:] in REGULAR_ENDINGS else None
    stem   = infinitive[:-2] if ending else None
    for t in TENSES:
        if t in declared:
            result[t] = declared[t]
            continue
        if t == 'imperfect' and infinitive in IRREGULAR_IMPERFECT:
            result[t] = IRREGULAR_IMPERFECT[infinitive]
            continue
        if t == 'subjunctive_present' and infinitive in IRREGULAR_SUBJ_PRESENT:
            result[t] = IRREGULAR_SUBJ_PRESENT[infinitive]
            continue
        # Fall back to regular endings if the verb has a recognizable infinitive
        if ending is None:
            raise SystemExit(
                f'{infinitive!r} has no {t!r} forms declared and no recognizable '
                f'-ar/-er/-ir ending'
            )
        result[t] = [stem + suf for suf in REGULAR_ENDINGS[ending][t]]
    return result


def main():
    out = []
    audio_manifest = []  # list of dicts: { spanish: ..., audio_id: ..., kind: form|sentence }
    skipped_tenses = []  # warn about verbs missing sentence data for a tense

    for verb, info in VERBS.items():
        forms = derive_forms(verb, info['type'], info.get('forms'))
        # Start with the hand-written sentences, then layer in generated ones
        # for any tense the verb doesn't already cover.
        sentences = dict(info['sentences'])
        for t, sents in GENERATED_SENTENCES.get(verb, {}).items():
            if t not in sentences:
                sentences[t] = sents

        entry = {
            'infinitive': verb,
            'english': info['english'],
            'type': info['type'],
            'tenses': {}
        }
        for tense in TENSES:
            # Verbs may legitimately lack sentence data for the advanced tenses
            # at first. Skip those silently — they'll fill in as data arrives.
            if tense not in sentences:
                skipped_tenses.append((verb, tense))
                continue
            entry['tenses'][tense] = {
                'label':       TENSE_LABEL[tense],
                'description': TENSE_DESCRIPTION[tense],
                'forms':       forms[tense],
                'sentences':   [{'es': s[0], 'en': s[1]} for s in sentences[tense]],
            }
            # Register audio targets
            for i, form in enumerate(forms[tense]):
                audio_id = f'{verb}__{tense}__{i}'
                audio_manifest.append({
                    'id': audio_id, 'text': form, 'kind': 'form'
                })
                audio_manifest.append({
                    'id': audio_id + '__s', 'text': sentences[tense][i][0], 'kind': 'sentence'
                })
        out.append(entry)

    # Write conjugations.js
    out_path = os.path.join(ROOT, 'conjugations.js')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('// ──────────────────────────────────────────────────────────\n')
        f.write('// Spanish Tutor — verb conjugation tables (auto-generated)\n')
        f.write('// Source: _tools/conjugations.py — edit there, not here.\n')
        f.write('// ──────────────────────────────────────────────────────────\n\n')
        f.write('const PERSONS = ')
        f.write(json.dumps(PERSONS, ensure_ascii=False))
        f.write(';\n')
        f.write('const PERSON_EN = ')
        f.write(json.dumps(PERSON_EN, ensure_ascii=False))
        f.write(';\n')
        f.write('const TENSE_ORDER = ')
        f.write(json.dumps(TENSES, ensure_ascii=False))
        f.write(';\n')
        f.write('const TENSES_DEFAULT_UNLOCKED = ')
        f.write(json.dumps(TENSES_DEFAULT_UNLOCKED, ensure_ascii=False))
        f.write(';\n')
        f.write('const TENSES_ADVANCED = ')
        f.write(json.dumps(TENSES_ADVANCED, ensure_ascii=False))
        f.write(';\n\n')
        f.write('const CONJUGATIONS = ')
        f.write(json.dumps(out, ensure_ascii=False, indent=2))
        f.write(';\n')

    # Write audio manifest used by generate_conj_audio.py
    manifest_path = os.path.join(ROOT, '_tools', 'conj_audio_manifest.json')
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(audio_manifest, f, ensure_ascii=False, indent=2)

    print(f'✅ {out_path}')
    print(f'   verbs: {len(out)}')
    print(f'   tenses: {len(TENSES)} (default unlocked: {TENSES_DEFAULT_UNLOCKED}, '
          f'advanced: {TENSES_ADVANCED})')
    print(f'   audio targets: {len(audio_manifest)}  '
          f'({len(audio_manifest)//2} forms + {len(audio_manifest)//2} sentences)')
    if skipped_tenses:
        # Aggregate by tense for cleaner reporting
        by_tense = {}
        for v, t in skipped_tenses:
            by_tense.setdefault(t, []).append(v)
        print('   ⚠️  Tenses missing sentence data (will be skipped in output):')
        for t, verbs in by_tense.items():
            print(f'      {t}: {len(verbs)} verbs')


if __name__ == '__main__':
    main()
