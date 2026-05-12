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

TENSES = ['present', 'preterite', 'future']
TENSE_LABEL = {
    'present':   'Present',
    'preterite': 'Preterite (simple past)',
    'future':    'Future',
}
TENSE_DESCRIPTION = {
    'present':   'Used for current actions, habits, and general truths.',
    'preterite': 'Used for completed actions in the past — events with a clear end.',
    'future':    'Used for actions that will happen.',
}

# Regular endings — appended to the verb stem (verb minus -ar/-er/-ir)
REGULAR_ENDINGS = {
    'ar': {
        'present':   ['o',    'as',    'a',    'amos',   'an'],
        'preterite': ['é',    'aste',  'ó',    'amos',   'aron'],
        'future':    ['aré',  'arás',  'ará',  'aremos', 'arán'],
    },
    'er': {
        'present':   ['o',    'es',    'e',    'emos',   'en'],
        'preterite': ['í',    'iste',  'ió',   'imos',   'ieron'],
        'future':    ['eré',  'erás',  'erá',  'eremos', 'erán'],
    },
    'ir': {
        'present':   ['o',    'es',    'e',    'imos',   'en'],
        'preterite': ['í',    'iste',  'ió',   'imos',   'ieron'],
        'future':    ['iré',  'irás',  'irá',  'iremos', 'irán'],
    },
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

}
