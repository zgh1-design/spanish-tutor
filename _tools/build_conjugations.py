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
    TENSES, TENSE_LABEL, TENSE_DESCRIPTION, REGULAR_ENDINGS,
)


def derive_forms(infinitive, type_, declared):
    """Return [present, preterite, future] each a list of 5 conjugations."""
    if declared:
        return declared
    if type_ != 'regular':
        raise SystemExit(f'{infinitive!r} is not regular but has no forms declared')
    ending = infinitive[-2:]
    if ending not in REGULAR_ENDINGS:
        raise SystemExit(f'{infinitive!r} does not end in -ar/-er/-ir')
    stem = infinitive[:-2]
    return {t: [stem + suf for suf in REGULAR_ENDINGS[ending][t]] for t in TENSES}


def main():
    out = []
    audio_manifest = []  # list of dicts: { spanish: ..., audio_id: ..., kind: form|sentence }

    for verb, info in VERBS.items():
        forms = derive_forms(verb, info['type'], info.get('forms'))
        sentences = info['sentences']

        entry = {
            'infinitive': verb,
            'english': info['english'],
            'type': info['type'],
            'tenses': {}
        }
        for tense in TENSES:
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
    print(f'   tenses: {len(TENSES)}')
    print(f'   audio targets: {len(audio_manifest)}  '
          f'({len(audio_manifest)//2} forms + {len(audio_manifest)//2} sentences)')


if __name__ == '__main__':
    main()
