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
            "es": "Cuando era niño, yo era muy curioso.",
            "en": "When I was a kid, I was very curious."
          },
          {
            "es": "Tú eras mi mejor amigo en la escuela.",
            "en": "You were my best friend at school."
          },
          {
            "es": "Ella era profesora antes.",
            "en": "She used to be a teacher."
          },
          {
            "es": "Nosotros éramos vecinos hace años.",
            "en": "We were neighbors years ago."
          },
          {
            "es": "Ellos eran los líderes del grupo.",
            "en": "They were the leaders of the group."
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
            "es": "Quiero que yo sea más paciente.",
            "en": "I want to be more patient."
          },
          {
            "es": "Espero que tú seas feliz.",
            "en": "I hope you are happy."
          },
          {
            "es": "Es importante que ella sea honesta.",
            "en": "It is important that she be honest."
          },
          {
            "es": "Dudo que nosotros seamos los primeros.",
            "en": "I doubt we will be the first."
          },
          {
            "es": "Ojalá que ellos sean amables.",
            "en": "Hopefully they are kind."
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
            "es": "Yo estaba cansado anoche.",
            "en": "I was tired last night."
          },
          {
            "es": "Tú estabas muy contento en la fiesta.",
            "en": "You were very happy at the party."
          },
          {
            "es": "Ella estaba en casa todo el día.",
            "en": "She was at home all day."
          },
          {
            "es": "Nosotros estábamos en la playa.",
            "en": "We were at the beach."
          },
          {
            "es": "Ellos estaban preocupados por ti.",
            "en": "They were worried about you."
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
            "es": "Espero que yo esté listo a tiempo.",
            "en": "I hope I will be ready in time."
          },
          {
            "es": "Quiero que tú estés feliz.",
            "en": "I want you to be happy."
          },
          {
            "es": "Es importante que ella esté presente.",
            "en": "It is important that she be present."
          },
          {
            "es": "Dudo que nosotros estemos juntos mañana.",
            "en": "I doubt we will be together tomorrow."
          },
          {
            "es": "Ojalá que ellos estén bien.",
            "en": "Hopefully they are well."
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
            "es": "Yo iba a la escuela en bicicleta.",
            "en": "I used to go to school by bicycle."
          },
          {
            "es": "Tú ibas al gimnasio todos los días.",
            "en": "You used to go to the gym every day."
          },
          {
            "es": "Ella iba al parque con su madre.",
            "en": "She used to go to the park with her mother."
          },
          {
            "es": "Nosotros íbamos de vacaciones cada año.",
            "en": "We used to go on vacation every year."
          },
          {
            "es": "Ellos iban juntos al cine.",
            "en": "They used to go to the movies together."
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
            "es": "Quiero que yo vaya a España algún día.",
            "en": "I want to go to Spain someday."
          },
          {
            "es": "Espero que tú vayas al doctor.",
            "en": "I hope you go to the doctor."
          },
          {
            "es": "Es importante que ella vaya a la reunión.",
            "en": "It is important that she go to the meeting."
          },
          {
            "es": "Dudo que nosotros vayamos al concierto.",
            "en": "I doubt we will go to the concert."
          },
          {
            "es": "Ojalá que ellos vayan con cuidado.",
            "en": "Hopefully they go carefully."
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
            "es": "Cuando era pequeño, yo tenía un perro.",
            "en": "When I was little, I had a dog."
          },
          {
            "es": "Tú tenías el pelo largo antes.",
            "en": "You used to have long hair."
          },
          {
            "es": "Ella tenía una casa enorme.",
            "en": "She had a huge house."
          },
          {
            "es": "Nosotros teníamos muchos amigos.",
            "en": "We had many friends."
          },
          {
            "es": "Ellos tenían un coche antiguo.",
            "en": "They had an old car."
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
            "es": "Espero que yo tenga éxito.",
            "en": "I hope I succeed."
          },
          {
            "es": "Quiero que tú tengas buena suerte.",
            "en": "I want you to have good luck."
          },
          {
            "es": "Es importante que ella tenga el documento.",
            "en": "It is important that she have the document."
          },
          {
            "es": "Dudo que nosotros tengamos tiempo hoy.",
            "en": "I doubt we will have time today."
          },
          {
            "es": "Ojalá que ellos tengan un buen viaje.",
            "en": "Hopefully they have a good trip."
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
            "es": "Yo hacía ejercicio cada mañana.",
            "en": "I used to exercise every morning."
          },
          {
            "es": "Tú hacías ruido constantemente.",
            "en": "You used to make noise constantly."
          },
          {
            "es": "Ella hacía pasteles los domingos.",
            "en": "She used to make cakes on Sundays."
          },
          {
            "es": "Nosotros hacíamos viajes en verano.",
            "en": "We used to take trips in summer."
          },
          {
            "es": "Ellos hacían deportes juntos.",
            "en": "They used to play sports together."
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
            "es": "Quiero que yo haga lo correcto.",
            "en": "I want to do the right thing."
          },
          {
            "es": "Espero que tú hagas la tarea.",
            "en": "I hope you do the homework."
          },
          {
            "es": "Es importante que ella haga la presentación.",
            "en": "It is important that she give the presentation."
          },
          {
            "es": "Dudo que nosotros hagamos el viaje.",
            "en": "I doubt we will make the trip."
          },
          {
            "es": "Ojalá que ellos hagan un buen trabajo.",
            "en": "Hopefully they do a good job."
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
  },
  {
    "infinitive": "buscar",
    "english": "to look for",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "busco",
          "buscas",
          "busca",
          "buscamos",
          "buscan"
        ],
        "sentences": [
          {
            "es": "Yo busco todos los días.",
            "en": "I look for every day."
          },
          {
            "es": "Tú buscas con frecuencia.",
            "en": "You look for often."
          },
          {
            "es": "Ella busca en casa.",
            "en": "She look for at home."
          },
          {
            "es": "Nosotros buscamos juntos.",
            "en": "We look for together."
          },
          {
            "es": "Ellos buscan mucho.",
            "en": "They look for a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "busqué",
          "buscaste",
          "buscó",
          "buscamos",
          "buscaron"
        ],
        "sentences": [
          {
            "es": "Yo busqué ayer.",
            "en": "I look for yesterday."
          },
          {
            "es": "Tú buscaste el sábado pasado.",
            "en": "You look for last Saturday."
          },
          {
            "es": "Ella buscó anoche.",
            "en": "She look for last night."
          },
          {
            "es": "Nosotros buscamos la semana pasada.",
            "en": "We look for last week."
          },
          {
            "es": "Ellos buscaron hace dos días.",
            "en": "They look for two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "buscaré",
          "buscarás",
          "buscará",
          "buscaremos",
          "buscarán"
        ],
        "sentences": [
          {
            "es": "Yo buscaré mañana.",
            "en": "I will look for tomorrow."
          },
          {
            "es": "Tú buscarás el próximo lunes.",
            "en": "You will look for next Monday."
          },
          {
            "es": "Ella buscará después.",
            "en": "She will look for later."
          },
          {
            "es": "Nosotros buscaremos pronto.",
            "en": "We will look for soon."
          },
          {
            "es": "Ellos buscarán la próxima semana.",
            "en": "They will look for next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "buscaba",
          "buscabas",
          "buscaba",
          "buscábamos",
          "buscaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo buscaba mucho.",
            "en": "When I was a kid, I used to look for a lot."
          },
          {
            "es": "Tú buscabas todos los días.",
            "en": "You used to look for every day."
          },
          {
            "es": "Ella buscaba de joven.",
            "en": "She used to look for when she was young."
          },
          {
            "es": "Nosotros buscábamos juntos en aquellos años.",
            "en": "We used to look for together in those years."
          },
          {
            "es": "Ellos buscaban cada tarde.",
            "en": "They used to look for every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "busque",
          "busques",
          "busque",
          "busquemos",
          "busquen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo busque.",
            "en": "They want me to look for."
          },
          {
            "es": "Espero que tú busques pronto.",
            "en": "I hope you look for soon."
          },
          {
            "es": "Es importante que ella busque.",
            "en": "It is important that she look for."
          },
          {
            "es": "Dudo que nosotros busquemos hoy.",
            "en": "I doubt that we look for today."
          },
          {
            "es": "Ojalá que ellos busquen bien.",
            "en": "I hope they look for well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "tomar",
    "english": "to take / to drink",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "tomo",
          "tomas",
          "toma",
          "tomamos",
          "toman"
        ],
        "sentences": [
          {
            "es": "Yo tomo todos los días.",
            "en": "I take every day."
          },
          {
            "es": "Tú tomas con frecuencia.",
            "en": "You take often."
          },
          {
            "es": "Ella toma en casa.",
            "en": "She take at home."
          },
          {
            "es": "Nosotros tomamos juntos.",
            "en": "We take together."
          },
          {
            "es": "Ellos toman mucho.",
            "en": "They take a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "tomé",
          "tomaste",
          "tomó",
          "tomamos",
          "tomaron"
        ],
        "sentences": [
          {
            "es": "Yo tomé ayer.",
            "en": "I take yesterday."
          },
          {
            "es": "Tú tomaste el sábado pasado.",
            "en": "You take last Saturday."
          },
          {
            "es": "Ella tomó anoche.",
            "en": "She take last night."
          },
          {
            "es": "Nosotros tomamos la semana pasada.",
            "en": "We take last week."
          },
          {
            "es": "Ellos tomaron hace dos días.",
            "en": "They take two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "tomaré",
          "tomarás",
          "tomará",
          "tomaremos",
          "tomarán"
        ],
        "sentences": [
          {
            "es": "Yo tomaré mañana.",
            "en": "I will take tomorrow."
          },
          {
            "es": "Tú tomarás el próximo lunes.",
            "en": "You will take next Monday."
          },
          {
            "es": "Ella tomará después.",
            "en": "She will take later."
          },
          {
            "es": "Nosotros tomaremos pronto.",
            "en": "We will take soon."
          },
          {
            "es": "Ellos tomarán la próxima semana.",
            "en": "They will take next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "tomaba",
          "tomabas",
          "tomaba",
          "tomábamos",
          "tomaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo tomaba mucho.",
            "en": "When I was a kid, I used to take a lot."
          },
          {
            "es": "Tú tomabas todos los días.",
            "en": "You used to take every day."
          },
          {
            "es": "Ella tomaba de joven.",
            "en": "She used to take when she was young."
          },
          {
            "es": "Nosotros tomábamos juntos en aquellos años.",
            "en": "We used to take together in those years."
          },
          {
            "es": "Ellos tomaban cada tarde.",
            "en": "They used to take every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "tome",
          "tomes",
          "tome",
          "tomemos",
          "tomen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo tome.",
            "en": "They want me to take."
          },
          {
            "es": "Espero que tú tomes pronto.",
            "en": "I hope you take soon."
          },
          {
            "es": "Es importante que ella tome.",
            "en": "It is important that she take."
          },
          {
            "es": "Dudo que nosotros tomemos hoy.",
            "en": "I doubt that we take today."
          },
          {
            "es": "Ojalá que ellos tomen bien.",
            "en": "I hope they take well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "llamar",
    "english": "to call",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "llamo",
          "llamas",
          "llama",
          "llamamos",
          "llaman"
        ],
        "sentences": [
          {
            "es": "Yo llamo todos los días.",
            "en": "I call every day."
          },
          {
            "es": "Tú llamas con frecuencia.",
            "en": "You call often."
          },
          {
            "es": "Ella llama en casa.",
            "en": "She call at home."
          },
          {
            "es": "Nosotros llamamos juntos.",
            "en": "We call together."
          },
          {
            "es": "Ellos llaman mucho.",
            "en": "They call a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "llamé",
          "llamaste",
          "llamó",
          "llamamos",
          "llamaron"
        ],
        "sentences": [
          {
            "es": "Yo llamé ayer.",
            "en": "I call yesterday."
          },
          {
            "es": "Tú llamaste el sábado pasado.",
            "en": "You call last Saturday."
          },
          {
            "es": "Ella llamó anoche.",
            "en": "She call last night."
          },
          {
            "es": "Nosotros llamamos la semana pasada.",
            "en": "We call last week."
          },
          {
            "es": "Ellos llamaron hace dos días.",
            "en": "They call two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "llamaré",
          "llamarás",
          "llamará",
          "llamaremos",
          "llamarán"
        ],
        "sentences": [
          {
            "es": "Yo llamaré mañana.",
            "en": "I will call tomorrow."
          },
          {
            "es": "Tú llamarás el próximo lunes.",
            "en": "You will call next Monday."
          },
          {
            "es": "Ella llamará después.",
            "en": "She will call later."
          },
          {
            "es": "Nosotros llamaremos pronto.",
            "en": "We will call soon."
          },
          {
            "es": "Ellos llamarán la próxima semana.",
            "en": "They will call next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "llamaba",
          "llamabas",
          "llamaba",
          "llamábamos",
          "llamaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo llamaba mucho.",
            "en": "When I was a kid, I used to call a lot."
          },
          {
            "es": "Tú llamabas todos los días.",
            "en": "You used to call every day."
          },
          {
            "es": "Ella llamaba de joven.",
            "en": "She used to call when she was young."
          },
          {
            "es": "Nosotros llamábamos juntos en aquellos años.",
            "en": "We used to call together in those years."
          },
          {
            "es": "Ellos llamaban cada tarde.",
            "en": "They used to call every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "llame",
          "llames",
          "llame",
          "llamemos",
          "llamen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo llame.",
            "en": "They want me to call."
          },
          {
            "es": "Espero que tú llames pronto.",
            "en": "I hope you call soon."
          },
          {
            "es": "Es importante que ella llame.",
            "en": "It is important that she call."
          },
          {
            "es": "Dudo que nosotros llamemos hoy.",
            "en": "I doubt that we call today."
          },
          {
            "es": "Ojalá que ellos llamen bien.",
            "en": "I hope they call well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "mostrar",
    "english": "to show",
    "type": "stem-o-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "muestro",
          "muestras",
          "muestra",
          "mostramos",
          "muestran"
        ],
        "sentences": [
          {
            "es": "Yo muestro todos los días.",
            "en": "I show every day."
          },
          {
            "es": "Tú muestras con frecuencia.",
            "en": "You show often."
          },
          {
            "es": "Ella muestra en casa.",
            "en": "She show at home."
          },
          {
            "es": "Nosotros mostramos juntos.",
            "en": "We show together."
          },
          {
            "es": "Ellos muestran mucho.",
            "en": "They show a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "mostré",
          "mostraste",
          "mostró",
          "mostramos",
          "mostraron"
        ],
        "sentences": [
          {
            "es": "Yo mostré ayer.",
            "en": "I show yesterday."
          },
          {
            "es": "Tú mostraste el sábado pasado.",
            "en": "You show last Saturday."
          },
          {
            "es": "Ella mostró anoche.",
            "en": "She show last night."
          },
          {
            "es": "Nosotros mostramos la semana pasada.",
            "en": "We show last week."
          },
          {
            "es": "Ellos mostraron hace dos días.",
            "en": "They show two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "mostraré",
          "mostrarás",
          "mostrará",
          "mostraremos",
          "mostrarán"
        ],
        "sentences": [
          {
            "es": "Yo mostraré mañana.",
            "en": "I will show tomorrow."
          },
          {
            "es": "Tú mostrarás el próximo lunes.",
            "en": "You will show next Monday."
          },
          {
            "es": "Ella mostrará después.",
            "en": "She will show later."
          },
          {
            "es": "Nosotros mostraremos pronto.",
            "en": "We will show soon."
          },
          {
            "es": "Ellos mostrarán la próxima semana.",
            "en": "They will show next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "mostraba",
          "mostrabas",
          "mostraba",
          "mostrábamos",
          "mostraban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo mostraba mucho.",
            "en": "When I was a kid, I used to show a lot."
          },
          {
            "es": "Tú mostrabas todos los días.",
            "en": "You used to show every day."
          },
          {
            "es": "Ella mostraba de joven.",
            "en": "She used to show when she was young."
          },
          {
            "es": "Nosotros mostrábamos juntos en aquellos años.",
            "en": "We used to show together in those years."
          },
          {
            "es": "Ellos mostraban cada tarde.",
            "en": "They used to show every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "mostre",
          "mostres",
          "mostre",
          "mostremos",
          "mostren"
        ],
        "sentences": [
          {
            "es": "Quieren que yo mostre.",
            "en": "They want me to show."
          },
          {
            "es": "Espero que tú mostres pronto.",
            "en": "I hope you show soon."
          },
          {
            "es": "Es importante que ella mostre.",
            "en": "It is important that she show."
          },
          {
            "es": "Dudo que nosotros mostremos hoy.",
            "en": "I doubt that we show today."
          },
          {
            "es": "Ojalá que ellos mostren bien.",
            "en": "I hope they show well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "preguntar",
    "english": "to ask",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "pregunto",
          "preguntas",
          "pregunta",
          "preguntamos",
          "preguntan"
        ],
        "sentences": [
          {
            "es": "Yo pregunto todos los días.",
            "en": "I ask every day."
          },
          {
            "es": "Tú preguntas con frecuencia.",
            "en": "You ask often."
          },
          {
            "es": "Ella pregunta en casa.",
            "en": "She ask at home."
          },
          {
            "es": "Nosotros preguntamos juntos.",
            "en": "We ask together."
          },
          {
            "es": "Ellos preguntan mucho.",
            "en": "They ask a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "pregunté",
          "preguntaste",
          "preguntó",
          "preguntamos",
          "preguntaron"
        ],
        "sentences": [
          {
            "es": "Yo pregunté ayer.",
            "en": "I ask yesterday."
          },
          {
            "es": "Tú preguntaste el sábado pasado.",
            "en": "You ask last Saturday."
          },
          {
            "es": "Ella preguntó anoche.",
            "en": "She ask last night."
          },
          {
            "es": "Nosotros preguntamos la semana pasada.",
            "en": "We ask last week."
          },
          {
            "es": "Ellos preguntaron hace dos días.",
            "en": "They ask two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "preguntaré",
          "preguntarás",
          "preguntará",
          "preguntaremos",
          "preguntarán"
        ],
        "sentences": [
          {
            "es": "Yo preguntaré mañana.",
            "en": "I will ask tomorrow."
          },
          {
            "es": "Tú preguntarás el próximo lunes.",
            "en": "You will ask next Monday."
          },
          {
            "es": "Ella preguntará después.",
            "en": "She will ask later."
          },
          {
            "es": "Nosotros preguntaremos pronto.",
            "en": "We will ask soon."
          },
          {
            "es": "Ellos preguntarán la próxima semana.",
            "en": "They will ask next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "preguntaba",
          "preguntabas",
          "preguntaba",
          "preguntábamos",
          "preguntaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo preguntaba mucho.",
            "en": "When I was a kid, I used to ask a lot."
          },
          {
            "es": "Tú preguntabas todos los días.",
            "en": "You used to ask every day."
          },
          {
            "es": "Ella preguntaba de joven.",
            "en": "She used to ask when she was young."
          },
          {
            "es": "Nosotros preguntábamos juntos en aquellos años.",
            "en": "We used to ask together in those years."
          },
          {
            "es": "Ellos preguntaban cada tarde.",
            "en": "They used to ask every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "pregunte",
          "preguntes",
          "pregunte",
          "preguntemos",
          "pregunten"
        ],
        "sentences": [
          {
            "es": "Quieren que yo pregunte.",
            "en": "They want me to ask."
          },
          {
            "es": "Espero que tú preguntes pronto.",
            "en": "I hope you ask soon."
          },
          {
            "es": "Es importante que ella pregunte.",
            "en": "It is important that she ask."
          },
          {
            "es": "Dudo que nosotros preguntemos hoy.",
            "en": "I doubt that we ask today."
          },
          {
            "es": "Ojalá que ellos pregunten bien.",
            "en": "I hope they ask well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "contestar",
    "english": "to answer",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "contesto",
          "contestas",
          "contesta",
          "contestamos",
          "contestan"
        ],
        "sentences": [
          {
            "es": "Yo contesto todos los días.",
            "en": "I answer every day."
          },
          {
            "es": "Tú contestas con frecuencia.",
            "en": "You answer often."
          },
          {
            "es": "Ella contesta en casa.",
            "en": "She answer at home."
          },
          {
            "es": "Nosotros contestamos juntos.",
            "en": "We answer together."
          },
          {
            "es": "Ellos contestan mucho.",
            "en": "They answer a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "contesté",
          "contestaste",
          "contestó",
          "contestamos",
          "contestaron"
        ],
        "sentences": [
          {
            "es": "Yo contesté ayer.",
            "en": "I answer yesterday."
          },
          {
            "es": "Tú contestaste el sábado pasado.",
            "en": "You answer last Saturday."
          },
          {
            "es": "Ella contestó anoche.",
            "en": "She answer last night."
          },
          {
            "es": "Nosotros contestamos la semana pasada.",
            "en": "We answer last week."
          },
          {
            "es": "Ellos contestaron hace dos días.",
            "en": "They answer two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "contestaré",
          "contestarás",
          "contestará",
          "contestaremos",
          "contestarán"
        ],
        "sentences": [
          {
            "es": "Yo contestaré mañana.",
            "en": "I will answer tomorrow."
          },
          {
            "es": "Tú contestarás el próximo lunes.",
            "en": "You will answer next Monday."
          },
          {
            "es": "Ella contestará después.",
            "en": "She will answer later."
          },
          {
            "es": "Nosotros contestaremos pronto.",
            "en": "We will answer soon."
          },
          {
            "es": "Ellos contestarán la próxima semana.",
            "en": "They will answer next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "contestaba",
          "contestabas",
          "contestaba",
          "contestábamos",
          "contestaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo contestaba mucho.",
            "en": "When I was a kid, I used to answer a lot."
          },
          {
            "es": "Tú contestabas todos los días.",
            "en": "You used to answer every day."
          },
          {
            "es": "Ella contestaba de joven.",
            "en": "She used to answer when she was young."
          },
          {
            "es": "Nosotros contestábamos juntos en aquellos años.",
            "en": "We used to answer together in those years."
          },
          {
            "es": "Ellos contestaban cada tarde.",
            "en": "They used to answer every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "conteste",
          "contestes",
          "conteste",
          "contestemos",
          "contesten"
        ],
        "sentences": [
          {
            "es": "Quieren que yo conteste.",
            "en": "They want me to answer."
          },
          {
            "es": "Espero que tú contestes pronto.",
            "en": "I hope you answer soon."
          },
          {
            "es": "Es importante que ella conteste.",
            "en": "It is important that she answer."
          },
          {
            "es": "Dudo que nosotros contestemos hoy.",
            "en": "I doubt that we answer today."
          },
          {
            "es": "Ojalá que ellos contesten bien.",
            "en": "I hope they answer well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "cocinar",
    "english": "to cook",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "cocino",
          "cocinas",
          "cocina",
          "cocinamos",
          "cocinan"
        ],
        "sentences": [
          {
            "es": "Yo cocino todos los días.",
            "en": "I cook every day."
          },
          {
            "es": "Tú cocinas con frecuencia.",
            "en": "You cook often."
          },
          {
            "es": "Ella cocina en casa.",
            "en": "She cook at home."
          },
          {
            "es": "Nosotros cocinamos juntos.",
            "en": "We cook together."
          },
          {
            "es": "Ellos cocinan mucho.",
            "en": "They cook a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "cociné",
          "cocinaste",
          "cocinó",
          "cocinamos",
          "cocinaron"
        ],
        "sentences": [
          {
            "es": "Yo cociné ayer.",
            "en": "I cook yesterday."
          },
          {
            "es": "Tú cocinaste el sábado pasado.",
            "en": "You cook last Saturday."
          },
          {
            "es": "Ella cocinó anoche.",
            "en": "She cook last night."
          },
          {
            "es": "Nosotros cocinamos la semana pasada.",
            "en": "We cook last week."
          },
          {
            "es": "Ellos cocinaron hace dos días.",
            "en": "They cook two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "cocinaré",
          "cocinarás",
          "cocinará",
          "cocinaremos",
          "cocinarán"
        ],
        "sentences": [
          {
            "es": "Yo cocinaré mañana.",
            "en": "I will cook tomorrow."
          },
          {
            "es": "Tú cocinarás el próximo lunes.",
            "en": "You will cook next Monday."
          },
          {
            "es": "Ella cocinará después.",
            "en": "She will cook later."
          },
          {
            "es": "Nosotros cocinaremos pronto.",
            "en": "We will cook soon."
          },
          {
            "es": "Ellos cocinarán la próxima semana.",
            "en": "They will cook next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "cocinaba",
          "cocinabas",
          "cocinaba",
          "cocinábamos",
          "cocinaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo cocinaba mucho.",
            "en": "When I was a kid, I used to cook a lot."
          },
          {
            "es": "Tú cocinabas todos los días.",
            "en": "You used to cook every day."
          },
          {
            "es": "Ella cocinaba de joven.",
            "en": "She used to cook when she was young."
          },
          {
            "es": "Nosotros cocinábamos juntos en aquellos años.",
            "en": "We used to cook together in those years."
          },
          {
            "es": "Ellos cocinaban cada tarde.",
            "en": "They used to cook every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "cocine",
          "cocines",
          "cocine",
          "cocinemos",
          "cocinen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo cocine.",
            "en": "They want me to cook."
          },
          {
            "es": "Espero que tú cocines pronto.",
            "en": "I hope you cook soon."
          },
          {
            "es": "Es importante que ella cocine.",
            "en": "It is important that she cook."
          },
          {
            "es": "Dudo que nosotros cocinemos hoy.",
            "en": "I doubt that we cook today."
          },
          {
            "es": "Ojalá que ellos cocinen bien.",
            "en": "I hope they cook well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "limpiar",
    "english": "to clean",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "limpio",
          "limpias",
          "limpia",
          "limpiamos",
          "limpian"
        ],
        "sentences": [
          {
            "es": "Yo limpio todos los días.",
            "en": "I clean every day."
          },
          {
            "es": "Tú limpias con frecuencia.",
            "en": "You clean often."
          },
          {
            "es": "Ella limpia en casa.",
            "en": "She clean at home."
          },
          {
            "es": "Nosotros limpiamos juntos.",
            "en": "We clean together."
          },
          {
            "es": "Ellos limpian mucho.",
            "en": "They clean a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "limpié",
          "limpiaste",
          "limpió",
          "limpiamos",
          "limpiaron"
        ],
        "sentences": [
          {
            "es": "Yo limpié ayer.",
            "en": "I clean yesterday."
          },
          {
            "es": "Tú limpiaste el sábado pasado.",
            "en": "You clean last Saturday."
          },
          {
            "es": "Ella limpió anoche.",
            "en": "She clean last night."
          },
          {
            "es": "Nosotros limpiamos la semana pasada.",
            "en": "We clean last week."
          },
          {
            "es": "Ellos limpiaron hace dos días.",
            "en": "They clean two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "limpiaré",
          "limpiarás",
          "limpiará",
          "limpiaremos",
          "limpiarán"
        ],
        "sentences": [
          {
            "es": "Yo limpiaré mañana.",
            "en": "I will clean tomorrow."
          },
          {
            "es": "Tú limpiarás el próximo lunes.",
            "en": "You will clean next Monday."
          },
          {
            "es": "Ella limpiará después.",
            "en": "She will clean later."
          },
          {
            "es": "Nosotros limpiaremos pronto.",
            "en": "We will clean soon."
          },
          {
            "es": "Ellos limpiarán la próxima semana.",
            "en": "They will clean next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "limpiaba",
          "limpiabas",
          "limpiaba",
          "limpiábamos",
          "limpiaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo limpiaba mucho.",
            "en": "When I was a kid, I used to clean a lot."
          },
          {
            "es": "Tú limpiabas todos los días.",
            "en": "You used to clean every day."
          },
          {
            "es": "Ella limpiaba de joven.",
            "en": "She used to clean when she was young."
          },
          {
            "es": "Nosotros limpiábamos juntos en aquellos años.",
            "en": "We used to clean together in those years."
          },
          {
            "es": "Ellos limpiaban cada tarde.",
            "en": "They used to clean every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "limpie",
          "limpies",
          "limpie",
          "limpiemos",
          "limpien"
        ],
        "sentences": [
          {
            "es": "Quieren que yo limpie.",
            "en": "They want me to clean."
          },
          {
            "es": "Espero que tú limpies pronto.",
            "en": "I hope you clean soon."
          },
          {
            "es": "Es importante que ella limpie.",
            "en": "It is important that she clean."
          },
          {
            "es": "Dudo que nosotros limpiemos hoy.",
            "en": "I doubt that we clean today."
          },
          {
            "es": "Ojalá que ellos limpien bien.",
            "en": "I hope they clean well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "enseñar",
    "english": "to teach",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "enseño",
          "enseñas",
          "enseña",
          "enseñamos",
          "enseñan"
        ],
        "sentences": [
          {
            "es": "Yo enseño todos los días.",
            "en": "I teach every day."
          },
          {
            "es": "Tú enseñas con frecuencia.",
            "en": "You teach often."
          },
          {
            "es": "Ella enseña en casa.",
            "en": "She teach at home."
          },
          {
            "es": "Nosotros enseñamos juntos.",
            "en": "We teach together."
          },
          {
            "es": "Ellos enseñan mucho.",
            "en": "They teach a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "enseñé",
          "enseñaste",
          "enseñó",
          "enseñamos",
          "enseñaron"
        ],
        "sentences": [
          {
            "es": "Yo enseñé ayer.",
            "en": "I teach yesterday."
          },
          {
            "es": "Tú enseñaste el sábado pasado.",
            "en": "You teach last Saturday."
          },
          {
            "es": "Ella enseñó anoche.",
            "en": "She teach last night."
          },
          {
            "es": "Nosotros enseñamos la semana pasada.",
            "en": "We teach last week."
          },
          {
            "es": "Ellos enseñaron hace dos días.",
            "en": "They teach two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "enseñaré",
          "enseñarás",
          "enseñará",
          "enseñaremos",
          "enseñarán"
        ],
        "sentences": [
          {
            "es": "Yo enseñaré mañana.",
            "en": "I will teach tomorrow."
          },
          {
            "es": "Tú enseñarás el próximo lunes.",
            "en": "You will teach next Monday."
          },
          {
            "es": "Ella enseñará después.",
            "en": "She will teach later."
          },
          {
            "es": "Nosotros enseñaremos pronto.",
            "en": "We will teach soon."
          },
          {
            "es": "Ellos enseñarán la próxima semana.",
            "en": "They will teach next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "enseñaba",
          "enseñabas",
          "enseñaba",
          "enseñábamos",
          "enseñaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo enseñaba mucho.",
            "en": "When I was a kid, I used to teach a lot."
          },
          {
            "es": "Tú enseñabas todos los días.",
            "en": "You used to teach every day."
          },
          {
            "es": "Ella enseñaba de joven.",
            "en": "She used to teach when she was young."
          },
          {
            "es": "Nosotros enseñábamos juntos en aquellos años.",
            "en": "We used to teach together in those years."
          },
          {
            "es": "Ellos enseñaban cada tarde.",
            "en": "They used to teach every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "enseñe",
          "enseñes",
          "enseñe",
          "enseñemos",
          "enseñen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo enseñe.",
            "en": "They want me to teach."
          },
          {
            "es": "Espero que tú enseñes pronto.",
            "en": "I hope you teach soon."
          },
          {
            "es": "Es importante que ella enseñe.",
            "en": "It is important that she teach."
          },
          {
            "es": "Dudo que nosotros enseñemos hoy.",
            "en": "I doubt that we teach today."
          },
          {
            "es": "Ojalá que ellos enseñen bien.",
            "en": "I hope they teach well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "cambiar",
    "english": "to change",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "cambio",
          "cambias",
          "cambia",
          "cambiamos",
          "cambian"
        ],
        "sentences": [
          {
            "es": "Yo cambio todos los días.",
            "en": "I change every day."
          },
          {
            "es": "Tú cambias con frecuencia.",
            "en": "You change often."
          },
          {
            "es": "Ella cambia en casa.",
            "en": "She change at home."
          },
          {
            "es": "Nosotros cambiamos juntos.",
            "en": "We change together."
          },
          {
            "es": "Ellos cambian mucho.",
            "en": "They change a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "cambié",
          "cambiaste",
          "cambió",
          "cambiamos",
          "cambiaron"
        ],
        "sentences": [
          {
            "es": "Yo cambié ayer.",
            "en": "I change yesterday."
          },
          {
            "es": "Tú cambiaste el sábado pasado.",
            "en": "You change last Saturday."
          },
          {
            "es": "Ella cambió anoche.",
            "en": "She change last night."
          },
          {
            "es": "Nosotros cambiamos la semana pasada.",
            "en": "We change last week."
          },
          {
            "es": "Ellos cambiaron hace dos días.",
            "en": "They change two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "cambiaré",
          "cambiarás",
          "cambiará",
          "cambiaremos",
          "cambiarán"
        ],
        "sentences": [
          {
            "es": "Yo cambiaré mañana.",
            "en": "I will change tomorrow."
          },
          {
            "es": "Tú cambiarás el próximo lunes.",
            "en": "You will change next Monday."
          },
          {
            "es": "Ella cambiará después.",
            "en": "She will change later."
          },
          {
            "es": "Nosotros cambiaremos pronto.",
            "en": "We will change soon."
          },
          {
            "es": "Ellos cambiarán la próxima semana.",
            "en": "They will change next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "cambiaba",
          "cambiabas",
          "cambiaba",
          "cambiábamos",
          "cambiaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo cambiaba mucho.",
            "en": "When I was a kid, I used to change a lot."
          },
          {
            "es": "Tú cambiabas todos los días.",
            "en": "You used to change every day."
          },
          {
            "es": "Ella cambiaba de joven.",
            "en": "She used to change when she was young."
          },
          {
            "es": "Nosotros cambiábamos juntos en aquellos años.",
            "en": "We used to change together in those years."
          },
          {
            "es": "Ellos cambiaban cada tarde.",
            "en": "They used to change every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "cambie",
          "cambies",
          "cambie",
          "cambiemos",
          "cambien"
        ],
        "sentences": [
          {
            "es": "Quieren que yo cambie.",
            "en": "They want me to change."
          },
          {
            "es": "Espero que tú cambies pronto.",
            "en": "I hope you change soon."
          },
          {
            "es": "Es importante que ella cambie.",
            "en": "It is important that she change."
          },
          {
            "es": "Dudo que nosotros cambiemos hoy.",
            "en": "I doubt that we change today."
          },
          {
            "es": "Ojalá que ellos cambien bien.",
            "en": "I hope they change well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "olvidar",
    "english": "to forget",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "olvido",
          "olvidas",
          "olvida",
          "olvidamos",
          "olvidan"
        ],
        "sentences": [
          {
            "es": "Yo olvido todos los días.",
            "en": "I forget every day."
          },
          {
            "es": "Tú olvidas con frecuencia.",
            "en": "You forget often."
          },
          {
            "es": "Ella olvida en casa.",
            "en": "She forget at home."
          },
          {
            "es": "Nosotros olvidamos juntos.",
            "en": "We forget together."
          },
          {
            "es": "Ellos olvidan mucho.",
            "en": "They forget a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "olvidé",
          "olvidaste",
          "olvidó",
          "olvidamos",
          "olvidaron"
        ],
        "sentences": [
          {
            "es": "Yo olvidé ayer.",
            "en": "I forget yesterday."
          },
          {
            "es": "Tú olvidaste el sábado pasado.",
            "en": "You forget last Saturday."
          },
          {
            "es": "Ella olvidó anoche.",
            "en": "She forget last night."
          },
          {
            "es": "Nosotros olvidamos la semana pasada.",
            "en": "We forget last week."
          },
          {
            "es": "Ellos olvidaron hace dos días.",
            "en": "They forget two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "olvidaré",
          "olvidarás",
          "olvidará",
          "olvidaremos",
          "olvidarán"
        ],
        "sentences": [
          {
            "es": "Yo olvidaré mañana.",
            "en": "I will forget tomorrow."
          },
          {
            "es": "Tú olvidarás el próximo lunes.",
            "en": "You will forget next Monday."
          },
          {
            "es": "Ella olvidará después.",
            "en": "She will forget later."
          },
          {
            "es": "Nosotros olvidaremos pronto.",
            "en": "We will forget soon."
          },
          {
            "es": "Ellos olvidarán la próxima semana.",
            "en": "They will forget next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "olvidaba",
          "olvidabas",
          "olvidaba",
          "olvidábamos",
          "olvidaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo olvidaba mucho.",
            "en": "When I was a kid, I used to forget a lot."
          },
          {
            "es": "Tú olvidabas todos los días.",
            "en": "You used to forget every day."
          },
          {
            "es": "Ella olvidaba de joven.",
            "en": "She used to forget when she was young."
          },
          {
            "es": "Nosotros olvidábamos juntos en aquellos años.",
            "en": "We used to forget together in those years."
          },
          {
            "es": "Ellos olvidaban cada tarde.",
            "en": "They used to forget every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "olvide",
          "olvides",
          "olvide",
          "olvidemos",
          "olviden"
        ],
        "sentences": [
          {
            "es": "Quieren que yo olvide.",
            "en": "They want me to forget."
          },
          {
            "es": "Espero que tú olvides pronto.",
            "en": "I hope you forget soon."
          },
          {
            "es": "Es importante que ella olvide.",
            "en": "It is important that she forget."
          },
          {
            "es": "Dudo que nosotros olvidemos hoy.",
            "en": "I doubt that we forget today."
          },
          {
            "es": "Ojalá que ellos olviden bien.",
            "en": "I hope they forget well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "amar",
    "english": "to love",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "amo",
          "amas",
          "ama",
          "amamos",
          "aman"
        ],
        "sentences": [
          {
            "es": "Yo amo todos los días.",
            "en": "I love every day."
          },
          {
            "es": "Tú amas con frecuencia.",
            "en": "You love often."
          },
          {
            "es": "Ella ama en casa.",
            "en": "She love at home."
          },
          {
            "es": "Nosotros amamos juntos.",
            "en": "We love together."
          },
          {
            "es": "Ellos aman mucho.",
            "en": "They love a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "amé",
          "amaste",
          "amó",
          "amamos",
          "amaron"
        ],
        "sentences": [
          {
            "es": "Yo amé ayer.",
            "en": "I love yesterday."
          },
          {
            "es": "Tú amaste el sábado pasado.",
            "en": "You love last Saturday."
          },
          {
            "es": "Ella amó anoche.",
            "en": "She love last night."
          },
          {
            "es": "Nosotros amamos la semana pasada.",
            "en": "We love last week."
          },
          {
            "es": "Ellos amaron hace dos días.",
            "en": "They love two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "amaré",
          "amarás",
          "amará",
          "amaremos",
          "amarán"
        ],
        "sentences": [
          {
            "es": "Yo amaré mañana.",
            "en": "I will love tomorrow."
          },
          {
            "es": "Tú amarás el próximo lunes.",
            "en": "You will love next Monday."
          },
          {
            "es": "Ella amará después.",
            "en": "She will love later."
          },
          {
            "es": "Nosotros amaremos pronto.",
            "en": "We will love soon."
          },
          {
            "es": "Ellos amarán la próxima semana.",
            "en": "They will love next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "amaba",
          "amabas",
          "amaba",
          "amábamos",
          "amaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo amaba mucho.",
            "en": "When I was a kid, I used to love a lot."
          },
          {
            "es": "Tú amabas todos los días.",
            "en": "You used to love every day."
          },
          {
            "es": "Ella amaba de joven.",
            "en": "She used to love when she was young."
          },
          {
            "es": "Nosotros amábamos juntos en aquellos años.",
            "en": "We used to love together in those years."
          },
          {
            "es": "Ellos amaban cada tarde.",
            "en": "They used to love every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "ame",
          "ames",
          "ame",
          "amemos",
          "amen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo ame.",
            "en": "They want me to love."
          },
          {
            "es": "Espero que tú ames pronto.",
            "en": "I hope you love soon."
          },
          {
            "es": "Es importante que ella ame.",
            "en": "It is important that she love."
          },
          {
            "es": "Dudo que nosotros amemos hoy.",
            "en": "I doubt that we love today."
          },
          {
            "es": "Ojalá que ellos amen bien.",
            "en": "I hope they love well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "usar",
    "english": "to use",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "uso",
          "usas",
          "usa",
          "usamos",
          "usan"
        ],
        "sentences": [
          {
            "es": "Yo uso todos los días.",
            "en": "I use every day."
          },
          {
            "es": "Tú usas con frecuencia.",
            "en": "You use often."
          },
          {
            "es": "Ella usa en casa.",
            "en": "She use at home."
          },
          {
            "es": "Nosotros usamos juntos.",
            "en": "We use together."
          },
          {
            "es": "Ellos usan mucho.",
            "en": "They use a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "usé",
          "usaste",
          "usó",
          "usamos",
          "usaron"
        ],
        "sentences": [
          {
            "es": "Yo usé ayer.",
            "en": "I use yesterday."
          },
          {
            "es": "Tú usaste el sábado pasado.",
            "en": "You use last Saturday."
          },
          {
            "es": "Ella usó anoche.",
            "en": "She use last night."
          },
          {
            "es": "Nosotros usamos la semana pasada.",
            "en": "We use last week."
          },
          {
            "es": "Ellos usaron hace dos días.",
            "en": "They use two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "usaré",
          "usarás",
          "usará",
          "usaremos",
          "usarán"
        ],
        "sentences": [
          {
            "es": "Yo usaré mañana.",
            "en": "I will use tomorrow."
          },
          {
            "es": "Tú usarás el próximo lunes.",
            "en": "You will use next Monday."
          },
          {
            "es": "Ella usará después.",
            "en": "She will use later."
          },
          {
            "es": "Nosotros usaremos pronto.",
            "en": "We will use soon."
          },
          {
            "es": "Ellos usarán la próxima semana.",
            "en": "They will use next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "usaba",
          "usabas",
          "usaba",
          "usábamos",
          "usaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo usaba mucho.",
            "en": "When I was a kid, I used to use a lot."
          },
          {
            "es": "Tú usabas todos los días.",
            "en": "You used to use every day."
          },
          {
            "es": "Ella usaba de joven.",
            "en": "She used to use when she was young."
          },
          {
            "es": "Nosotros usábamos juntos en aquellos años.",
            "en": "We used to use together in those years."
          },
          {
            "es": "Ellos usaban cada tarde.",
            "en": "They used to use every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "use",
          "uses",
          "use",
          "usemos",
          "usen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo use.",
            "en": "They want me to use."
          },
          {
            "es": "Espero que tú uses pronto.",
            "en": "I hope you use soon."
          },
          {
            "es": "Es importante que ella use.",
            "en": "It is important that she use."
          },
          {
            "es": "Dudo que nosotros usemos hoy.",
            "en": "I doubt that we use today."
          },
          {
            "es": "Ojalá que ellos usen bien.",
            "en": "I hope they use well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "gritar",
    "english": "to shout",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "grito",
          "gritas",
          "grita",
          "gritamos",
          "gritan"
        ],
        "sentences": [
          {
            "es": "Yo grito todos los días.",
            "en": "I shout every day."
          },
          {
            "es": "Tú gritas con frecuencia.",
            "en": "You shout often."
          },
          {
            "es": "Ella grita en casa.",
            "en": "She shout at home."
          },
          {
            "es": "Nosotros gritamos juntos.",
            "en": "We shout together."
          },
          {
            "es": "Ellos gritan mucho.",
            "en": "They shout a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "grité",
          "gritaste",
          "gritó",
          "gritamos",
          "gritaron"
        ],
        "sentences": [
          {
            "es": "Yo grité ayer.",
            "en": "I shout yesterday."
          },
          {
            "es": "Tú gritaste el sábado pasado.",
            "en": "You shout last Saturday."
          },
          {
            "es": "Ella gritó anoche.",
            "en": "She shout last night."
          },
          {
            "es": "Nosotros gritamos la semana pasada.",
            "en": "We shout last week."
          },
          {
            "es": "Ellos gritaron hace dos días.",
            "en": "They shout two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "gritaré",
          "gritarás",
          "gritará",
          "gritaremos",
          "gritarán"
        ],
        "sentences": [
          {
            "es": "Yo gritaré mañana.",
            "en": "I will shout tomorrow."
          },
          {
            "es": "Tú gritarás el próximo lunes.",
            "en": "You will shout next Monday."
          },
          {
            "es": "Ella gritará después.",
            "en": "She will shout later."
          },
          {
            "es": "Nosotros gritaremos pronto.",
            "en": "We will shout soon."
          },
          {
            "es": "Ellos gritarán la próxima semana.",
            "en": "They will shout next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "gritaba",
          "gritabas",
          "gritaba",
          "gritábamos",
          "gritaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo gritaba mucho.",
            "en": "When I was a kid, I used to shout a lot."
          },
          {
            "es": "Tú gritabas todos los días.",
            "en": "You used to shout every day."
          },
          {
            "es": "Ella gritaba de joven.",
            "en": "She used to shout when she was young."
          },
          {
            "es": "Nosotros gritábamos juntos en aquellos años.",
            "en": "We used to shout together in those years."
          },
          {
            "es": "Ellos gritaban cada tarde.",
            "en": "They used to shout every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "grite",
          "grites",
          "grite",
          "gritemos",
          "griten"
        ],
        "sentences": [
          {
            "es": "Quieren que yo grite.",
            "en": "They want me to shout."
          },
          {
            "es": "Espero que tú grites pronto.",
            "en": "I hope you shout soon."
          },
          {
            "es": "Es importante que ella grite.",
            "en": "It is important that she shout."
          },
          {
            "es": "Dudo que nosotros gritemos hoy.",
            "en": "I doubt that we shout today."
          },
          {
            "es": "Ojalá que ellos griten bien.",
            "en": "I hope they shout well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "llorar",
    "english": "to cry",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "lloro",
          "lloras",
          "llora",
          "lloramos",
          "lloran"
        ],
        "sentences": [
          {
            "es": "Yo lloro todos los días.",
            "en": "I cry every day."
          },
          {
            "es": "Tú lloras con frecuencia.",
            "en": "You cry often."
          },
          {
            "es": "Ella llora en casa.",
            "en": "She cry at home."
          },
          {
            "es": "Nosotros lloramos juntos.",
            "en": "We cry together."
          },
          {
            "es": "Ellos lloran mucho.",
            "en": "They cry a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "lloré",
          "lloraste",
          "lloró",
          "lloramos",
          "lloraron"
        ],
        "sentences": [
          {
            "es": "Yo lloré ayer.",
            "en": "I cry yesterday."
          },
          {
            "es": "Tú lloraste el sábado pasado.",
            "en": "You cry last Saturday."
          },
          {
            "es": "Ella lloró anoche.",
            "en": "She cry last night."
          },
          {
            "es": "Nosotros lloramos la semana pasada.",
            "en": "We cry last week."
          },
          {
            "es": "Ellos lloraron hace dos días.",
            "en": "They cry two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "lloraré",
          "llorarás",
          "llorará",
          "lloraremos",
          "llorarán"
        ],
        "sentences": [
          {
            "es": "Yo lloraré mañana.",
            "en": "I will cry tomorrow."
          },
          {
            "es": "Tú llorarás el próximo lunes.",
            "en": "You will cry next Monday."
          },
          {
            "es": "Ella llorará después.",
            "en": "She will cry later."
          },
          {
            "es": "Nosotros lloraremos pronto.",
            "en": "We will cry soon."
          },
          {
            "es": "Ellos llorarán la próxima semana.",
            "en": "They will cry next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "lloraba",
          "llorabas",
          "lloraba",
          "llorábamos",
          "lloraban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo lloraba mucho.",
            "en": "When I was a kid, I used to cry a lot."
          },
          {
            "es": "Tú llorabas todos los días.",
            "en": "You used to cry every day."
          },
          {
            "es": "Ella lloraba de joven.",
            "en": "She used to cry when she was young."
          },
          {
            "es": "Nosotros llorábamos juntos en aquellos años.",
            "en": "We used to cry together in those years."
          },
          {
            "es": "Ellos lloraban cada tarde.",
            "en": "They used to cry every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "llore",
          "llores",
          "llore",
          "lloremos",
          "lloren"
        ],
        "sentences": [
          {
            "es": "Quieren que yo llore.",
            "en": "They want me to cry."
          },
          {
            "es": "Espero que tú llores pronto.",
            "en": "I hope you cry soon."
          },
          {
            "es": "Es importante que ella llore.",
            "en": "It is important that she cry."
          },
          {
            "es": "Dudo que nosotros lloremos hoy.",
            "en": "I doubt that we cry today."
          },
          {
            "es": "Ojalá que ellos lloren bien.",
            "en": "I hope they cry well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "viajar",
    "english": "to travel",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "viajo",
          "viajas",
          "viaja",
          "viajamos",
          "viajan"
        ],
        "sentences": [
          {
            "es": "Yo viajo todos los días.",
            "en": "I travel every day."
          },
          {
            "es": "Tú viajas con frecuencia.",
            "en": "You travel often."
          },
          {
            "es": "Ella viaja en casa.",
            "en": "She travel at home."
          },
          {
            "es": "Nosotros viajamos juntos.",
            "en": "We travel together."
          },
          {
            "es": "Ellos viajan mucho.",
            "en": "They travel a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "viajé",
          "viajaste",
          "viajó",
          "viajamos",
          "viajaron"
        ],
        "sentences": [
          {
            "es": "Yo viajé ayer.",
            "en": "I travel yesterday."
          },
          {
            "es": "Tú viajaste el sábado pasado.",
            "en": "You travel last Saturday."
          },
          {
            "es": "Ella viajó anoche.",
            "en": "She travel last night."
          },
          {
            "es": "Nosotros viajamos la semana pasada.",
            "en": "We travel last week."
          },
          {
            "es": "Ellos viajaron hace dos días.",
            "en": "They travel two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "viajaré",
          "viajarás",
          "viajará",
          "viajaremos",
          "viajarán"
        ],
        "sentences": [
          {
            "es": "Yo viajaré mañana.",
            "en": "I will travel tomorrow."
          },
          {
            "es": "Tú viajarás el próximo lunes.",
            "en": "You will travel next Monday."
          },
          {
            "es": "Ella viajará después.",
            "en": "She will travel later."
          },
          {
            "es": "Nosotros viajaremos pronto.",
            "en": "We will travel soon."
          },
          {
            "es": "Ellos viajarán la próxima semana.",
            "en": "They will travel next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "viajaba",
          "viajabas",
          "viajaba",
          "viajábamos",
          "viajaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo viajaba mucho.",
            "en": "When I was a kid, I used to travel a lot."
          },
          {
            "es": "Tú viajabas todos los días.",
            "en": "You used to travel every day."
          },
          {
            "es": "Ella viajaba de joven.",
            "en": "She used to travel when she was young."
          },
          {
            "es": "Nosotros viajábamos juntos en aquellos años.",
            "en": "We used to travel together in those years."
          },
          {
            "es": "Ellos viajaban cada tarde.",
            "en": "They used to travel every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "viaje",
          "viajes",
          "viaje",
          "viajemos",
          "viajen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo viaje.",
            "en": "They want me to travel."
          },
          {
            "es": "Espero que tú viajes pronto.",
            "en": "I hope you travel soon."
          },
          {
            "es": "Es importante que ella viaje.",
            "en": "It is important that she travel."
          },
          {
            "es": "Dudo que nosotros viajemos hoy.",
            "en": "I doubt that we travel today."
          },
          {
            "es": "Ojalá que ellos viajen bien.",
            "en": "I hope they travel well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "gustar",
    "english": "to like",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "gusto",
          "gustas",
          "gusta",
          "gustamos",
          "gustan"
        ],
        "sentences": [
          {
            "es": "Yo gusto todos los días.",
            "en": "I like every day."
          },
          {
            "es": "Tú gustas con frecuencia.",
            "en": "You like often."
          },
          {
            "es": "Ella gusta en casa.",
            "en": "She like at home."
          },
          {
            "es": "Nosotros gustamos juntos.",
            "en": "We like together."
          },
          {
            "es": "Ellos gustan mucho.",
            "en": "They like a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "gusté",
          "gustaste",
          "gustó",
          "gustamos",
          "gustaron"
        ],
        "sentences": [
          {
            "es": "Yo gusté ayer.",
            "en": "I like yesterday."
          },
          {
            "es": "Tú gustaste el sábado pasado.",
            "en": "You like last Saturday."
          },
          {
            "es": "Ella gustó anoche.",
            "en": "She like last night."
          },
          {
            "es": "Nosotros gustamos la semana pasada.",
            "en": "We like last week."
          },
          {
            "es": "Ellos gustaron hace dos días.",
            "en": "They like two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "gustaré",
          "gustarás",
          "gustará",
          "gustaremos",
          "gustarán"
        ],
        "sentences": [
          {
            "es": "Yo gustaré mañana.",
            "en": "I will like tomorrow."
          },
          {
            "es": "Tú gustarás el próximo lunes.",
            "en": "You will like next Monday."
          },
          {
            "es": "Ella gustará después.",
            "en": "She will like later."
          },
          {
            "es": "Nosotros gustaremos pronto.",
            "en": "We will like soon."
          },
          {
            "es": "Ellos gustarán la próxima semana.",
            "en": "They will like next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "gustaba",
          "gustabas",
          "gustaba",
          "gustábamos",
          "gustaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo gustaba mucho.",
            "en": "When I was a kid, I used to like a lot."
          },
          {
            "es": "Tú gustabas todos los días.",
            "en": "You used to like every day."
          },
          {
            "es": "Ella gustaba de joven.",
            "en": "She used to like when she was young."
          },
          {
            "es": "Nosotros gustábamos juntos en aquellos años.",
            "en": "We used to like together in those years."
          },
          {
            "es": "Ellos gustaban cada tarde.",
            "en": "They used to like every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "guste",
          "gustes",
          "guste",
          "gustemos",
          "gusten"
        ],
        "sentences": [
          {
            "es": "Quieren que yo guste.",
            "en": "They want me to like."
          },
          {
            "es": "Espero que tú gustes pronto.",
            "en": "I hope you like soon."
          },
          {
            "es": "Es importante que ella guste.",
            "en": "It is important that she like."
          },
          {
            "es": "Dudo que nosotros gustemos hoy.",
            "en": "I doubt that we like today."
          },
          {
            "es": "Ojalá que ellos gusten bien.",
            "en": "I hope they like well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "levantar",
    "english": "to lift / to raise",
    "type": "regular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "levanto",
          "levantas",
          "levanta",
          "levantamos",
          "levantan"
        ],
        "sentences": [
          {
            "es": "Yo levanto todos los días.",
            "en": "I lift every day."
          },
          {
            "es": "Tú levantas con frecuencia.",
            "en": "You lift often."
          },
          {
            "es": "Ella levanta en casa.",
            "en": "She lift at home."
          },
          {
            "es": "Nosotros levantamos juntos.",
            "en": "We lift together."
          },
          {
            "es": "Ellos levantan mucho.",
            "en": "They lift a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "levanté",
          "levantaste",
          "levantó",
          "levantamos",
          "levantaron"
        ],
        "sentences": [
          {
            "es": "Yo levanté ayer.",
            "en": "I lift yesterday."
          },
          {
            "es": "Tú levantaste el sábado pasado.",
            "en": "You lift last Saturday."
          },
          {
            "es": "Ella levantó anoche.",
            "en": "She lift last night."
          },
          {
            "es": "Nosotros levantamos la semana pasada.",
            "en": "We lift last week."
          },
          {
            "es": "Ellos levantaron hace dos días.",
            "en": "They lift two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "levantaré",
          "levantarás",
          "levantará",
          "levantaremos",
          "levantarán"
        ],
        "sentences": [
          {
            "es": "Yo levantaré mañana.",
            "en": "I will lift tomorrow."
          },
          {
            "es": "Tú levantarás el próximo lunes.",
            "en": "You will lift next Monday."
          },
          {
            "es": "Ella levantará después.",
            "en": "She will lift later."
          },
          {
            "es": "Nosotros levantaremos pronto.",
            "en": "We will lift soon."
          },
          {
            "es": "Ellos levantarán la próxima semana.",
            "en": "They will lift next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "levantaba",
          "levantabas",
          "levantaba",
          "levantábamos",
          "levantaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo levantaba mucho.",
            "en": "When I was a kid, I used to lift a lot."
          },
          {
            "es": "Tú levantabas todos los días.",
            "en": "You used to lift every day."
          },
          {
            "es": "Ella levantaba de joven.",
            "en": "She used to lift when she was young."
          },
          {
            "es": "Nosotros levantábamos juntos en aquellos años.",
            "en": "We used to lift together in those years."
          },
          {
            "es": "Ellos levantaban cada tarde.",
            "en": "They used to lift every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "levante",
          "levantes",
          "levante",
          "levantemos",
          "levanten"
        ],
        "sentences": [
          {
            "es": "Quieren que yo levante.",
            "en": "They want me to lift."
          },
          {
            "es": "Espero que tú levantes pronto.",
            "en": "I hope you lift soon."
          },
          {
            "es": "Es importante que ella levante.",
            "en": "It is important that she lift."
          },
          {
            "es": "Dudo que nosotros levantemos hoy.",
            "en": "I doubt that we lift today."
          },
          {
            "es": "Ojalá que ellos levanten bien.",
            "en": "I hope they lift well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "pedir",
    "english": "to ask for / to request",
    "type": "stem-e-i",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "pido",
          "pides",
          "pide",
          "pedimos",
          "piden"
        ],
        "sentences": [
          {
            "es": "Yo pido todos los días.",
            "en": "I ask for every day."
          },
          {
            "es": "Tú pides con frecuencia.",
            "en": "You ask for often."
          },
          {
            "es": "Ella pide en casa.",
            "en": "She ask for at home."
          },
          {
            "es": "Nosotros pedimos juntos.",
            "en": "We ask for together."
          },
          {
            "es": "Ellos piden mucho.",
            "en": "They ask for a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "pedí",
          "pediste",
          "pidió",
          "pedimos",
          "pidieron"
        ],
        "sentences": [
          {
            "es": "Yo pedí ayer.",
            "en": "I ask for yesterday."
          },
          {
            "es": "Tú pediste el sábado pasado.",
            "en": "You ask for last Saturday."
          },
          {
            "es": "Ella pidió anoche.",
            "en": "She ask for last night."
          },
          {
            "es": "Nosotros pedimos la semana pasada.",
            "en": "We ask for last week."
          },
          {
            "es": "Ellos pidieron hace dos días.",
            "en": "They ask for two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "pediré",
          "pedirás",
          "pedirá",
          "pediremos",
          "pedirán"
        ],
        "sentences": [
          {
            "es": "Yo pediré mañana.",
            "en": "I will ask for tomorrow."
          },
          {
            "es": "Tú pedirás el próximo lunes.",
            "en": "You will ask for next Monday."
          },
          {
            "es": "Ella pedirá después.",
            "en": "She will ask for later."
          },
          {
            "es": "Nosotros pediremos pronto.",
            "en": "We will ask for soon."
          },
          {
            "es": "Ellos pedirán la próxima semana.",
            "en": "They will ask for next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "pedía",
          "pedías",
          "pedía",
          "pedíamos",
          "pedían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo pedía mucho.",
            "en": "When I was a kid, I used to ask for a lot."
          },
          {
            "es": "Tú pedías todos los días.",
            "en": "You used to ask for every day."
          },
          {
            "es": "Ella pedía de joven.",
            "en": "She used to ask for when she was young."
          },
          {
            "es": "Nosotros pedíamos juntos en aquellos años.",
            "en": "We used to ask for together in those years."
          },
          {
            "es": "Ellos pedían cada tarde.",
            "en": "They used to ask for every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "pida",
          "pidas",
          "pida",
          "pidamos",
          "pidan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo pida.",
            "en": "They want me to ask for."
          },
          {
            "es": "Espero que tú pidas pronto.",
            "en": "I hope you ask for soon."
          },
          {
            "es": "Es importante que ella pida.",
            "en": "It is important that she ask for."
          },
          {
            "es": "Dudo que nosotros pidamos hoy.",
            "en": "I doubt that we ask for today."
          },
          {
            "es": "Ojalá que ellos pidan bien.",
            "en": "I hope they ask for well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "sentir",
    "english": "to feel",
    "type": "stem-e-ie",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "siento",
          "sientes",
          "siente",
          "sentimos",
          "sienten"
        ],
        "sentences": [
          {
            "es": "Yo siento todos los días.",
            "en": "I feel every day."
          },
          {
            "es": "Tú sientes con frecuencia.",
            "en": "You feel often."
          },
          {
            "es": "Ella siente en casa.",
            "en": "She feel at home."
          },
          {
            "es": "Nosotros sentimos juntos.",
            "en": "We feel together."
          },
          {
            "es": "Ellos sienten mucho.",
            "en": "They feel a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "sentí",
          "sentiste",
          "sintió",
          "sentimos",
          "sintieron"
        ],
        "sentences": [
          {
            "es": "Yo sentí ayer.",
            "en": "I feel yesterday."
          },
          {
            "es": "Tú sentiste el sábado pasado.",
            "en": "You feel last Saturday."
          },
          {
            "es": "Ella sintió anoche.",
            "en": "She feel last night."
          },
          {
            "es": "Nosotros sentimos la semana pasada.",
            "en": "We feel last week."
          },
          {
            "es": "Ellos sintieron hace dos días.",
            "en": "They feel two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "sentiré",
          "sentirás",
          "sentirá",
          "sentiremos",
          "sentirán"
        ],
        "sentences": [
          {
            "es": "Yo sentiré mañana.",
            "en": "I will feel tomorrow."
          },
          {
            "es": "Tú sentirás el próximo lunes.",
            "en": "You will feel next Monday."
          },
          {
            "es": "Ella sentirá después.",
            "en": "She will feel later."
          },
          {
            "es": "Nosotros sentiremos pronto.",
            "en": "We will feel soon."
          },
          {
            "es": "Ellos sentirán la próxima semana.",
            "en": "They will feel next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "sentía",
          "sentías",
          "sentía",
          "sentíamos",
          "sentían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo sentía mucho.",
            "en": "When I was a kid, I used to feel a lot."
          },
          {
            "es": "Tú sentías todos los días.",
            "en": "You used to feel every day."
          },
          {
            "es": "Ella sentía de joven.",
            "en": "She used to feel when she was young."
          },
          {
            "es": "Nosotros sentíamos juntos en aquellos años.",
            "en": "We used to feel together in those years."
          },
          {
            "es": "Ellos sentían cada tarde.",
            "en": "They used to feel every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "sienta",
          "sientas",
          "sienta",
          "sintamos",
          "sientan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo sienta.",
            "en": "They want me to feel."
          },
          {
            "es": "Espero que tú sientas pronto.",
            "en": "I hope you feel soon."
          },
          {
            "es": "Es importante que ella sienta.",
            "en": "It is important that she feel."
          },
          {
            "es": "Dudo que nosotros sintamos hoy.",
            "en": "I doubt that we feel today."
          },
          {
            "es": "Ojalá que ellos sientan bien.",
            "en": "I hope they feel well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "cerrar",
    "english": "to close",
    "type": "stem-e-ie",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "cierro",
          "cierras",
          "cierra",
          "cerramos",
          "cierran"
        ],
        "sentences": [
          {
            "es": "Yo cierro todos los días.",
            "en": "I close every day."
          },
          {
            "es": "Tú cierras con frecuencia.",
            "en": "You close often."
          },
          {
            "es": "Ella cierra en casa.",
            "en": "She close at home."
          },
          {
            "es": "Nosotros cerramos juntos.",
            "en": "We close together."
          },
          {
            "es": "Ellos cierran mucho.",
            "en": "They close a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "cerré",
          "cerraste",
          "cerró",
          "cerramos",
          "cerraron"
        ],
        "sentences": [
          {
            "es": "Yo cerré ayer.",
            "en": "I close yesterday."
          },
          {
            "es": "Tú cerraste el sábado pasado.",
            "en": "You close last Saturday."
          },
          {
            "es": "Ella cerró anoche.",
            "en": "She close last night."
          },
          {
            "es": "Nosotros cerramos la semana pasada.",
            "en": "We close last week."
          },
          {
            "es": "Ellos cerraron hace dos días.",
            "en": "They close two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "cerraré",
          "cerrarás",
          "cerrará",
          "cerraremos",
          "cerrarán"
        ],
        "sentences": [
          {
            "es": "Yo cerraré mañana.",
            "en": "I will close tomorrow."
          },
          {
            "es": "Tú cerrarás el próximo lunes.",
            "en": "You will close next Monday."
          },
          {
            "es": "Ella cerrará después.",
            "en": "She will close later."
          },
          {
            "es": "Nosotros cerraremos pronto.",
            "en": "We will close soon."
          },
          {
            "es": "Ellos cerrarán la próxima semana.",
            "en": "They will close next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "cerraba",
          "cerrabas",
          "cerraba",
          "cerrábamos",
          "cerraban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo cerraba mucho.",
            "en": "When I was a kid, I used to close a lot."
          },
          {
            "es": "Tú cerrabas todos los días.",
            "en": "You used to close every day."
          },
          {
            "es": "Ella cerraba de joven.",
            "en": "She used to close when she was young."
          },
          {
            "es": "Nosotros cerrábamos juntos en aquellos años.",
            "en": "We used to close together in those years."
          },
          {
            "es": "Ellos cerraban cada tarde.",
            "en": "They used to close every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "cerre",
          "cerres",
          "cerre",
          "cerremos",
          "cerren"
        ],
        "sentences": [
          {
            "es": "Quieren que yo cerre.",
            "en": "They want me to close."
          },
          {
            "es": "Espero que tú cerres pronto.",
            "en": "I hope you close soon."
          },
          {
            "es": "Es importante que ella cerre.",
            "en": "It is important that she close."
          },
          {
            "es": "Dudo que nosotros cerremos hoy.",
            "en": "I doubt that we close today."
          },
          {
            "es": "Ojalá que ellos cerren bien.",
            "en": "I hope they close well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "recordar",
    "english": "to remember",
    "type": "stem-o-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "recuerdo",
          "recuerdas",
          "recuerda",
          "recordamos",
          "recuerdan"
        ],
        "sentences": [
          {
            "es": "Yo recuerdo todos los días.",
            "en": "I remember every day."
          },
          {
            "es": "Tú recuerdas con frecuencia.",
            "en": "You remember often."
          },
          {
            "es": "Ella recuerda en casa.",
            "en": "She remember at home."
          },
          {
            "es": "Nosotros recordamos juntos.",
            "en": "We remember together."
          },
          {
            "es": "Ellos recuerdan mucho.",
            "en": "They remember a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "recordé",
          "recordaste",
          "recordó",
          "recordamos",
          "recordaron"
        ],
        "sentences": [
          {
            "es": "Yo recordé ayer.",
            "en": "I remember yesterday."
          },
          {
            "es": "Tú recordaste el sábado pasado.",
            "en": "You remember last Saturday."
          },
          {
            "es": "Ella recordó anoche.",
            "en": "She remember last night."
          },
          {
            "es": "Nosotros recordamos la semana pasada.",
            "en": "We remember last week."
          },
          {
            "es": "Ellos recordaron hace dos días.",
            "en": "They remember two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "recordaré",
          "recordarás",
          "recordará",
          "recordaremos",
          "recordarán"
        ],
        "sentences": [
          {
            "es": "Yo recordaré mañana.",
            "en": "I will remember tomorrow."
          },
          {
            "es": "Tú recordarás el próximo lunes.",
            "en": "You will remember next Monday."
          },
          {
            "es": "Ella recordará después.",
            "en": "She will remember later."
          },
          {
            "es": "Nosotros recordaremos pronto.",
            "en": "We will remember soon."
          },
          {
            "es": "Ellos recordarán la próxima semana.",
            "en": "They will remember next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "recordaba",
          "recordabas",
          "recordaba",
          "recordábamos",
          "recordaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo recordaba mucho.",
            "en": "When I was a kid, I used to remember a lot."
          },
          {
            "es": "Tú recordabas todos los días.",
            "en": "You used to remember every day."
          },
          {
            "es": "Ella recordaba de joven.",
            "en": "She used to remember when she was young."
          },
          {
            "es": "Nosotros recordábamos juntos en aquellos años.",
            "en": "We used to remember together in those years."
          },
          {
            "es": "Ellos recordaban cada tarde.",
            "en": "They used to remember every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "recorde",
          "recordes",
          "recorde",
          "recordemos",
          "recorden"
        ],
        "sentences": [
          {
            "es": "Quieren que yo recorde.",
            "en": "They want me to remember."
          },
          {
            "es": "Espero que tú recordes pronto.",
            "en": "I hope you remember soon."
          },
          {
            "es": "Es importante que ella recorde.",
            "en": "It is important that she remember."
          },
          {
            "es": "Dudo que nosotros recordemos hoy.",
            "en": "I doubt that we remember today."
          },
          {
            "es": "Ojalá que ellos recorden bien.",
            "en": "I hope they remember well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "tocar",
    "english": "to touch / to play (instrument)",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "toco",
          "tocas",
          "toca",
          "tocamos",
          "tocan"
        ],
        "sentences": [
          {
            "es": "Yo toco todos los días.",
            "en": "I touch every day."
          },
          {
            "es": "Tú tocas con frecuencia.",
            "en": "You touch often."
          },
          {
            "es": "Ella toca en casa.",
            "en": "She touch at home."
          },
          {
            "es": "Nosotros tocamos juntos.",
            "en": "We touch together."
          },
          {
            "es": "Ellos tocan mucho.",
            "en": "They touch a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "toqué",
          "tocaste",
          "tocó",
          "tocamos",
          "tocaron"
        ],
        "sentences": [
          {
            "es": "Yo toqué ayer.",
            "en": "I touch yesterday."
          },
          {
            "es": "Tú tocaste el sábado pasado.",
            "en": "You touch last Saturday."
          },
          {
            "es": "Ella tocó anoche.",
            "en": "She touch last night."
          },
          {
            "es": "Nosotros tocamos la semana pasada.",
            "en": "We touch last week."
          },
          {
            "es": "Ellos tocaron hace dos días.",
            "en": "They touch two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "tocaré",
          "tocarás",
          "tocará",
          "tocaremos",
          "tocarán"
        ],
        "sentences": [
          {
            "es": "Yo tocaré mañana.",
            "en": "I will touch tomorrow."
          },
          {
            "es": "Tú tocarás el próximo lunes.",
            "en": "You will touch next Monday."
          },
          {
            "es": "Ella tocará después.",
            "en": "She will touch later."
          },
          {
            "es": "Nosotros tocaremos pronto.",
            "en": "We will touch soon."
          },
          {
            "es": "Ellos tocarán la próxima semana.",
            "en": "They will touch next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "tocaba",
          "tocabas",
          "tocaba",
          "tocábamos",
          "tocaban"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo tocaba mucho.",
            "en": "When I was a kid, I used to touch a lot."
          },
          {
            "es": "Tú tocabas todos los días.",
            "en": "You used to touch every day."
          },
          {
            "es": "Ella tocaba de joven.",
            "en": "She used to touch when she was young."
          },
          {
            "es": "Nosotros tocábamos juntos en aquellos años.",
            "en": "We used to touch together in those years."
          },
          {
            "es": "Ellos tocaban cada tarde.",
            "en": "They used to touch every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "toque",
          "toques",
          "toque",
          "toquemos",
          "toquen"
        ],
        "sentences": [
          {
            "es": "Quieren que yo toque.",
            "en": "They want me to touch."
          },
          {
            "es": "Espero que tú toques pronto.",
            "en": "I hope you touch soon."
          },
          {
            "es": "Es importante que ella toque.",
            "en": "It is important that she touch."
          },
          {
            "es": "Dudo que nosotros toquemos hoy.",
            "en": "I doubt that we touch today."
          },
          {
            "es": "Ojalá que ellos toquen bien.",
            "en": "I hope they touch well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "morir",
    "english": "to die",
    "type": "stem-o-ue",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "muero",
          "mueres",
          "muere",
          "morimos",
          "mueren"
        ],
        "sentences": [
          {
            "es": "Yo muero todos los días.",
            "en": "I die every day."
          },
          {
            "es": "Tú mueres con frecuencia.",
            "en": "You die often."
          },
          {
            "es": "Ella muere en casa.",
            "en": "She die at home."
          },
          {
            "es": "Nosotros morimos juntos.",
            "en": "We die together."
          },
          {
            "es": "Ellos mueren mucho.",
            "en": "They die a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "morí",
          "moriste",
          "murió",
          "morimos",
          "murieron"
        ],
        "sentences": [
          {
            "es": "Yo morí ayer.",
            "en": "I die yesterday."
          },
          {
            "es": "Tú moriste el sábado pasado.",
            "en": "You die last Saturday."
          },
          {
            "es": "Ella murió anoche.",
            "en": "She die last night."
          },
          {
            "es": "Nosotros morimos la semana pasada.",
            "en": "We die last week."
          },
          {
            "es": "Ellos murieron hace dos días.",
            "en": "They die two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "moriré",
          "morirás",
          "morirá",
          "moriremos",
          "morirán"
        ],
        "sentences": [
          {
            "es": "Yo moriré mañana.",
            "en": "I will die tomorrow."
          },
          {
            "es": "Tú morirás el próximo lunes.",
            "en": "You will die next Monday."
          },
          {
            "es": "Ella morirá después.",
            "en": "She will die later."
          },
          {
            "es": "Nosotros moriremos pronto.",
            "en": "We will die soon."
          },
          {
            "es": "Ellos morirán la próxima semana.",
            "en": "They will die next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "moría",
          "morías",
          "moría",
          "moríamos",
          "morían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo moría mucho.",
            "en": "When I was a kid, I used to die a lot."
          },
          {
            "es": "Tú morías todos los días.",
            "en": "You used to die every day."
          },
          {
            "es": "Ella moría de joven.",
            "en": "She used to die when she was young."
          },
          {
            "es": "Nosotros moríamos juntos en aquellos años.",
            "en": "We used to die together in those years."
          },
          {
            "es": "Ellos morían cada tarde.",
            "en": "They used to die every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "mora",
          "moras",
          "mora",
          "moramos",
          "moran"
        ],
        "sentences": [
          {
            "es": "Quieren que yo mora.",
            "en": "They want me to die."
          },
          {
            "es": "Espero que tú moras pronto.",
            "en": "I hope you die soon."
          },
          {
            "es": "Es importante que ella mora.",
            "en": "It is important that she die."
          },
          {
            "es": "Dudo que nosotros moramos hoy.",
            "en": "I doubt that we die today."
          },
          {
            "es": "Ojalá que ellos moran bien.",
            "en": "I hope they die well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "traer",
    "english": "to bring",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "traigo",
          "traes",
          "trae",
          "traemos",
          "traen"
        ],
        "sentences": [
          {
            "es": "Yo traigo todos los días.",
            "en": "I bring every day."
          },
          {
            "es": "Tú traes con frecuencia.",
            "en": "You bring often."
          },
          {
            "es": "Ella trae en casa.",
            "en": "She bring at home."
          },
          {
            "es": "Nosotros traemos juntos.",
            "en": "We bring together."
          },
          {
            "es": "Ellos traen mucho.",
            "en": "They bring a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "traje",
          "trajiste",
          "trajo",
          "trajimos",
          "trajeron"
        ],
        "sentences": [
          {
            "es": "Yo traje ayer.",
            "en": "I bring yesterday."
          },
          {
            "es": "Tú trajiste el sábado pasado.",
            "en": "You bring last Saturday."
          },
          {
            "es": "Ella trajo anoche.",
            "en": "She bring last night."
          },
          {
            "es": "Nosotros trajimos la semana pasada.",
            "en": "We bring last week."
          },
          {
            "es": "Ellos trajeron hace dos días.",
            "en": "They bring two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "traeré",
          "traerás",
          "traerá",
          "traeremos",
          "traerán"
        ],
        "sentences": [
          {
            "es": "Yo traeré mañana.",
            "en": "I will bring tomorrow."
          },
          {
            "es": "Tú traerás el próximo lunes.",
            "en": "You will bring next Monday."
          },
          {
            "es": "Ella traerá después.",
            "en": "She will bring later."
          },
          {
            "es": "Nosotros traeremos pronto.",
            "en": "We will bring soon."
          },
          {
            "es": "Ellos traerán la próxima semana.",
            "en": "They will bring next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "traía",
          "traías",
          "traía",
          "traíamos",
          "traían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo traía mucho.",
            "en": "When I was a kid, I used to bring a lot."
          },
          {
            "es": "Tú traías todos los días.",
            "en": "You used to bring every day."
          },
          {
            "es": "Ella traía de joven.",
            "en": "She used to bring when she was young."
          },
          {
            "es": "Nosotros traíamos juntos en aquellos años.",
            "en": "We used to bring together in those years."
          },
          {
            "es": "Ellos traían cada tarde.",
            "en": "They used to bring every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "traiga",
          "traigas",
          "traiga",
          "traigamos",
          "traigan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo traiga.",
            "en": "They want me to bring."
          },
          {
            "es": "Espero que tú traigas pronto.",
            "en": "I hope you bring soon."
          },
          {
            "es": "Es importante que ella traiga.",
            "en": "It is important that she bring."
          },
          {
            "es": "Dudo que nosotros traigamos hoy.",
            "en": "I doubt that we bring today."
          },
          {
            "es": "Ojalá que ellos traigan bien.",
            "en": "I hope they bring well."
          }
        ]
      }
    }
  },
  {
    "infinitive": "oír",
    "english": "to hear",
    "type": "irregular",
    "tenses": {
      "present": {
        "label": "Present",
        "description": "Used for current actions, habits, and general truths.",
        "forms": [
          "oigo",
          "oyes",
          "oye",
          "oímos",
          "oyen"
        ],
        "sentences": [
          {
            "es": "Yo oigo todos los días.",
            "en": "I hear every day."
          },
          {
            "es": "Tú oyes con frecuencia.",
            "en": "You hear often."
          },
          {
            "es": "Ella oye en casa.",
            "en": "She hear at home."
          },
          {
            "es": "Nosotros oímos juntos.",
            "en": "We hear together."
          },
          {
            "es": "Ellos oyen mucho.",
            "en": "They hear a lot."
          }
        ]
      },
      "preterite": {
        "label": "Preterite (simple past)",
        "description": "Used for completed actions in the past — events with a clear end.",
        "forms": [
          "oí",
          "oíste",
          "oyó",
          "oímos",
          "oyeron"
        ],
        "sentences": [
          {
            "es": "Yo oí ayer.",
            "en": "I hear yesterday."
          },
          {
            "es": "Tú oíste el sábado pasado.",
            "en": "You hear last Saturday."
          },
          {
            "es": "Ella oyó anoche.",
            "en": "She hear last night."
          },
          {
            "es": "Nosotros oímos la semana pasada.",
            "en": "We hear last week."
          },
          {
            "es": "Ellos oyeron hace dos días.",
            "en": "They hear two days ago."
          }
        ]
      },
      "future": {
        "label": "Future",
        "description": "Used for actions that will happen.",
        "forms": [
          "oiré",
          "oirás",
          "oirá",
          "oiremos",
          "oirán"
        ],
        "sentences": [
          {
            "es": "Yo oiré mañana.",
            "en": "I will hear tomorrow."
          },
          {
            "es": "Tú oirás el próximo lunes.",
            "en": "You will hear next Monday."
          },
          {
            "es": "Ella oirá después.",
            "en": "She will hear later."
          },
          {
            "es": "Nosotros oiremos pronto.",
            "en": "We will hear soon."
          },
          {
            "es": "Ellos oirán la próxima semana.",
            "en": "They will hear next week."
          }
        ]
      },
      "imperfect": {
        "label": "Imperfect (habitual/ongoing past)",
        "description": "Used for habitual or ongoing past actions — \"used to\" or \"was -ing\".",
        "forms": [
          "oía",
          "oías",
          "oía",
          "oíamos",
          "oían"
        ],
        "sentences": [
          {
            "es": "Cuando era niño, yo oía mucho.",
            "en": "When I was a kid, I used to hear a lot."
          },
          {
            "es": "Tú oías todos los días.",
            "en": "You used to hear every day."
          },
          {
            "es": "Ella oía de joven.",
            "en": "She used to hear when she was young."
          },
          {
            "es": "Nosotros oíamos juntos en aquellos años.",
            "en": "We used to hear together in those years."
          },
          {
            "es": "Ellos oían cada tarde.",
            "en": "They used to hear every afternoon."
          }
        ]
      },
      "subjunctive_present": {
        "label": "Present Subjunctive",
        "description": "Used after expressions of desire, doubt, emotion, and uncertainty (after \"que\" + a triggering phrase like Quiero que…, Espero que…, Es importante que…).",
        "forms": [
          "oiga",
          "oigas",
          "oiga",
          "oigamos",
          "oigan"
        ],
        "sentences": [
          {
            "es": "Quieren que yo oiga.",
            "en": "They want me to hear."
          },
          {
            "es": "Espero que tú oigas pronto.",
            "en": "I hope you hear soon."
          },
          {
            "es": "Es importante que ella oiga.",
            "en": "It is important that she hear."
          },
          {
            "es": "Dudo que nosotros oigamos hoy.",
            "en": "I doubt that we hear today."
          },
          {
            "es": "Ojalá que ellos oigan bien.",
            "en": "I hope they hear well."
          }
        ]
      }
    }
  }
];
