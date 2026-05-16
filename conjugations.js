// ──────────────────────────────────────────────────────────
// Spanish Tutor — verb conjugation tables (auto-generated)
// Source: _tools/conjugations.py — edit there, not here.
// ──────────────────────────────────────────────────────────

const PERSONS = ["yo", "tú", "él/ella/usted", "nosotros", "ellos/ustedes"];
const PERSON_EN = ["I", "You", "She", "We", "They"];
const TENSE_ORDER = ["present", "preterite", "future", "imperfect", "subjunctive_present"];
const TENSES_DEFAULT_UNLOCKED = ["present", "preterite", "future"];
const TENSES_ADVANCED = ["imperfect", "subjunctive_present"];

const CONJUGATIONS = [
  {
    "infinitive": "hablar",
    "english": "to speak",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "hablo",
          "hablas",
          "habla",
          "hablamos",
          "hablan"
        ],
        "sentences": [
          {
            "es": "Yo hablo español todos los días.",
            "en": "I speak Spanish every day."
          },
          {
            "es": "Tú hablas muy rápido.",
            "en": "You speak very fast."
          },
          {
            "es": "Ella habla con su madre.",
            "en": "She speaks with her mother."
          },
          {
            "es": "Nosotros hablamos inglés en casa.",
            "en": "We speak English at home."
          },
          {
            "es": "Ellos hablan por teléfono.",
            "en": "They speak on the phone."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "hablé",
          "hablaste",
          "habló",
          "hablamos",
          "hablaron"
        ],
        "sentences": [
          {
            "es": "Yo hablé con María ayer.",
            "en": "I spoke with Maria yesterday."
          },
          {
            "es": "Tú hablaste mucho anoche.",
            "en": "You spoke a lot last night."
          },
          {
            "es": "Ella habló sin parar.",
            "en": "She spoke without stopping."
          },
          {
            "es": "Nosotros hablamos toda la noche.",
            "en": "We spoke all night."
          },
          {
            "es": "Ellos hablaron durante una hora.",
            "en": "They spoke for an hour."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "hablaré",
          "hablarás",
          "hablará",
          "hablaremos",
          "hablarán"
        ],
        "sentences": [
          {
            "es": "Yo hablaré con el jefe mañana.",
            "en": "I will speak with the boss tomorrow."
          },
          {
            "es": "Tú hablarás en la reunión.",
            "en": "You will speak at the meeting."
          },
          {
            "es": "Ella hablará por radio.",
            "en": "She will speak on the radio."
          },
          {
            "es": "Nosotros hablaremos pronto.",
            "en": "We will speak soon."
          },
          {
            "es": "Ellos hablarán con el doctor.",
            "en": "They will speak with the doctor."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "hablaba",
          "hablabas",
          "hablaba",
          "hablábamos",
          "hablaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo hablaba mucho.",
            "en": "When I was a kid, I used to speak a lot."
          },
          {
            "es": "Tú hablabas todos los días.",
            "en": "You used to speak every day."
          },
          {
            "es": "Ella hablaba de joven.",
            "en": "She used to speak when she was young."
          },
          {
            "es": "Nosotros hablábamos juntos en aquellos años.",
            "en": "We used to speak together in those years."
          },
          {
            "es": "Ellos hablaban cada tarde.",
            "en": "They used to speak every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "hable",
          "hables",
          "hable",
          "hablemos",
          "hablen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo hable.",
            "en": "They want me to speak."
          },
          {
            "es": "Espero que tú hables pronto.",
            "en": "I hope you speak soon."
          },
          {
            "es": "Es importante que ella hable.",
            "en": "It is important that she speak."
          },
          {
            "es": "Dudo que nosotros hablemos hoy.",
            "en": "I doubt that we speak today."
          },
          {
            "es": "Ojalá que ellos hablen bien.",
            "en": "I hope they speak well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "trabajar",
    "english": "to work",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "trabajo",
          "trabajas",
          "trabaja",
          "trabajamos",
          "trabajan"
        ],
        "sentences": [
          {
            "es": "Yo trabajo en una oficina.",
            "en": "I work in an office."
          },
          {
            "es": "Tú trabajas mucho.",
            "en": "You work a lot."
          },
          {
            "es": "Él trabaja en el banco.",
            "en": "He works at the bank."
          },
          {
            "es": "Nosotros trabajamos juntos.",
            "en": "We work together."
          },
          {
            "es": "Ellos trabajan los sábados.",
            "en": "They work on Saturdays."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "trabajé",
          "trabajaste",
          "trabajó",
          "trabajamos",
          "trabajaron"
        ],
        "sentences": [
          {
            "es": "Yo trabajé doce horas ayer.",
            "en": "I worked twelve hours yesterday."
          },
          {
            "es": "Tú trabajaste el fin de semana.",
            "en": "You worked over the weekend."
          },
          {
            "es": "Él trabajó en París por años.",
            "en": "He worked in Paris for years."
          },
          {
            "es": "Nosotros trabajamos en el proyecto.",
            "en": "We worked on the project."
          },
          {
            "es": "Ellos trabajaron toda la noche.",
            "en": "They worked all night."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "trabajaré",
          "trabajarás",
          "trabajará",
          "trabajaremos",
          "trabajarán"
        ],
        "sentences": [
          {
            "es": "Yo trabajaré desde casa mañana.",
            "en": "I will work from home tomorrow."
          },
          {
            "es": "Tú trabajarás con el equipo nuevo.",
            "en": "You will work with the new team."
          },
          {
            "es": "Él trabajará en otra ciudad.",
            "en": "He will work in another city."
          },
          {
            "es": "Nosotros trabajaremos hasta tarde.",
            "en": "We will work late."
          },
          {
            "es": "Ellos trabajarán este verano.",
            "en": "They will work this summer."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "trabajaba",
          "trabajabas",
          "trabajaba",
          "trabajábamos",
          "trabajaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo trabajaba mucho.",
            "en": "When I was a kid, I used to work a lot."
          },
          {
            "es": "Tú trabajabas todos los días.",
            "en": "You used to work every day."
          },
          {
            "es": "Ella trabajaba de joven.",
            "en": "She used to work when she was young."
          },
          {
            "es": "Nosotros trabajábamos juntos en aquellos años.",
            "en": "We used to work together in those years."
          },
          {
            "es": "Ellos trabajaban cada tarde.",
            "en": "They used to work every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "trabaje",
          "trabajes",
          "trabaje",
          "trabajemos",
          "trabajen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo trabaje.",
            "en": "They want me to work."
          },
          {
            "es": "Espero que tú trabajes pronto.",
            "en": "I hope you work soon."
          },
          {
            "es": "Es importante que ella trabaje.",
            "en": "It is important that she work."
          },
          {
            "es": "Dudo que nosotros trabajemos hoy.",
            "en": "I doubt that we work today."
          },
          {
            "es": "Ojalá que ellos trabajen bien.",
            "en": "I hope they work well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "estudiar",
    "english": "to study",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "estudio",
          "estudias",
          "estudia",
          "estudiamos",
          "estudian"
        ],
        "sentences": [
          {
            "es": "Yo estudio matemáticas.",
            "en": "I study math."
          },
          {
            "es": "Tú estudias en la universidad.",
            "en": "You study at the university."
          },
          {
            "es": "Ella estudia para el examen.",
            "en": "She studies for the exam."
          },
          {
            "es": "Nosotros estudiamos juntos.",
            "en": "We study together."
          },
          {
            "es": "Ellos estudian medicina.",
            "en": "They study medicine."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "estudié",
          "estudiaste",
          "estudió",
          "estudiamos",
          "estudiaron"
        ],
        "sentences": [
          {
            "es": "Yo estudié toda la noche.",
            "en": "I studied all night."
          },
          {
            "es": "Tú estudiaste mucho ayer.",
            "en": "You studied a lot yesterday."
          },
          {
            "es": "Ella estudió en Madrid.",
            "en": "She studied in Madrid."
          },
          {
            "es": "Nosotros estudiamos la lección.",
            "en": "We studied the lesson."
          },
          {
            "es": "Ellos estudiaron los verbos.",
            "en": "They studied the verbs."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "estudiaré",
          "estudiarás",
          "estudiará",
          "estudiaremos",
          "estudiarán"
        ],
        "sentences": [
          {
            "es": "Yo estudiaré después.",
            "en": "I will study later."
          },
          {
            "es": "Tú estudiarás con tus amigos.",
            "en": "You will study with your friends."
          },
          {
            "es": "Ella estudiará biología.",
            "en": "She will study biology."
          },
          {
            "es": "Nosotros estudiaremos historia.",
            "en": "We will study history."
          },
          {
            "es": "Ellos estudiarán mañana.",
            "en": "They will study tomorrow."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "estudiaba",
          "estudiabas",
          "estudiaba",
          "estudiábamos",
          "estudiaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo estudiaba mucho.",
            "en": "When I was a kid, I used to study a lot."
          },
          {
            "es": "Tú estudiabas todos los días.",
            "en": "You used to study every day."
          },
          {
            "es": "Ella estudiaba de joven.",
            "en": "She used to study when she was young."
          },
          {
            "es": "Nosotros estudiábamos juntos en aquellos años.",
            "en": "We used to study together in those years."
          },
          {
            "es": "Ellos estudiaban cada tarde.",
            "en": "They used to study every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "estudie",
          "estudies",
          "estudie",
          "estudiemos",
          "estudien"
        ],
        "sentences": [
          {
            "es": "Quieren que yo estudie.",
            "en": "They want me to study."
          },
          {
            "es": "Espero que tú estudies pronto.",
            "en": "I hope you study soon."
          },
          {
            "es": "Es importante que ella estudie.",
            "en": "It is important that she study."
          },
          {
            "es": "Dudo que nosotros estudiemos hoy.",
            "en": "I doubt that we study today."
          },
          {
            "es": "Ojalá que ellos estudien bien.",
            "en": "I hope they study well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "caminar",
    "english": "to walk",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "camino",
          "caminas",
          "camina",
          "caminamos",
          "caminan"
        ],
        "sentences": [
          {
            "es": "Yo camino al trabajo.",
            "en": "I walk to work."
          },
          {
            "es": "Tú caminas muy rápido.",
            "en": "You walk very fast."
          },
          {
            "es": "Ella camina en el parque.",
            "en": "She walks in the park."
          },
          {
            "es": "Nosotros caminamos por la playa.",
            "en": "We walk along the beach."
          },
          {
            "es": "Ellos caminan cada mañana.",
            "en": "They walk every morning."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "caminé",
          "caminaste",
          "caminó",
          "caminamos",
          "caminaron"
        ],
        "sentences": [
          {
            "es": "Yo caminé cinco kilómetros.",
            "en": "I walked five kilometers."
          },
          {
            "es": "Tú caminaste mucho ayer.",
            "en": "You walked a lot yesterday."
          },
          {
            "es": "Ella caminó hasta la tienda.",
            "en": "She walked to the store."
          },
          {
            "es": "Nosotros caminamos durante horas.",
            "en": "We walked for hours."
          },
          {
            "es": "Ellos caminaron toda la tarde.",
            "en": "They walked all afternoon."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "caminaré",
          "caminarás",
          "caminará",
          "caminaremos",
          "caminarán"
        ],
        "sentences": [
          {
            "es": "Yo caminaré después del almuerzo.",
            "en": "I will walk after lunch."
          },
          {
            "es": "Tú caminarás conmigo.",
            "en": "You will walk with me."
          },
          {
            "es": "Ella caminará al colegio.",
            "en": "She will walk to school."
          },
          {
            "es": "Nosotros caminaremos esta tarde.",
            "en": "We will walk this afternoon."
          },
          {
            "es": "Ellos caminarán en la mañana.",
            "en": "They will walk in the morning."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "caminaba",
          "caminabas",
          "caminaba",
          "caminábamos",
          "caminaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo caminaba mucho.",
            "en": "When I was a kid, I used to walk a lot."
          },
          {
            "es": "Tú caminabas todos los días.",
            "en": "You used to walk every day."
          },
          {
            "es": "Ella caminaba de joven.",
            "en": "She used to walk when she was young."
          },
          {
            "es": "Nosotros caminábamos juntos en aquellos años.",
            "en": "We used to walk together in those years."
          },
          {
            "es": "Ellos caminaban cada tarde.",
            "en": "They used to walk every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "camine",
          "camines",
          "camine",
          "caminemos",
          "caminen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo camine.",
            "en": "They want me to walk."
          },
          {
            "es": "Espero que tú camines pronto.",
            "en": "I hope you walk soon."
          },
          {
            "es": "Es importante que ella camine.",
            "en": "It is important that she walk."
          },
          {
            "es": "Dudo que nosotros caminemos hoy.",
            "en": "I doubt that we walk today."
          },
          {
            "es": "Ojalá que ellos caminen bien.",
            "en": "I hope they walk well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "cantar",
    "english": "to sing",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "canto",
          "cantas",
          "canta",
          "cantamos",
          "cantan"
        ],
        "sentences": [
          {
            "es": "Yo canto en la ducha.",
            "en": "I sing in the shower."
          },
          {
            "es": "Tú cantas muy bien.",
            "en": "You sing very well."
          },
          {
            "es": "Ella canta en un coro.",
            "en": "She sings in a choir."
          },
          {
            "es": "Nosotros cantamos en español.",
            "en": "We sing in Spanish."
          },
          {
            "es": "Ellos cantan en la fiesta.",
            "en": "They sing at the party."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "canté",
          "cantaste",
          "cantó",
          "cantamos",
          "cantaron"
        ],
        "sentences": [
          {
            "es": "Yo canté en el concierto.",
            "en": "I sang at the concert."
          },
          {
            "es": "Tú cantaste hermosamente.",
            "en": "You sang beautifully."
          },
          {
            "es": "Ella cantó toda la canción.",
            "en": "She sang the whole song."
          },
          {
            "es": "Nosotros cantamos juntos.",
            "en": "We sang together."
          },
          {
            "es": "Ellos cantaron en la boda.",
            "en": "They sang at the wedding."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "cantaré",
          "cantarás",
          "cantará",
          "cantaremos",
          "cantarán"
        ],
        "sentences": [
          {
            "es": "Yo cantaré en el escenario.",
            "en": "I will sing on stage."
          },
          {
            "es": "Tú cantarás esta noche.",
            "en": "You will sing tonight."
          },
          {
            "es": "Ella cantará una balada.",
            "en": "She will sing a ballad."
          },
          {
            "es": "Nosotros cantaremos en la iglesia.",
            "en": "We will sing at the church."
          },
          {
            "es": "Ellos cantarán en español.",
            "en": "They will sing in Spanish."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "cantaba",
          "cantabas",
          "cantaba",
          "cantábamos",
          "cantaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo cantaba mucho.",
            "en": "When I was a kid, I used to sing a lot."
          },
          {
            "es": "Tú cantabas todos los días.",
            "en": "You used to sing every day."
          },
          {
            "es": "Ella cantaba de joven.",
            "en": "She used to sing when she was young."
          },
          {
            "es": "Nosotros cantábamos juntos en aquellos años.",
            "en": "We used to sing together in those years."
          },
          {
            "es": "Ellos cantaban cada tarde.",
            "en": "They used to sing every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "cante",
          "cantes",
          "cante",
          "cantemos",
          "canten"
        ],
        "sentences": [
          {
            "es": "Quieren que yo cante.",
            "en": "They want me to sing."
          },
          {
            "es": "Espero que tú cantes pronto.",
            "en": "I hope you sing soon."
          },
          {
            "es": "Es importante que ella cante.",
            "en": "It is important that she sing."
          },
          {
            "es": "Dudo que nosotros cantemos hoy.",
            "en": "I doubt that we sing today."
          },
          {
            "es": "Ojalá que ellos canten bien.",
            "en": "I hope they sing well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "mirar",
    "english": "to watch / look at",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "miro",
          "miras",
          "mira",
          "miramos",
          "miran"
        ],
        "sentences": [
          {
            "es": "Yo miro la televisión.",
            "en": "I watch television."
          },
          {
            "es": "Tú miras las estrellas.",
            "en": "You look at the stars."
          },
          {
            "es": "Él mira el reloj.",
            "en": "He looks at the clock."
          },
          {
            "es": "Nosotros miramos una película.",
            "en": "We watch a movie."
          },
          {
            "es": "Ellos miran el partido.",
            "en": "They watch the game."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "miré",
          "miraste",
          "miró",
          "miramos",
          "miraron"
        ],
        "sentences": [
          {
            "es": "Yo miré la luna anoche.",
            "en": "I looked at the moon last night."
          },
          {
            "es": "Tú miraste el video.",
            "en": "You watched the video."
          },
          {
            "es": "Él miró por la ventana.",
            "en": "He looked out the window."
          },
          {
            "es": "Nosotros miramos las fotos.",
            "en": "We looked at the photos."
          },
          {
            "es": "Ellos miraron el atardecer.",
            "en": "They watched the sunset."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "miraré",
          "mirarás",
          "mirará",
          "miraremos",
          "mirarán"
        ],
        "sentences": [
          {
            "es": "Yo miraré las noticias después.",
            "en": "I will watch the news later."
          },
          {
            "es": "Tú mirarás el documental.",
            "en": "You will watch the documentary."
          },
          {
            "es": "Él mirará el partido el sábado.",
            "en": "He will watch the game on Saturday."
          },
          {
            "es": "Nosotros miraremos una serie.",
            "en": "We will watch a series."
          },
          {
            "es": "Ellos mirarán la presentación.",
            "en": "They will watch the presentation."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "miraba",
          "mirabas",
          "miraba",
          "mirábamos",
          "miraban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo miraba mucho.",
            "en": "When I was a kid, I used to watch a lot."
          },
          {
            "es": "Tú mirabas todos los días.",
            "en": "You used to watch every day."
          },
          {
            "es": "Ella miraba de joven.",
            "en": "She used to watch when she was young."
          },
          {
            "es": "Nosotros mirábamos juntos en aquellos años.",
            "en": "We used to watch together in those years."
          },
          {
            "es": "Ellos miraban cada tarde.",
            "en": "They used to watch every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "mire",
          "mires",
          "mire",
          "miremos",
          "miren"
        ],
        "sentences": [
          {
            "es": "Quieren que yo mire.",
            "en": "They want me to watch."
          },
          {
            "es": "Espero que tú mires pronto.",
            "en": "I hope you watch soon."
          },
          {
            "es": "Es importante que ella mire.",
            "en": "It is important that she watch."
          },
          {
            "es": "Dudo que nosotros miremos hoy.",
            "en": "I doubt that we watch today."
          },
          {
            "es": "Ojalá que ellos miren bien.",
            "en": "I hope they watch well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "escuchar",
    "english": "to listen",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "escucho",
          "escuchas",
          "escucha",
          "escuchamos",
          "escuchan"
        ],
        "sentences": [
          {
            "es": "Yo escucho música clásica.",
            "en": "I listen to classical music."
          },
          {
            "es": "Tú escuchas la radio.",
            "en": "You listen to the radio."
          },
          {
            "es": "Ella escucha al profesor.",
            "en": "She listens to the teacher."
          },
          {
            "es": "Nosotros escuchamos podcasts.",
            "en": "We listen to podcasts."
          },
          {
            "es": "Ellos escuchan jazz.",
            "en": "They listen to jazz."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "escuché",
          "escuchaste",
          "escuchó",
          "escuchamos",
          "escucharon"
        ],
        "sentences": [
          {
            "es": "Yo escuché el discurso completo.",
            "en": "I listened to the whole speech."
          },
          {
            "es": "Tú escuchaste el chiste dos veces.",
            "en": "You heard the joke twice."
          },
          {
            "es": "Ella escuchó música toda la tarde.",
            "en": "She listened to music all afternoon."
          },
          {
            "es": "Nosotros escuchamos las instrucciones.",
            "en": "We listened to the instructions."
          },
          {
            "es": "Ellos escucharon con atención.",
            "en": "They listened carefully."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "escucharé",
          "escucharás",
          "escuchará",
          "escucharemos",
          "escucharán"
        ],
        "sentences": [
          {
            "es": "Yo escucharé el álbum nuevo.",
            "en": "I will listen to the new album."
          },
          {
            "es": "Tú escucharás la entrevista.",
            "en": "You will listen to the interview."
          },
          {
            "es": "Ella escuchará el podcast después.",
            "en": "She will listen to the podcast later."
          },
          {
            "es": "Nosotros escucharemos el concierto.",
            "en": "We will listen to the concert."
          },
          {
            "es": "Ellos escucharán las grabaciones.",
            "en": "They will listen to the recordings."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "escuchaba",
          "escuchabas",
          "escuchaba",
          "escuchábamos",
          "escuchaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo escuchaba mucho.",
            "en": "When I was a kid, I used to listen a lot."
          },
          {
            "es": "Tú escuchabas todos los días.",
            "en": "You used to listen every day."
          },
          {
            "es": "Ella escuchaba de joven.",
            "en": "She used to listen when she was young."
          },
          {
            "es": "Nosotros escuchábamos juntos en aquellos años.",
            "en": "We used to listen together in those years."
          },
          {
            "es": "Ellos escuchaban cada tarde.",
            "en": "They used to listen every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "escuche",
          "escuches",
          "escuche",
          "escuchemos",
          "escuchen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo escuche.",
            "en": "They want me to listen."
          },
          {
            "es": "Espero que tú escuches pronto.",
            "en": "I hope you listen soon."
          },
          {
            "es": "Es importante que ella escuche.",
            "en": "It is important that she listen."
          },
          {
            "es": "Dudo que nosotros escuchemos hoy.",
            "en": "I doubt that we listen today."
          },
          {
            "es": "Ojalá que ellos escuchen bien.",
            "en": "I hope they listen well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "preparar",
    "english": "to prepare",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "preparo",
          "preparas",
          "prepara",
          "preparamos",
          "preparan"
        ],
        "sentences": [
          {
            "es": "Yo preparo la cena cada noche.",
            "en": "I prepare dinner every night."
          },
          {
            "es": "Tú preparas el café muy bien.",
            "en": "You make coffee very well."
          },
          {
            "es": "Ella prepara una sorpresa.",
            "en": "She is preparing a surprise."
          },
          {
            "es": "Nosotros preparamos la presentación.",
            "en": "We prepare the presentation."
          },
          {
            "es": "Ellos preparan el desayuno.",
            "en": "They prepare breakfast."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "preparé",
          "preparaste",
          "preparó",
          "preparamos",
          "prepararon"
        ],
        "sentences": [
          {
            "es": "Yo preparé el almuerzo ayer.",
            "en": "I prepared lunch yesterday."
          },
          {
            "es": "Tú preparaste un pastel delicioso.",
            "en": "You made a delicious cake."
          },
          {
            "es": "Ella preparó la maleta anoche.",
            "en": "She packed the suitcase last night."
          },
          {
            "es": "Nosotros preparamos todo a tiempo.",
            "en": "We prepared everything on time."
          },
          {
            "es": "Ellos prepararon una fiesta.",
            "en": "They organized a party."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "prepararé",
          "prepararás",
          "preparará",
          "prepararemos",
          "prepararán"
        ],
        "sentences": [
          {
            "es": "Yo prepararé el informe mañana.",
            "en": "I will prepare the report tomorrow."
          },
          {
            "es": "Tú prepararás algo especial.",
            "en": "You will prepare something special."
          },
          {
            "es": "Ella preparará la mesa.",
            "en": "She will set the table."
          },
          {
            "es": "Nosotros prepararemos la cena.",
            "en": "We will prepare dinner."
          },
          {
            "es": "Ellos prepararán los documentos.",
            "en": "They will prepare the documents."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "preparaba",
          "preparabas",
          "preparaba",
          "preparábamos",
          "preparaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo preparaba mucho.",
            "en": "When I was a kid, I used to prepare a lot."
          },
          {
            "es": "Tú preparabas todos los días.",
            "en": "You used to prepare every day."
          },
          {
            "es": "Ella preparaba de joven.",
            "en": "She used to prepare when she was young."
          },
          {
            "es": "Nosotros preparábamos juntos en aquellos años.",
            "en": "We used to prepare together in those years."
          },
          {
            "es": "Ellos preparaban cada tarde.",
            "en": "They used to prepare every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "prepare",
          "prepares",
          "prepare",
          "preparemos",
          "preparen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo prepare.",
            "en": "They want me to prepare."
          },
          {
            "es": "Espero que tú prepares pronto.",
            "en": "I hope you prepare soon."
          },
          {
            "es": "Es importante que ella prepare.",
            "en": "It is important that she prepare."
          },
          {
            "es": "Dudo que nosotros preparemos hoy.",
            "en": "I doubt that we prepare today."
          },
          {
            "es": "Ojalá que ellos preparen bien.",
            "en": "I hope they prepare well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "ayudar",
    "english": "to help",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "ayudo",
          "ayudas",
          "ayuda",
          "ayudamos",
          "ayudan"
        ],
        "sentences": [
          {
            "es": "Yo ayudo a mi madre.",
            "en": "I help my mother."
          },
          {
            "es": "Tú ayudas con la tarea.",
            "en": "You help with the homework."
          },
          {
            "es": "Ella ayuda a los niños.",
            "en": "She helps the children."
          },
          {
            "es": "Nosotros ayudamos a los vecinos.",
            "en": "We help the neighbors."
          },
          {
            "es": "Ellos ayudan al maestro.",
            "en": "They help the teacher."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "ayudé",
          "ayudaste",
          "ayudó",
          "ayudamos",
          "ayudaron"
        ],
        "sentences": [
          {
            "es": "Yo ayudé en la cocina.",
            "en": "I helped in the kitchen."
          },
          {
            "es": "Tú ayudaste a tu hermano.",
            "en": "You helped your brother."
          },
          {
            "es": "Ella ayudó con la mudanza.",
            "en": "She helped with the move."
          },
          {
            "es": "Nosotros ayudamos a limpiar.",
            "en": "We helped to clean."
          },
          {
            "es": "Ellos ayudaron mucho.",
            "en": "They helped a lot."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "ayudaré",
          "ayudarás",
          "ayudará",
          "ayudaremos",
          "ayudarán"
        ],
        "sentences": [
          {
            "es": "Yo ayudaré después.",
            "en": "I will help afterwards."
          },
          {
            "es": "Tú ayudarás con el proyecto.",
            "en": "You will help with the project."
          },
          {
            "es": "Ella ayudará el sábado.",
            "en": "She will help on Saturday."
          },
          {
            "es": "Nosotros ayudaremos a tu padre.",
            "en": "We will help your father."
          },
          {
            "es": "Ellos ayudarán a organizar.",
            "en": "They will help organize."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "ayudaba",
          "ayudabas",
          "ayudaba",
          "ayudábamos",
          "ayudaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo ayudaba mucho.",
            "en": "When I was a kid, I used to help a lot."
          },
          {
            "es": "Tú ayudabas todos los días.",
            "en": "You used to help every day."
          },
          {
            "es": "Ella ayudaba de joven.",
            "en": "She used to help when she was young."
          },
          {
            "es": "Nosotros ayudábamos juntos en aquellos años.",
            "en": "We used to help together in those years."
          },
          {
            "es": "Ellos ayudaban cada tarde.",
            "en": "They used to help every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "ayude",
          "ayudes",
          "ayude",
          "ayudemos",
          "ayuden"
        ],
        "sentences": [
          {
            "es": "Quieren que yo ayude.",
            "en": "They want me to help."
          },
          {
            "es": "Espero que tú ayudes pronto.",
            "en": "I hope you help soon."
          },
          {
            "es": "Es importante que ella ayude.",
            "en": "It is important that she help."
          },
          {
            "es": "Dudo que nosotros ayudemos hoy.",
            "en": "I doubt that we help today."
          },
          {
            "es": "Ojalá que ellos ayuden bien.",
            "en": "I hope they help well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "comprar",
    "english": "to buy",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "compro",
          "compras",
          "compra",
          "compramos",
          "compran"
        ],
        "sentences": [
          {
            "es": "Yo compro pan en la panadería.",
            "en": "I buy bread at the bakery."
          },
          {
            "es": "Tú compras flores.",
            "en": "You buy flowers."
          },
          {
            "es": "Ella compra ropa en línea.",
            "en": "She buys clothes online."
          },
          {
            "es": "Nosotros compramos comida fresca.",
            "en": "We buy fresh food."
          },
          {
            "es": "Ellos compran regalos.",
            "en": "They buy gifts."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "compré",
          "compraste",
          "compró",
          "compramos",
          "compraron"
        ],
        "sentences": [
          {
            "es": "Yo compré un libro nuevo.",
            "en": "I bought a new book."
          },
          {
            "es": "Tú compraste dos boletos.",
            "en": "You bought two tickets."
          },
          {
            "es": "Ella compró el vestido perfecto.",
            "en": "She bought the perfect dress."
          },
          {
            "es": "Nosotros compramos la casa el año pasado.",
            "en": "We bought the house last year."
          },
          {
            "es": "Ellos compraron mucho.",
            "en": "They bought a lot."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "compraré",
          "comprarás",
          "comprará",
          "compraremos",
          "comprarán"
        ],
        "sentences": [
          {
            "es": "Yo compraré la cena.",
            "en": "I will buy dinner."
          },
          {
            "es": "Tú comprarás los ingredientes.",
            "en": "You will buy the ingredients."
          },
          {
            "es": "Ella comprará un coche nuevo.",
            "en": "She will buy a new car."
          },
          {
            "es": "Nosotros compraremos la propiedad.",
            "en": "We will buy the property."
          },
          {
            "es": "Ellos comprarán entradas.",
            "en": "They will buy tickets."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "compraba",
          "comprabas",
          "compraba",
          "comprábamos",
          "compraban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo compraba mucho.",
            "en": "When I was a kid, I used to buy a lot."
          },
          {
            "es": "Tú comprabas todos los días.",
            "en": "You used to buy every day."
          },
          {
            "es": "Ella compraba de joven.",
            "en": "She used to buy when she was young."
          },
          {
            "es": "Nosotros comprábamos juntos en aquellos años.",
            "en": "We used to buy together in those years."
          },
          {
            "es": "Ellos compraban cada tarde.",
            "en": "They used to buy every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "compre",
          "compres",
          "compre",
          "compremos",
          "compren"
        ],
        "sentences": [
          {
            "es": "Quieren que yo compre.",
            "en": "They want me to buy."
          },
          {
            "es": "Espero que tú compres pronto.",
            "en": "I hope you buy soon."
          },
          {
            "es": "Es importante que ella compre.",
            "en": "It is important that she buy."
          },
          {
            "es": "Dudo que nosotros compremos hoy.",
            "en": "I doubt that we buy today."
          },
          {
            "es": "Ojalá que ellos compren bien.",
            "en": "I hope they buy well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "comer",
    "english": "to eat",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "como",
          "comes",
          "come",
          "comemos",
          "comen"
        ],
        "sentences": [
          {
            "es": "Yo como pizza los viernes.",
            "en": "I eat pizza on Fridays."
          },
          {
            "es": "Tú comes muy poco.",
            "en": "You eat very little."
          },
          {
            "es": "Él come en el restaurante.",
            "en": "He eats at the restaurant."
          },
          {
            "es": "Nosotros comemos a las ocho.",
            "en": "We eat at eight."
          },
          {
            "es": "Ellos comen frutas.",
            "en": "They eat fruit."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "comí",
          "comiste",
          "comió",
          "comimos",
          "comieron"
        ],
        "sentences": [
          {
            "es": "Yo comí en casa anoche.",
            "en": "I ate at home last night."
          },
          {
            "es": "Tú comiste demasiado.",
            "en": "You ate too much."
          },
          {
            "es": "Él comió todo el plato.",
            "en": "He ate the whole plate."
          },
          {
            "es": "Nosotros comimos juntos.",
            "en": "We ate together."
          },
          {
            "es": "Ellos comieron tacos.",
            "en": "They ate tacos."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "comeré",
          "comerás",
          "comerá",
          "comeremos",
          "comerán"
        ],
        "sentences": [
          {
            "es": "Yo comeré tarde hoy.",
            "en": "I will eat late today."
          },
          {
            "es": "Tú comerás con nosotros.",
            "en": "You will eat with us."
          },
          {
            "es": "Él comerá en el aeropuerto.",
            "en": "He will eat at the airport."
          },
          {
            "es": "Nosotros comeremos pollo.",
            "en": "We will eat chicken."
          },
          {
            "es": "Ellos comerán postre.",
            "en": "They will eat dessert."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "comía",
          "comías",
          "comía",
          "comíamos",
          "comían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo comía mucho.",
            "en": "When I was a kid, I used to eat a lot."
          },
          {
            "es": "Tú comías todos los días.",
            "en": "You used to eat every day."
          },
          {
            "es": "Ella comía de joven.",
            "en": "She used to eat when she was young."
          },
          {
            "es": "Nosotros comíamos juntos en aquellos años.",
            "en": "We used to eat together in those years."
          },
          {
            "es": "Ellos comían cada tarde.",
            "en": "They used to eat every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "coma",
          "comas",
          "coma",
          "comamos",
          "coman"
        ],
        "sentences": [
          {
            "es": "Quieren que yo coma.",
            "en": "They want me to eat."
          },
          {
            "es": "Espero que tú comas pronto.",
            "en": "I hope you eat soon."
          },
          {
            "es": "Es importante que ella coma.",
            "en": "It is important that she eat."
          },
          {
            "es": "Dudo que nosotros comamos hoy.",
            "en": "I doubt that we eat today."
          },
          {
            "es": "Ojalá que ellos coman bien.",
            "en": "I hope they eat well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "beber",
    "english": "to drink",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "bebo",
          "bebes",
          "bebe",
          "bebemos",
          "beben"
        ],
        "sentences": [
          {
            "es": "Yo bebo agua todo el día.",
            "en": "I drink water all day."
          },
          {
            "es": "Tú bebes mucho café.",
            "en": "You drink a lot of coffee."
          },
          {
            "es": "Ella bebe té por la tarde.",
            "en": "She drinks tea in the afternoon."
          },
          {
            "es": "Nosotros bebemos vino con la cena.",
            "en": "We drink wine with dinner."
          },
          {
            "es": "Ellos beben cerveza.",
            "en": "They drink beer."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "bebí",
          "bebiste",
          "bebió",
          "bebimos",
          "bebieron"
        ],
        "sentences": [
          {
            "es": "Yo bebí dos vasos de jugo.",
            "en": "I drank two glasses of juice."
          },
          {
            "es": "Tú bebiste demasiado anoche.",
            "en": "You drank too much last night."
          },
          {
            "es": "Ella bebió un café doble.",
            "en": "She drank a double coffee."
          },
          {
            "es": "Nosotros bebimos champán.",
            "en": "We drank champagne."
          },
          {
            "es": "Ellos bebieron toda la noche.",
            "en": "They drank all night."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "beberé",
          "beberás",
          "beberá",
          "beberemos",
          "beberán"
        ],
        "sentences": [
          {
            "es": "Yo beberé limonada.",
            "en": "I will drink lemonade."
          },
          {
            "es": "Tú beberás más agua.",
            "en": "You will drink more water."
          },
          {
            "es": "Ella beberá un mojito.",
            "en": "She will drink a mojito."
          },
          {
            "es": "Nosotros beberemos sangría.",
            "en": "We will drink sangria."
          },
          {
            "es": "Ellos beberán refrescos.",
            "en": "They will drink sodas."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "bebía",
          "bebías",
          "bebía",
          "bebíamos",
          "bebían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo bebía mucho.",
            "en": "When I was a kid, I used to drink a lot."
          },
          {
            "es": "Tú bebías todos los días.",
            "en": "You used to drink every day."
          },
          {
            "es": "Ella bebía de joven.",
            "en": "She used to drink when she was young."
          },
          {
            "es": "Nosotros bebíamos juntos en aquellos años.",
            "en": "We used to drink together in those years."
          },
          {
            "es": "Ellos bebían cada tarde.",
            "en": "They used to drink every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "beba",
          "bebas",
          "beba",
          "bebamos",
          "beban"
        ],
        "sentences": [
          {
            "es": "Quieren que yo beba.",
            "en": "They want me to drink."
          },
          {
            "es": "Espero que tú bebas pronto.",
            "en": "I hope you drink soon."
          },
          {
            "es": "Es importante que ella beba.",
            "en": "It is important that she drink."
          },
          {
            "es": "Dudo que nosotros bebamos hoy.",
            "en": "I doubt that we drink today."
          },
          {
            "es": "Ojalá que ellos beban bien.",
            "en": "I hope they drink well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "aprender",
    "english": "to learn",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "aprendo",
          "aprendes",
          "aprende",
          "aprendemos",
          "aprenden"
        ],
        "sentences": [
          {
            "es": "Yo aprendo español rápido.",
            "en": "I learn Spanish quickly."
          },
          {
            "es": "Tú aprendes francés también.",
            "en": "You learn French too."
          },
          {
            "es": "Ella aprende a tocar la guitarra.",
            "en": "She is learning to play guitar."
          },
          {
            "es": "Nosotros aprendemos cosas nuevas.",
            "en": "We learn new things."
          },
          {
            "es": "Ellos aprenden de sus errores.",
            "en": "They learn from their mistakes."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "aprendí",
          "aprendiste",
          "aprendió",
          "aprendimos",
          "aprendieron"
        ],
        "sentences": [
          {
            "es": "Yo aprendí mucho este año.",
            "en": "I learned a lot this year."
          },
          {
            "es": "Tú aprendiste a cocinar.",
            "en": "You learned to cook."
          },
          {
            "es": "Ella aprendió la canción.",
            "en": "She learned the song."
          },
          {
            "es": "Nosotros aprendimos juntos.",
            "en": "We learned together."
          },
          {
            "es": "Ellos aprendieron a nadar.",
            "en": "They learned to swim."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "aprenderé",
          "aprenderás",
          "aprenderá",
          "aprenderemos",
          "aprenderán"
        ],
        "sentences": [
          {
            "es": "Yo aprenderé alemán.",
            "en": "I will learn German."
          },
          {
            "es": "Tú aprenderás con el tiempo.",
            "en": "You will learn with time."
          },
          {
            "es": "Ella aprenderá a manejar.",
            "en": "She will learn to drive."
          },
          {
            "es": "Nosotros aprenderemos juntos.",
            "en": "We will learn together."
          },
          {
            "es": "Ellos aprenderán inglés.",
            "en": "They will learn English."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "aprendía",
          "aprendías",
          "aprendía",
          "aprendíamos",
          "aprendían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo aprendía mucho.",
            "en": "When I was a kid, I used to learn a lot."
          },
          {
            "es": "Tú aprendías todos los días.",
            "en": "You used to learn every day."
          },
          {
            "es": "Ella aprendía de joven.",
            "en": "She used to learn when she was young."
          },
          {
            "es": "Nosotros aprendíamos juntos en aquellos años.",
            "en": "We used to learn together in those years."
          },
          {
            "es": "Ellos aprendían cada tarde.",
            "en": "They used to learn every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "aprenda",
          "aprendas",
          "aprenda",
          "aprendamos",
          "aprendan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo aprenda.",
            "en": "They want me to learn."
          },
          {
            "es": "Espero que tú aprendas pronto.",
            "en": "I hope you learn soon."
          },
          {
            "es": "Es importante que ella aprenda.",
            "en": "It is important that she learn."
          },
          {
            "es": "Dudo que nosotros aprendamos hoy.",
            "en": "I doubt that we learn today."
          },
          {
            "es": "Ojalá que ellos aprendan bien.",
            "en": "I hope they learn well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "leer",
    "english": "to read",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "leo",
          "lees",
          "lee",
          "leemos",
          "leen"
        ],
        "sentences": [
          {
            "es": "Yo leo novelas en la cama.",
            "en": "I read novels in bed."
          },
          {
            "es": "Tú lees el periódico.",
            "en": "You read the newspaper."
          },
          {
            "es": "Ella lee poesía.",
            "en": "She reads poetry."
          },
          {
            "es": "Nosotros leemos en silencio.",
            "en": "We read in silence."
          },
          {
            "es": "Ellos leen muchos libros.",
            "en": "They read many books."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "leí",
          "leíste",
          "leyó",
          "leímos",
          "leyeron"
        ],
        "sentences": [
          {
            "es": "Yo leí el libro en un día.",
            "en": "I read the book in one day."
          },
          {
            "es": "Tú leíste todo el manual.",
            "en": "You read the whole manual."
          },
          {
            "es": "Ella leyó la carta dos veces.",
            "en": "She read the letter twice."
          },
          {
            "es": "Nosotros leímos los documentos.",
            "en": "We read the documents."
          },
          {
            "es": "Ellos leyeron las instrucciones.",
            "en": "They read the instructions."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "leeré",
          "leerás",
          "leerá",
          "leeremos",
          "leerán"
        ],
        "sentences": [
          {
            "es": "Yo leeré ese artículo.",
            "en": "I will read that article."
          },
          {
            "es": "Tú leerás el contrato.",
            "en": "You will read the contract."
          },
          {
            "es": "Ella leerá una novela este verano.",
            "en": "She will read a novel this summer."
          },
          {
            "es": "Nosotros leeremos juntos.",
            "en": "We will read together."
          },
          {
            "es": "Ellos leerán los resultados.",
            "en": "They will read the results."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "leía",
          "leías",
          "leía",
          "leíamos",
          "leían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo leía mucho.",
            "en": "When I was a kid, I used to read a lot."
          },
          {
            "es": "Tú leías todos los días.",
            "en": "You used to read every day."
          },
          {
            "es": "Ella leía de joven.",
            "en": "She used to read when she was young."
          },
          {
            "es": "Nosotros leíamos juntos en aquellos años.",
            "en": "We used to read together in those years."
          },
          {
            "es": "Ellos leían cada tarde.",
            "en": "They used to read every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "lea",
          "leas",
          "lea",
          "leamos",
          "lean"
        ],
        "sentences": [
          {
            "es": "Quieren que yo lea.",
            "en": "They want me to read."
          },
          {
            "es": "Espero que tú leas pronto.",
            "en": "I hope you read soon."
          },
          {
            "es": "Es importante que ella lea.",
            "en": "It is important that she read."
          },
          {
            "es": "Dudo que nosotros leamos hoy.",
            "en": "I doubt that we read today."
          },
          {
            "es": "Ojalá que ellos lean bien.",
            "en": "I hope they read well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "correr",
    "english": "to run",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "corro",
          "corres",
          "corre",
          "corremos",
          "corren"
        ],
        "sentences": [
          {
            "es": "Yo corro cinco kilómetros.",
            "en": "I run five kilometers."
          },
          {
            "es": "Tú corres muy rápido.",
            "en": "You run very fast."
          },
          {
            "es": "Ella corre en el parque.",
            "en": "She runs in the park."
          },
          {
            "es": "Nosotros corremos cada mañana.",
            "en": "We run every morning."
          },
          {
            "es": "Ellos corren maratones.",
            "en": "They run marathons."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "corrí",
          "corriste",
          "corrió",
          "corrimos",
          "corrieron"
        ],
        "sentences": [
          {
            "es": "Yo corrí toda la mañana.",
            "en": "I ran all morning."
          },
          {
            "es": "Tú corriste para alcanzar el bus.",
            "en": "You ran to catch the bus."
          },
          {
            "es": "Ella corrió la carrera.",
            "en": "She ran the race."
          },
          {
            "es": "Nosotros corrimos por las calles.",
            "en": "We ran through the streets."
          },
          {
            "es": "Ellos corrieron hasta la casa.",
            "en": "They ran to the house."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "correré",
          "correrás",
          "correrá",
          "correremos",
          "correrán"
        ],
        "sentences": [
          {
            "es": "Yo correré con mi amigo.",
            "en": "I will run with my friend."
          },
          {
            "es": "Tú correrás el maratón.",
            "en": "You will run the marathon."
          },
          {
            "es": "Ella correrá el sábado.",
            "en": "She will run on Saturday."
          },
          {
            "es": "Nosotros correremos por el bosque.",
            "en": "We will run through the forest."
          },
          {
            "es": "Ellos correrán juntos.",
            "en": "They will run together."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "corría",
          "corrías",
          "corría",
          "corríamos",
          "corrían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo corría mucho.",
            "en": "When I was a kid, I used to run a lot."
          },
          {
            "es": "Tú corrías todos los días.",
            "en": "You used to run every day."
          },
          {
            "es": "Ella corría de joven.",
            "en": "She used to run when she was young."
          },
          {
            "es": "Nosotros corríamos juntos en aquellos años.",
            "en": "We used to run together in those years."
          },
          {
            "es": "Ellos corrían cada tarde.",
            "en": "They used to run every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "corra",
          "corras",
          "corra",
          "corramos",
          "corran"
        ],
        "sentences": [
          {
            "es": "Quieren que yo corra.",
            "en": "They want me to run."
          },
          {
            "es": "Espero que tú corras pronto.",
            "en": "I hope you run soon."
          },
          {
            "es": "Es importante que ella corra.",
            "en": "It is important that she run."
          },
          {
            "es": "Dudo que nosotros corramos hoy.",
            "en": "I doubt that we run today."
          },
          {
            "es": "Ojalá que ellos corran bien.",
            "en": "I hope they run well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "vender",
    "english": "to sell",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "vendo",
          "vendes",
          "vende",
          "vendemos",
          "venden"
        ],
        "sentences": [
          {
            "es": "Yo vendo flores en el mercado.",
            "en": "I sell flowers at the market."
          },
          {
            "es": "Tú vendes coches.",
            "en": "You sell cars."
          },
          {
            "es": "Él vende libros usados.",
            "en": "He sells used books."
          },
          {
            "es": "Nosotros vendemos artesanías.",
            "en": "We sell handicrafts."
          },
          {
            "es": "Ellos venden frutas frescas.",
            "en": "They sell fresh fruits."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "vendí",
          "vendiste",
          "vendió",
          "vendimos",
          "vendieron"
        ],
        "sentences": [
          {
            "es": "Yo vendí mi vieja bicicleta.",
            "en": "I sold my old bicycle."
          },
          {
            "es": "Tú vendiste la casa.",
            "en": "You sold the house."
          },
          {
            "es": "Él vendió todo en un día.",
            "en": "He sold everything in one day."
          },
          {
            "es": "Nosotros vendimos los muebles.",
            "en": "We sold the furniture."
          },
          {
            "es": "Ellos vendieron sus acciones.",
            "en": "They sold their shares."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "venderé",
          "venderás",
          "venderá",
          "venderemos",
          "venderán"
        ],
        "sentences": [
          {
            "es": "Yo venderé mi auto.",
            "en": "I will sell my car."
          },
          {
            "es": "Tú venderás la propiedad.",
            "en": "You will sell the property."
          },
          {
            "es": "Él venderá su colección.",
            "en": "He will sell his collection."
          },
          {
            "es": "Nosotros venderemos los productos.",
            "en": "We will sell the products."
          },
          {
            "es": "Ellos venderán las pinturas.",
            "en": "They will sell the paintings."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "vendía",
          "vendías",
          "vendía",
          "vendíamos",
          "vendían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo vendía mucho.",
            "en": "When I was a kid, I used to sell a lot."
          },
          {
            "es": "Tú vendías todos los días.",
            "en": "You used to sell every day."
          },
          {
            "es": "Ella vendía de joven.",
            "en": "She used to sell when she was young."
          },
          {
            "es": "Nosotros vendíamos juntos en aquellos años.",
            "en": "We used to sell together in those years."
          },
          {
            "es": "Ellos vendían cada tarde.",
            "en": "They used to sell every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "venda",
          "vendas",
          "venda",
          "vendamos",
          "vendan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo venda.",
            "en": "They want me to sell."
          },
          {
            "es": "Espero que tú vendas pronto.",
            "en": "I hope you sell soon."
          },
          {
            "es": "Es importante que ella venda.",
            "en": "It is important that she sell."
          },
          {
            "es": "Dudo que nosotros vendamos hoy.",
            "en": "I doubt that we sell today."
          },
          {
            "es": "Ojalá que ellos vendan bien.",
            "en": "I hope they sell well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "comprender",
    "english": "to understand",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "comprendo",
          "comprendes",
          "comprende",
          "comprendemos",
          "comprenden"
        ],
        "sentences": [
          {
            "es": "Yo comprendo la situación.",
            "en": "I understand the situation."
          },
          {
            "es": "Tú comprendes el problema.",
            "en": "You understand the problem."
          },
          {
            "es": "Ella comprende muy rápido.",
            "en": "She understands very quickly."
          },
          {
            "es": "Nosotros comprendemos la lección.",
            "en": "We understand the lesson."
          },
          {
            "es": "Ellos comprenden las reglas.",
            "en": "They understand the rules."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "comprendí",
          "comprendiste",
          "comprendió",
          "comprendimos",
          "comprendieron"
        ],
        "sentences": [
          {
            "es": "Yo comprendí la pregunta.",
            "en": "I understood the question."
          },
          {
            "es": "Tú comprendiste perfectamente.",
            "en": "You understood perfectly."
          },
          {
            "es": "Ella comprendió mi punto.",
            "en": "She understood my point."
          },
          {
            "es": "Nosotros comprendimos al final.",
            "en": "We understood in the end."
          },
          {
            "es": "Ellos comprendieron el mensaje.",
            "en": "They understood the message."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "comprenderé",
          "comprenderás",
          "comprenderá",
          "comprenderemos",
          "comprenderán"
        ],
        "sentences": [
          {
            "es": "Yo comprenderé con el tiempo.",
            "en": "I will understand with time."
          },
          {
            "es": "Tú comprenderás cuando crezcas.",
            "en": "You will understand when you grow up."
          },
          {
            "es": "Ella comprenderá la noticia.",
            "en": "She will understand the news."
          },
          {
            "es": "Nosotros comprenderemos la teoría.",
            "en": "We will understand the theory."
          },
          {
            "es": "Ellos comprenderán pronto.",
            "en": "They will understand soon."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "comprendía",
          "comprendías",
          "comprendía",
          "comprendíamos",
          "comprendían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo comprendía mucho.",
            "en": "When I was a kid, I used to understand a lot."
          },
          {
            "es": "Tú comprendías todos los días.",
            "en": "You used to understand every day."
          },
          {
            "es": "Ella comprendía de joven.",
            "en": "She used to understand when she was young."
          },
          {
            "es": "Nosotros comprendíamos juntos en aquellos años.",
            "en": "We used to understand together in those years."
          },
          {
            "es": "Ellos comprendían cada tarde.",
            "en": "They used to understand every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "comprenda",
          "comprendas",
          "comprenda",
          "comprendamos",
          "comprendan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo comprenda.",
            "en": "They want me to understand."
          },
          {
            "es": "Espero que tú comprendas pronto.",
            "en": "I hope you understand soon."
          },
          {
            "es": "Es importante que ella comprenda.",
            "en": "It is important that she understand."
          },
          {
            "es": "Dudo que nosotros comprendamos hoy.",
            "en": "I doubt that we understand today."
          },
          {
            "es": "Ojalá que ellos comprendan bien.",
            "en": "I hope they understand well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "vivir",
    "english": "to live",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "vivo",
          "vives",
          "vive",
          "vivimos",
          "viven"
        ],
        "sentences": [
          {
            "es": "Yo vivo en una ciudad grande.",
            "en": "I live in a big city."
          },
          {
            "es": "Tú vives cerca del mar.",
            "en": "You live near the sea."
          },
          {
            "es": "Ella vive sola.",
            "en": "She lives alone."
          },
          {
            "es": "Nosotros vivimos en familia.",
            "en": "We live as a family."
          },
          {
            "es": "Ellos viven en el campo.",
            "en": "They live in the countryside."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "viví",
          "viviste",
          "vivió",
          "vivimos",
          "vivieron"
        ],
        "sentences": [
          {
            "es": "Yo viví en México diez años.",
            "en": "I lived in Mexico for ten years."
          },
          {
            "es": "Tú viviste en París.",
            "en": "You lived in Paris."
          },
          {
            "es": "Ella vivió una aventura increíble.",
            "en": "She lived an incredible adventure."
          },
          {
            "es": "Nosotros vivimos momentos felices.",
            "en": "We lived happy moments."
          },
          {
            "es": "Ellos vivieron en el campo.",
            "en": "They lived in the countryside."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "viviré",
          "vivirás",
          "vivirá",
          "viviremos",
          "vivirán"
        ],
        "sentences": [
          {
            "es": "Yo viviré en otro país.",
            "en": "I will live in another country."
          },
          {
            "es": "Tú vivirás en la playa.",
            "en": "You will live at the beach."
          },
          {
            "es": "Ella vivirá una vida feliz.",
            "en": "She will live a happy life."
          },
          {
            "es": "Nosotros viviremos en paz.",
            "en": "We will live in peace."
          },
          {
            "es": "Ellos vivirán cerca.",
            "en": "They will live nearby."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "vivía",
          "vivías",
          "vivía",
          "vivíamos",
          "vivían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo vivía mucho.",
            "en": "When I was a kid, I used to live a lot."
          },
          {
            "es": "Tú vivías todos los días.",
            "en": "You used to live every day."
          },
          {
            "es": "Ella vivía de joven.",
            "en": "She used to live when she was young."
          },
          {
            "es": "Nosotros vivíamos juntos en aquellos años.",
            "en": "We used to live together in those years."
          },
          {
            "es": "Ellos vivían cada tarde.",
            "en": "They used to live every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "viva",
          "vivas",
          "viva",
          "vivamos",
          "vivan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo viva.",
            "en": "They want me to live."
          },
          {
            "es": "Espero que tú vivas pronto.",
            "en": "I hope you live soon."
          },
          {
            "es": "Es importante que ella viva.",
            "en": "It is important that she live."
          },
          {
            "es": "Dudo que nosotros vivamos hoy.",
            "en": "I doubt that we live today."
          },
          {
            "es": "Ojalá que ellos vivan bien.",
            "en": "I hope they live well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "escribir",
    "english": "to write",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "escribo",
          "escribes",
          "escribe",
          "escribimos",
          "escriben"
        ],
        "sentences": [
          {
            "es": "Yo escribo cartas a mis abuelos.",
            "en": "I write letters to my grandparents."
          },
          {
            "es": "Tú escribes muy bien.",
            "en": "You write very well."
          },
          {
            "es": "Él escribe novelas.",
            "en": "He writes novels."
          },
          {
            "es": "Nosotros escribimos en español.",
            "en": "We write in Spanish."
          },
          {
            "es": "Ellos escriben artículos.",
            "en": "They write articles."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "escribí",
          "escribiste",
          "escribió",
          "escribimos",
          "escribieron"
        ],
        "sentences": [
          {
            "es": "Yo escribí un poema ayer.",
            "en": "I wrote a poem yesterday."
          },
          {
            "es": "Tú escribiste el ensayo.",
            "en": "You wrote the essay."
          },
          {
            "es": "Él escribió tres libros.",
            "en": "He wrote three books."
          },
          {
            "es": "Nosotros escribimos el informe.",
            "en": "We wrote the report."
          },
          {
            "es": "Ellos escribieron las cartas.",
            "en": "They wrote the letters."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "escribiré",
          "escribirás",
          "escribirá",
          "escribiremos",
          "escribirán"
        ],
        "sentences": [
          {
            "es": "Yo escribiré una carta esta noche.",
            "en": "I will write a letter tonight."
          },
          {
            "es": "Tú escribirás la respuesta.",
            "en": "You will write the answer."
          },
          {
            "es": "Él escribirá una biografía.",
            "en": "He will write a biography."
          },
          {
            "es": "Nosotros escribiremos juntos.",
            "en": "We will write together."
          },
          {
            "es": "Ellos escribirán el guión.",
            "en": "They will write the script."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "escribía",
          "escribías",
          "escribía",
          "escribíamos",
          "escribían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo escribía mucho.",
            "en": "When I was a kid, I used to write a lot."
          },
          {
            "es": "Tú escribías todos los días.",
            "en": "You used to write every day."
          },
          {
            "es": "Ella escribía de joven.",
            "en": "She used to write when she was young."
          },
          {
            "es": "Nosotros escribíamos juntos en aquellos años.",
            "en": "We used to write together in those years."
          },
          {
            "es": "Ellos escribían cada tarde.",
            "en": "They used to write every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "escriba",
          "escribas",
          "escriba",
          "escribamos",
          "escriban"
        ],
        "sentences": [
          {
            "es": "Quieren que yo escriba.",
            "en": "They want me to write."
          },
          {
            "es": "Espero que tú escribas pronto.",
            "en": "I hope you write soon."
          },
          {
            "es": "Es importante que ella escriba.",
            "en": "It is important that she write."
          },
          {
            "es": "Dudo que nosotros escribamos hoy.",
            "en": "I doubt that we write today."
          },
          {
            "es": "Ojalá que ellos escriban bien.",
            "en": "I hope they write well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "abrir",
    "english": "to open",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "abro",
          "abres",
          "abre",
          "abrimos",
          "abren"
        ],
        "sentences": [
          {
            "es": "Yo abro la puerta.",
            "en": "I open the door."
          },
          {
            "es": "Tú abres las ventanas.",
            "en": "You open the windows."
          },
          {
            "es": "Ella abre el regalo.",
            "en": "She opens the gift."
          },
          {
            "es": "Nosotros abrimos la tienda a las nueve.",
            "en": "We open the store at nine."
          },
          {
            "es": "Ellos abren la caja.",
            "en": "They open the box."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "abrí",
          "abriste",
          "abrió",
          "abrimos",
          "abrieron"
        ],
        "sentences": [
          {
            "es": "Yo abrí la carta con cuidado.",
            "en": "I opened the letter carefully."
          },
          {
            "es": "Tú abriste la botella.",
            "en": "You opened the bottle."
          },
          {
            "es": "Ella abrió el sobre.",
            "en": "She opened the envelope."
          },
          {
            "es": "Nosotros abrimos el restaurante.",
            "en": "We opened the restaurant."
          },
          {
            "es": "Ellos abrieron la entrada.",
            "en": "They opened the entrance."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "abriré",
          "abrirás",
          "abrirá",
          "abriremos",
          "abrirán"
        ],
        "sentences": [
          {
            "es": "Yo abriré la oficina temprano.",
            "en": "I will open the office early."
          },
          {
            "es": "Tú abrirás los ojos.",
            "en": "You will open your eyes."
          },
          {
            "es": "Ella abrirá una nueva tienda.",
            "en": "She will open a new store."
          },
          {
            "es": "Nosotros abriremos la cuenta.",
            "en": "We will open the account."
          },
          {
            "es": "Ellos abrirán la puerta.",
            "en": "They will open the door."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "abría",
          "abrías",
          "abría",
          "abríamos",
          "abrían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo abría mucho.",
            "en": "When I was a kid, I used to open a lot."
          },
          {
            "es": "Tú abrías todos los días.",
            "en": "You used to open every day."
          },
          {
            "es": "Ella abría de joven.",
            "en": "She used to open when she was young."
          },
          {
            "es": "Nosotros abríamos juntos en aquellos años.",
            "en": "We used to open together in those years."
          },
          {
            "es": "Ellos abrían cada tarde.",
            "en": "They used to open every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "abra",
          "abras",
          "abra",
          "abramos",
          "abran"
        ],
        "sentences": [
          {
            "es": "Quieren que yo abra.",
            "en": "They want me to open."
          },
          {
            "es": "Espero que tú abras pronto.",
            "en": "I hope you open soon."
          },
          {
            "es": "Es importante que ella abra.",
            "en": "It is important that she open."
          },
          {
            "es": "Dudo que nosotros abramos hoy.",
            "en": "I doubt that we open today."
          },
          {
            "es": "Ojalá que ellos abran bien.",
            "en": "I hope they open well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "recibir",
    "english": "to receive",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "recibo",
          "recibes",
          "recibe",
          "recibimos",
          "reciben"
        ],
        "sentences": [
          {
            "es": "Yo recibo paquetes en casa.",
            "en": "I receive packages at home."
          },
          {
            "es": "Tú recibes muchos correos.",
            "en": "You receive many emails."
          },
          {
            "es": "Ella recibe a sus invitados.",
            "en": "She welcomes her guests."
          },
          {
            "es": "Nosotros recibimos el periódico.",
            "en": "We receive the newspaper."
          },
          {
            "es": "Ellos reciben buenas noticias.",
            "en": "They receive good news."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "recibí",
          "recibiste",
          "recibió",
          "recibimos",
          "recibieron"
        ],
        "sentences": [
          {
            "es": "Yo recibí una llamada importante.",
            "en": "I received an important call."
          },
          {
            "es": "Tú recibiste un regalo.",
            "en": "You received a gift."
          },
          {
            "es": "Ella recibió el premio.",
            "en": "She received the prize."
          },
          {
            "es": "Nosotros recibimos visitas.",
            "en": "We had visitors."
          },
          {
            "es": "Ellos recibieron la invitación.",
            "en": "They received the invitation."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "recibiré",
          "recibirás",
          "recibirá",
          "recibiremos",
          "recibirán"
        ],
        "sentences": [
          {
            "es": "Yo recibiré la respuesta mañana.",
            "en": "I will receive the answer tomorrow."
          },
          {
            "es": "Tú recibirás un aumento.",
            "en": "You will receive a raise."
          },
          {
            "es": "Ella recibirá el diploma.",
            "en": "She will receive the diploma."
          },
          {
            "es": "Nosotros recibiremos las cartas.",
            "en": "We will receive the letters."
          },
          {
            "es": "Ellos recibirán el pago.",
            "en": "They will receive the payment."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "recibía",
          "recibías",
          "recibía",
          "recibíamos",
          "recibían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo recibía mucho.",
            "en": "When I was a kid, I used to receive a lot."
          },
          {
            "es": "Tú recibías todos los días.",
            "en": "You used to receive every day."
          },
          {
            "es": "Ella recibía de joven.",
            "en": "She used to receive when she was young."
          },
          {
            "es": "Nosotros recibíamos juntos en aquellos años.",
            "en": "We used to receive together in those years."
          },
          {
            "es": "Ellos recibían cada tarde.",
            "en": "They used to receive every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "reciba",
          "recibas",
          "reciba",
          "recibamos",
          "reciban"
        ],
        "sentences": [
          {
            "es": "Quieren que yo reciba.",
            "en": "They want me to receive."
          },
          {
            "es": "Espero que tú recibas pronto.",
            "en": "I hope you receive soon."
          },
          {
            "es": "Es importante que ella reciba.",
            "en": "It is important that she receive."
          },
          {
            "es": "Dudo que nosotros recibamos hoy.",
            "en": "I doubt that we receive today."
          },
          {
            "es": "Ojalá que ellos reciban bien.",
            "en": "I hope they receive well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "subir",
    "english": "to go up / climb",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "subo",
          "subes",
          "sube",
          "subimos",
          "suben"
        ],
        "sentences": [
          {
            "es": "Yo subo las escaleras corriendo.",
            "en": "I climb the stairs running."
          },
          {
            "es": "Tú subes a la montaña.",
            "en": "You climb the mountain."
          },
          {
            "es": "Él sube al autobús.",
            "en": "He gets on the bus."
          },
          {
            "es": "Nosotros subimos al avión.",
            "en": "We board the plane."
          },
          {
            "es": "Ellos suben fotos a la red.",
            "en": "They upload photos to the web."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "subí",
          "subiste",
          "subió",
          "subimos",
          "subieron"
        ],
        "sentences": [
          {
            "es": "Yo subí al techo a mirar.",
            "en": "I went up to the roof to look."
          },
          {
            "es": "Tú subiste muy alto.",
            "en": "You went up very high."
          },
          {
            "es": "Él subió las escaleras lentamente.",
            "en": "He climbed the stairs slowly."
          },
          {
            "es": "Nosotros subimos al mirador.",
            "en": "We went up to the lookout."
          },
          {
            "es": "Ellos subieron al árbol.",
            "en": "They climbed the tree."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "subiré",
          "subirás",
          "subirá",
          "subiremos",
          "subirán"
        ],
        "sentences": [
          {
            "es": "Yo subiré después.",
            "en": "I will go up later."
          },
          {
            "es": "Tú subirás al ático.",
            "en": "You will go up to the attic."
          },
          {
            "es": "Él subirá el equipaje.",
            "en": "He will take up the luggage."
          },
          {
            "es": "Nosotros subiremos la montaña.",
            "en": "We will climb the mountain."
          },
          {
            "es": "Ellos subirán al escenario.",
            "en": "They will go up on stage."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "subía",
          "subías",
          "subía",
          "subíamos",
          "subían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo subía mucho.",
            "en": "When I was a kid, I used to go up a lot."
          },
          {
            "es": "Tú subías todos los días.",
            "en": "You used to go up every day."
          },
          {
            "es": "Ella subía de joven.",
            "en": "She used to go up when she was young."
          },
          {
            "es": "Nosotros subíamos juntos en aquellos años.",
            "en": "We used to go up together in those years."
          },
          {
            "es": "Ellos subían cada tarde.",
            "en": "They used to go up every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "suba",
          "subas",
          "suba",
          "subamos",
          "suban"
        ],
        "sentences": [
          {
            "es": "Quieren que yo suba.",
            "en": "They want me to go up."
          },
          {
            "es": "Espero que tú subas pronto.",
            "en": "I hope you go up soon."
          },
          {
            "es": "Es importante que ella suba.",
            "en": "It is important that she go up."
          },
          {
            "es": "Dudo que nosotros subamos hoy.",
            "en": "I doubt that we go up today."
          },
          {
            "es": "Ojalá que ellos suban bien.",
            "en": "I hope they go up well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "partir",
    "english": "to leave / split",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "parto",
          "partes",
          "parte",
          "partimos",
          "parten"
        ],
        "sentences": [
          {
            "es": "Yo parto temprano por la mañana.",
            "en": "I leave early in the morning."
          },
          {
            "es": "Tú partes el pan.",
            "en": "You split the bread."
          },
          {
            "es": "Ella parte mañana.",
            "en": "She leaves tomorrow."
          },
          {
            "es": "Nosotros partimos a las seis.",
            "en": "We leave at six."
          },
          {
            "es": "Ellos parten al amanecer.",
            "en": "They leave at dawn."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "partí",
          "partiste",
          "partió",
          "partimos",
          "partieron"
        ],
        "sentences": [
          {
            "es": "Yo partí a las cinco.",
            "en": "I left at five."
          },
          {
            "es": "Tú partiste sin avisar.",
            "en": "You left without notice."
          },
          {
            "es": "Ella partió hacia el aeropuerto.",
            "en": "She left for the airport."
          },
          {
            "es": "Nosotros partimos juntos.",
            "en": "We left together."
          },
          {
            "es": "Ellos partieron de viaje.",
            "en": "They left on a trip."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "partiré",
          "partirás",
          "partirá",
          "partiremos",
          "partirán"
        ],
        "sentences": [
          {
            "es": "Yo partiré el viernes.",
            "en": "I will leave on Friday."
          },
          {
            "es": "Tú partirás con nosotros.",
            "en": "You will leave with us."
          },
          {
            "es": "Ella partirá pronto.",
            "en": "She will leave soon."
          },
          {
            "es": "Nosotros partiremos en tren.",
            "en": "We will leave by train."
          },
          {
            "es": "Ellos partirán muy temprano.",
            "en": "They will leave very early."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "partía",
          "partías",
          "partía",
          "partíamos",
          "partían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo partía mucho.",
            "en": "When I was a kid, I used to leave a lot."
          },
          {
            "es": "Tú partías todos los días.",
            "en": "You used to leave every day."
          },
          {
            "es": "Ella partía de joven.",
            "en": "She used to leave when she was young."
          },
          {
            "es": "Nosotros partíamos juntos en aquellos años.",
            "en": "We used to leave together in those years."
          },
          {
            "es": "Ellos partían cada tarde.",
            "en": "They used to leave every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "parta",
          "partas",
          "parta",
          "partamos",
          "partan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo parta.",
            "en": "They want me to leave."
          },
          {
            "es": "Espero que tú partas pronto.",
            "en": "I hope you leave soon."
          },
          {
            "es": "Es importante que ella parta.",
            "en": "It is important that she leave."
          },
          {
            "es": "Dudo que nosotros partamos hoy.",
            "en": "I doubt that we leave today."
          },
          {
            "es": "Ojalá que ellos partan bien.",
            "en": "I hope they leave well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "ser",
    "english": "to be (permanent)",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "soy",
          "eres",
          "es",
          "somos",
          "son"
        ],
        "sentences": [
          {
            "es": "Yo soy de Estados Unidos.",
            "en": "I am from the United States."
          },
          {
            "es": "Tú eres mi mejor amigo.",
            "en": "You are my best friend."
          },
          {
            "es": "Ella es maestra.",
            "en": "She is a teacher."
          },
          {
            "es": "Nosotros somos hermanos.",
            "en": "We are brothers."
          },
          {
            "es": "Ellos son estudiantes.",
            "en": "They are students."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "fui",
          "fuiste",
          "fue",
          "fuimos",
          "fueron"
        ],
        "sentences": [
          {
            "es": "Yo fui a la fiesta anoche.",
            "en": "I went to the party last night."
          },
          {
            "es": "Tú fuiste muy amable.",
            "en": "You were very kind."
          },
          {
            "es": "Ella fue mi profesora.",
            "en": "She was my professor."
          },
          {
            "es": "Nosotros fuimos al museo.",
            "en": "We went to the museum."
          },
          {
            "es": "Ellos fueron los ganadores.",
            "en": "They were the winners."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "seré",
          "serás",
          "será",
          "seremos",
          "serán"
        ],
        "sentences": [
          {
            "es": "Yo seré médico algún día.",
            "en": "I will be a doctor someday."
          },
          {
            "es": "Tú serás un gran padre.",
            "en": "You will be a great father."
          },
          {
            "es": "Ella será famosa.",
            "en": "She will be famous."
          },
          {
            "es": "Nosotros seremos felices.",
            "en": "We will be happy."
          },
          {
            "es": "Ellos serán nuestros vecinos.",
            "en": "They will be our neighbors."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "era",
          "eras",
          "era",
          "éramos",
          "eran"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo era mucho.",
            "en": "When I was a kid, I used to be a lot."
          },
          {
            "es": "Tú eras todos los días.",
            "en": "You used to be every day."
          },
          {
            "es": "Ella era de joven.",
            "en": "She used to be when she was young."
          },
          {
            "es": "Nosotros éramos juntos en aquellos años.",
            "en": "We used to be together in those years."
          },
          {
            "es": "Ellos eran cada tarde.",
            "en": "They used to be every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "sea",
          "seas",
          "sea",
          "seamos",
          "sean"
        ],
        "sentences": [
          {
            "es": "Quieren que yo sea.",
            "en": "They want me to be."
          },
          {
            "es": "Espero que tú seas pronto.",
            "en": "I hope you be soon."
          },
          {
            "es": "Es importante que ella sea.",
            "en": "It is important that she be."
          },
          {
            "es": "Dudo que nosotros seamos hoy.",
            "en": "I doubt that we be today."
          },
          {
            "es": "Ojalá que ellos sean bien.",
            "en": "I hope they be well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "estar",
    "english": "to be (temporary)",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "estoy",
          "estás",
          "está",
          "estamos",
          "están"
        ],
        "sentences": [
          {
            "es": "Yo estoy en casa.",
            "en": "I am at home."
          },
          {
            "es": "Tú estás cansado.",
            "en": "You are tired."
          },
          {
            "es": "Ella está contenta hoy.",
            "en": "She is happy today."
          },
          {
            "es": "Nosotros estamos en el parque.",
            "en": "We are in the park."
          },
          {
            "es": "Ellos están listos.",
            "en": "They are ready."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "estuve",
          "estuviste",
          "estuvo",
          "estuvimos",
          "estuvieron"
        ],
        "sentences": [
          {
            "es": "Yo estuve enfermo la semana pasada.",
            "en": "I was sick last week."
          },
          {
            "es": "Tú estuviste en mi casa.",
            "en": "You were at my house."
          },
          {
            "es": "Ella estuvo en París.",
            "en": "She was in Paris."
          },
          {
            "es": "Nosotros estuvimos juntos todo el día.",
            "en": "We were together all day."
          },
          {
            "es": "Ellos estuvieron muy ocupados.",
            "en": "They were very busy."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "estaré",
          "estarás",
          "estará",
          "estaremos",
          "estarán"
        ],
        "sentences": [
          {
            "es": "Yo estaré allí pronto.",
            "en": "I will be there soon."
          },
          {
            "es": "Tú estarás bien.",
            "en": "You will be fine."
          },
          {
            "es": "Ella estará en la oficina mañana.",
            "en": "She will be in the office tomorrow."
          },
          {
            "es": "Nosotros estaremos en casa.",
            "en": "We will be at home."
          },
          {
            "es": "Ellos estarán de vacaciones.",
            "en": "They will be on vacation."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "estaba",
          "estabas",
          "estaba",
          "estábamos",
          "estaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo estaba mucho.",
            "en": "When I was a kid, I used to be a lot."
          },
          {
            "es": "Tú estabas todos los días.",
            "en": "You used to be every day."
          },
          {
            "es": "Ella estaba de joven.",
            "en": "She used to be when she was young."
          },
          {
            "es": "Nosotros estábamos juntos en aquellos años.",
            "en": "We used to be together in those years."
          },
          {
            "es": "Ellos estaban cada tarde.",
            "en": "They used to be every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "esté",
          "estés",
          "esté",
          "estemos",
          "estén"
        ],
        "sentences": [
          {
            "es": "Quieren que yo esté.",
            "en": "They want me to be."
          },
          {
            "es": "Espero que tú estés pronto.",
            "en": "I hope you be soon."
          },
          {
            "es": "Es importante que ella esté.",
            "en": "It is important that she be."
          },
          {
            "es": "Dudo que nosotros estemos hoy.",
            "en": "I doubt that we be today."
          },
          {
            "es": "Ojalá que ellos estén bien.",
            "en": "I hope they be well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "ir",
    "english": "to go",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "voy",
          "vas",
          "va",
          "vamos",
          "van"
        ],
        "sentences": [
          {
            "es": "Yo voy al trabajo en bicicleta.",
            "en": "I go to work by bicycle."
          },
          {
            "es": "Tú vas a la escuela.",
            "en": "You go to school."
          },
          {
            "es": "Ella va al gimnasio.",
            "en": "She goes to the gym."
          },
          {
            "es": "Nosotros vamos al cine.",
            "en": "We go to the movies."
          },
          {
            "es": "Ellos van a la playa.",
            "en": "They go to the beach."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "fui",
          "fuiste",
          "fue",
          "fuimos",
          "fueron"
        ],
        "sentences": [
          {
            "es": "Yo fui a México el verano pasado.",
            "en": "I went to Mexico last summer."
          },
          {
            "es": "Tú fuiste a la fiesta.",
            "en": "You went to the party."
          },
          {
            "es": "Ella fue al doctor.",
            "en": "She went to the doctor."
          },
          {
            "es": "Nosotros fuimos al concierto.",
            "en": "We went to the concert."
          },
          {
            "es": "Ellos fueron de viaje.",
            "en": "They went on a trip."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "iré",
          "irás",
          "irá",
          "iremos",
          "irán"
        ],
        "sentences": [
          {
            "es": "Yo iré contigo.",
            "en": "I will go with you."
          },
          {
            "es": "Tú irás a la universidad.",
            "en": "You will go to university."
          },
          {
            "es": "Ella irá al banco mañana.",
            "en": "She will go to the bank tomorrow."
          },
          {
            "es": "Nosotros iremos al partido.",
            "en": "We will go to the game."
          },
          {
            "es": "Ellos irán al concierto.",
            "en": "They will go to the concert."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "iba",
          "ibas",
          "iba",
          "íbamos",
          "iban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo iba mucho.",
            "en": "When I was a kid, I used to go a lot."
          },
          {
            "es": "Tú ibas todos los días.",
            "en": "You used to go every day."
          },
          {
            "es": "Ella iba de joven.",
            "en": "She used to go when she was young."
          },
          {
            "es": "Nosotros íbamos juntos en aquellos años.",
            "en": "We used to go together in those years."
          },
          {
            "es": "Ellos iban cada tarde.",
            "en": "They used to go every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "vaya",
          "vayas",
          "vaya",
          "vayamos",
          "vayan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo vaya.",
            "en": "They want me to go."
          },
          {
            "es": "Espero que tú vayas pronto.",
            "en": "I hope you go soon."
          },
          {
            "es": "Es importante que ella vaya.",
            "en": "It is important that she go."
          },
          {
            "es": "Dudo que nosotros vayamos hoy.",
            "en": "I doubt that we go today."
          },
          {
            "es": "Ojalá que ellos vayan bien.",
            "en": "I hope they go well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "tener",
    "english": "to have",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "tengo",
          "tienes",
          "tiene",
          "tenemos",
          "tienen"
        ],
        "sentences": [
          {
            "es": "Yo tengo dos hermanos.",
            "en": "I have two brothers."
          },
          {
            "es": "Tú tienes mucha suerte.",
            "en": "You are very lucky."
          },
          {
            "es": "Ella tiene veinte años.",
            "en": "She is twenty years old."
          },
          {
            "es": "Nosotros tenemos una casa grande.",
            "en": "We have a big house."
          },
          {
            "es": "Ellos tienen tres perros.",
            "en": "They have three dogs."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "tuve",
          "tuviste",
          "tuvo",
          "tuvimos",
          "tuvieron"
        ],
        "sentences": [
          {
            "es": "Yo tuve un examen difícil.",
            "en": "I had a difficult exam."
          },
          {
            "es": "Tú tuviste un accidente pequeño.",
            "en": "You had a small accident."
          },
          {
            "es": "Ella tuvo una gran idea.",
            "en": "She had a great idea."
          },
          {
            "es": "Nosotros tuvimos suerte.",
            "en": "We had luck."
          },
          {
            "es": "Ellos tuvieron una boda hermosa.",
            "en": "They had a beautiful wedding."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "tendré",
          "tendrás",
          "tendrá",
          "tendremos",
          "tendrán"
        ],
        "sentences": [
          {
            "es": "Yo tendré tiempo el sábado.",
            "en": "I will have time on Saturday."
          },
          {
            "es": "Tú tendrás la respuesta pronto.",
            "en": "You will have the answer soon."
          },
          {
            "es": "Ella tendrá éxito.",
            "en": "She will have success."
          },
          {
            "es": "Nosotros tendremos una fiesta.",
            "en": "We will have a party."
          },
          {
            "es": "Ellos tendrán que esperar.",
            "en": "They will have to wait."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "tenía",
          "tenías",
          "tenía",
          "teníamos",
          "tenían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo tenía mucho.",
            "en": "When I was a kid, I used to have a lot."
          },
          {
            "es": "Tú tenías todos los días.",
            "en": "You used to have every day."
          },
          {
            "es": "Ella tenía de joven.",
            "en": "She used to have when she was young."
          },
          {
            "es": "Nosotros teníamos juntos en aquellos años.",
            "en": "We used to have together in those years."
          },
          {
            "es": "Ellos tenían cada tarde.",
            "en": "They used to have every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "tenga",
          "tengas",
          "tenga",
          "tengamos",
          "tengan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo tenga.",
            "en": "They want me to have."
          },
          {
            "es": "Espero que tú tengas pronto.",
            "en": "I hope you have soon."
          },
          {
            "es": "Es importante que ella tenga.",
            "en": "It is important that she have."
          },
          {
            "es": "Dudo que nosotros tengamos hoy.",
            "en": "I doubt that we have today."
          },
          {
            "es": "Ojalá que ellos tengan bien.",
            "en": "I hope they have well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "hacer",
    "english": "to do / to make",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "hago",
          "haces",
          "hace",
          "hacemos",
          "hacen"
        ],
        "sentences": [
          {
            "es": "Yo hago ejercicio cada día.",
            "en": "I exercise every day."
          },
          {
            "es": "Tú haces la cena los martes.",
            "en": "You make dinner on Tuesdays."
          },
          {
            "es": "Ella hace su tarea por la tarde.",
            "en": "She does her homework in the afternoon."
          },
          {
            "es": "Nosotros hacemos planes para mañana.",
            "en": "We make plans for tomorrow."
          },
          {
            "es": "Ellos hacen mucho ruido.",
            "en": "They make a lot of noise."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "hice",
          "hiciste",
          "hizo",
          "hicimos",
          "hicieron"
        ],
        "sentences": [
          {
            "es": "Yo hice un pastel ayer.",
            "en": "I made a cake yesterday."
          },
          {
            "es": "Tú hiciste un buen trabajo.",
            "en": "You did a good job."
          },
          {
            "es": "Ella hizo una pregunta.",
            "en": "She asked a question."
          },
          {
            "es": "Nosotros hicimos los planes.",
            "en": "We made the plans."
          },
          {
            "es": "Ellos hicieron una fiesta.",
            "en": "They had a party."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "haré",
          "harás",
          "hará",
          "haremos",
          "harán"
        ],
        "sentences": [
          {
            "es": "Yo haré la cena esta noche.",
            "en": "I will make dinner tonight."
          },
          {
            "es": "Tú harás historia.",
            "en": "You will make history."
          },
          {
            "es": "Ella hará lo correcto.",
            "en": "She will do the right thing."
          },
          {
            "es": "Nosotros haremos un viaje.",
            "en": "We will take a trip."
          },
          {
            "es": "Ellos harán lo posible.",
            "en": "They will do what they can."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "hacía",
          "hacías",
          "hacía",
          "hacíamos",
          "hacían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo hacía mucho.",
            "en": "When I was a kid, I used to do a lot."
          },
          {
            "es": "Tú hacías todos los días.",
            "en": "You used to do every day."
          },
          {
            "es": "Ella hacía de joven.",
            "en": "She used to do when she was young."
          },
          {
            "es": "Nosotros hacíamos juntos en aquellos años.",
            "en": "We used to do together in those years."
          },
          {
            "es": "Ellos hacían cada tarde.",
            "en": "They used to do every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "haga",
          "hagas",
          "haga",
          "hagamos",
          "hagan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo haga.",
            "en": "They want me to do."
          },
          {
            "es": "Espero que tú hagas pronto.",
            "en": "I hope you do soon."
          },
          {
            "es": "Es importante que ella haga.",
            "en": "It is important that she do."
          },
          {
            "es": "Dudo que nosotros hagamos hoy.",
            "en": "I doubt that we do today."
          },
          {
            "es": "Ojalá que ellos hagan bien.",
            "en": "I hope they do well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "querer",
    "english": "to want / to love",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "quiero",
          "quieres",
          "quiere",
          "queremos",
          "quieren"
        ],
        "sentences": [
          {
            "es": "Yo quiero un café por favor.",
            "en": "I want a coffee please."
          },
          {
            "es": "Tú quieres ir al cine.",
            "en": "You want to go to the movies."
          },
          {
            "es": "Ella quiere a su familia.",
            "en": "She loves her family."
          },
          {
            "es": "Nosotros queremos viajar.",
            "en": "We want to travel."
          },
          {
            "es": "Ellos quieren aprender español.",
            "en": "They want to learn Spanish."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "quise",
          "quisiste",
          "quiso",
          "quisimos",
          "quisieron"
        ],
        "sentences": [
          {
            "es": "Yo quise ayudar pero no pude.",
            "en": "I wanted to help but I couldn't."
          },
          {
            "es": "Tú quisiste comprar el libro.",
            "en": "You wanted to buy the book."
          },
          {
            "es": "Ella quiso decir algo.",
            "en": "She wanted to say something."
          },
          {
            "es": "Nosotros quisimos salir temprano.",
            "en": "We wanted to leave early."
          },
          {
            "es": "Ellos quisieron acompañarnos.",
            "en": "They wanted to come with us."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "querré",
          "querrás",
          "querrá",
          "querremos",
          "querrán"
        ],
        "sentences": [
          {
            "es": "Yo querré verte luego.",
            "en": "I will want to see you later."
          },
          {
            "es": "Tú querrás saber esto.",
            "en": "You will want to know this."
          },
          {
            "es": "Ella querrá la verdad.",
            "en": "She will want the truth."
          },
          {
            "es": "Nosotros querremos descansar.",
            "en": "We will want to rest."
          },
          {
            "es": "Ellos querrán más detalles.",
            "en": "They will want more details."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "quería",
          "querías",
          "quería",
          "queríamos",
          "querían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo quería mucho.",
            "en": "When I was a kid, I used to want a lot."
          },
          {
            "es": "Tú querías todos los días.",
            "en": "You used to want every day."
          },
          {
            "es": "Ella quería de joven.",
            "en": "She used to want when she was young."
          },
          {
            "es": "Nosotros queríamos juntos en aquellos años.",
            "en": "We used to want together in those years."
          },
          {
            "es": "Ellos querían cada tarde.",
            "en": "They used to want every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "quiera",
          "quieras",
          "quiera",
          "queramos",
          "quieran"
        ],
        "sentences": [
          {
            "es": "Quieren que yo quiera.",
            "en": "They want me to want."
          },
          {
            "es": "Espero que tú quieras pronto.",
            "en": "I hope you want soon."
          },
          {
            "es": "Es importante que ella quiera.",
            "en": "It is important that she want."
          },
          {
            "es": "Dudo que nosotros queramos hoy.",
            "en": "I doubt that we want today."
          },
          {
            "es": "Ojalá que ellos quieran bien.",
            "en": "I hope they want well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "poder",
    "english": "to be able to / can",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "puedo",
          "puedes",
          "puede",
          "podemos",
          "pueden"
        ],
        "sentences": [
          {
            "es": "Yo puedo hablar tres idiomas.",
            "en": "I can speak three languages."
          },
          {
            "es": "Tú puedes hacerlo.",
            "en": "You can do it."
          },
          {
            "es": "Ella puede llegar tarde.",
            "en": "She might arrive late."
          },
          {
            "es": "Nosotros podemos ayudar.",
            "en": "We can help."
          },
          {
            "es": "Ellos pueden venir mañana.",
            "en": "They can come tomorrow."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "pude",
          "pudiste",
          "pudo",
          "pudimos",
          "pudieron"
        ],
        "sentences": [
          {
            "es": "Yo pude terminar a tiempo.",
            "en": "I was able to finish on time."
          },
          {
            "es": "Tú pudiste ver el partido.",
            "en": "You were able to watch the game."
          },
          {
            "es": "Ella pudo hacer la reserva.",
            "en": "She was able to make the reservation."
          },
          {
            "es": "Nosotros pudimos resolverlo.",
            "en": "We were able to solve it."
          },
          {
            "es": "Ellos pudieron asistir.",
            "en": "They were able to attend."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "podré",
          "podrás",
          "podrá",
          "podremos",
          "podrán"
        ],
        "sentences": [
          {
            "es": "Yo podré ayudarte mañana.",
            "en": "I will be able to help you tomorrow."
          },
          {
            "es": "Tú podrás descansar pronto.",
            "en": "You will be able to rest soon."
          },
          {
            "es": "Ella podrá viajar el próximo año.",
            "en": "She will be able to travel next year."
          },
          {
            "es": "Nosotros podremos vernos pronto.",
            "en": "We will be able to see each other soon."
          },
          {
            "es": "Ellos podrán comprar la casa.",
            "en": "They will be able to buy the house."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "podía",
          "podías",
          "podía",
          "podíamos",
          "podían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo podía mucho.",
            "en": "When I was a kid, I used to be able to a lot."
          },
          {
            "es": "Tú podías todos los días.",
            "en": "You used to be able to every day."
          },
          {
            "es": "Ella podía de joven.",
            "en": "She used to be able to when she was young."
          },
          {
            "es": "Nosotros podíamos juntos en aquellos años.",
            "en": "We used to be able to together in those years."
          },
          {
            "es": "Ellos podían cada tarde.",
            "en": "They used to be able to every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "pueda",
          "puedas",
          "pueda",
          "podamos",
          "puedan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo pueda.",
            "en": "They want me to be able to."
          },
          {
            "es": "Espero que tú puedas pronto.",
            "en": "I hope you be able to soon."
          },
          {
            "es": "Es importante que ella pueda.",
            "en": "It is important that she be able to."
          },
          {
            "es": "Dudo que nosotros podamos hoy.",
            "en": "I doubt that we be able to today."
          },
          {
            "es": "Ojalá que ellos puedan bien.",
            "en": "I hope they be able to well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "ver",
    "english": "to see",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "veo",
          "ves",
          "ve",
          "vemos",
          "ven"
        ],
        "sentences": [
          {
            "es": "Yo veo la televisión por la noche.",
            "en": "I watch television at night."
          },
          {
            "es": "Tú ves muchas películas.",
            "en": "You watch many movies."
          },
          {
            "es": "Ella ve a sus amigos los domingos.",
            "en": "She sees her friends on Sundays."
          },
          {
            "es": "Nosotros vemos las estrellas.",
            "en": "We see the stars."
          },
          {
            "es": "Ellos ven a sus abuelos.",
            "en": "They see their grandparents."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "vi",
          "viste",
          "vio",
          "vimos",
          "vieron"
        ],
        "sentences": [
          {
            "es": "Yo vi un pájaro en el árbol.",
            "en": "I saw a bird in the tree."
          },
          {
            "es": "Tú viste la película anoche.",
            "en": "You watched the movie last night."
          },
          {
            "es": "Ella vio a su hermana.",
            "en": "She saw her sister."
          },
          {
            "es": "Nosotros vimos un eclipse.",
            "en": "We saw an eclipse."
          },
          {
            "es": "Ellos vieron al doctor.",
            "en": "They saw the doctor."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "veré",
          "verás",
          "verá",
          "veremos",
          "verán"
        ],
        "sentences": [
          {
            "es": "Yo veré la nueva exposición.",
            "en": "I will see the new exhibition."
          },
          {
            "es": "Tú verás el resultado pronto.",
            "en": "You will see the result soon."
          },
          {
            "es": "Ella verá a su novio mañana.",
            "en": "She will see her boyfriend tomorrow."
          },
          {
            "es": "Nosotros veremos qué pasa.",
            "en": "We will see what happens."
          },
          {
            "es": "Ellos verán la verdad.",
            "en": "They will see the truth."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "veía",
          "veías",
          "veía",
          "veíamos",
          "veían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo veía mucho.",
            "en": "When I was a kid, I used to see a lot."
          },
          {
            "es": "Tú veías todos los días.",
            "en": "You used to see every day."
          },
          {
            "es": "Ella veía de joven.",
            "en": "She used to see when she was young."
          },
          {
            "es": "Nosotros veíamos juntos en aquellos años.",
            "en": "We used to see together in those years."
          },
          {
            "es": "Ellos veían cada tarde.",
            "en": "They used to see every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "vea",
          "veas",
          "vea",
          "veamos",
          "vean"
        ],
        "sentences": [
          {
            "es": "Quieren que yo vea.",
            "en": "They want me to see."
          },
          {
            "es": "Espero que tú veas pronto.",
            "en": "I hope you see soon."
          },
          {
            "es": "Es importante que ella vea.",
            "en": "It is important that she see."
          },
          {
            "es": "Dudo que nosotros veamos hoy.",
            "en": "I doubt that we see today."
          },
          {
            "es": "Ojalá que ellos vean bien.",
            "en": "I hope they see well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "decir",
    "english": "to say / to tell",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "digo",
          "dices",
          "dice",
          "decimos",
          "dicen"
        ],
        "sentences": [
          {
            "es": "Yo digo la verdad siempre.",
            "en": "I always tell the truth."
          },
          {
            "es": "Tú dices muchas cosas interesantes.",
            "en": "You say many interesting things."
          },
          {
            "es": "Ella dice que viene a las ocho.",
            "en": "She says she's coming at eight."
          },
          {
            "es": "Nosotros decimos lo que pensamos.",
            "en": "We say what we think."
          },
          {
            "es": "Ellos dicen que el examen es fácil.",
            "en": "They say the exam is easy."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "dije",
          "dijiste",
          "dijo",
          "dijimos",
          "dijeron"
        ],
        "sentences": [
          {
            "es": "Yo dije adiós a mis amigos.",
            "en": "I said goodbye to my friends."
          },
          {
            "es": "Tú dijiste algo importante.",
            "en": "You said something important."
          },
          {
            "es": "Ella dijo la respuesta correcta.",
            "en": "She said the correct answer."
          },
          {
            "es": "Nosotros dijimos la verdad al juez.",
            "en": "We told the truth to the judge."
          },
          {
            "es": "Ellos dijeron muchas mentiras.",
            "en": "They told many lies."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "diré",
          "dirás",
          "dirá",
          "diremos",
          "dirán"
        ],
        "sentences": [
          {
            "es": "Yo diré lo que pienso.",
            "en": "I will say what I think."
          },
          {
            "es": "Tú dirás la respuesta correcta.",
            "en": "You will say the right answer."
          },
          {
            "es": "Ella dirá su opinión.",
            "en": "She will give her opinion."
          },
          {
            "es": "Nosotros diremos sí o no.",
            "en": "We will say yes or no."
          },
          {
            "es": "Ellos dirán algo importante.",
            "en": "They will say something important."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "decía",
          "decías",
          "decía",
          "decíamos",
          "decían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo decía mucho.",
            "en": "When I was a kid, I used to say a lot."
          },
          {
            "es": "Tú decías todos los días.",
            "en": "You used to say every day."
          },
          {
            "es": "Ella decía de joven.",
            "en": "She used to say when she was young."
          },
          {
            "es": "Nosotros decíamos juntos en aquellos años.",
            "en": "We used to say together in those years."
          },
          {
            "es": "Ellos decían cada tarde.",
            "en": "They used to say every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "diga",
          "digas",
          "diga",
          "digamos",
          "digan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo diga.",
            "en": "They want me to say."
          },
          {
            "es": "Espero que tú digas pronto.",
            "en": "I hope you say soon."
          },
          {
            "es": "Es importante que ella diga.",
            "en": "It is important that she say."
          },
          {
            "es": "Dudo que nosotros digamos hoy.",
            "en": "I doubt that we say today."
          },
          {
            "es": "Ojalá que ellos digan bien.",
            "en": "I hope they say well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "dar",
    "english": "to give",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "doy",
          "das",
          "da",
          "damos",
          "dan"
        ],
        "sentences": [
          {
            "es": "Yo doy regalos en Navidad.",
            "en": "I give gifts at Christmas."
          },
          {
            "es": "Tú das buenos consejos.",
            "en": "You give good advice."
          },
          {
            "es": "Ella da clases de piano.",
            "en": "She gives piano lessons."
          },
          {
            "es": "Nosotros damos dinero a la caridad.",
            "en": "We give money to charity."
          },
          {
            "es": "Ellos dan flores a su madre.",
            "en": "They give flowers to their mother."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "di",
          "diste",
          "dio",
          "dimos",
          "dieron"
        ],
        "sentences": [
          {
            "es": "Yo di mi opinión en la reunión.",
            "en": "I gave my opinion at the meeting."
          },
          {
            "es": "Tú diste un buen discurso.",
            "en": "You gave a good speech."
          },
          {
            "es": "Ella dio una vuelta por el parque.",
            "en": "She took a walk in the park."
          },
          {
            "es": "Nosotros dimos las gracias al chef.",
            "en": "We thanked the chef."
          },
          {
            "es": "Ellos dieron muchos regalos.",
            "en": "They gave many gifts."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "daré",
          "darás",
          "dará",
          "daremos",
          "darán"
        ],
        "sentences": [
          {
            "es": "Yo daré una fiesta el sábado.",
            "en": "I will throw a party on Saturday."
          },
          {
            "es": "Tú darás el examen mañana.",
            "en": "You will take the exam tomorrow."
          },
          {
            "es": "Ella dará una clase nueva.",
            "en": "She will give a new class."
          },
          {
            "es": "Nosotros daremos lo mejor.",
            "en": "We will give our best."
          },
          {
            "es": "Ellos darán las llaves al portero.",
            "en": "They will give the keys to the doorman."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "daba",
          "dabas",
          "daba",
          "dábamos",
          "daban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo daba mucho.",
            "en": "When I was a kid, I used to give a lot."
          },
          {
            "es": "Tú dabas todos los días.",
            "en": "You used to give every day."
          },
          {
            "es": "Ella daba de joven.",
            "en": "She used to give when she was young."
          },
          {
            "es": "Nosotros dábamos juntos en aquellos años.",
            "en": "We used to give together in those years."
          },
          {
            "es": "Ellos daban cada tarde.",
            "en": "They used to give every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "dé",
          "des",
          "dé",
          "demos",
          "den"
        ],
        "sentences": [
          {
            "es": "Quieren que yo dé.",
            "en": "They want me to give."
          },
          {
            "es": "Espero que tú des pronto.",
            "en": "I hope you give soon."
          },
          {
            "es": "Es importante que ella dé.",
            "en": "It is important that she give."
          },
          {
            "es": "Dudo que nosotros demos hoy.",
            "en": "I doubt that we give today."
          },
          {
            "es": "Ojalá que ellos den bien.",
            "en": "I hope they give well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "saber",
    "english": "to know (a fact)",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "sé",
          "sabes",
          "sabe",
          "sabemos",
          "saben"
        ],
        "sentences": [
          {
            "es": "Yo sé hablar tres idiomas.",
            "en": "I know how to speak three languages."
          },
          {
            "es": "Tú sabes la respuesta.",
            "en": "You know the answer."
          },
          {
            "es": "Ella sabe cocinar muy bien.",
            "en": "She knows how to cook very well."
          },
          {
            "es": "Nosotros sabemos el camino.",
            "en": "We know the way."
          },
          {
            "es": "Ellos saben mucho de historia.",
            "en": "They know a lot about history."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "supe",
          "supiste",
          "supo",
          "supimos",
          "supieron"
        ],
        "sentences": [
          {
            "es": "Yo supe la noticia ayer.",
            "en": "I learned the news yesterday."
          },
          {
            "es": "Tú supiste qué hacer.",
            "en": "You knew what to do."
          },
          {
            "es": "Ella supo la verdad anoche.",
            "en": "She found out the truth last night."
          },
          {
            "es": "Nosotros supimos el resultado.",
            "en": "We found out the result."
          },
          {
            "es": "Ellos supieron del accidente.",
            "en": "They learned about the accident."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "sabré",
          "sabrás",
          "sabrá",
          "sabremos",
          "sabrán"
        ],
        "sentences": [
          {
            "es": "Yo sabré la verdad pronto.",
            "en": "I will know the truth soon."
          },
          {
            "es": "Tú sabrás cómo resolverlo.",
            "en": "You will know how to solve it."
          },
          {
            "es": "Ella sabrá qué decir.",
            "en": "She will know what to say."
          },
          {
            "es": "Nosotros sabremos los resultados.",
            "en": "We will know the results."
          },
          {
            "es": "Ellos sabrán la decisión final.",
            "en": "They will know the final decision."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "sabía",
          "sabías",
          "sabía",
          "sabíamos",
          "sabían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo sabía mucho.",
            "en": "When I was a kid, I used to know a lot."
          },
          {
            "es": "Tú sabías todos los días.",
            "en": "You used to know every day."
          },
          {
            "es": "Ella sabía de joven.",
            "en": "She used to know when she was young."
          },
          {
            "es": "Nosotros sabíamos juntos en aquellos años.",
            "en": "We used to know together in those years."
          },
          {
            "es": "Ellos sabían cada tarde.",
            "en": "They used to know every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "sepa",
          "sepas",
          "sepa",
          "sepamos",
          "sepan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo sepa.",
            "en": "They want me to know."
          },
          {
            "es": "Espero que tú sepas pronto.",
            "en": "I hope you know soon."
          },
          {
            "es": "Es importante que ella sepa.",
            "en": "It is important that she know."
          },
          {
            "es": "Dudo que nosotros sepamos hoy.",
            "en": "I doubt that we know today."
          },
          {
            "es": "Ojalá que ellos sepan bien.",
            "en": "I hope they know well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "conocer",
    "english": "to know (a person/place)",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "conozco",
          "conoces",
          "conoce",
          "conocemos",
          "conocen"
        ],
        "sentences": [
          {
            "es": "Yo conozco a tu hermana.",
            "en": "I know your sister."
          },
          {
            "es": "Tú conoces la ciudad muy bien.",
            "en": "You know the city very well."
          },
          {
            "es": "Ella conoce a muchas personas.",
            "en": "She knows many people."
          },
          {
            "es": "Nosotros conocemos un buen restaurante.",
            "en": "We know a good restaurant."
          },
          {
            "es": "Ellos conocen ese país.",
            "en": "They know that country."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "conocí",
          "conociste",
          "conoció",
          "conocimos",
          "conocieron"
        ],
        "sentences": [
          {
            "es": "Yo conocí a mi esposa en la universidad.",
            "en": "I met my wife at university."
          },
          {
            "es": "Tú conociste a mi familia ayer.",
            "en": "You met my family yesterday."
          },
          {
            "es": "Ella conoció Madrid el año pasado.",
            "en": "She visited Madrid last year."
          },
          {
            "es": "Nosotros conocimos al nuevo profesor.",
            "en": "We met the new teacher."
          },
          {
            "es": "Ellos conocieron París en verano.",
            "en": "They visited Paris in summer."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "conoceré",
          "conocerás",
          "conocerá",
          "conoceremos",
          "conocerán"
        ],
        "sentences": [
          {
            "es": "Yo conoceré a tu novio mañana.",
            "en": "I will meet your boyfriend tomorrow."
          },
          {
            "es": "Tú conocerás un mundo nuevo.",
            "en": "You will know a new world."
          },
          {
            "es": "Ella conocerá al jefe en la reunión.",
            "en": "She will meet the boss at the meeting."
          },
          {
            "es": "Nosotros conoceremos la verdad.",
            "en": "We will learn the truth."
          },
          {
            "es": "Ellos conocerán Barcelona pronto.",
            "en": "They will visit Barcelona soon."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "conocía",
          "conocías",
          "conocía",
          "conocíamos",
          "conocían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo conocía mucho.",
            "en": "When I was a kid, I used to know a lot."
          },
          {
            "es": "Tú conocías todos los días.",
            "en": "You used to know every day."
          },
          {
            "es": "Ella conocía de joven.",
            "en": "She used to know when she was young."
          },
          {
            "es": "Nosotros conocíamos juntos en aquellos años.",
            "en": "We used to know together in those years."
          },
          {
            "es": "Ellos conocían cada tarde.",
            "en": "They used to know every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "conozca",
          "conozcas",
          "conozca",
          "conozcamos",
          "conozcan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo conozca.",
            "en": "They want me to know."
          },
          {
            "es": "Espero que tú conozcas pronto.",
            "en": "I hope you know soon."
          },
          {
            "es": "Es importante que ella conozca.",
            "en": "It is important that she know."
          },
          {
            "es": "Dudo que nosotros conozcamos hoy.",
            "en": "I doubt that we know today."
          },
          {
            "es": "Ojalá que ellos conozcan bien.",
            "en": "I hope they know well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "venir",
    "english": "to come",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "vengo",
          "vienes",
          "viene",
          "venimos",
          "vienen"
        ],
        "sentences": [
          {
            "es": "Yo vengo de Estados Unidos.",
            "en": "I come from the United States."
          },
          {
            "es": "Tú vienes a casa después del trabajo.",
            "en": "You come home after work."
          },
          {
            "es": "Ella viene a vernos cada semana.",
            "en": "She comes to see us every week."
          },
          {
            "es": "Nosotros venimos en autobús.",
            "en": "We come by bus."
          },
          {
            "es": "Ellos vienen de una familia grande.",
            "en": "They come from a big family."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "vine",
          "viniste",
          "vino",
          "vinimos",
          "vinieron"
        ],
        "sentences": [
          {
            "es": "Yo vine en avión desde Nueva York.",
            "en": "I came by plane from New York."
          },
          {
            "es": "Tú viniste a la fiesta anoche.",
            "en": "You came to the party last night."
          },
          {
            "es": "Ella vino sin avisar.",
            "en": "She came without warning."
          },
          {
            "es": "Nosotros vinimos juntos.",
            "en": "We came together."
          },
          {
            "es": "Ellos vinieron tarde a la reunión.",
            "en": "They came late to the meeting."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "vendré",
          "vendrás",
          "vendrá",
          "vendremos",
          "vendrán"
        ],
        "sentences": [
          {
            "es": "Yo vendré temprano mañana.",
            "en": "I will come early tomorrow."
          },
          {
            "es": "Tú vendrás con nosotros al cine.",
            "en": "You will come with us to the movies."
          },
          {
            "es": "Ella vendrá a la boda.",
            "en": "She will come to the wedding."
          },
          {
            "es": "Nosotros vendremos en tren.",
            "en": "We will come by train."
          },
          {
            "es": "Ellos vendrán al concierto.",
            "en": "They will come to the concert."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "venía",
          "venías",
          "venía",
          "veníamos",
          "venían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo venía mucho.",
            "en": "When I was a kid, I used to come a lot."
          },
          {
            "es": "Tú venías todos los días.",
            "en": "You used to come every day."
          },
          {
            "es": "Ella venía de joven.",
            "en": "She used to come when she was young."
          },
          {
            "es": "Nosotros veníamos juntos en aquellos años.",
            "en": "We used to come together in those years."
          },
          {
            "es": "Ellos venían cada tarde.",
            "en": "They used to come every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "venga",
          "vengas",
          "venga",
          "vengamos",
          "vengan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo venga.",
            "en": "They want me to come."
          },
          {
            "es": "Espero que tú vengas pronto.",
            "en": "I hope you come soon."
          },
          {
            "es": "Es importante que ella venga.",
            "en": "It is important that she come."
          },
          {
            "es": "Dudo que nosotros vengamos hoy.",
            "en": "I doubt that we come today."
          },
          {
            "es": "Ojalá que ellos vengan bien.",
            "en": "I hope they come well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "dormir",
    "english": "to sleep",
    "type": "stem-o-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "duermo",
          "duermes",
          "duerme",
          "dormimos",
          "duermen"
        ],
        "sentences": [
          {
            "es": "Yo duermo ocho horas cada noche.",
            "en": "I sleep eight hours every night."
          },
          {
            "es": "Tú duermes muy poco.",
            "en": "You sleep very little."
          },
          {
            "es": "Ella duerme con su gato.",
            "en": "She sleeps with her cat."
          },
          {
            "es": "Nosotros dormimos en el hotel.",
            "en": "We sleep at the hotel."
          },
          {
            "es": "Ellos duermen toda la mañana.",
            "en": "They sleep all morning."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "dormí",
          "dormiste",
          "durmió",
          "dormimos",
          "durmieron"
        ],
        "sentences": [
          {
            "es": "Yo dormí muy bien anoche.",
            "en": "I slept very well last night."
          },
          {
            "es": "Tú dormiste hasta las diez.",
            "en": "You slept until ten."
          },
          {
            "es": "Ella durmió en el sofá.",
            "en": "She slept on the couch."
          },
          {
            "es": "Nosotros dormimos en la playa.",
            "en": "We slept on the beach."
          },
          {
            "es": "Ellos durmieron poco.",
            "en": "They slept little."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "dormiré",
          "dormirás",
          "dormirá",
          "dormiremos",
          "dormirán"
        ],
        "sentences": [
          {
            "es": "Yo dormiré temprano hoy.",
            "en": "I will sleep early today."
          },
          {
            "es": "Tú dormirás mejor con esta almohada.",
            "en": "You will sleep better with this pillow."
          },
          {
            "es": "Ella dormirá en el cuarto de invitados.",
            "en": "She will sleep in the guest room."
          },
          {
            "es": "Nosotros dormiremos en la tienda.",
            "en": "We will sleep in the tent."
          },
          {
            "es": "Ellos dormirán todo el día.",
            "en": "They will sleep all day."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "dormía",
          "dormías",
          "dormía",
          "dormíamos",
          "dormían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo dormía mucho.",
            "en": "When I was a kid, I used to sleep a lot."
          },
          {
            "es": "Tú dormías todos los días.",
            "en": "You used to sleep every day."
          },
          {
            "es": "Ella dormía de joven.",
            "en": "She used to sleep when she was young."
          },
          {
            "es": "Nosotros dormíamos juntos en aquellos años.",
            "en": "We used to sleep together in those years."
          },
          {
            "es": "Ellos dormían cada tarde.",
            "en": "They used to sleep every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "duerma",
          "duermas",
          "duerma",
          "durmamos",
          "duerman"
        ],
        "sentences": [
          {
            "es": "Quieren que yo duerma.",
            "en": "They want me to sleep."
          },
          {
            "es": "Espero que tú duermas pronto.",
            "en": "I hope you sleep soon."
          },
          {
            "es": "Es importante que ella duerma.",
            "en": "It is important that she sleep."
          },
          {
            "es": "Dudo que nosotros durmamos hoy.",
            "en": "I doubt that we sleep today."
          },
          {
            "es": "Ojalá que ellos duerman bien.",
            "en": "I hope they sleep well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "jugar",
    "english": "to play",
    "type": "stem-u-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "juego",
          "juegas",
          "juega",
          "jugamos",
          "juegan"
        ],
        "sentences": [
          {
            "es": "Yo juego al fútbol los sábados.",
            "en": "I play soccer on Saturdays."
          },
          {
            "es": "Tú juegas muy bien al tenis.",
            "en": "You play tennis very well."
          },
          {
            "es": "Ella juega con sus muñecas.",
            "en": "She plays with her dolls."
          },
          {
            "es": "Nosotros jugamos a las cartas.",
            "en": "We play cards."
          },
          {
            "es": "Ellos juegan en el parque.",
            "en": "They play in the park."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "jugué",
          "jugaste",
          "jugó",
          "jugamos",
          "jugaron"
        ],
        "sentences": [
          {
            "es": "Yo jugué al ajedrez con mi abuelo.",
            "en": "I played chess with my grandfather."
          },
          {
            "es": "Tú jugaste un partido fantástico.",
            "en": "You played a fantastic game."
          },
          {
            "es": "Ella jugó en el equipo nacional.",
            "en": "She played on the national team."
          },
          {
            "es": "Nosotros jugamos toda la tarde.",
            "en": "We played all afternoon."
          },
          {
            "es": "Ellos jugaron mejor que nunca.",
            "en": "They played better than ever."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "jugaré",
          "jugarás",
          "jugará",
          "jugaremos",
          "jugarán"
        ],
        "sentences": [
          {
            "es": "Yo jugaré al baloncesto mañana.",
            "en": "I will play basketball tomorrow."
          },
          {
            "es": "Tú jugarás en el torneo.",
            "en": "You will play in the tournament."
          },
          {
            "es": "Ella jugará el papel principal.",
            "en": "She will play the main role."
          },
          {
            "es": "Nosotros jugaremos juntos.",
            "en": "We will play together."
          },
          {
            "es": "Ellos jugarán contra el campeón.",
            "en": "They will play against the champion."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "jugaba",
          "jugabas",
          "jugaba",
          "jugábamos",
          "jugaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo jugaba mucho.",
            "en": "When I was a kid, I used to play a lot."
          },
          {
            "es": "Tú jugabas todos los días.",
            "en": "You used to play every day."
          },
          {
            "es": "Ella jugaba de joven.",
            "en": "She used to play when she was young."
          },
          {
            "es": "Nosotros jugábamos juntos en aquellos años.",
            "en": "We used to play together in those years."
          },
          {
            "es": "Ellos jugaban cada tarde.",
            "en": "They used to play every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "juegue",
          "juegues",
          "juegue",
          "juguemos",
          "jueguen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo juegue.",
            "en": "They want me to play."
          },
          {
            "es": "Espero que tú juegues pronto.",
            "en": "I hope you play soon."
          },
          {
            "es": "Es importante que ella juegue.",
            "en": "It is important that she play."
          },
          {
            "es": "Dudo que nosotros juguemos hoy.",
            "en": "I doubt that we play today."
          },
          {
            "es": "Ojalá que ellos jueguen bien.",
            "en": "I hope they play well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "pensar",
    "english": "to think",
    "type": "stem-e-ie",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "pienso",
          "piensas",
          "piensa",
          "pensamos",
          "piensan"
        ],
        "sentences": [
          {
            "es": "Yo pienso mucho en el futuro.",
            "en": "I think a lot about the future."
          },
          {
            "es": "Tú piensas demasiado.",
            "en": "You think too much."
          },
          {
            "es": "Ella piensa en su familia.",
            "en": "She thinks about her family."
          },
          {
            "es": "Nosotros pensamos lo mismo.",
            "en": "We think the same thing."
          },
          {
            "es": "Ellos piensan que es injusto.",
            "en": "They think it's unfair."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "pensé",
          "pensaste",
          "pensó",
          "pensamos",
          "pensaron"
        ],
        "sentences": [
          {
            "es": "Yo pensé en ti todo el día.",
            "en": "I thought about you all day."
          },
          {
            "es": "Tú pensaste rápido.",
            "en": "You thought quickly."
          },
          {
            "es": "Ella pensó en la solución.",
            "en": "She thought of the solution."
          },
          {
            "es": "Nosotros pensamos mucho antes de decidir.",
            "en": "We thought a lot before deciding."
          },
          {
            "es": "Ellos pensaron que era una broma.",
            "en": "They thought it was a joke."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "pensaré",
          "pensarás",
          "pensará",
          "pensaremos",
          "pensarán"
        ],
        "sentences": [
          {
            "es": "Yo pensaré en tu propuesta.",
            "en": "I will think about your proposal."
          },
          {
            "es": "Tú pensarás mejor mañana.",
            "en": "You will think better tomorrow."
          },
          {
            "es": "Ella pensará en la respuesta.",
            "en": "She will think about the answer."
          },
          {
            "es": "Nosotros pensaremos en el plan.",
            "en": "We will think about the plan."
          },
          {
            "es": "Ellos pensarán antes de actuar.",
            "en": "They will think before acting."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "pensaba",
          "pensabas",
          "pensaba",
          "pensábamos",
          "pensaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo pensaba mucho.",
            "en": "When I was a kid, I used to think a lot."
          },
          {
            "es": "Tú pensabas todos los días.",
            "en": "You used to think every day."
          },
          {
            "es": "Ella pensaba de joven.",
            "en": "She used to think when she was young."
          },
          {
            "es": "Nosotros pensábamos juntos en aquellos años.",
            "en": "We used to think together in those years."
          },
          {
            "es": "Ellos pensaban cada tarde.",
            "en": "They used to think every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "piense",
          "pienses",
          "piense",
          "pensemos",
          "piensen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo piense.",
            "en": "They want me to think."
          },
          {
            "es": "Espero que tú pienses pronto.",
            "en": "I hope you think soon."
          },
          {
            "es": "Es importante que ella piense.",
            "en": "It is important that she think."
          },
          {
            "es": "Dudo que nosotros pensemos hoy.",
            "en": "I doubt that we think today."
          },
          {
            "es": "Ojalá que ellos piensen bien.",
            "en": "I hope they think well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "creer",
    "english": "to believe / to think",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "creo",
          "crees",
          "cree",
          "creemos",
          "creen"
        ],
        "sentences": [
          {
            "es": "Yo creo en la magia.",
            "en": "I believe in magic."
          },
          {
            "es": "Tú crees todo lo que ves.",
            "en": "You believe everything you see."
          },
          {
            "es": "Ella cree en sus sueños.",
            "en": "She believes in her dreams."
          },
          {
            "es": "Nosotros creemos en el amor.",
            "en": "We believe in love."
          },
          {
            "es": "Ellos creen en Dios.",
            "en": "They believe in God."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "creí",
          "creíste",
          "creyó",
          "creímos",
          "creyeron"
        ],
        "sentences": [
          {
            "es": "Yo creí su historia.",
            "en": "I believed her story."
          },
          {
            "es": "Tú creíste demasiado pronto.",
            "en": "You believed too soon."
          },
          {
            "es": "Ella creyó en mí desde el principio.",
            "en": "She believed in me from the start."
          },
          {
            "es": "Nosotros creímos la mentira.",
            "en": "We believed the lie."
          },
          {
            "es": "Ellos creyeron en el milagro.",
            "en": "They believed in the miracle."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "creeré",
          "creerás",
          "creerá",
          "creeremos",
          "creerán"
        ],
        "sentences": [
          {
            "es": "Yo creeré cuando lo vea.",
            "en": "I will believe when I see it."
          },
          {
            "es": "Tú creerás en ti mismo algún día.",
            "en": "You will believe in yourself someday."
          },
          {
            "es": "Ella creerá la verdad.",
            "en": "She will believe the truth."
          },
          {
            "es": "Nosotros creeremos en el plan.",
            "en": "We will believe in the plan."
          },
          {
            "es": "Ellos creerán en la causa.",
            "en": "They will believe in the cause."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "creía",
          "creías",
          "creía",
          "creíamos",
          "creían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo creía mucho.",
            "en": "When I was a kid, I used to believe a lot."
          },
          {
            "es": "Tú creías todos los días.",
            "en": "You used to believe every day."
          },
          {
            "es": "Ella creía de joven.",
            "en": "She used to believe when she was young."
          },
          {
            "es": "Nosotros creíamos juntos en aquellos años.",
            "en": "We used to believe together in those years."
          },
          {
            "es": "Ellos creían cada tarde.",
            "en": "They used to believe every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "crea",
          "creas",
          "crea",
          "creamos",
          "crean"
        ],
        "sentences": [
          {
            "es": "Quieren que yo crea.",
            "en": "They want me to believe."
          },
          {
            "es": "Espero que tú creas pronto.",
            "en": "I hope you believe soon."
          },
          {
            "es": "Es importante que ella crea.",
            "en": "It is important that she believe."
          },
          {
            "es": "Dudo que nosotros creamos hoy.",
            "en": "I doubt that we believe today."
          },
          {
            "es": "Ojalá que ellos crean bien.",
            "en": "I hope they believe well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "entender",
    "english": "to understand",
    "type": "stem-e-ie",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "entiendo",
          "entiendes",
          "entiende",
          "entendemos",
          "entienden"
        ],
        "sentences": [
          {
            "es": "Yo entiendo español perfectamente.",
            "en": "I understand Spanish perfectly."
          },
          {
            "es": "Tú entiendes la situación.",
            "en": "You understand the situation."
          },
          {
            "es": "Ella entiende cómo funciona.",
            "en": "She understands how it works."
          },
          {
            "es": "Nosotros entendemos el problema.",
            "en": "We understand the problem."
          },
          {
            "es": "Ellos entienden la lección.",
            "en": "They understand the lesson."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "entendí",
          "entendiste",
          "entendió",
          "entendimos",
          "entendieron"
        ],
        "sentences": [
          {
            "es": "Yo entendí la pregunta.",
            "en": "I understood the question."
          },
          {
            "es": "Tú entendiste rápido.",
            "en": "You understood quickly."
          },
          {
            "es": "Ella entendió la indirecta.",
            "en": "She caught the hint."
          },
          {
            "es": "Nosotros entendimos su preocupación.",
            "en": "We understood her concern."
          },
          {
            "es": "Ellos entendieron al final.",
            "en": "They understood in the end."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "entenderé",
          "entenderás",
          "entenderá",
          "entenderemos",
          "entenderán"
        ],
        "sentences": [
          {
            "es": "Yo entenderé con el tiempo.",
            "en": "I will understand with time."
          },
          {
            "es": "Tú entenderás cuando seas mayor.",
            "en": "You will understand when you're older."
          },
          {
            "es": "Ella entenderá tu punto.",
            "en": "She will understand your point."
          },
          {
            "es": "Nosotros entenderemos algún día.",
            "en": "We will understand someday."
          },
          {
            "es": "Ellos entenderán el motivo.",
            "en": "They will understand the reason."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "entendía",
          "entendías",
          "entendía",
          "entendíamos",
          "entendían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo entendía mucho.",
            "en": "When I was a kid, I used to understand a lot."
          },
          {
            "es": "Tú entendías todos los días.",
            "en": "You used to understand every day."
          },
          {
            "es": "Ella entendía de joven.",
            "en": "She used to understand when she was young."
          },
          {
            "es": "Nosotros entendíamos juntos en aquellos años.",
            "en": "We used to understand together in those years."
          },
          {
            "es": "Ellos entendían cada tarde.",
            "en": "They used to understand every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "entenda",
          "entendas",
          "entenda",
          "entendamos",
          "entendan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo entenda.",
            "en": "They want me to understand."
          },
          {
            "es": "Espero que tú entendas pronto.",
            "en": "I hope you understand soon."
          },
          {
            "es": "Es importante que ella entenda.",
            "en": "It is important that she understand."
          },
          {
            "es": "Dudo que nosotros entendamos hoy.",
            "en": "I doubt that we understand today."
          },
          {
            "es": "Ojalá que ellos entendan bien.",
            "en": "I hope they understand well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "llegar",
    "english": "to arrive",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "llego",
          "llegas",
          "llega",
          "llegamos",
          "llegan"
        ],
        "sentences": [
          {
            "es": "Yo llego al trabajo a las nueve.",
            "en": "I arrive at work at nine."
          },
          {
            "es": "Tú llegas siempre tarde.",
            "en": "You always arrive late."
          },
          {
            "es": "Ella llega en tren.",
            "en": "She arrives by train."
          },
          {
            "es": "Nosotros llegamos a tiempo.",
            "en": "We arrive on time."
          },
          {
            "es": "Ellos llegan del aeropuerto.",
            "en": "They arrive from the airport."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "llegué",
          "llegaste",
          "llegó",
          "llegamos",
          "llegaron"
        ],
        "sentences": [
          {
            "es": "Yo llegué muy temprano hoy.",
            "en": "I arrived very early today."
          },
          {
            "es": "Tú llegaste justo a tiempo.",
            "en": "You arrived just in time."
          },
          {
            "es": "Ella llegó con un regalo.",
            "en": "She arrived with a gift."
          },
          {
            "es": "Nosotros llegamos sin problemas.",
            "en": "We arrived without problems."
          },
          {
            "es": "Ellos llegaron al hotel anoche.",
            "en": "They arrived at the hotel last night."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "llegaré",
          "llegarás",
          "llegará",
          "llegaremos",
          "llegarán"
        ],
        "sentences": [
          {
            "es": "Yo llegaré antes del mediodía.",
            "en": "I will arrive before noon."
          },
          {
            "es": "Tú llegarás cansado del viaje.",
            "en": "You will arrive tired from the trip."
          },
          {
            "es": "Ella llegará el viernes.",
            "en": "She will arrive on Friday."
          },
          {
            "es": "Nosotros llegaremos en una hora.",
            "en": "We will arrive in an hour."
          },
          {
            "es": "Ellos llegarán por la tarde.",
            "en": "They will arrive in the afternoon."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "llegaba",
          "llegabas",
          "llegaba",
          "llegábamos",
          "llegaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo llegaba mucho.",
            "en": "When I was a kid, I used to arrive a lot."
          },
          {
            "es": "Tú llegabas todos los días.",
            "en": "You used to arrive every day."
          },
          {
            "es": "Ella llegaba de joven.",
            "en": "She used to arrive when she was young."
          },
          {
            "es": "Nosotros llegábamos juntos en aquellos años.",
            "en": "We used to arrive together in those years."
          },
          {
            "es": "Ellos llegaban cada tarde.",
            "en": "They used to arrive every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "llegue",
          "llegues",
          "llegue",
          "lleguemos",
          "lleguen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo llegue.",
            "en": "They want me to arrive."
          },
          {
            "es": "Espero que tú llegues pronto.",
            "en": "I hope you arrive soon."
          },
          {
            "es": "Es importante que ella llegue.",
            "en": "It is important that she arrive."
          },
          {
            "es": "Dudo que nosotros lleguemos hoy.",
            "en": "I doubt that we arrive today."
          },
          {
            "es": "Ojalá que ellos lleguen bien.",
            "en": "I hope they arrive well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "salir",
    "english": "to leave / to go out",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "salgo",
          "sales",
          "sale",
          "salimos",
          "salen"
        ],
        "sentences": [
          {
            "es": "Yo salgo de casa a las ocho.",
            "en": "I leave home at eight."
          },
          {
            "es": "Tú sales con tus amigos los viernes.",
            "en": "You go out with your friends on Fridays."
          },
          {
            "es": "Ella sale del trabajo a las cinco.",
            "en": "She leaves work at five."
          },
          {
            "es": "Nosotros salimos a cenar fuera.",
            "en": "We go out to dinner."
          },
          {
            "es": "Ellos salen del cine muy tarde.",
            "en": "They leave the cinema very late."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "salí",
          "saliste",
          "salió",
          "salimos",
          "salieron"
        ],
        "sentences": [
          {
            "es": "Yo salí temprano ayer.",
            "en": "I left early yesterday."
          },
          {
            "es": "Tú saliste sin chaqueta.",
            "en": "You went out without a jacket."
          },
          {
            "es": "Ella salió a las seis.",
            "en": "She left at six."
          },
          {
            "es": "Nosotros salimos del bar.",
            "en": "We left the bar."
          },
          {
            "es": "Ellos salieron sin decir nada.",
            "en": "They left without saying anything."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "saldré",
          "saldrás",
          "saldrá",
          "saldremos",
          "saldrán"
        ],
        "sentences": [
          {
            "es": "Yo saldré pronto.",
            "en": "I will leave soon."
          },
          {
            "es": "Tú saldrás bien en el examen.",
            "en": "You will do well on the exam."
          },
          {
            "es": "Ella saldrá de la oficina a las seis.",
            "en": "She will leave the office at six."
          },
          {
            "es": "Nosotros saldremos juntos.",
            "en": "We will go out together."
          },
          {
            "es": "Ellos saldrán de viaje mañana.",
            "en": "They will leave on a trip tomorrow."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "salía",
          "salías",
          "salía",
          "salíamos",
          "salían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo salía mucho.",
            "en": "When I was a kid, I used to leave a lot."
          },
          {
            "es": "Tú salías todos los días.",
            "en": "You used to leave every day."
          },
          {
            "es": "Ella salía de joven.",
            "en": "She used to leave when she was young."
          },
          {
            "es": "Nosotros salíamos juntos en aquellos años.",
            "en": "We used to leave together in those years."
          },
          {
            "es": "Ellos salían cada tarde.",
            "en": "They used to leave every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "salga",
          "salgas",
          "salga",
          "salgamos",
          "salgan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo salga.",
            "en": "They want me to leave."
          },
          {
            "es": "Espero que tú salgas pronto.",
            "en": "I hope you leave soon."
          },
          {
            "es": "Es importante que ella salga.",
            "en": "It is important that she leave."
          },
          {
            "es": "Dudo que nosotros salgamos hoy.",
            "en": "I doubt that we leave today."
          },
          {
            "es": "Ojalá que ellos salgan bien.",
            "en": "I hope they leave well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "esperar",
    "english": "to wait / to hope",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "espero",
          "esperas",
          "espera",
          "esperamos",
          "esperan"
        ],
        "sentences": [
          {
            "es": "Yo espero el autobús.",
            "en": "I wait for the bus."
          },
          {
            "es": "Tú esperas demasiado.",
            "en": "You wait too much."
          },
          {
            "es": "Ella espera buenas noticias.",
            "en": "She hopes for good news."
          },
          {
            "es": "Nosotros esperamos al doctor.",
            "en": "We wait for the doctor."
          },
          {
            "es": "Ellos esperan el tren.",
            "en": "They wait for the train."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "esperé",
          "esperaste",
          "esperó",
          "esperamos",
          "esperaron"
        ],
        "sentences": [
          {
            "es": "Yo esperé una hora.",
            "en": "I waited an hour."
          },
          {
            "es": "Tú esperaste pacientemente.",
            "en": "You waited patiently."
          },
          {
            "es": "Ella esperó toda la tarde.",
            "en": "She waited all afternoon."
          },
          {
            "es": "Nosotros esperamos en la cola.",
            "en": "We waited in line."
          },
          {
            "es": "Ellos esperaron el resultado.",
            "en": "They waited for the result."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "esperaré",
          "esperarás",
          "esperará",
          "esperaremos",
          "esperarán"
        ],
        "sentences": [
          {
            "es": "Yo esperaré tu llamada.",
            "en": "I will wait for your call."
          },
          {
            "es": "Tú esperarás tu turno.",
            "en": "You will wait your turn."
          },
          {
            "es": "Ella esperará a su esposo.",
            "en": "She will wait for her husband."
          },
          {
            "es": "Nosotros esperaremos noticias.",
            "en": "We will wait for news."
          },
          {
            "es": "Ellos esperarán hasta mañana.",
            "en": "They will wait until tomorrow."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "esperaba",
          "esperabas",
          "esperaba",
          "esperábamos",
          "esperaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo esperaba mucho.",
            "en": "When I was a kid, I used to wait a lot."
          },
          {
            "es": "Tú esperabas todos los días.",
            "en": "You used to wait every day."
          },
          {
            "es": "Ella esperaba de joven.",
            "en": "She used to wait when she was young."
          },
          {
            "es": "Nosotros esperábamos juntos en aquellos años.",
            "en": "We used to wait together in those years."
          },
          {
            "es": "Ellos esperaban cada tarde.",
            "en": "They used to wait every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "espere",
          "esperes",
          "espere",
          "esperemos",
          "esperen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo espere.",
            "en": "They want me to wait."
          },
          {
            "es": "Espero que tú esperes pronto.",
            "en": "I hope you wait soon."
          },
          {
            "es": "Es importante que ella espere.",
            "en": "It is important that she wait."
          },
          {
            "es": "Dudo que nosotros esperemos hoy.",
            "en": "I doubt that we wait today."
          },
          {
            "es": "Ojalá que ellos esperen bien.",
            "en": "I hope they wait well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "pagar",
    "english": "to pay",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "pago",
          "pagas",
          "paga",
          "pagamos",
          "pagan"
        ],
        "sentences": [
          {
            "es": "Yo pago la cuenta hoy.",
            "en": "I pay the bill today."
          },
          {
            "es": "Tú pagas mucho de alquiler.",
            "en": "You pay a lot of rent."
          },
          {
            "es": "Ella paga con tarjeta.",
            "en": "She pays with a card."
          },
          {
            "es": "Nosotros pagamos en efectivo.",
            "en": "We pay in cash."
          },
          {
            "es": "Ellos pagan los impuestos.",
            "en": "They pay the taxes."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "pagué",
          "pagaste",
          "pagó",
          "pagamos",
          "pagaron"
        ],
        "sentences": [
          {
            "es": "Yo pagué la cena.",
            "en": "I paid for dinner."
          },
          {
            "es": "Tú pagaste poco por eso.",
            "en": "You paid little for that."
          },
          {
            "es": "Ella pagó el doble.",
            "en": "She paid double."
          },
          {
            "es": "Nosotros pagamos al camarero.",
            "en": "We paid the waiter."
          },
          {
            "es": "Ellos pagaron las entradas.",
            "en": "They paid for the tickets."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "pagaré",
          "pagarás",
          "pagará",
          "pagaremos",
          "pagarán"
        ],
        "sentences": [
          {
            "es": "Yo pagaré mañana.",
            "en": "I will pay tomorrow."
          },
          {
            "es": "Tú pagarás el viaje.",
            "en": "You will pay for the trip."
          },
          {
            "es": "Ella pagará en plazos.",
            "en": "She will pay in installments."
          },
          {
            "es": "Nosotros pagaremos la deuda.",
            "en": "We will pay the debt."
          },
          {
            "es": "Ellos pagarán el daño.",
            "en": "They will pay for the damage."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "pagaba",
          "pagabas",
          "pagaba",
          "pagábamos",
          "pagaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo pagaba mucho.",
            "en": "When I was a kid, I used to pay a lot."
          },
          {
            "es": "Tú pagabas todos los días.",
            "en": "You used to pay every day."
          },
          {
            "es": "Ella pagaba de joven.",
            "en": "She used to pay when she was young."
          },
          {
            "es": "Nosotros pagábamos juntos en aquellos años.",
            "en": "We used to pay together in those years."
          },
          {
            "es": "Ellos pagaban cada tarde.",
            "en": "They used to pay every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "pague",
          "pagues",
          "pague",
          "paguemos",
          "paguen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo pague.",
            "en": "They want me to pay."
          },
          {
            "es": "Espero que tú pagues pronto.",
            "en": "I hope you pay soon."
          },
          {
            "es": "Es importante que ella pague.",
            "en": "It is important that she pay."
          },
          {
            "es": "Dudo que nosotros paguemos hoy.",
            "en": "I doubt that we pay today."
          },
          {
            "es": "Ojalá que ellos paguen bien.",
            "en": "I hope they pay well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "llevar",
    "english": "to carry / to wear",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "llevo",
          "llevas",
          "lleva",
          "llevamos",
          "llevan"
        ],
        "sentences": [
          {
            "es": "Yo llevo mi mochila a clase.",
            "en": "I carry my backpack to class."
          },
          {
            "es": "Tú llevas una camisa blanca.",
            "en": "You are wearing a white shirt."
          },
          {
            "es": "Ella lleva el bebé en brazos.",
            "en": "She carries the baby in her arms."
          },
          {
            "es": "Nosotros llevamos comida al picnic.",
            "en": "We bring food to the picnic."
          },
          {
            "es": "Ellos llevan regalos a la fiesta.",
            "en": "They bring gifts to the party."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "llevé",
          "llevaste",
          "llevó",
          "llevamos",
          "llevaron"
        ],
        "sentences": [
          {
            "es": "Yo llevé la maleta al hotel.",
            "en": "I took the suitcase to the hotel."
          },
          {
            "es": "Tú llevaste a los niños al parque.",
            "en": "You took the kids to the park."
          },
          {
            "es": "Ella llevó flores al hospital.",
            "en": "She brought flowers to the hospital."
          },
          {
            "es": "Nosotros llevamos vino a la cena.",
            "en": "We brought wine to dinner."
          },
          {
            "es": "Ellos llevaron la torta a la fiesta.",
            "en": "They brought the cake to the party."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "llevaré",
          "llevarás",
          "llevará",
          "llevaremos",
          "llevarán"
        ],
        "sentences": [
          {
            "es": "Yo llevaré paraguas por si llueve.",
            "en": "I will bring an umbrella in case it rains."
          },
          {
            "es": "Tú llevarás el almuerzo al trabajo.",
            "en": "You will bring lunch to work."
          },
          {
            "es": "Ella llevará un vestido nuevo.",
            "en": "She will wear a new dress."
          },
          {
            "es": "Nosotros llevaremos el coche.",
            "en": "We will take the car."
          },
          {
            "es": "Ellos llevarán a sus hijos al cine.",
            "en": "They will take their kids to the movies."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "llevaba",
          "llevabas",
          "llevaba",
          "llevábamos",
          "llevaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo llevaba mucho.",
            "en": "When I was a kid, I used to carry a lot."
          },
          {
            "es": "Tú llevabas todos los días.",
            "en": "You used to carry every day."
          },
          {
            "es": "Ella llevaba de joven.",
            "en": "She used to carry when she was young."
          },
          {
            "es": "Nosotros llevábamos juntos en aquellos años.",
            "en": "We used to carry together in those years."
          },
          {
            "es": "Ellos llevaban cada tarde.",
            "en": "They used to carry every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "lleve",
          "lleves",
          "lleve",
          "llevemos",
          "lleven"
        ],
        "sentences": [
          {
            "es": "Quieren que yo lleve.",
            "en": "They want me to carry."
          },
          {
            "es": "Espero que tú lleves pronto.",
            "en": "I hope you carry soon."
          },
          {
            "es": "Es importante que ella lleve.",
            "en": "It is important that she carry."
          },
          {
            "es": "Dudo que nosotros llevemos hoy.",
            "en": "I doubt that we carry today."
          },
          {
            "es": "Ojalá que ellos lleven bien.",
            "en": "I hope they carry well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "encontrar",
    "english": "to find",
    "type": "stem-o-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "encuentro",
          "encuentras",
          "encuentra",
          "encontramos",
          "encuentran"
        ],
        "sentences": [
          {
            "es": "Yo encuentro mis llaves siempre.",
            "en": "I always find my keys."
          },
          {
            "es": "Tú encuentras buenas ofertas.",
            "en": "You find good deals."
          },
          {
            "es": "Ella encuentra paz en la naturaleza.",
            "en": "She finds peace in nature."
          },
          {
            "es": "Nosotros encontramos una solución.",
            "en": "We find a solution."
          },
          {
            "es": "Ellos encuentran trabajos rápidamente.",
            "en": "They find jobs quickly."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "encontré",
          "encontraste",
          "encontró",
          "encontramos",
          "encontraron"
        ],
        "sentences": [
          {
            "es": "Yo encontré dinero en la calle.",
            "en": "I found money on the street."
          },
          {
            "es": "Tú encontraste el libro perdido.",
            "en": "You found the lost book."
          },
          {
            "es": "Ella encontró su anillo.",
            "en": "She found her ring."
          },
          {
            "es": "Nosotros encontramos un buen hotel.",
            "en": "We found a good hotel."
          },
          {
            "es": "Ellos encontraron el camino correcto.",
            "en": "They found the right path."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "encontraré",
          "encontrarás",
          "encontrará",
          "encontraremos",
          "encontrarán"
        ],
        "sentences": [
          {
            "es": "Yo encontraré la respuesta.",
            "en": "I will find the answer."
          },
          {
            "es": "Tú encontrarás el amor.",
            "en": "You will find love."
          },
          {
            "es": "Ella encontrará un nuevo apartamento.",
            "en": "She will find a new apartment."
          },
          {
            "es": "Nosotros encontraremos la verdad.",
            "en": "We will find the truth."
          },
          {
            "es": "Ellos encontrarán una manera.",
            "en": "They will find a way."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "encontraba",
          "encontrabas",
          "encontraba",
          "encontrábamos",
          "encontraban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo encontraba mucho.",
            "en": "When I was a kid, I used to find a lot."
          },
          {
            "es": "Tú encontrabas todos los días.",
            "en": "You used to find every day."
          },
          {
            "es": "Ella encontraba de joven.",
            "en": "She used to find when she was young."
          },
          {
            "es": "Nosotros encontrábamos juntos en aquellos años.",
            "en": "We used to find together in those years."
          },
          {
            "es": "Ellos encontraban cada tarde.",
            "en": "They used to find every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "encontre",
          "encontres",
          "encontre",
          "encontremos",
          "encontren"
        ],
        "sentences": [
          {
            "es": "Quieren que yo encontre.",
            "en": "They want me to find."
          },
          {
            "es": "Espero que tú encontres pronto.",
            "en": "I hope you find soon."
          },
          {
            "es": "Es importante que ella encontre.",
            "en": "It is important that she find."
          },
          {
            "es": "Dudo que nosotros encontremos hoy.",
            "en": "I doubt that we find today."
          },
          {
            "es": "Ojalá que ellos encontren bien.",
            "en": "I hope they find well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "volver",
    "english": "to return / to come back",
    "type": "stem-o-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "vuelvo",
          "vuelves",
          "vuelve",
          "volvemos",
          "vuelven"
        ],
        "sentences": [
          {
            "es": "Yo vuelvo a casa a las seis.",
            "en": "I return home at six."
          },
          {
            "es": "Tú vuelves siempre tarde.",
            "en": "You always come back late."
          },
          {
            "es": "Ella vuelve del trabajo cansada.",
            "en": "She comes back from work tired."
          },
          {
            "es": "Nosotros volvemos en autobús.",
            "en": "We return by bus."
          },
          {
            "es": "Ellos vuelven a verla cada año.",
            "en": "They return to see her every year."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "volví",
          "volviste",
          "volvió",
          "volvimos",
          "volvieron"
        ],
        "sentences": [
          {
            "es": "Yo volví a Madrid el año pasado.",
            "en": "I returned to Madrid last year."
          },
          {
            "es": "Tú volviste sano y salvo.",
            "en": "You came back safe and sound."
          },
          {
            "es": "Ella volvió a llamarme.",
            "en": "She called me back."
          },
          {
            "es": "Nosotros volvimos por el mismo camino.",
            "en": "We returned by the same path."
          },
          {
            "es": "Ellos volvieron de las vacaciones.",
            "en": "They returned from vacation."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "volveré",
          "volverás",
          "volverá",
          "volveremos",
          "volverán"
        ],
        "sentences": [
          {
            "es": "Yo volveré mañana por la mañana.",
            "en": "I will return tomorrow morning."
          },
          {
            "es": "Tú volverás a intentarlo.",
            "en": "You will try again."
          },
          {
            "es": "Ella volverá a su país.",
            "en": "She will return to her country."
          },
          {
            "es": "Nosotros volveremos pronto.",
            "en": "We will return soon."
          },
          {
            "es": "Ellos volverán a ganar este año.",
            "en": "They will win again this year."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "volvía",
          "volvías",
          "volvía",
          "volvíamos",
          "volvían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo volvía mucho.",
            "en": "When I was a kid, I used to return a lot."
          },
          {
            "es": "Tú volvías todos los días.",
            "en": "You used to return every day."
          },
          {
            "es": "Ella volvía de joven.",
            "en": "She used to return when she was young."
          },
          {
            "es": "Nosotros volvíamos juntos en aquellos años.",
            "en": "We used to return together in those years."
          },
          {
            "es": "Ellos volvían cada tarde.",
            "en": "They used to return every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "vuelva",
          "vuelvas",
          "vuelva",
          "volvamos",
          "vuelvan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo vuelva.",
            "en": "They want me to return."
          },
          {
            "es": "Espero que tú vuelvas pronto.",
            "en": "I hope you return soon."
          },
          {
            "es": "Es importante que ella vuelva.",
            "en": "It is important that she return."
          },
          {
            "es": "Dudo que nosotros volvamos hoy.",
            "en": "I doubt that we return today."
          },
          {
            "es": "Ojalá que ellos vuelvan bien.",
            "en": "I hope they return well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "empezar",
    "english": "to begin / to start",
    "type": "stem-e-ie",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "empiezo",
          "empiezas",
          "empieza",
          "empezamos",
          "empiezan"
        ],
        "sentences": [
          {
            "es": "Yo empiezo a trabajar a las ocho.",
            "en": "I start working at eight."
          },
          {
            "es": "Tú empiezas con buen ánimo.",
            "en": "You start with good spirits."
          },
          {
            "es": "Ella empieza el curso en otoño.",
            "en": "She starts the course in fall."
          },
          {
            "es": "Nosotros empezamos a las nueve.",
            "en": "We start at nine."
          },
          {
            "es": "Ellos empiezan el proyecto hoy.",
            "en": "They start the project today."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "empecé",
          "empezaste",
          "empezó",
          "empezamos",
          "empezaron"
        ],
        "sentences": [
          {
            "es": "Yo empecé el libro anoche.",
            "en": "I started the book last night."
          },
          {
            "es": "Tú empezaste muy temprano.",
            "en": "You started very early."
          },
          {
            "es": "Ella empezó a llorar.",
            "en": "She started to cry."
          },
          {
            "es": "Nosotros empezamos a estudiar.",
            "en": "We started studying."
          },
          {
            "es": "Ellos empezaron la reunión a tiempo.",
            "en": "They started the meeting on time."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "empezaré",
          "empezarás",
          "empezará",
          "empezaremos",
          "empezarán"
        ],
        "sentences": [
          {
            "es": "Yo empezaré una dieta nueva.",
            "en": "I will start a new diet."
          },
          {
            "es": "Tú empezarás de cero.",
            "en": "You will start from scratch."
          },
          {
            "es": "Ella empezará a estudiar pronto.",
            "en": "She will start studying soon."
          },
          {
            "es": "Nosotros empezaremos en enero.",
            "en": "We will start in January."
          },
          {
            "es": "Ellos empezarán la obra mañana.",
            "en": "They will start the work tomorrow."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "empezaba",
          "empezabas",
          "empezaba",
          "empezábamos",
          "empezaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo empezaba mucho.",
            "en": "When I was a kid, I used to begin a lot."
          },
          {
            "es": "Tú empezabas todos los días.",
            "en": "You used to begin every day."
          },
          {
            "es": "Ella empezaba de joven.",
            "en": "She used to begin when she was young."
          },
          {
            "es": "Nosotros empezábamos juntos en aquellos años.",
            "en": "We used to begin together in those years."
          },
          {
            "es": "Ellos empezaban cada tarde.",
            "en": "They used to begin every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "empiece",
          "empieces",
          "empiece",
          "empecemos",
          "empiecen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo empiece.",
            "en": "They want me to begin."
          },
          {
            "es": "Espero que tú empieces pronto.",
            "en": "I hope you begin soon."
          },
          {
            "es": "Es importante que ella empiece.",
            "en": "It is important that she begin."
          },
          {
            "es": "Dudo que nosotros empecemos hoy.",
            "en": "I doubt that we begin today."
          },
          {
            "es": "Ojalá que ellos empiecen bien.",
            "en": "I hope they begin well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "perder",
    "english": "to lose",
    "type": "stem-e-ie",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "pierdo",
          "pierdes",
          "pierde",
          "perdemos",
          "pierden"
        ],
        "sentences": [
          {
            "es": "Yo pierdo las llaves a menudo.",
            "en": "I often lose my keys."
          },
          {
            "es": "Tú pierdes la paciencia rápido.",
            "en": "You lose patience quickly."
          },
          {
            "es": "Ella pierde peso poco a poco.",
            "en": "She is losing weight gradually."
          },
          {
            "es": "Nosotros perdemos tiempo.",
            "en": "We are wasting time."
          },
          {
            "es": "Ellos pierden el partido.",
            "en": "They are losing the match."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "perdí",
          "perdiste",
          "perdió",
          "perdimos",
          "perdieron"
        ],
        "sentences": [
          {
            "es": "Yo perdí mi cartera en el bar.",
            "en": "I lost my wallet at the bar."
          },
          {
            "es": "Tú perdiste tu oportunidad.",
            "en": "You lost your chance."
          },
          {
            "es": "Ella perdió las llaves del coche.",
            "en": "She lost the car keys."
          },
          {
            "es": "Nosotros perdimos el vuelo.",
            "en": "We missed the flight."
          },
          {
            "es": "Ellos perdieron la final.",
            "en": "They lost the final."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "perderé",
          "perderás",
          "perderá",
          "perderemos",
          "perderán"
        ],
        "sentences": [
          {
            "es": "Yo perderé peso este verano.",
            "en": "I will lose weight this summer."
          },
          {
            "es": "Tú perderás la apuesta.",
            "en": "You will lose the bet."
          },
          {
            "es": "Ella perderá el tren.",
            "en": "She will miss the train."
          },
          {
            "es": "Nosotros perderemos si no jugamos bien.",
            "en": "We will lose if we don't play well."
          },
          {
            "es": "Ellos perderán esta vez.",
            "en": "They will lose this time."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "perdía",
          "perdías",
          "perdía",
          "perdíamos",
          "perdían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo perdía mucho.",
            "en": "When I was a kid, I used to lose a lot."
          },
          {
            "es": "Tú perdías todos los días.",
            "en": "You used to lose every day."
          },
          {
            "es": "Ella perdía de joven.",
            "en": "She used to lose when she was young."
          },
          {
            "es": "Nosotros perdíamos juntos en aquellos años.",
            "en": "We used to lose together in those years."
          },
          {
            "es": "Ellos perdían cada tarde.",
            "en": "They used to lose every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "perda",
          "perdas",
          "perda",
          "perdamos",
          "perdan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo perda.",
            "en": "They want me to lose."
          },
          {
            "es": "Espero que tú perdas pronto.",
            "en": "I hope you lose soon."
          },
          {
            "es": "Es importante que ella perda.",
            "en": "It is important that she lose."
          },
          {
            "es": "Dudo que nosotros perdamos hoy.",
            "en": "I doubt that we lose today."
          },
          {
            "es": "Ojalá que ellos perdan bien.",
            "en": "I hope they lose well."
          }
        ]
      }
    }
  }
];
