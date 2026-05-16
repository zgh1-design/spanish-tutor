#!/usr/bin/env python3
"""
Auto-generate imperfect + present-subjunctive example sentences for every verb
in conjugations.py that doesn't have them yet. Uses fixed-meaning Spanish/English
template sentences that work for any verb, with the conjugated form spliced in.

Outputs: _tools/generated_sentences.py — a dict of verb → tense → sentence list.
You then merge this into conjugations.py by hand or via the merger script.

Templates are intentionally simple and unambiguous so each card teaches the form,
not vocabulary the learner doesn't yet have.
"""
import sys, os, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from conjugations import (
    VERBS, REGULAR_ENDINGS, IRREGULAR_IMPERFECT, IRREGULAR_SUBJ_PRESENT
)


def get_forms(verb, type_, declared, tense):
    declared = declared or {}
    if tense in declared:
        return declared[tense]
    if tense == 'imperfect' and verb in IRREGULAR_IMPERFECT:
        return IRREGULAR_IMPERFECT[verb]
    if tense == 'subjunctive_present' and verb in IRREGULAR_SUBJ_PRESENT:
        return IRREGULAR_SUBJ_PRESENT[verb]
    ending = verb[-2:]
    if ending not in REGULAR_ENDINGS:
        # Fallback: accented endings like -ír / -ér map to their unaccented class
        for canonical in ('ar', 'er', 'ir'):
            if verb.endswith('r') and (verb[-2] in 'aeiouáéíóú'):
                # Heuristic: -ár → ar, -ér → er, etc.
                if verb[-2] in 'aá': canonical = 'ar'
                elif verb[-2] in 'eé': canonical = 'er'
                elif verb[-2] in 'iíoóuú': canonical = 'ir'
                break
        ending = canonical
    stem = verb[:-2]
    return [stem + suf for suf in REGULAR_ENDINGS[ending][tense]]


# English bare verb (for "used to X" / "that X") — drop the leading "to "
def en_bare(english_meaning):
    s = english_meaning.split('/')[0].split('(')[0].strip()
    if s.lower().startswith('to '):
        s = s[3:]
    return s.strip()


# Templates for each tense. Each template uses $V for the conjugated form
# (we just splice it in — works for any verb regardless of meaning).

PRESENT_TEMPLATES = [
    ('Yo $V todos los días.',           'I $V every day.'),
    ('Tú $V con frecuencia.',           'You $V often.'),
    ('Ella $V en casa.',                'She $V at home.'),
    ('Nosotros $V juntos.',             'We $V together.'),
    ('Ellos $V mucho.',                 'They $V a lot.'),
]

PRETERITE_TEMPLATES = [
    ('Yo $V ayer.',                     'I $V yesterday.'),
    ('Tú $V el sábado pasado.',         'You $V last Saturday.'),
    ('Ella $V anoche.',                 'She $V last night.'),
    ('Nosotros $V la semana pasada.',   'We $V last week.'),
    ('Ellos $V hace dos días.',         'They $V two days ago.'),
]

FUTURE_TEMPLATES = [
    ('Yo $V mañana.',                   'I will $V tomorrow.'),
    ('Tú $V el próximo lunes.',         'You will $V next Monday.'),
    ('Ella $V después.',                'She will $V later.'),
    ('Nosotros $V pronto.',             'We will $V soon.'),
    ('Ellos $V la próxima semana.',     'They will $V next week.'),
]

IMP_TEMPLATES = [
    ('Cuando era niño, yo $V mucho.',          'When I was a kid, I used to $V a lot.'),
    ('Tú $V todos los días.',                  'You used to $V every day.'),
    ('Ella $V de joven.',                      'She used to $V when she was young.'),
    ('Nosotros $V juntos en aquellos años.',   'We used to $V together in those years.'),
    ('Ellos $V cada tarde.',                   'They used to $V every afternoon.'),
]

SUBJ_TEMPLATES = [
    ('Quieren que yo $V.',                'They want me to $V.'),
    ('Espero que tú $V pronto.',          'I hope you $V soon.'),
    ('Es importante que ella $V.',        'It is important that she $V.'),
    ('Dudo que nosotros $V hoy.',         'I doubt that we $V today.'),
    ('Ojalá que ellos $V bien.',          'I hope they $V well.'),
]

ALL_TEMPLATES = {
    'present':              PRESENT_TEMPLATES,
    'preterite':            PRETERITE_TEMPLATES,
    'future':               FUTURE_TEMPLATES,
    'imperfect':            IMP_TEMPLATES,
    'subjunctive_present':  SUBJ_TEMPLATES,
}


def render(template_es, template_en, conj_form, en_form):
    return (template_es.replace('$V', conj_form),
            template_en.replace('$V', en_form))


def main():
    out = {}
    for verb, info in VERBS.items():
        en = en_bare(info['english'])
        out[verb] = {}
        # Generate templated sentences for every tense.
        # build_conjugations.py prefers hand-written sentences over these,
        # so they only fill in tenses the verb doesn't already have.
        for tense, templates in ALL_TEMPLATES.items():
            forms = get_forms(verb, info['type'], info.get('forms'), tense)
            out[verb][tense] = [
                render(templates[i][0], templates[i][1], forms[i], en)
                for i in range(5)
            ]

    # Output as a Python literal we can paste / merge
    out_path = os.path.join(os.path.dirname(__file__), 'generated_sentences.py')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write('# Auto-generated by augment_sentences.py — DO NOT EDIT BY HAND.\n')
        f.write('# Merged into conjugations.py via merge_sentences.py.\n\n')
        f.write('GENERATED = ')
        # Pretty-print with deterministic ordering
        f.write(repr(out))
        f.write('\n')

    print(f'✅ {out_path}')
    print(f'   verbs: {len(out)}')
    print(f'   sentences: {len(out) * 10}')


if __name__ == '__main__':
    main()
