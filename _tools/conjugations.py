# Spanish Tutor — verb conjugation data
# Each verb declared once with its type + example contexts per tense.
# build_conjugations.py expands this into the full table per (verb, tense, form).
#
# Conjugation slots per tense (5 forms, no vosotros):
#   0: yo                (I)
#   1: tú                (you)
#   2: él/ella/usted     (he/she/you formal)
#   3: nosotros          (we)
#   4: ellos/ellas/Uds.  (they/you-all)

PERSONS = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'ellos/ustedes']
PERSON_SUBJECTS = ['Yo', 'Tú', 'Ella', 'Nosotros', 'Ellos']
PERSON_EN       = ['I',  'You','She','We',         'They']

TENSES = ['present', 'preterite', 'future', 'imperfect', 'subjunctive_present']
# First three are the starting set. The advanced two stay locked until the user
# either reaches competence or manually unlocks them in settings.
TENSES_DEFAULT_UNLOCKED = ['present', 'preterite', 'future']
TENSES_ADVANCED         = ['imperfect', 'subjunctive_present']

TENSE_LABEL = {
    'present':              'Present',
    'preterite':            'Preterite (simple past)',
    'future':               'Future',
    'imperfect':            'Imperfect (habitual/ongoing past)',
    'subjunctive_present':  'Present Subjunctive',
}
TENSE_DESCRIPTION = {
    'present':   'Used for current actions, habits, and general truths.',
    'preterite': 'Used for completed actions in the past — events with a clear end.',
    'future':    'Used for actions that will happen.',
    'imperfect': 'Used for habitual or ongoing past actions — "used to" or "was -ing".',
    'subjunctive_present':
        'Used after expressions of desire, doubt, emotion, and uncertainty '
        '(after "que" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).',
}

# Regular endings — appended to the verb stem (verb minus -ar/-er/-ir)
REGULAR_ENDINGS = {
    'ar': {
        'present':             ['o',    'as',    'a',    'amos',   'an'],
        'preterite':           ['é',    'aste',  'ó',    'amos',   'aron'],
        'future':              ['aré',  'arás',  'ará',  'aremos', 'arán'],
        'imperfect':           ['aba',  'abas',  'aba',  'ábamos', 'aban'],
        'subjunctive_present': ['e',    'es',    'e',    'emos',   'en'],
    },
    'er': {
        'present':             ['o',    'es',    'e',    'emos',   'en'],
        'preterite':           ['í',    'iste',  'ió',   'imos',   'ieron'],
        'future':              ['eré',  'erás',  'erá',  'eremos', 'erán'],
        'imperfect':           ['ía',   'ías',   'ía',   'íamos',  'ían'],
        'subjunctive_present': ['a',    'as',    'a',    'amos',   'an'],
    },
    'ir': {
        'present':             ['o',    'es',    'e',    'imos',   'en'],
        'preterite':           ['í',    'iste',  'ió',   'imos',   'ieron'],
        'future':              ['iré',  'irás',  'irá',  'iremos', 'irán'],
        'imperfect':           ['ía',   'ías',   'ía',   'íamos',  'ían'],
        'subjunctive_present': ['a',    'as',    'a',    'amos',   'an'],
    },
}

# Verbs whose imperfect is irregular (the only 3 in Spanish):
#   ser → era / eras / era / éramos / eran
#   ir  → iba / ibas / iba / íbamos / iban
#   ver → veía / veías / veía / veíamos / veían
IRREGULAR_IMPERFECT = {
    'ser': ['era',  'eras',  'era',  'éramos', 'eran'],
    'ir':  ['iba',  'ibas',  'iba',  'íbamos', 'iban'],
    'ver': ['veía', 'veías', 'veía', 'veíamos','veían'],
}

# Present subjunctive irregulars. The general rule is "drop -o from yo-present,
# add subjunctive endings" — but several common verbs use entirely different stems.
IRREGULAR_SUBJ_PRESENT = {
    'ser':    ['sea',    'seas',    'sea',    'seamos',    'sean'],
    'estar':  ['esté',   'estés',   'esté',   'estemos',   'estén'],
    'ir':     ['vaya',   'vayas',   'vaya',   'vayamos',   'vayan'],
    'haber':  ['haya',   'hayas',   'haya',   'hayamos',   'hayan'],
    'saber':  ['sepa',   'sepas',   'sepa',   'sepamos',   'sepan'],
    'dar':    ['dé',     'des',     'dé',     'demos',     'den'],
    'ver':    ['vea',    'veas',    'vea',    'veamos',    'vean'],
    'tener':  ['tenga',  'tengas',  'tenga',  'tengamos',  'tengan'],
    'hacer':  ['haga',   'hagas',   'haga',   'hagamos',   'hagan'],
    'decir':  ['diga',   'digas',   'diga',   'digamos',   'digan'],
    'poder':  ['pueda',  'puedas',  'pueda',  'podamos',   'puedan'],
    'querer': ['quiera', 'quieras', 'quiera', 'queramos',  'quieran'],
    'venir':  ['venga',  'vengas',  'venga',  'vengamos',  'vengan'],
    'poner':  ['ponga',  'pongas',  'ponga',  'pongamos',  'pongan'],
    'salir':  ['salga',  'salgas',  'salga',  'salgamos',  'salgan'],
    'traer':  ['traiga', 'traigas', 'traiga', 'traigamos', 'traigan'],
    'caer':   ['caiga',  'caigas',  'caiga',  'caigamos',  'caigan'],
    'oír':    ['oiga',   'oigas',   'oiga',   'oigamos',   'oigan'],
    'conocer':['conozca','conozcas','conozca','conozcamos','conozcan'],
    'parecer':['parezca','parezcas','parezca','parezcamos','parezcan'],
    'pedir':  ['pida',   'pidas',   'pida',   'pidamos',   'pidan'],
    'dormir': ['duerma', 'duermas', 'duerma', 'durmamos',  'duerman'],
    'sentir': ['sienta', 'sientas', 'sienta', 'sintamos',  'sientan'],
    'pensar': ['piense', 'pienses', 'piense', 'pensemos',  'piensen'],
    'volver': ['vuelva', 'vuelvas', 'vuelva', 'volvamos',  'vuelvan'],
    'jugar':  ['juegue', 'juegues', 'juegue', 'juguemos',  'jueguen'],
    'pagar':  ['pague',  'pagues',  'pague',  'paguemos',  'paguen'],
    'buscar': ['busque', 'busques', 'busque', 'busquemos', 'busquen'],
    'tocar':  ['toque',  'toques',  'toque',  'toquemos',  'toquen'],
    'llegar': ['llegue', 'llegues', 'llegue', 'lleguemos', 'lleguen'],
    'empezar':['empiece','empieces','empiece','empecemos', 'empiecen'],
    'sacar':  ['saque',  'saques',  'saque',  'saquemos',  'saquen'],
    'pescar': ['pesque', 'pesques', 'pesque', 'pesquemos', 'pesquen'],
    'cruzar': ['cruce',  'cruces',  'cruce',  'crucemos',  'crucen'],
}

# Each verb entry:
#   'type':   'regular' or 'irregular' or 'stem-e-ie' / 'stem-o-ue' / 'stem-e-i'
#   'forms':  required for irregulars and stem-changers; dict of tense → [5 conjugated forms]
#             For regular verbs this is auto-derived.
#   'sentences': dict of tense → list of 5 (Spanish, English) tuples, one per person
VERBS = {

# ─── REGULAR -AR (10) ───────────────────────────────────────────────
    'hablar': {
        'type': 'regular',
        'english': 'to speak',
        'sentences': {
            'present':   [('Yo hablo español todos los días.',     'I speak Spanish every day.'),
                          ('Tú hablas muy rápido.',                'You speak very fast.'),
                          ('Ella habla con su madre.',             'She speaks with her mother.'),
                          ('Nosotros hablamos inglés en casa.',    'We speak English at home.'),
                          ('Ellos hablan por teléfono.',           'They speak on the phone.')],
            'preterite': [('Yo hablé con María ayer.',             'I spoke with Maria yesterday.'),
                          ('Tú hablaste mucho anoche.',            'You spoke a lot last night.'),
                          ('Ella habló sin parar.',                'She spoke without stopping.'),
                          ('Nosotros hablamos toda la noche.',     'We spoke all night.'),
                          ('Ellos hablaron durante una hora.',     'They spoke for an hour.')],
            'future':    [('Yo hablaré con el jefe mañana.',       'I will speak with the boss tomorrow.'),
                          ('Tú hablarás en la reunión.',           'You will speak at the meeting.'),
                          ('Ella hablará por radio.',              'She will speak on the radio.'),
                          ('Nosotros hablaremos pronto.',          'We will speak soon.'),
                          ('Ellos hablarán con el doctor.',        'They will speak with the doctor.')],
        }
    },

    'trabajar': {
        'type': 'regular',
        'english': 'to work',
        'sentences': {
            'present':   [('Yo trabajo en una oficina.',           'I work in an office.'),
                          ('Tú trabajas mucho.',                   'You work a lot.'),
                          ('Él trabaja en el banco.',              'He works at the bank.'),
                          ('Nosotros trabajamos juntos.',          'We work together.'),
                          ('Ellos trabajan los sábados.',          'They work on Saturdays.')],
            'preterite': [('Yo trabajé doce horas ayer.',          'I worked twelve hours yesterday.'),
                          ('Tú trabajaste el fin de semana.',      'You worked over the weekend.'),
                          ('Él trabajó en París por años.',        'He worked in Paris for years.'),
                          ('Nosotros trabajamos en el proyecto.',  'We worked on the project.'),
                          ('Ellos trabajaron toda la noche.',      'They worked all night.')],
            'future':    [('Yo trabajaré desde casa mañana.',      'I will work from home tomorrow.'),
                          ('Tú trabajarás con el equipo nuevo.',   'You will work with the new team.'),
                          ('Él trabajará en otra ciudad.',         'He will work in another city.'),
                          ('Nosotros trabajaremos hasta tarde.',   'We will work late.'),
                          ('Ellos trabajarán este verano.',        'They will work this summer.')],
        }
    },

    'estudiar': {
        'type': 'regular',
        'english': 'to study',
        'sentences': {
            'present':   [('Yo estudio matemáticas.',              'I study math.'),
                          ('Tú estudias en la universidad.',       'You study at the university.'),
                          ('Ella estudia para el examen.',         'She studies for the exam.'),
                          ('Nosotros estudiamos juntos.',          'We study together.'),
                          ('Ellos estudian medicina.',             'They study medicine.')],
            'preterite': [('Yo estudié toda la noche.',            'I studied all night.'),
                          ('Tú estudiaste mucho ayer.',            'You studied a lot yesterday.'),
                          ('Ella estudió en Madrid.',              'She studied in Madrid.'),
                          ('Nosotros estudiamos la lección.',      'We studied the lesson.'),
                          ('Ellos estudiaron los verbos.',         'They studied the verbs.')],
            'future':    [('Yo estudiaré después.',                'I will study later.'),
                          ('Tú estudiarás con tus amigos.',        'You will study with your friends.'),
                          ('Ella estudiará biología.',             'She will study biology.'),
                          ('Nosotros estudiaremos historia.',      'We will study history.'),
                          ('Ellos estudiarán mañana.',             'They will study tomorrow.')],
        }
    },

    'caminar': {
        'type': 'regular',
        'english': 'to walk',
        'sentences': {
            'present':   [('Yo camino al trabajo.',                'I walk to work.'),
                          ('Tú caminas muy rápido.',               'You walk very fast.'),
                          ('Ella camina en el parque.',            'She walks in the park.'),
                          ('Nosotros caminamos por la playa.',     'We walk along the beach.'),
                          ('Ellos caminan cada mañana.',           'They walk every morning.')],
            'preterite': [('Yo caminé cinco kilómetros.',          'I walked five kilometers.'),
                          ('Tú caminaste mucho ayer.',             'You walked a lot yesterday.'),
                          ('Ella caminó hasta la tienda.',         'She walked to the store.'),
                          ('Nosotros caminamos durante horas.',    'We walked for hours.'),
                          ('Ellos caminaron toda la tarde.',       'They walked all afternoon.')],
            'future':    [('Yo caminaré después del almuerzo.',    'I will walk after lunch.'),
                          ('Tú caminarás conmigo.',                'You will walk with me.'),
                          ('Ella caminará al colegio.',            'She will walk to school.'),
                          ('Nosotros caminaremos esta tarde.',     'We will walk this afternoon.'),
                          ('Ellos caminarán en la mañana.',        'They will walk in the morning.')],
        }
    },

    'cantar': {
        'type': 'regular',
        'english': 'to sing',
        'sentences': {
            'present':   [('Yo canto en la ducha.',                'I sing in the shower.'),
                          ('Tú cantas muy bien.',                  'You sing very well.'),
                          ('Ella canta en un coro.',               'She sings in a choir.'),
                          ('Nosotros cantamos en español.',        'We sing in Spanish.'),
                          ('Ellos cantan en la fiesta.',           'They sing at the party.')],
            'preterite': [('Yo canté en el concierto.',            'I sang at the concert.'),
                          ('Tú cantaste hermosamente.',            'You sang beautifully.'),
                          ('Ella cantó toda la canción.',          'She sang the whole song.'),
                          ('Nosotros cantamos juntos.',            'We sang together.'),
                          ('Ellos cantaron en la boda.',           'They sang at the wedding.')],
            'future':    [('Yo cantaré en el escenario.',          'I will sing on stage.'),
                          ('Tú cantarás esta noche.',              'You will sing tonight.'),
                          ('Ella cantará una balada.',             'She will sing a ballad.'),
                          ('Nosotros cantaremos en la iglesia.',   'We will sing at the church.'),
                          ('Ellos cantarán en español.',           'They will sing in Spanish.')],
        }
    },

    'mirar': {
        'type': 'regular',
        'english': 'to watch / look at',
        'sentences': {
            'present':   [('Yo miro la televisión.',               'I watch television.'),
                          ('Tú miras las estrellas.',              'You look at the stars.'),
                          ('Él mira el reloj.',                    'He looks at the clock.'),
                          ('Nosotros miramos una película.',       'We watch a movie.'),
                          ('Ellos miran el partido.',              'They watch the game.')],
            'preterite': [('Yo miré la luna anoche.',              'I looked at the moon last night.'),
                          ('Tú miraste el video.',                 'You watched the video.'),
                          ('Él miró por la ventana.',              'He looked out the window.'),
                          ('Nosotros miramos las fotos.',          'We looked at the photos.'),
                          ('Ellos miraron el atardecer.',          'They watched the sunset.')],
            'future':    [('Yo miraré las noticias después.',      'I will watch the news later.'),
                          ('Tú mirarás el documental.',            'You will watch the documentary.'),
                          ('Él mirará el partido el sábado.',      'He will watch the game on Saturday.'),
                          ('Nosotros miraremos una serie.',        'We will watch a series.'),
                          ('Ellos mirarán la presentación.',       'They will watch the presentation.')],
        }
    },

    'escuchar': {
        'type': 'regular',
        'english': 'to listen',
        'sentences': {
            'present':   [('Yo escucho música clásica.',           'I listen to classical music.'),
                          ('Tú escuchas la radio.',                'You listen to the radio.'),
                          ('Ella escucha al profesor.',            'She listens to the teacher.'),
                          ('Nosotros escuchamos podcasts.',        'We listen to podcasts.'),
                          ('Ellos escuchan jazz.',                 'They listen to jazz.')],
            'preterite': [('Yo escuché el discurso completo.',     'I listened to the whole speech.'),
                          ('Tú escuchaste el chiste dos veces.',   'You heard the joke twice.'),
                          ('Ella escuchó música toda la tarde.',   'She listened to music all afternoon.'),
                          ('Nosotros escuchamos las instrucciones.','We listened to the instructions.'),
                          ('Ellos escucharon con atención.',       'They listened carefully.')],
            'future':    [('Yo escucharé el álbum nuevo.',         'I will listen to the new album.'),
                          ('Tú escucharás la entrevista.',         'You will listen to the interview.'),
                          ('Ella escuchará el podcast después.',   'She will listen to the podcast later.'),
                          ('Nosotros escucharemos el concierto.',  'We will listen to the concert.'),
                          ('Ellos escucharán las grabaciones.',    'They will listen to the recordings.')],
        }
    },

    'preparar': {
        'type': 'regular',
        'english': 'to prepare',
        'sentences': {
            'present':   [('Yo preparo la cena cada noche.',       'I prepare dinner every night.'),
                          ('Tú preparas el café muy bien.',        'You make coffee very well.'),
                          ('Ella prepara una sorpresa.',           'She is preparing a surprise.'),
                          ('Nosotros preparamos la presentación.', 'We prepare the presentation.'),
                          ('Ellos preparan el desayuno.',          'They prepare breakfast.')],
            'preterite': [('Yo preparé el almuerzo ayer.',         'I prepared lunch yesterday.'),
                          ('Tú preparaste un pastel delicioso.',   'You made a delicious cake.'),
                          ('Ella preparó la maleta anoche.',       'She packed the suitcase last night.'),
                          ('Nosotros preparamos todo a tiempo.',   'We prepared everything on time.'),
                          ('Ellos prepararon una fiesta.',         'They organized a party.')],
            'future':    [('Yo prepararé el informe mañana.',      'I will prepare the report tomorrow.'),
                          ('Tú prepararás algo especial.',         'You will prepare something special.'),
                          ('Ella preparará la mesa.',              'She will set the table.'),
                          ('Nosotros prepararemos la cena.',       'We will prepare dinner.'),
                          ('Ellos prepararán los documentos.',     'They will prepare the documents.')],
        }
    },

    'ayudar': {
        'type': 'regular',
        'english': 'to help',
        'sentences': {
            'present':   [('Yo ayudo a mi madre.',                 'I help my mother.'),
                          ('Tú ayudas con la tarea.',              'You help with the homework.'),
                          ('Ella ayuda a los niños.',              'She helps the children.'),
                          ('Nosotros ayudamos a los vecinos.',     'We help the neighbors.'),
                          ('Ellos ayudan al maestro.',             'They help the teacher.')],
            'preterite': [('Yo ayudé en la cocina.',               'I helped in the kitchen.'),
                          ('Tú ayudaste a tu hermano.',            'You helped your brother.'),
                          ('Ella ayudó con la mudanza.',           'She helped with the move.'),
                          ('Nosotros ayudamos a limpiar.',         'We helped to clean.'),
                          ('Ellos ayudaron mucho.',                'They helped a lot.')],
            'future':    [('Yo ayudaré después.',                  'I will help afterwards.'),
                          ('Tú ayudarás con el proyecto.',         'You will help with the project.'),
                          ('Ella ayudará el sábado.',              'She will help on Saturday.'),
                          ('Nosotros ayudaremos a tu padre.',      'We will help your father.'),
                          ('Ellos ayudarán a organizar.',          'They will help organize.')],
        }
    },

    'comprar': {
        'type': 'regular',
        'english': 'to buy',
        'sentences': {
            'present':   [('Yo compro pan en la panadería.',       'I buy bread at the bakery.'),
                          ('Tú compras flores.',                   'You buy flowers.'),
                          ('Ella compra ropa en línea.',           'She buys clothes online.'),
                          ('Nosotros compramos comida fresca.',    'We buy fresh food.'),
                          ('Ellos compran regalos.',               'They buy gifts.')],
            'preterite': [('Yo compré un libro nuevo.',            'I bought a new book.'),
                          ('Tú compraste dos boletos.',            'You bought two tickets.'),
                          ('Ella compró el vestido perfecto.',     'She bought the perfect dress.'),
                          ('Nosotros compramos la casa el año pasado.','We bought the house last year.'),
                          ('Ellos compraron mucho.',               'They bought a lot.')],
            'future':    [('Yo compraré la cena.',                 'I will buy dinner.'),
                          ('Tú comprarás los ingredientes.',       'You will buy the ingredients.'),
                          ('Ella comprará un coche nuevo.',        'She will buy a new car.'),
                          ('Nosotros compraremos la propiedad.',   'We will buy the property.'),
                          ('Ellos comprarán entradas.',            'They will buy tickets.')],
        }
    },

# ─── REGULAR -ER (8) ───────────────────────────────────────────────
    'comer': {
        'type': 'regular',
        'english': 'to eat',
        'sentences': {
            'present':   [('Yo como pizza los viernes.',           'I eat pizza on Fridays.'),
                          ('Tú comes muy poco.',                   'You eat very little.'),
                          ('Él come en el restaurante.',           'He eats at the restaurant.'),
                          ('Nosotros comemos a las ocho.',         'We eat at eight.'),
                          ('Ellos comen frutas.',                  'They eat fruit.')],
            'preterite': [('Yo comí en casa anoche.',              'I ate at home last night.'),
                          ('Tú comiste demasiado.',                'You ate too much.'),
                          ('Él comió todo el plato.',              'He ate the whole plate.'),
                          ('Nosotros comimos juntos.',             'We ate together.'),
                          ('Ellos comieron tacos.',                'They ate tacos.')],
            'future':    [('Yo comeré tarde hoy.',                 'I will eat late today.'),
                          ('Tú comerás con nosotros.',             'You will eat with us.'),
                          ('Él comerá en el aeropuerto.',          'He will eat at the airport.'),
                          ('Nosotros comeremos pollo.',            'We will eat chicken.'),
                          ('Ellos comerán postre.',                'They will eat dessert.')],
        }
    },

    'beber': {
        'type': 'regular',
        'english': 'to drink',
        'sentences': {
            'present':   [('Yo bebo agua todo el día.',            'I drink water all day.'),
                          ('Tú bebes mucho café.',                 'You drink a lot of coffee.'),
                          ('Ella bebe té por la tarde.',           'She drinks tea in the afternoon.'),
                          ('Nosotros bebemos vino con la cena.',   'We drink wine with dinner.'),
                          ('Ellos beben cerveza.',                 'They drink beer.')],
            'preterite': [('Yo bebí dos vasos de jugo.',           'I drank two glasses of juice.'),
                          ('Tú bebiste demasiado anoche.',         'You drank too much last night.'),
                          ('Ella bebió un café doble.',            'She drank a double coffee.'),
                          ('Nosotros bebimos champán.',            'We drank champagne.'),
                          ('Ellos bebieron toda la noche.',        'They drank all night.')],
            'future':    [('Yo beberé limonada.',                  'I will drink lemonade.'),
                          ('Tú beberás más agua.',                 'You will drink more water.'),
                          ('Ella beberá un mojito.',               'She will drink a mojito.'),
                          ('Nosotros beberemos sangría.',          'We will drink sangria.'),
                          ('Ellos beberán refrescos.',             'They will drink sodas.')],
        }
    },

    'aprender': {
        'type': 'regular',
        'english': 'to learn',
        'sentences': {
            'present':   [('Yo aprendo español rápido.',           'I learn Spanish quickly.'),
                          ('Tú aprendes francés también.',         'You learn French too.'),
                          ('Ella aprende a tocar la guitarra.',    'She is learning to play guitar.'),
                          ('Nosotros aprendemos cosas nuevas.',    'We learn new things.'),
                          ('Ellos aprenden de sus errores.',       'They learn from their mistakes.')],
            'preterite': [('Yo aprendí mucho este año.',           'I learned a lot this year.'),
                          ('Tú aprendiste a cocinar.',             'You learned to cook.'),
                          ('Ella aprendió la canción.',            'She learned the song.'),
                          ('Nosotros aprendimos juntos.',          'We learned together.'),
                          ('Ellos aprendieron a nadar.',           'They learned to swim.')],
            'future':    [('Yo aprenderé alemán.',                 'I will learn German.'),
                          ('Tú aprenderás con el tiempo.',         'You will learn with time.'),
                          ('Ella aprenderá a manejar.',            'She will learn to drive.'),
                          ('Nosotros aprenderemos juntos.',        'We will learn together.'),
                          ('Ellos aprenderán inglés.',             'They will learn English.')],
        }
    },

    'leer': {
        'type': 'irregular',  # leer has irregular preterite spelling
        'english': 'to read',
        'forms': {
            'present':   ['leo',  'lees',  'lee',   'leemos', 'leen'],
            'preterite': ['leí',  'leíste','leyó',  'leímos', 'leyeron'],
            'future':    ['leeré','leerás','leerá', 'leeremos','leerán'],
        },
        'sentences': {
            'present':   [('Yo leo novelas en la cama.',           'I read novels in bed.'),
                          ('Tú lees el periódico.',                'You read the newspaper.'),
                          ('Ella lee poesía.',                     'She reads poetry.'),
                          ('Nosotros leemos en silencio.',         'We read in silence.'),
                          ('Ellos leen muchos libros.',            'They read many books.')],
            'preterite': [('Yo leí el libro en un día.',           'I read the book in one day.'),
                          ('Tú leíste todo el manual.',            'You read the whole manual.'),
                          ('Ella leyó la carta dos veces.',        'She read the letter twice.'),
                          ('Nosotros leímos los documentos.',      'We read the documents.'),
                          ('Ellos leyeron las instrucciones.',     'They read the instructions.')],
            'future':    [('Yo leeré ese artículo.',               'I will read that article.'),
                          ('Tú leerás el contrato.',               'You will read the contract.'),
                          ('Ella leerá una novela este verano.',   'She will read a novel this summer.'),
                          ('Nosotros leeremos juntos.',            'We will read together.'),
                          ('Ellos leerán los resultados.',         'They will read the results.')],
        }
    },

    'correr': {
        'type': 'regular',
        'english': 'to run',
        'sentences': {
            'present':   [('Yo corro cinco kilómetros.',           'I run five kilometers.'),
                          ('Tú corres muy rápido.',                'You run very fast.'),
                          ('Ella corre en el parque.',             'She runs in the park.'),
                          ('Nosotros corremos cada mañana.',       'We run every morning.'),
                          ('Ellos corren maratones.',              'They run marathons.')],
            'preterite': [('Yo corrí toda la mañana.',             'I ran all morning.'),
                          ('Tú corriste para alcanzar el bus.',    'You ran to catch the bus.'),
                          ('Ella corrió la carrera.',              'She ran the race.'),
                          ('Nosotros corrimos por las calles.',    'We ran through the streets.'),
                          ('Ellos corrieron hasta la casa.',       'They ran to the house.')],
            'future':    [('Yo correré con mi amigo.',             'I will run with my friend.'),
                          ('Tú correrás el maratón.',              'You will run the marathon.'),
                          ('Ella correrá el sábado.',              'She will run on Saturday.'),
                          ('Nosotros correremos por el bosque.',   'We will run through the forest.'),
                          ('Ellos correrán juntos.',               'They will run together.')],
        }
    },

    'vender': {
        'type': 'regular',
        'english': 'to sell',
        'sentences': {
            'present':   [('Yo vendo flores en el mercado.',       'I sell flowers at the market.'),
                          ('Tú vendes coches.',                    'You sell cars.'),
                          ('Él vende libros usados.',              'He sells used books.'),
                          ('Nosotros vendemos artesanías.',        'We sell handicrafts.'),
                          ('Ellos venden frutas frescas.',         'They sell fresh fruits.')],
            'preterite': [('Yo vendí mi vieja bicicleta.',         'I sold my old bicycle.'),
                          ('Tú vendiste la casa.',                 'You sold the house.'),
                          ('Él vendió todo en un día.',            'He sold everything in one day.'),
                          ('Nosotros vendimos los muebles.',       'We sold the furniture.'),
                          ('Ellos vendieron sus acciones.',        'They sold their shares.')],
            'future':    [('Yo venderé mi auto.',                  'I will sell my car.'),
                          ('Tú venderás la propiedad.',            'You will sell the property.'),
                          ('Él venderá su colección.',             'He will sell his collection.'),
                          ('Nosotros venderemos los productos.',   'We will sell the products.'),
                          ('Ellos venderán las pinturas.',         'They will sell the paintings.')],
        }
    },

    'comprender': {
        'type': 'regular',
        'english': 'to understand',
        'sentences': {
            'present':   [('Yo comprendo la situación.',           'I understand the situation.'),
                          ('Tú comprendes el problema.',           'You understand the problem.'),
                          ('Ella comprende muy rápido.',           'She understands very quickly.'),
                          ('Nosotros comprendemos la lección.',    'We understand the lesson.'),
                          ('Ellos comprenden las reglas.',         'They understand the rules.')],
            'preterite': [('Yo comprendí la pregunta.',            'I understood the question.'),
                          ('Tú comprendiste perfectamente.',       'You understood perfectly.'),
                          ('Ella comprendió mi punto.',            'She understood my point.'),
                          ('Nosotros comprendimos al final.',      'We understood in the end.'),
                          ('Ellos comprendieron el mensaje.',      'They understood the message.')],
            'future':    [('Yo comprenderé con el tiempo.',        'I will understand with time.'),
                          ('Tú comprenderás cuando crezcas.',      'You will understand when you grow up.'),
                          ('Ella comprenderá la noticia.',         'She will understand the news.'),
                          ('Nosotros comprenderemos la teoría.',   'We will understand the theory.'),
                          ('Ellos comprenderán pronto.',           'They will understand soon.')],
        }
    },

# ─── REGULAR -IR (7) ───────────────────────────────────────────────
    'vivir': {
        'type': 'regular',
        'english': 'to live',
        'sentences': {
            'present':   [('Yo vivo en una ciudad grande.',        'I live in a big city.'),
                          ('Tú vives cerca del mar.',              'You live near the sea.'),
                          ('Ella vive sola.',                      'She lives alone.'),
                          ('Nosotros vivimos en familia.',         'We live as a family.'),
                          ('Ellos viven en el campo.',             'They live in the countryside.')],
            'preterite': [('Yo viví en México diez años.',         'I lived in Mexico for ten years.'),
                          ('Tú viviste en París.',                 'You lived in Paris.'),
                          ('Ella vivió una aventura increíble.',   'She lived an incredible adventure.'),
                          ('Nosotros vivimos momentos felices.',   'We lived happy moments.'),
                          ('Ellos vivieron en el campo.',          'They lived in the countryside.')],
            'future':    [('Yo viviré en otro país.',              'I will live in another country.'),
                          ('Tú vivirás en la playa.',              'You will live at the beach.'),
                          ('Ella vivirá una vida feliz.',          'She will live a happy life.'),
                          ('Nosotros viviremos en paz.',           'We will live in peace.'),
                          ('Ellos vivirán cerca.',                 'They will live nearby.')],
        }
    },

    'escribir': {
        'type': 'regular',
        'english': 'to write',
        'sentences': {
            'present':   [('Yo escribo cartas a mis abuelos.',     'I write letters to my grandparents.'),
                          ('Tú escribes muy bien.',                'You write very well.'),
                          ('Él escribe novelas.',                  'He writes novels.'),
                          ('Nosotros escribimos en español.',      'We write in Spanish.'),
                          ('Ellos escriben artículos.',            'They write articles.')],
            'preterite': [('Yo escribí un poema ayer.',            'I wrote a poem yesterday.'),
                          ('Tú escribiste el ensayo.',             'You wrote the essay.'),
                          ('Él escribió tres libros.',             'He wrote three books.'),
                          ('Nosotros escribimos el informe.',      'We wrote the report.'),
                          ('Ellos escribieron las cartas.',        'They wrote the letters.')],
            'future':    [('Yo escribiré una carta esta noche.',   'I will write a letter tonight.'),
                          ('Tú escribirás la respuesta.',          'You will write the answer.'),
                          ('Él escribirá una biografía.',          'He will write a biography.'),
                          ('Nosotros escribiremos juntos.',        'We will write together.'),
                          ('Ellos escribirán el guión.',           'They will write the script.')],
        }
    },

    'abrir': {
        'type': 'regular',
        'english': 'to open',
        'sentences': {
            'present':   [('Yo abro la puerta.',                   'I open the door.'),
                          ('Tú abres las ventanas.',               'You open the windows.'),
                          ('Ella abre el regalo.',                 'She opens the gift.'),
                          ('Nosotros abrimos la tienda a las nueve.','We open the store at nine.'),
                          ('Ellos abren la caja.',                 'They open the box.')],
            'preterite': [('Yo abrí la carta con cuidado.',        'I opened the letter carefully.'),
                          ('Tú abriste la botella.',               'You opened the bottle.'),
                          ('Ella abrió el sobre.',                 'She opened the envelope.'),
                          ('Nosotros abrimos el restaurante.',     'We opened the restaurant.'),
                          ('Ellos abrieron la entrada.',           'They opened the entrance.')],
            'future':    [('Yo abriré la oficina temprano.',       'I will open the office early.'),
                          ('Tú abrirás los ojos.',                 'You will open your eyes.'),
                          ('Ella abrirá una nueva tienda.',        'She will open a new store.'),
                          ('Nosotros abriremos la cuenta.',        'We will open the account.'),
                          ('Ellos abrirán la puerta.',             'They will open the door.')],
        }
    },

    'recibir': {
        'type': 'regular',
        'english': 'to receive',
        'sentences': {
            'present':   [('Yo recibo paquetes en casa.',          'I receive packages at home.'),
                          ('Tú recibes muchos correos.',           'You receive many emails.'),
                          ('Ella recibe a sus invitados.',         'She welcomes her guests.'),
                          ('Nosotros recibimos el periódico.',     'We receive the newspaper.'),
                          ('Ellos reciben buenas noticias.',       'They receive good news.')],
            'preterite': [('Yo recibí una llamada importante.',    'I received an important call.'),
                          ('Tú recibiste un regalo.',              'You received a gift.'),
                          ('Ella recibió el premio.',              'She received the prize.'),
                          ('Nosotros recibimos visitas.',          'We had visitors.'),
                          ('Ellos recibieron la invitación.',      'They received the invitation.')],
            'future':    [('Yo recibiré la respuesta mañana.',     'I will receive the answer tomorrow.'),
                          ('Tú recibirás un aumento.',             'You will receive a raise.'),
                          ('Ella recibirá el diploma.',            'She will receive the diploma.'),
                          ('Nosotros recibiremos las cartas.',     'We will receive the letters.'),
                          ('Ellos recibirán el pago.',             'They will receive the payment.')],
        }
    },

    'subir': {
        'type': 'regular',
        'english': 'to go up / climb',
        'sentences': {
            'present':   [('Yo subo las escaleras corriendo.',     'I climb the stairs running.'),
                          ('Tú subes a la montaña.',               'You climb the mountain.'),
                          ('Él sube al autobús.',                  'He gets on the bus.'),
                          ('Nosotros subimos al avión.',           'We board the plane.'),
                          ('Ellos suben fotos a la red.',          'They upload photos to the web.')],
            'preterite': [('Yo subí al techo a mirar.',            'I went up to the roof to look.'),
                          ('Tú subiste muy alto.',                 'You went up very high.'),
                          ('Él subió las escaleras lentamente.',   'He climbed the stairs slowly.'),
                          ('Nosotros subimos al mirador.',         'We went up to the lookout.'),
                          ('Ellos subieron al árbol.',             'They climbed the tree.')],
            'future':    [('Yo subiré después.',                   'I will go up later.'),
                          ('Tú subirás al ático.',                 'You will go up to the attic.'),
                          ('Él subirá el equipaje.',               'He will take up the luggage.'),
                          ('Nosotros subiremos la montaña.',       'We will climb the mountain.'),
                          ('Ellos subirán al escenario.',          'They will go up on stage.')],
        }
    },

    'partir': {
        'type': 'regular',
        'english': 'to leave / split',
        'sentences': {
            'present':   [('Yo parto temprano por la mañana.',     'I leave early in the morning.'),
                          ('Tú partes el pan.',                    'You split the bread.'),
                          ('Ella parte mañana.',                   'She leaves tomorrow.'),
                          ('Nosotros partimos a las seis.',        'We leave at six.'),
                          ('Ellos parten al amanecer.',            'They leave at dawn.')],
            'preterite': [('Yo partí a las cinco.',                'I left at five.'),
                          ('Tú partiste sin avisar.',              'You left without notice.'),
                          ('Ella partió hacia el aeropuerto.',     'She left for the airport.'),
                          ('Nosotros partimos juntos.',            'We left together.'),
                          ('Ellos partieron de viaje.',            'They left on a trip.')],
            'future':    [('Yo partiré el viernes.',               'I will leave on Friday.'),
                          ('Tú partirás con nosotros.',            'You will leave with us.'),
                          ('Ella partirá pronto.',                 'She will leave soon.'),
                          ('Nosotros partiremos en tren.',         'We will leave by train.'),
                          ('Ellos partirán muy temprano.',         'They will leave very early.')],
        }
    },

# ─── IRREGULAR / STEM-CHANGERS (8) ──────────────────────────────────
    'ser': {
        'type': 'irregular',
        'english': 'to be (permanent)',
        'forms': {
            'present':   ['soy',  'eres', 'es',   'somos', 'son'],
            'preterite': ['fui',  'fuiste','fue', 'fuimos','fueron'],
            'future':    ['seré', 'serás','será', 'seremos','serán'],
        },
        'sentences': {
            'present':   [('Yo soy de Estados Unidos.',            'I am from the United States.'),
                          ('Tú eres mi mejor amigo.',              'You are my best friend.'),
                          ('Ella es maestra.',                     'She is a teacher.'),
                          ('Nosotros somos hermanos.',             'We are brothers.'),
                          ('Ellos son estudiantes.',               'They are students.')],
            'preterite': [('Yo fui a la fiesta anoche.',           'I went to the party last night.'),
                          ('Tú fuiste muy amable.',                'You were very kind.'),
                          ('Ella fue mi profesora.',               'She was my professor.'),
                          ('Nosotros fuimos al museo.',            'We went to the museum.'),
                          ('Ellos fueron los ganadores.',          'They were the winners.')],
            'future':    [('Yo seré médico algún día.',            'I will be a doctor someday.'),
                          ('Tú serás un gran padre.',              'You will be a great father.'),
                          ('Ella será famosa.',                    'She will be famous.'),
                          ('Nosotros seremos felices.',            'We will be happy.'),
                          ('Ellos serán nuestros vecinos.',        'They will be our neighbors.')],
            'imperfect': [('Cuando era niño, yo era muy curioso.', 'When I was a kid, I was very curious.'),
                          ('Tú eras mi mejor amigo en la escuela.','You were my best friend at school.'),
                          ('Ella era profesora antes.',            'She used to be a teacher.'),
                          ('Nosotros éramos vecinos hace años.',   'We were neighbors years ago.'),
                          ('Ellos eran los líderes del grupo.',    'They were the leaders of the group.')],
            'subjunctive_present':
                         [('Quiero que yo sea más paciente.',       'I want to be more patient.'),
                          ('Espero que tú seas feliz.',             'I hope you are happy.'),
                          ('Es importante que ella sea honesta.',   'It is important that she be honest.'),
                          ('Dudo que nosotros seamos los primeros.','I doubt we will be the first.'),
                          ('Ojalá que ellos sean amables.',         'Hopefully they are kind.')],
        }
    },

    'estar': {
        'type': 'irregular',
        'english': 'to be (temporary)',
        'forms': {
            'present':   ['estoy',  'estás',  'está',   'estamos', 'están'],
            'preterite': ['estuve', 'estuviste','estuvo','estuvimos','estuvieron'],
            'future':    ['estaré', 'estarás','estará', 'estaremos','estarán'],
        },
        'sentences': {
            'present':   [('Yo estoy en casa.',                    'I am at home.'),
                          ('Tú estás cansado.',                    'You are tired.'),
                          ('Ella está contenta hoy.',              'She is happy today.'),
                          ('Nosotros estamos en el parque.',       'We are in the park.'),
                          ('Ellos están listos.',                  'They are ready.')],
            'preterite': [('Yo estuve enfermo la semana pasada.',  'I was sick last week.'),
                          ('Tú estuviste en mi casa.',             'You were at my house.'),
                          ('Ella estuvo en París.',                'She was in Paris.'),
                          ('Nosotros estuvimos juntos todo el día.','We were together all day.'),
                          ('Ellos estuvieron muy ocupados.',       'They were very busy.')],
            'future':    [('Yo estaré allí pronto.',               'I will be there soon.'),
                          ('Tú estarás bien.',                     'You will be fine.'),
                          ('Ella estará en la oficina mañana.',    'She will be in the office tomorrow.'),
                          ('Nosotros estaremos en casa.',          'We will be at home.'),
                          ('Ellos estarán de vacaciones.',         'They will be on vacation.')],
            'imperfect': [('Yo estaba cansado anoche.',             'I was tired last night.'),
                          ('Tú estabas muy contento en la fiesta.', 'You were very happy at the party.'),
                          ('Ella estaba en casa todo el día.',      'She was at home all day.'),
                          ('Nosotros estábamos en la playa.',       'We were at the beach.'),
                          ('Ellos estaban preocupados por ti.',     'They were worried about you.')],
            'subjunctive_present':
                         [('Espero que yo esté listo a tiempo.',    'I hope I will be ready in time.'),
                          ('Quiero que tú estés feliz.',            'I want you to be happy.'),
                          ('Es importante que ella esté presente.', 'It is important that she be present.'),
                          ('Dudo que nosotros estemos juntos mañana.','I doubt we will be together tomorrow.'),
                          ('Ojalá que ellos estén bien.',           'Hopefully they are well.')],
        }
    },

    'ir': {
        'type': 'irregular',
        'english': 'to go',
        'forms': {
            'present':   ['voy',  'vas',  'va',   'vamos', 'van'],
            'preterite': ['fui',  'fuiste','fue', 'fuimos','fueron'],
            'future':    ['iré',  'irás', 'irá',  'iremos','irán'],
        },
        'sentences': {
            'present':   [('Yo voy al trabajo en bicicleta.',      'I go to work by bicycle.'),
                          ('Tú vas a la escuela.',                 'You go to school.'),
                          ('Ella va al gimnasio.',                 'She goes to the gym.'),
                          ('Nosotros vamos al cine.',              'We go to the movies.'),
                          ('Ellos van a la playa.',                'They go to the beach.')],
            'preterite': [('Yo fui a México el verano pasado.',    'I went to Mexico last summer.'),
                          ('Tú fuiste a la fiesta.',               'You went to the party.'),
                          ('Ella fue al doctor.',                  'She went to the doctor.'),
                          ('Nosotros fuimos al concierto.',        'We went to the concert.'),
                          ('Ellos fueron de viaje.',               'They went on a trip.')],
            'future':    [('Yo iré contigo.',                      'I will go with you.'),
                          ('Tú irás a la universidad.',            'You will go to university.'),
                          ('Ella irá al banco mañana.',            'She will go to the bank tomorrow.'),
                          ('Nosotros iremos al partido.',          'We will go to the game.'),
                          ('Ellos irán al concierto.',             'They will go to the concert.')],
            'imperfect': [('Yo iba a la escuela en bicicleta.',     'I used to go to school by bicycle.'),
                          ('Tú ibas al gimnasio todos los días.',   'You used to go to the gym every day.'),
                          ('Ella iba al parque con su madre.',      'She used to go to the park with her mother.'),
                          ('Nosotros íbamos de vacaciones cada año.','We used to go on vacation every year.'),
                          ('Ellos iban juntos al cine.',            'They used to go to the movies together.')],
            'subjunctive_present':
                         [('Quiero que yo vaya a España algún día.','I want to go to Spain someday.'),
                          ('Espero que tú vayas al doctor.',        'I hope you go to the doctor.'),
                          ('Es importante que ella vaya a la reunión.','It is important that she go to the meeting.'),
                          ('Dudo que nosotros vayamos al concierto.','I doubt we will go to the concert.'),
                          ('Ojalá que ellos vayan con cuidado.',    'Hopefully they go carefully.')],
        }
    },

    'tener': {
        'type': 'irregular',
        'english': 'to have',
        'forms': {
            'present':   ['tengo', 'tienes','tiene', 'tenemos','tienen'],
            'preterite': ['tuve',  'tuviste','tuvo','tuvimos','tuvieron'],
            'future':    ['tendré','tendrás','tendrá','tendremos','tendrán'],
        },
        'sentences': {
            'present':   [('Yo tengo dos hermanos.',               'I have two brothers.'),
                          ('Tú tienes mucha suerte.',              'You are very lucky.'),
                          ('Ella tiene veinte años.',              'She is twenty years old.'),
                          ('Nosotros tenemos una casa grande.',    'We have a big house.'),
                          ('Ellos tienen tres perros.',            'They have three dogs.')],
            'preterite': [('Yo tuve un examen difícil.',           'I had a difficult exam.'),
                          ('Tú tuviste un accidente pequeño.',     'You had a small accident.'),
                          ('Ella tuvo una gran idea.',             'She had a great idea.'),
                          ('Nosotros tuvimos suerte.',             'We had luck.'),
                          ('Ellos tuvieron una boda hermosa.',     'They had a beautiful wedding.')],
            'future':    [('Yo tendré tiempo el sábado.',          'I will have time on Saturday.'),
                          ('Tú tendrás la respuesta pronto.',      'You will have the answer soon.'),
                          ('Ella tendrá éxito.',                   'She will have success.'),
                          ('Nosotros tendremos una fiesta.',       'We will have a party.'),
                          ('Ellos tendrán que esperar.',           'They will have to wait.')],
            'imperfect': [('Cuando era pequeño, yo tenía un perro.','When I was little, I had a dog.'),
                          ('Tú tenías el pelo largo antes.',        'You used to have long hair.'),
                          ('Ella tenía una casa enorme.',           'She had a huge house.'),
                          ('Nosotros teníamos muchos amigos.',      'We had many friends.'),
                          ('Ellos tenían un coche antiguo.',        'They had an old car.')],
            'subjunctive_present':
                         [('Espero que yo tenga éxito.',            'I hope I succeed.'),
                          ('Quiero que tú tengas buena suerte.',    'I want you to have good luck.'),
                          ('Es importante que ella tenga el documento.','It is important that she have the document.'),
                          ('Dudo que nosotros tengamos tiempo hoy.','I doubt we will have time today.'),
                          ('Ojalá que ellos tengan un buen viaje.', 'Hopefully they have a good trip.')],
        }
    },

    'hacer': {
        'type': 'irregular',
        'english': 'to do / to make',
        'forms': {
            'present':   ['hago', 'haces','hace', 'hacemos','hacen'],
            'preterite': ['hice', 'hiciste','hizo','hicimos','hicieron'],
            'future':    ['haré', 'harás','hará', 'haremos','harán'],
        },
        'sentences': {
            'present':   [('Yo hago ejercicio cada día.',          'I exercise every day.'),
                          ('Tú haces la cena los martes.',         'You make dinner on Tuesdays.'),
                          ('Ella hace su tarea por la tarde.',     'She does her homework in the afternoon.'),
                          ('Nosotros hacemos planes para mañana.', 'We make plans for tomorrow.'),
                          ('Ellos hacen mucho ruido.',             'They make a lot of noise.')],
            'preterite': [('Yo hice un pastel ayer.',              'I made a cake yesterday.'),
                          ('Tú hiciste un buen trabajo.',          'You did a good job.'),
                          ('Ella hizo una pregunta.',              'She asked a question.'),
                          ('Nosotros hicimos los planes.',         'We made the plans.'),
                          ('Ellos hicieron una fiesta.',           'They had a party.')],
            'future':    [('Yo haré la cena esta noche.',          'I will make dinner tonight.'),
                          ('Tú harás historia.',                   'You will make history.'),
                          ('Ella hará lo correcto.',               'She will do the right thing.'),
                          ('Nosotros haremos un viaje.',           'We will take a trip.'),
                          ('Ellos harán lo posible.',              'They will do what they can.')],
            'imperfect': [('Yo hacía ejercicio cada mañana.',       'I used to exercise every morning.'),
                          ('Tú hacías ruido constantemente.',       'You used to make noise constantly.'),
                          ('Ella hacía pasteles los domingos.',     'She used to make cakes on Sundays.'),
                          ('Nosotros hacíamos viajes en verano.',   'We used to take trips in summer.'),
                          ('Ellos hacían deportes juntos.',         'They used to play sports together.')],
            'subjunctive_present':
                         [('Quiero que yo haga lo correcto.',       'I want to do the right thing.'),
                          ('Espero que tú hagas la tarea.',         'I hope you do the homework.'),
                          ('Es importante que ella haga la presentación.','It is important that she give the presentation.'),
                          ('Dudo que nosotros hagamos el viaje.',   'I doubt we will make the trip.'),
                          ('Ojalá que ellos hagan un buen trabajo.','Hopefully they do a good job.')],
        }
    },

    'querer': {
        'type': 'irregular',
        'english': 'to want / to love',
        'forms': {
            'present':   ['quiero','quieres','quiere','queremos','quieren'],
            'preterite': ['quise', 'quisiste','quiso','quisimos','quisieron'],
            'future':    ['querré','querrás','querrá','querremos','querrán'],
        },
        'sentences': {
            'present':   [('Yo quiero un café por favor.',         'I want a coffee please.'),
                          ('Tú quieres ir al cine.',               'You want to go to the movies.'),
                          ('Ella quiere a su familia.',            'She loves her family.'),
                          ('Nosotros queremos viajar.',            'We want to travel.'),
                          ('Ellos quieren aprender español.',      'They want to learn Spanish.')],
            'preterite': [('Yo quise ayudar pero no pude.',        'I wanted to help but I couldn\'t.'),
                          ('Tú quisiste comprar el libro.',        'You wanted to buy the book.'),
                          ('Ella quiso decir algo.',               'She wanted to say something.'),
                          ('Nosotros quisimos salir temprano.',    'We wanted to leave early.'),
                          ('Ellos quisieron acompañarnos.',        'They wanted to come with us.')],
            'future':    [('Yo querré verte luego.',               'I will want to see you later.'),
                          ('Tú querrás saber esto.',               'You will want to know this.'),
                          ('Ella querrá la verdad.',               'She will want the truth.'),
                          ('Nosotros querremos descansar.',        'We will want to rest.'),
                          ('Ellos querrán más detalles.',          'They will want more details.')],
        }
    },

    'poder': {
        'type': 'irregular',
        'english': 'to be able to / can',
        'forms': {
            'present':   ['puedo','puedes','puede','podemos','pueden'],
            'preterite': ['pude', 'pudiste','pudo','pudimos','pudieron'],
            'future':    ['podré','podrás','podrá','podremos','podrán'],
        },
        'sentences': {
            'present':   [('Yo puedo hablar tres idiomas.',        'I can speak three languages.'),
                          ('Tú puedes hacerlo.',                   'You can do it.'),
                          ('Ella puede llegar tarde.',             'She might arrive late.'),
                          ('Nosotros podemos ayudar.',             'We can help.'),
                          ('Ellos pueden venir mañana.',           'They can come tomorrow.')],
            'preterite': [('Yo pude terminar a tiempo.',           'I was able to finish on time.'),
                          ('Tú pudiste ver el partido.',           'You were able to watch the game.'),
                          ('Ella pudo hacer la reserva.',          'She was able to make the reservation.'),
                          ('Nosotros pudimos resolverlo.',         'We were able to solve it.'),
                          ('Ellos pudieron asistir.',              'They were able to attend.')],
            'future':    [('Yo podré ayudarte mañana.',            'I will be able to help you tomorrow.'),
                          ('Tú podrás descansar pronto.',          'You will be able to rest soon.'),
                          ('Ella podrá viajar el próximo año.',    'She will be able to travel next year.'),
                          ('Nosotros podremos vernos pronto.',     'We will be able to see each other soon.'),
                          ('Ellos podrán comprar la casa.',        'They will be able to buy the house.')],
        }
    },

    'ver': {
        'type': 'irregular',
        'english': 'to see',
        'forms': {
            'present':   ['veo',  'ves',  've',   'vemos', 'ven'],
            'preterite': ['vi',   'viste','vio',  'vimos', 'vieron'],
            'future':    ['veré', 'verás','verá', 'veremos','verán'],
        },
        'sentences': {
            'present':   [('Yo veo la televisión por la noche.',   'I watch television at night.'),
                          ('Tú ves muchas películas.',             'You watch many movies.'),
                          ('Ella ve a sus amigos los domingos.',   'She sees her friends on Sundays.'),
                          ('Nosotros vemos las estrellas.',        'We see the stars.'),
                          ('Ellos ven a sus abuelos.',             'They see their grandparents.')],
            'preterite': [('Yo vi un pájaro en el árbol.',         'I saw a bird in the tree.'),
                          ('Tú viste la película anoche.',         'You watched the movie last night.'),
                          ('Ella vio a su hermana.',               'She saw her sister.'),
                          ('Nosotros vimos un eclipse.',           'We saw an eclipse.'),
                          ('Ellos vieron al doctor.',              'They saw the doctor.')],
            'future':    [('Yo veré la nueva exposición.',         'I will see the new exhibition.'),
                          ('Tú verás el resultado pronto.',        'You will see the result soon.'),
                          ('Ella verá a su novio mañana.',         'She will see her boyfriend tomorrow.'),
                          ('Nosotros veremos qué pasa.',           'We will see what happens.'),
                          ('Ellos verán la verdad.',               'They will see the truth.')],
        }
    },

# ═══════════════════════════════════════════════════════════════════
# Phase 3b additions — 19 more high-frequency verbs (50 total)
# Imperfect & subjunctive_present sentences are auto-generated.
# ═══════════════════════════════════════════════════════════════════

    'decir': {
        'type': 'irregular',
        'english': 'to say / to tell',
        'forms': {
            'present':   ['digo',   'dices',   'dice',   'decimos', 'dicen'],
            'preterite': ['dije',   'dijiste', 'dijo',   'dijimos', 'dijeron'],
            'future':    ['diré',   'dirás',   'dirá',   'diremos', 'dirán'],
        },
        'sentences': {
            'present':   [('Yo digo la verdad siempre.',           'I always tell the truth.'),
                          ('Tú dices muchas cosas interesantes.',  'You say many interesting things.'),
                          ('Ella dice que viene a las ocho.',      'She says she\'s coming at eight.'),
                          ('Nosotros decimos lo que pensamos.',    'We say what we think.'),
                          ('Ellos dicen que el examen es fácil.',  'They say the exam is easy.')],
            'preterite': [('Yo dije adiós a mis amigos.',          'I said goodbye to my friends.'),
                          ('Tú dijiste algo importante.',          'You said something important.'),
                          ('Ella dijo la respuesta correcta.',     'She said the correct answer.'),
                          ('Nosotros dijimos la verdad al juez.',  'We told the truth to the judge.'),
                          ('Ellos dijeron muchas mentiras.',       'They told many lies.')],
            'future':    [('Yo diré lo que pienso.',               'I will say what I think.'),
                          ('Tú dirás la respuesta correcta.',      'You will say the right answer.'),
                          ('Ella dirá su opinión.',                'She will give her opinion.'),
                          ('Nosotros diremos sí o no.',            'We will say yes or no.'),
                          ('Ellos dirán algo importante.',         'They will say something important.')],
        }
    },

    'dar': {
        'type': 'irregular',
        'english': 'to give',
        'forms': {
            'present':   ['doy',    'das',     'da',     'damos',  'dan'],
            'preterite': ['di',     'diste',   'dio',    'dimos',  'dieron'],
            'future':    ['daré',   'darás',   'dará',   'daremos','darán'],
        },
        'sentences': {
            'present':   [('Yo doy regalos en Navidad.',           'I give gifts at Christmas.'),
                          ('Tú das buenos consejos.',              'You give good advice.'),
                          ('Ella da clases de piano.',             'She gives piano lessons.'),
                          ('Nosotros damos dinero a la caridad.',  'We give money to charity.'),
                          ('Ellos dan flores a su madre.',         'They give flowers to their mother.')],
            'preterite': [('Yo di mi opinión en la reunión.',      'I gave my opinion at the meeting.'),
                          ('Tú diste un buen discurso.',           'You gave a good speech.'),
                          ('Ella dio una vuelta por el parque.',   'She took a walk in the park.'),
                          ('Nosotros dimos las gracias al chef.',  'We thanked the chef.'),
                          ('Ellos dieron muchos regalos.',         'They gave many gifts.')],
            'future':    [('Yo daré una fiesta el sábado.',        'I will throw a party on Saturday.'),
                          ('Tú darás el examen mañana.',           'You will take the exam tomorrow.'),
                          ('Ella dará una clase nueva.',           'She will give a new class.'),
                          ('Nosotros daremos lo mejor.',           'We will give our best.'),
                          ('Ellos darán las llaves al portero.',   'They will give the keys to the doorman.')],
        }
    },

    'saber': {
        'type': 'irregular',
        'english': 'to know (a fact)',
        'forms': {
            'present':   ['sé',     'sabes',   'sabe',   'sabemos','saben'],
            'preterite': ['supe',   'supiste', 'supo',   'supimos','supieron'],
            'future':    ['sabré',  'sabrás',  'sabrá',  'sabremos','sabrán'],
        },
        'sentences': {
            'present':   [('Yo sé hablar tres idiomas.',           'I know how to speak three languages.'),
                          ('Tú sabes la respuesta.',               'You know the answer.'),
                          ('Ella sabe cocinar muy bien.',          'She knows how to cook very well.'),
                          ('Nosotros sabemos el camino.',          'We know the way.'),
                          ('Ellos saben mucho de historia.',       'They know a lot about history.')],
            'preterite': [('Yo supe la noticia ayer.',             'I learned the news yesterday.'),
                          ('Tú supiste qué hacer.',                'You knew what to do.'),
                          ('Ella supo la verdad anoche.',          'She found out the truth last night.'),
                          ('Nosotros supimos el resultado.',       'We found out the result.'),
                          ('Ellos supieron del accidente.',        'They learned about the accident.')],
            'future':    [('Yo sabré la verdad pronto.',           'I will know the truth soon.'),
                          ('Tú sabrás cómo resolverlo.',           'You will know how to solve it.'),
                          ('Ella sabrá qué decir.',                'She will know what to say.'),
                          ('Nosotros sabremos los resultados.',    'We will know the results.'),
                          ('Ellos sabrán la decisión final.',      'They will know the final decision.')],
        }
    },

    'conocer': {
        'type': 'irregular',
        'english': 'to know (a person/place)',
        'forms': {
            'present':   ['conozco', 'conoces', 'conoce', 'conocemos','conocen'],
            'preterite': ['conocí',  'conociste','conoció','conocimos','conocieron'],
            'future':    ['conoceré','conocerás','conocerá','conoceremos','conocerán'],
        },
        'sentences': {
            'present':   [('Yo conozco a tu hermana.',             'I know your sister.'),
                          ('Tú conoces la ciudad muy bien.',       'You know the city very well.'),
                          ('Ella conoce a muchas personas.',       'She knows many people.'),
                          ('Nosotros conocemos un buen restaurante.','We know a good restaurant.'),
                          ('Ellos conocen ese país.',              'They know that country.')],
            'preterite': [('Yo conocí a mi esposa en la universidad.','I met my wife at university.'),
                          ('Tú conociste a mi familia ayer.',      'You met my family yesterday.'),
                          ('Ella conoció Madrid el año pasado.',   'She visited Madrid last year.'),
                          ('Nosotros conocimos al nuevo profesor.','We met the new teacher.'),
                          ('Ellos conocieron París en verano.',    'They visited Paris in summer.')],
            'future':    [('Yo conoceré a tu novio mañana.',       'I will meet your boyfriend tomorrow.'),
                          ('Tú conocerás un mundo nuevo.',         'You will know a new world.'),
                          ('Ella conocerá al jefe en la reunión.', 'She will meet the boss at the meeting.'),
                          ('Nosotros conoceremos la verdad.',      'We will learn the truth.'),
                          ('Ellos conocerán Barcelona pronto.',    'They will visit Barcelona soon.')],
        }
    },

    'venir': {
        'type': 'irregular',
        'english': 'to come',
        'forms': {
            'present':   ['vengo',  'vienes',  'viene',  'venimos','vienen'],
            'preterite': ['vine',   'viniste', 'vino',   'vinimos','vinieron'],
            'future':    ['vendré', 'vendrás', 'vendrá', 'vendremos','vendrán'],
        },
        'sentences': {
            'present':   [('Yo vengo de Estados Unidos.',          'I come from the United States.'),
                          ('Tú vienes a casa después del trabajo.','You come home after work.'),
                          ('Ella viene a vernos cada semana.',     'She comes to see us every week.'),
                          ('Nosotros venimos en autobús.',         'We come by bus.'),
                          ('Ellos vienen de una familia grande.',  'They come from a big family.')],
            'preterite': [('Yo vine en avión desde Nueva York.',   'I came by plane from New York.'),
                          ('Tú viniste a la fiesta anoche.',       'You came to the party last night.'),
                          ('Ella vino sin avisar.',                'She came without warning.'),
                          ('Nosotros vinimos juntos.',             'We came together.'),
                          ('Ellos vinieron tarde a la reunión.',   'They came late to the meeting.')],
            'future':    [('Yo vendré temprano mañana.',           'I will come early tomorrow.'),
                          ('Tú vendrás con nosotros al cine.',     'You will come with us to the movies.'),
                          ('Ella vendrá a la boda.',               'She will come to the wedding.'),
                          ('Nosotros vendremos en tren.',          'We will come by train.'),
                          ('Ellos vendrán al concierto.',          'They will come to the concert.')],
        }
    },

    'dormir': {
        'type': 'stem-o-ue',
        'english': 'to sleep',
        'forms': {
            'present':   ['duermo', 'duermes', 'duerme', 'dormimos','duermen'],
            'preterite': ['dormí',  'dormiste','durmió', 'dormimos','durmieron'],
            'future':    ['dormiré','dormirás','dormirá','dormiremos','dormirán'],
        },
        'sentences': {
            'present':   [('Yo duermo ocho horas cada noche.',     'I sleep eight hours every night.'),
                          ('Tú duermes muy poco.',                 'You sleep very little.'),
                          ('Ella duerme con su gato.',             'She sleeps with her cat.'),
                          ('Nosotros dormimos en el hotel.',       'We sleep at the hotel.'),
                          ('Ellos duermen toda la mañana.',        'They sleep all morning.')],
            'preterite': [('Yo dormí muy bien anoche.',            'I slept very well last night.'),
                          ('Tú dormiste hasta las diez.',          'You slept until ten.'),
                          ('Ella durmió en el sofá.',              'She slept on the couch.'),
                          ('Nosotros dormimos en la playa.',       'We slept on the beach.'),
                          ('Ellos durmieron poco.',                'They slept little.')],
            'future':    [('Yo dormiré temprano hoy.',             'I will sleep early today.'),
                          ('Tú dormirás mejor con esta almohada.', 'You will sleep better with this pillow.'),
                          ('Ella dormirá en el cuarto de invitados.','She will sleep in the guest room.'),
                          ('Nosotros dormiremos en la tienda.',    'We will sleep in the tent.'),
                          ('Ellos dormirán todo el día.',          'They will sleep all day.')],
        }
    },

    'jugar': {
        'type': 'stem-u-ue',
        'english': 'to play',
        'forms': {
            'present':   ['juego',  'juegas',  'juega',  'jugamos','juegan'],
            'preterite': ['jugué',  'jugaste', 'jugó',   'jugamos','jugaron'],
            'future':    ['jugaré', 'jugarás', 'jugará', 'jugaremos','jugarán'],
        },
        'sentences': {
            'present':   [('Yo juego al fútbol los sábados.',      'I play soccer on Saturdays.'),
                          ('Tú juegas muy bien al tenis.',         'You play tennis very well.'),
                          ('Ella juega con sus muñecas.',          'She plays with her dolls.'),
                          ('Nosotros jugamos a las cartas.',       'We play cards.'),
                          ('Ellos juegan en el parque.',           'They play in the park.')],
            'preterite': [('Yo jugué al ajedrez con mi abuelo.',   'I played chess with my grandfather.'),
                          ('Tú jugaste un partido fantástico.',    'You played a fantastic game.'),
                          ('Ella jugó en el equipo nacional.',     'She played on the national team.'),
                          ('Nosotros jugamos toda la tarde.',      'We played all afternoon.'),
                          ('Ellos jugaron mejor que nunca.',       'They played better than ever.')],
            'future':    [('Yo jugaré al baloncesto mañana.',      'I will play basketball tomorrow.'),
                          ('Tú jugarás en el torneo.',             'You will play in the tournament.'),
                          ('Ella jugará el papel principal.',      'She will play the main role.'),
                          ('Nosotros jugaremos juntos.',           'We will play together.'),
                          ('Ellos jugarán contra el campeón.',     'They will play against the champion.')],
        }
    },

    'pensar': {
        'type': 'stem-e-ie',
        'english': 'to think',
        'forms': {
            'present':   ['pienso', 'piensas', 'piensa', 'pensamos','piensan'],
            'preterite': ['pensé',  'pensaste','pensó',  'pensamos','pensaron'],
            'future':    ['pensaré','pensarás','pensará','pensaremos','pensarán'],
        },
        'sentences': {
            'present':   [('Yo pienso mucho en el futuro.',        'I think a lot about the future.'),
                          ('Tú piensas demasiado.',                'You think too much.'),
                          ('Ella piensa en su familia.',           'She thinks about her family.'),
                          ('Nosotros pensamos lo mismo.',          'We think the same thing.'),
                          ('Ellos piensan que es injusto.',        'They think it\'s unfair.')],
            'preterite': [('Yo pensé en ti todo el día.',          'I thought about you all day.'),
                          ('Tú pensaste rápido.',                  'You thought quickly.'),
                          ('Ella pensó en la solución.',           'She thought of the solution.'),
                          ('Nosotros pensamos mucho antes de decidir.','We thought a lot before deciding.'),
                          ('Ellos pensaron que era una broma.',    'They thought it was a joke.')],
            'future':    [('Yo pensaré en tu propuesta.',          'I will think about your proposal.'),
                          ('Tú pensarás mejor mañana.',            'You will think better tomorrow.'),
                          ('Ella pensará en la respuesta.',        'She will think about the answer.'),
                          ('Nosotros pensaremos en el plan.',      'We will think about the plan.'),
                          ('Ellos pensarán antes de actuar.',      'They will think before acting.')],
        }
    },

    'creer': {
        'type': 'irregular',
        'english': 'to believe / to think',
        'forms': {
            'present':   ['creo',   'crees',   'cree',   'creemos','creen'],
            'preterite': ['creí',   'creíste', 'creyó',  'creímos','creyeron'],
            'future':    ['creeré', 'creerás', 'creerá', 'creeremos','creerán'],
        },
        'sentences': {
            'present':   [('Yo creo en la magia.',                 'I believe in magic.'),
                          ('Tú crees todo lo que ves.',            'You believe everything you see.'),
                          ('Ella cree en sus sueños.',             'She believes in her dreams.'),
                          ('Nosotros creemos en el amor.',         'We believe in love.'),
                          ('Ellos creen en Dios.',                 'They believe in God.')],
            'preterite': [('Yo creí su historia.',                 'I believed her story.'),
                          ('Tú creíste demasiado pronto.',         'You believed too soon.'),
                          ('Ella creyó en mí desde el principio.', 'She believed in me from the start.'),
                          ('Nosotros creímos la mentira.',         'We believed the lie.'),
                          ('Ellos creyeron en el milagro.',        'They believed in the miracle.')],
            'future':    [('Yo creeré cuando lo vea.',             'I will believe when I see it.'),
                          ('Tú creerás en ti mismo algún día.',    'You will believe in yourself someday.'),
                          ('Ella creerá la verdad.',               'She will believe the truth.'),
                          ('Nosotros creeremos en el plan.',       'We will believe in the plan.'),
                          ('Ellos creerán en la causa.',           'They will believe in the cause.')],
        }
    },

    'entender': {
        'type': 'stem-e-ie',
        'english': 'to understand',
        'forms': {
            'present':   ['entiendo','entiendes','entiende','entendemos','entienden'],
            'preterite': ['entendí','entendiste','entendió','entendimos','entendieron'],
            'future':    ['entenderé','entenderás','entenderá','entenderemos','entenderán'],
        },
        'sentences': {
            'present':   [('Yo entiendo español perfectamente.',   'I understand Spanish perfectly.'),
                          ('Tú entiendes la situación.',           'You understand the situation.'),
                          ('Ella entiende cómo funciona.',         'She understands how it works.'),
                          ('Nosotros entendemos el problema.',     'We understand the problem.'),
                          ('Ellos entienden la lección.',          'They understand the lesson.')],
            'preterite': [('Yo entendí la pregunta.',              'I understood the question.'),
                          ('Tú entendiste rápido.',                'You understood quickly.'),
                          ('Ella entendió la indirecta.',          'She caught the hint.'),
                          ('Nosotros entendimos su preocupación.', 'We understood her concern.'),
                          ('Ellos entendieron al final.',          'They understood in the end.')],
            'future':    [('Yo entenderé con el tiempo.',          'I will understand with time.'),
                          ('Tú entenderás cuando seas mayor.',     'You will understand when you\'re older.'),
                          ('Ella entenderá tu punto.',             'She will understand your point.'),
                          ('Nosotros entenderemos algún día.',     'We will understand someday.'),
                          ('Ellos entenderán el motivo.',          'They will understand the reason.')],
        }
    },

    'llegar': {
        'type': 'irregular',
        'english': 'to arrive',
        'forms': {
            'present':   ['llego',  'llegas',  'llega',  'llegamos','llegan'],
            'preterite': ['llegué', 'llegaste','llegó',  'llegamos','llegaron'],
            'future':    ['llegaré','llegarás','llegará','llegaremos','llegarán'],
        },
        'sentences': {
            'present':   [('Yo llego al trabajo a las nueve.',     'I arrive at work at nine.'),
                          ('Tú llegas siempre tarde.',             'You always arrive late.'),
                          ('Ella llega en tren.',                  'She arrives by train.'),
                          ('Nosotros llegamos a tiempo.',          'We arrive on time.'),
                          ('Ellos llegan del aeropuerto.',         'They arrive from the airport.')],
            'preterite': [('Yo llegué muy temprano hoy.',          'I arrived very early today.'),
                          ('Tú llegaste justo a tiempo.',          'You arrived just in time.'),
                          ('Ella llegó con un regalo.',            'She arrived with a gift.'),
                          ('Nosotros llegamos sin problemas.',     'We arrived without problems.'),
                          ('Ellos llegaron al hotel anoche.',      'They arrived at the hotel last night.')],
            'future':    [('Yo llegaré antes del mediodía.',       'I will arrive before noon.'),
                          ('Tú llegarás cansado del viaje.',       'You will arrive tired from the trip.'),
                          ('Ella llegará el viernes.',             'She will arrive on Friday.'),
                          ('Nosotros llegaremos en una hora.',     'We will arrive in an hour.'),
                          ('Ellos llegarán por la tarde.',         'They will arrive in the afternoon.')],
        }
    },

    'salir': {
        'type': 'irregular',
        'english': 'to leave / to go out',
        'forms': {
            'present':   ['salgo',  'sales',   'sale',   'salimos','salen'],
            'preterite': ['salí',   'saliste', 'salió',  'salimos','salieron'],
            'future':    ['saldré', 'saldrás', 'saldrá', 'saldremos','saldrán'],
        },
        'sentences': {
            'present':   [('Yo salgo de casa a las ocho.',         'I leave home at eight.'),
                          ('Tú sales con tus amigos los viernes.', 'You go out with your friends on Fridays.'),
                          ('Ella sale del trabajo a las cinco.',   'She leaves work at five.'),
                          ('Nosotros salimos a cenar fuera.',      'We go out to dinner.'),
                          ('Ellos salen del cine muy tarde.',      'They leave the cinema very late.')],
            'preterite': [('Yo salí temprano ayer.',               'I left early yesterday.'),
                          ('Tú saliste sin chaqueta.',             'You went out without a jacket.'),
                          ('Ella salió a las seis.',               'She left at six.'),
                          ('Nosotros salimos del bar.',            'We left the bar.'),
                          ('Ellos salieron sin decir nada.',       'They left without saying anything.')],
            'future':    [('Yo saldré pronto.',                    'I will leave soon.'),
                          ('Tú saldrás bien en el examen.',        'You will do well on the exam.'),
                          ('Ella saldrá de la oficina a las seis.','She will leave the office at six.'),
                          ('Nosotros saldremos juntos.',           'We will go out together.'),
                          ('Ellos saldrán de viaje mañana.',       'They will leave on a trip tomorrow.')],
        }
    },

    'esperar': {
        'type': 'regular',
        'english': 'to wait / to hope',
        'sentences': {
            'present':   [('Yo espero el autobús.',                'I wait for the bus.'),
                          ('Tú esperas demasiado.',                'You wait too much.'),
                          ('Ella espera buenas noticias.',         'She hopes for good news.'),
                          ('Nosotros esperamos al doctor.',        'We wait for the doctor.'),
                          ('Ellos esperan el tren.',               'They wait for the train.')],
            'preterite': [('Yo esperé una hora.',                  'I waited an hour.'),
                          ('Tú esperaste pacientemente.',          'You waited patiently.'),
                          ('Ella esperó toda la tarde.',           'She waited all afternoon.'),
                          ('Nosotros esperamos en la cola.',       'We waited in line.'),
                          ('Ellos esperaron el resultado.',        'They waited for the result.')],
            'future':    [('Yo esperaré tu llamada.',              'I will wait for your call.'),
                          ('Tú esperarás tu turno.',               'You will wait your turn.'),
                          ('Ella esperará a su esposo.',           'She will wait for her husband.'),
                          ('Nosotros esperaremos noticias.',       'We will wait for news.'),
                          ('Ellos esperarán hasta mañana.',        'They will wait until tomorrow.')],
        }
    },

    'pagar': {
        'type': 'irregular',
        'english': 'to pay',
        'forms': {
            'present':   ['pago',   'pagas',   'paga',   'pagamos','pagan'],
            'preterite': ['pagué',  'pagaste', 'pagó',   'pagamos','pagaron'],
            'future':    ['pagaré', 'pagarás', 'pagará', 'pagaremos','pagarán'],
        },
        'sentences': {
            'present':   [('Yo pago la cuenta hoy.',               'I pay the bill today.'),
                          ('Tú pagas mucho de alquiler.',          'You pay a lot of rent.'),
                          ('Ella paga con tarjeta.',               'She pays with a card.'),
                          ('Nosotros pagamos en efectivo.',        'We pay in cash.'),
                          ('Ellos pagan los impuestos.',           'They pay the taxes.')],
            'preterite': [('Yo pagué la cena.',                    'I paid for dinner.'),
                          ('Tú pagaste poco por eso.',             'You paid little for that.'),
                          ('Ella pagó el doble.',                  'She paid double.'),
                          ('Nosotros pagamos al camarero.',        'We paid the waiter.'),
                          ('Ellos pagaron las entradas.',          'They paid for the tickets.')],
            'future':    [('Yo pagaré mañana.',                    'I will pay tomorrow.'),
                          ('Tú pagarás el viaje.',                 'You will pay for the trip.'),
                          ('Ella pagará en plazos.',               'She will pay in installments.'),
                          ('Nosotros pagaremos la deuda.',         'We will pay the debt.'),
                          ('Ellos pagarán el daño.',               'They will pay for the damage.')],
        }
    },

    'llevar': {
        'type': 'regular',
        'english': 'to carry / to wear',
        'sentences': {
            'present':   [('Yo llevo mi mochila a clase.',         'I carry my backpack to class.'),
                          ('Tú llevas una camisa blanca.',         'You are wearing a white shirt.'),
                          ('Ella lleva el bebé en brazos.',        'She carries the baby in her arms.'),
                          ('Nosotros llevamos comida al picnic.',  'We bring food to the picnic.'),
                          ('Ellos llevan regalos a la fiesta.',    'They bring gifts to the party.')],
            'preterite': [('Yo llevé la maleta al hotel.',         'I took the suitcase to the hotel.'),
                          ('Tú llevaste a los niños al parque.',   'You took the kids to the park.'),
                          ('Ella llevó flores al hospital.',       'She brought flowers to the hospital.'),
                          ('Nosotros llevamos vino a la cena.',    'We brought wine to dinner.'),
                          ('Ellos llevaron la torta a la fiesta.', 'They brought the cake to the party.')],
            'future':    [('Yo llevaré paraguas por si llueve.',   'I will bring an umbrella in case it rains.'),
                          ('Tú llevarás el almuerzo al trabajo.',  'You will bring lunch to work.'),
                          ('Ella llevará un vestido nuevo.',       'She will wear a new dress.'),
                          ('Nosotros llevaremos el coche.',        'We will take the car.'),
                          ('Ellos llevarán a sus hijos al cine.',  'They will take their kids to the movies.')],
        }
    },

    'encontrar': {
        'type': 'stem-o-ue',
        'english': 'to find',
        'forms': {
            'present':   ['encuentro','encuentras','encuentra','encontramos','encuentran'],
            'preterite': ['encontré','encontraste','encontró','encontramos','encontraron'],
            'future':    ['encontraré','encontrarás','encontrará','encontraremos','encontrarán'],
        },
        'sentences': {
            'present':   [('Yo encuentro mis llaves siempre.',     'I always find my keys.'),
                          ('Tú encuentras buenas ofertas.',        'You find good deals.'),
                          ('Ella encuentra paz en la naturaleza.', 'She finds peace in nature.'),
                          ('Nosotros encontramos una solución.',   'We find a solution.'),
                          ('Ellos encuentran trabajos rápidamente.','They find jobs quickly.')],
            'preterite': [('Yo encontré dinero en la calle.',      'I found money on the street.'),
                          ('Tú encontraste el libro perdido.',     'You found the lost book.'),
                          ('Ella encontró su anillo.',             'She found her ring.'),
                          ('Nosotros encontramos un buen hotel.',  'We found a good hotel.'),
                          ('Ellos encontraron el camino correcto.','They found the right path.')],
            'future':    [('Yo encontraré la respuesta.',          'I will find the answer.'),
                          ('Tú encontrarás el amor.',              'You will find love.'),
                          ('Ella encontrará un nuevo apartamento.','She will find a new apartment.'),
                          ('Nosotros encontraremos la verdad.',    'We will find the truth.'),
                          ('Ellos encontrarán una manera.',        'They will find a way.')],
        }
    },

    'volver': {
        'type': 'stem-o-ue',
        'english': 'to return / to come back',
        'forms': {
            'present':   ['vuelvo', 'vuelves', 'vuelve', 'volvemos','vuelven'],
            'preterite': ['volví',  'volviste','volvió', 'volvimos','volvieron'],
            'future':    ['volveré','volverás','volverá','volveremos','volverán'],
        },
        'sentences': {
            'present':   [('Yo vuelvo a casa a las seis.',         'I return home at six.'),
                          ('Tú vuelves siempre tarde.',            'You always come back late.'),
                          ('Ella vuelve del trabajo cansada.',     'She comes back from work tired.'),
                          ('Nosotros volvemos en autobús.',        'We return by bus.'),
                          ('Ellos vuelven a verla cada año.',      'They return to see her every year.')],
            'preterite': [('Yo volví a Madrid el año pasado.',     'I returned to Madrid last year.'),
                          ('Tú volviste sano y salvo.',            'You came back safe and sound.'),
                          ('Ella volvió a llamarme.',              'She called me back.'),
                          ('Nosotros volvimos por el mismo camino.','We returned by the same path.'),
                          ('Ellos volvieron de las vacaciones.',   'They returned from vacation.')],
            'future':    [('Yo volveré mañana por la mañana.',     'I will return tomorrow morning.'),
                          ('Tú volverás a intentarlo.',            'You will try again.'),
                          ('Ella volverá a su país.',              'She will return to her country.'),
                          ('Nosotros volveremos pronto.',          'We will return soon.'),
                          ('Ellos volverán a ganar este año.',     'They will win again this year.')],
        }
    },

    'empezar': {
        'type': 'stem-e-ie',
        'english': 'to begin / to start',
        'forms': {
            'present':   ['empiezo','empiezas','empieza','empezamos','empiezan'],
            'preterite': ['empecé', 'empezaste','empezó','empezamos','empezaron'],
            'future':    ['empezaré','empezarás','empezará','empezaremos','empezarán'],
        },
        'sentences': {
            'present':   [('Yo empiezo a trabajar a las ocho.',    'I start working at eight.'),
                          ('Tú empiezas con buen ánimo.',          'You start with good spirits.'),
                          ('Ella empieza el curso en otoño.',      'She starts the course in fall.'),
                          ('Nosotros empezamos a las nueve.',      'We start at nine.'),
                          ('Ellos empiezan el proyecto hoy.',      'They start the project today.')],
            'preterite': [('Yo empecé el libro anoche.',           'I started the book last night.'),
                          ('Tú empezaste muy temprano.',           'You started very early.'),
                          ('Ella empezó a llorar.',                'She started to cry.'),
                          ('Nosotros empezamos a estudiar.',       'We started studying.'),
                          ('Ellos empezaron la reunión a tiempo.', 'They started the meeting on time.')],
            'future':    [('Yo empezaré una dieta nueva.',         'I will start a new diet.'),
                          ('Tú empezarás de cero.',                'You will start from scratch.'),
                          ('Ella empezará a estudiar pronto.',     'She will start studying soon.'),
                          ('Nosotros empezaremos en enero.',       'We will start in January.'),
                          ('Ellos empezarán la obra mañana.',      'They will start the work tomorrow.')],
        }
    },

    'perder': {
        'type': 'stem-e-ie',
        'english': 'to lose',
        'forms': {
            'present':   ['pierdo', 'pierdes', 'pierde', 'perdemos','pierden'],
            'preterite': ['perdí',  'perdiste','perdió', 'perdimos','perdieron'],
            'future':    ['perderé','perderás','perderá','perderemos','perderán'],
        },
        'sentences': {
            'present':   [('Yo pierdo las llaves a menudo.',       'I often lose my keys.'),
                          ('Tú pierdes la paciencia rápido.',      'You lose patience quickly.'),
                          ('Ella pierde peso poco a poco.',        'She is losing weight gradually.'),
                          ('Nosotros perdemos tiempo.',            'We are wasting time.'),
                          ('Ellos pierden el partido.',            'They are losing the match.')],
            'preterite': [('Yo perdí mi cartera en el bar.',       'I lost my wallet at the bar.'),
                          ('Tú perdiste tu oportunidad.',          'You lost your chance.'),
                          ('Ella perdió las llaves del coche.',    'She lost the car keys.'),
                          ('Nosotros perdimos el vuelo.',          'We missed the flight.'),
                          ('Ellos perdieron la final.',            'They lost the final.')],
            'future':    [('Yo perderé peso este verano.',         'I will lose weight this summer.'),
                          ('Tú perderás la apuesta.',              'You will lose the bet.'),
                          ('Ella perderá el tren.',                'She will miss the train.'),
                          ('Nosotros perderemos si no jugamos bien.','We will lose if we don\'t play well.'),
                          ('Ellos perderán esta vez.',             'They will lose this time.')],
        }
    },

# ═══════════════════════════════════════════════════════════════════
# Round 2 additions — 25 more verbs (75 total)
# Forms hand-declared (especially for irregulars and spelling-change verbs).
# Sentences auto-generated by augment_sentences.py for all 5 tenses.
# ═══════════════════════════════════════════════════════════════════

    'buscar':  {'type':'irregular','english':'to look for','forms':{
        'present':  ['busco','buscas','busca','buscamos','buscan'],
        'preterite':['busqué','buscaste','buscó','buscamos','buscaron'],
        'future':   ['buscaré','buscarás','buscará','buscaremos','buscarán'],
    }, 'sentences':{}},

    'tomar':   {'type':'regular','english':'to take / to drink', 'sentences':{}},
    'llamar':  {'type':'regular','english':'to call',            'sentences':{}},
    'mostrar': {'type':'stem-o-ue','english':'to show','forms':{
        'present':  ['muestro','muestras','muestra','mostramos','muestran'],
        'preterite':['mostré','mostraste','mostró','mostramos','mostraron'],
        'future':   ['mostraré','mostrarás','mostrará','mostraremos','mostrarán'],
    }, 'sentences':{}},

    'preguntar':{'type':'regular','english':'to ask',           'sentences':{}},
    'contestar':{'type':'regular','english':'to answer',        'sentences':{}},
    'cocinar': {'type':'regular','english':'to cook',           'sentences':{}},
    'limpiar': {'type':'regular','english':'to clean',          'sentences':{}},
    'enseñar': {'type':'regular','english':'to teach',          'sentences':{}},
    'cambiar': {'type':'regular','english':'to change',         'sentences':{}},
    'olvidar': {'type':'regular','english':'to forget',         'sentences':{}},
    'amar':    {'type':'regular','english':'to love',           'sentences':{}},
    'usar':    {'type':'regular','english':'to use',            'sentences':{}},
    'gritar':  {'type':'regular','english':'to shout',          'sentences':{}},
    'llorar':  {'type':'regular','english':'to cry',            'sentences':{}},
    'viajar':  {'type':'regular','english':'to travel',         'sentences':{}},
    'gustar':  {'type':'regular','english':'to like',           'sentences':{}},
    'levantar':{'type':'regular','english':'to lift / to raise','sentences':{}},

    'pedir':  {'type':'stem-e-i','english':'to ask for / to request','forms':{
        'present':  ['pido','pides','pide','pedimos','piden'],
        'preterite':['pedí','pediste','pidió','pedimos','pidieron'],
        'future':   ['pediré','pedirás','pedirá','pediremos','pedirán'],
    }, 'sentences':{}},

    'sentir': {'type':'stem-e-ie','english':'to feel','forms':{
        'present':  ['siento','sientes','siente','sentimos','sienten'],
        'preterite':['sentí','sentiste','sintió','sentimos','sintieron'],
        'future':   ['sentiré','sentirás','sentirá','sentiremos','sentirán'],
    }, 'sentences':{}},

    'cerrar': {'type':'stem-e-ie','english':'to close','forms':{
        'present':  ['cierro','cierras','cierra','cerramos','cierran'],
        'preterite':['cerré','cerraste','cerró','cerramos','cerraron'],
        'future':   ['cerraré','cerrarás','cerrará','cerraremos','cerrarán'],
    }, 'sentences':{}},

    'recordar':{'type':'stem-o-ue','english':'to remember','forms':{
        'present':  ['recuerdo','recuerdas','recuerda','recordamos','recuerdan'],
        'preterite':['recordé','recordaste','recordó','recordamos','recordaron'],
        'future':   ['recordaré','recordarás','recordará','recordaremos','recordarán'],
    }, 'sentences':{}},

    'tocar':  {'type':'irregular','english':'to touch / to play (instrument)','forms':{
        'present':  ['toco','tocas','toca','tocamos','tocan'],
        'preterite':['toqué','tocaste','tocó','tocamos','tocaron'],
        'future':   ['tocaré','tocarás','tocará','tocaremos','tocarán'],
    }, 'sentences':{}},

    'morir':  {'type':'stem-o-ue','english':'to die','forms':{
        'present':  ['muero','mueres','muere','morimos','mueren'],
        'preterite':['morí','moriste','murió','morimos','murieron'],
        'future':   ['moriré','morirás','morirá','moriremos','morirán'],
    }, 'sentences':{}},

    'traer':  {'type':'irregular','english':'to bring','forms':{
        'present':  ['traigo','traes','trae','traemos','traen'],
        'preterite':['traje','trajiste','trajo','trajimos','trajeron'],
        'future':   ['traeré','traerás','traerá','traeremos','traerán'],
    }, 'sentences':{}},

    'oír':    {'type':'irregular','english':'to hear','forms':{
        'present':  ['oigo','oyes','oye','oímos','oyen'],
        'preterite':['oí','oíste','oyó','oímos','oyeron'],
        'future':   ['oiré','oirás','oirá','oiremos','oirán'],
        'imperfect':['oía','oías','oía','oíamos','oían'],
    }, 'sentences':{}},

}
