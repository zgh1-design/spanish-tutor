# Spanish Word Tutor

A self-paced flashcard app for learning Mexican Spanish vocabulary.
Image-first reveal, SM-2 spaced repetition, daily new-word limit, and tap-to-pronounce
using your browser's built-in Mexican Spanish voice.

## Features

- 436 most-common Mexican Spanish words
- SM-2 spaced repetition with within-day cooldowns
- 10 brand-new words per day (configurable in `app.js`)
- Image-first flashcards: see the picture, recall the word
- Tap the Spanish word (or the 🔊 button) to hear it pronounced
- Customize any word's image — upload a file or paste from clipboard
- Practice Today's Words mode for extra drilling
- Export / Import your progress as JSON for cross-device sync

## Run locally

Open `index.html` in any modern browser, or serve the folder:

```sh
cd spanish_tutor_web
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

After pushing to a GitHub repo:

1. Go to **Settings → Pages**
2. Under "Build and deployment", select **Branch: main**, **Folder: / (root)**
3. Save. Your app will be live at `https://YOURNAME.github.io/REPO/` within a minute.

## Where data lives

All data stays in your browser's `localStorage`:

- `spanishTutor:progress` — SM-2 schedule per word
- `spanishTutor:customizations` — per-word custom images / emojis

Use the **Export Progress** button on the home screen to back up or move
your data to another device. Use **Import Progress** on the new device to
load it.
