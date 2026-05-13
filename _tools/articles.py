"""
Determine the appropriate definite article (el / la / los / las / '')
for a vocabulary entry. Rules + overrides — never perfect, but covers
the great majority of common nouns correctly.
"""

# Word-by-word overrides take precedence over all rules below.
OVERRIDES = {
    # ── Masculine despite -a ending ─────────────────────────────
    'día':        'el', 'mapa':       'el', 'papá':     'el', 'sofá':    'el',
    'problema':   'el', 'sistema':    'el', 'tema':     'el', 'programa':'el',
    'idioma':     'el', 'clima':      'el', 'planeta':  'el', 'cometa':  'el',
    'poeta':      'el', 'profeta':    'el', 'esquema':  'el', 'drama':   'el',
    'pijama':     'el', 'aroma':      'el', 'panorama': 'el', 'diploma': 'el',
    'lema':       'el', 'enigma':     'el', 'fantasma': 'el',

    # ── Feminine despite -o ending ──────────────────────────────
    'mano':   'la', 'foto':  'la', 'moto':  'la', 'radio': 'la',
    'libido': 'la',

    # ── Euphony rule (feminine words taking "el" in singular) ──
    # These are still grammatically feminine (la agua fría), but the
    # canonical singular form takes "el" for sound reasons.
    'agua':  'el', 'águila': 'el', 'hambre': 'el', 'arma':  'el',
    'aula':  'el', 'área':   'el', 'alma':   'el', 'alba':  'el',
    'asma':  'el', 'haba':   'el', 'hacha':  'el',

    # ── Common plurals already plural in vocabulary ────────────
    'frijoles':   'los', 'tacos':       'los', 'churros':       'los',
    'tamales':    'los', 'antojitos':   'los', 'pantalones':    'los',
    'zapatos':    'los', 'lentes':      'los', 'mariscos':      'los',
    'huevos':     'los', 'pies':        'los', 'sulfitos':      'los',
    'taninos':    'los',
    'fresas':     'las', 'uvas':        'las', 'gafas':         'las',
    'vacaciones': 'las', 'arvejas':     'las', 'matemáticas':   'las',

    # ── Mexican slang / dialect picks ───────────────────────────
    'chela': 'la', 'feria': 'la', 'chamba': 'la', 'cuate': 'el',
    'chido': '',  'órale': '',  'ándale': '',   'neta':  'la',

    # ── Specific feminine words (irregular gender for ending) ──
    'mujer':    'la', 'flor':    'la', 'voz':      'la', 'luz':    'la',
    'paz':      'la', 'cruz':    'la', 'red':      'la', 'fe':     'la',
    'leche':    'la', 'noche':   'la', 'tarde':    'la', 'sangre': 'la',
    'parte':    'la', 'gente':   'la', 'fuente':   'la', 'frente': 'la',
    'mente':    'la', 'muerte':  'la', 'suerte':   'la', 'llave':  'la',
    'nave':     'la', 'sal':     'la', 'piel':     'la', 'miel':   'la',
    'sal':      'la', 'ley':     'la', 'sed':      'la', 'cárcel': 'la',
    'imagen':   'la', 'razón':   'la', 'región':   'la', 'ocasión':'la',
    'función':  'la', 'opción':  'la', 'sazón':    'la', 'unión':  'la',
    'visión':   'la', 'misión':  'la', 'tos':      'la', 'crisis': 'la',
    'tesis':    'la', 'serie':   'la', 'especie':  'la', 'clase':  'la',
    'tarde':    'la',

    # ── Specific masculine words (irregular gender for ending) ─
    'corazón':  'el', 'amor':    'el', 'dolor':    'el', 'color':  'el',
    'olor':     'el', 'café':    'el', 'pie':      'el', 'té':     'el',
    'rey':      'el', 'sol':     'el', 'mar':      'el', 'país':   'el',
    'mes':      'el', 'gas':     'el', 'lápiz':    'el', 'amanecer':'el',
    'anochecer':'el', 'jueves':  'el', 'lunes':    'el', 'martes': 'el',
    'miércoles':'el', 'viernes': 'el', 'sábado':   'el', 'domingo':'el',
    'pan':      'el', 'tren':    'el', 'avión':    'el', 'azúcar': 'el',
    'arroz':    'el', 'pez':     'el', 'maíz':     'el', 'limón':  'el',
    'jamón':    'el', 'salón':   'el', 'autobús':  'el', 'camión': 'el',
    'altar':    'el', 'bar':     'el', 'estrés':   'el', 'andén':  'el',
    'mes':      'el', 'tabú':    'el', 'menú':     'el', 'champú': 'el',
    'sofá':     'el', 'club':    'el', 'álbum':    'el', 'hotel':  'el',
    'arroz':    'el', 'reloj':   'el', 'rubí':     'el', 'taxi':   'el',
    'esquí':    'el', 'colibrí': 'el', 'arcoíris': 'el', 'pis':    'el',
    'cero':     'el', 'corazón': 'el',

    # ── No article (concept words, very abstract that don't take article) ──
    # Months — used without article typically (en enero, not "el enero")
    'enero':'', 'febrero':'', 'marzo':'', 'abril':'',
    'mayo':'',  'junio':'',   'julio':'', 'agosto':'',
    'septiembre':'', 'octubre':'', 'noviembre':'', 'diciembre':'',
}

# Categories whose entries are usually NOT nouns
NON_NOUN_CATEGORIES = {
    'verbs', 'adjectives', 'connectors', 'basics', 'greetings',
    'colors', 'numbers', 'directions', 'mexican', 'emotion',
}

# Visual strategies that signal non-noun
NON_NOUN_STRATEGIES = {'grammar', 'digit', 'swatch'}


def _strip(spanish):
    """Reduce a vocabulary 'spanish' field to its dictionary headword."""
    s = spanish.split(' (')[0]
    s = s.split('/')[0]
    s = s.strip().strip('¿?¡!').strip()
    return s


def determine_article(entry):
    """Return 'el', 'la', 'los', 'las', or '' for an entry."""
    spanish  = entry[0]
    english  = entry[1]
    category = entry[2]
    strategy = entry[4] if len(entry) > 4 else 'photo'

    # Hard exclusions
    if strategy in NON_NOUN_STRATEGIES:
        return ''
    if english.lower().startswith('to '):
        return ''     # verb
    if category in NON_NOUN_CATEGORIES:
        return ''

    word = _strip(spanish).lower()

    # Override wins
    if word in OVERRIDES:
        return OVERRIDES[word]

    # ── Rule-based fallbacks (ordered by specificity) ──────────

    # Plural-ish: ends in -es or -as or -os of 4+ chars
    if word.endswith('es') and len(word) >= 5:
        # Many singular masculine words end in -es (mes, país) — covered by overrides
        return 'las' if word[-3] in 'iaeo' else 'los'
    if word.endswith('os') and len(word) >= 4:
        return 'los'
    if word.endswith('as') and len(word) >= 4:
        return 'las'

    # Common feminine endings
    if word.endswith(('ción', 'sión', 'dad', 'tad', 'tud', 'umbre', 'ie', 'eza', 'ura')):
        return 'la'

    # Common masculine endings
    if word.endswith(('aje', 'or', 'ema', 'ama', 'oma', 'ente', 'án', 'én', 'ín', 'ón', 'ún')):
        # but 'or' has many feminine exceptions like flor, labor — handled in overrides above
        return 'el'

    # Single-letter ending rules
    if word.endswith('o'):
        return 'el'
    if word.endswith('a'):
        return 'la'

    # Don't guess — leave articleless.
    return ''


def speak_with_article(spanish, article):
    """Compose the audio-ready string. Strips question marks, etc."""
    s = spanish.strip('¿?¡!').strip()
    s = s.split('/')[0].strip()
    s = s.split('(')[0].strip()
    if article:
        return f'{article} {s}'
    return s
