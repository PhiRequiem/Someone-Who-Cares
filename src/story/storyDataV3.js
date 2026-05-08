export const storyData = {

  // APERTURA

  start: {
    text: [
      { text: ““Necesitamos gente que ponga su ojo, su corazón y su conciencia al servicio de una sociedad que necesita ser contada, fotografiada y narrada con mucho respeto y humanidad””, style: 'quote-main' },
      { text: “— Jesus Abad Colorado”, style: 'quote-author' },
    ],
    bg: 'black.png', type: 'cinematic',
    // TAREA: efectos sonoras de personas en la calle. Aumentando gradualmente el volumen
    // DIRECION: texto em fade in y se queda por 10 segundos
    choices: [{ text: “Continuar”, next: “intro_2” }]
  },

  intro_2: {
    text: [
      { text: "Tecnologia Humanista", style: 'credit-main' },
      { text: "en asociación con seguridades.org", style: 'credit-sub' },
      { text: "presenta", style: 'credit-presents' },
    ],
    bg: 'black.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_3" }]
  },

  intro_3: {
    text: [
      "Bogotá, Colombia. 2020"
      // DIRECION: se queda por 5 segundos
    ],
    // Primer panel. Plaza de Bolíva con pocas personas
    bg: 'plaza-de-bolivar-geral-01-a.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_4" }]
  },

  intro_4: {
    text: [
      "Hay, no! Que allí está el tombo y no me gusta",
      "Palomas? Son ratas aladas! jajajajja",
      "Pues era esto o plombo.",
      { text: "Andeeeee, mira la alpaca!", speaker: 'sebas' },
      "Pues que me quedé dormido, marica, y ela se quedó molesta.",
    ],
    // segundo panel. Plaza de Bolíva con algunas personas
    bg: 'plaza-de-bolivar-geral-01-b.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_5" }]
  },

  intro_5: {
    text: [
      "El man se caigó de medo!",
      "A la orden, señora!",
      { text: "Andrea, segura la mano de tu hermano", speaker: 'mama' },
      "No! Que vaina!",
    ],
    // tercer panel. Plaza de Bolíva con todas las personas
    bg: 'plaza-de-bolivar-geral-01-c.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_6" }]
  },

  intro_6: {
    text: [
      "Andrea y su hermano caminan por la plaza de Bolívar en su primer visita a Bogotá."
    ],
    // Plaza de Bolivar al nivel del piso. Andrea y Sebas de manos dadas, algunas personas.
    bg: 'plaza-de-bolivar-al-piso-01-a.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_7" }]
  },

  intro_7: {
    text: [
      { text: "(reindo) No, no, no. No me gusta las palomas.", speaker: 'andrea' },
      { text: "Mama! Quiero un Chocomaro!", speaker: 'sebas' },
    ],
    // Plaza de Bolivar al nivel del piso. Andrea y Sebas de manos dadas, algunas personas.
    bg: 'plaza-de-bolivar-al-piso-01-b.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_8" }]
  },

  // FIX: era duplicate intro_7, renombrado a intro_8
  intro_8: {
    text: [
      { text: "Sebas, aquí! Aquí!", speaker: 'andrea' },
    ],
    // Plaza de Bolivar al nivel del piso. Andrea y Sebas. Separados un poco distante.
    bg: 'plaza-de-bolivar-al-piso-01-c.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_9" }]
  },

  intro_9: {
    text: [
      { text: "Sebás ¿Donde vás?", speaker: 'andrea' },
      { text: "Andrea, segura la mano de tu hermano", speaker: 'mama' },
    ],
    // Plaza de Bolivar al nivel del piso. Más personas, algunos afiches de protestas. Andrea y Sebas, Sebas más distante y borroso.
    bg: 'plaza-de-bolivar-al-piso-01-d.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_10" }]
  },

  intro_10: {
    text: [
      { text: "¿Donde estás?", speaker: 'andrea' }
    ],
    // Protesta en la plaza de bolivar. Andrea adulta. Sebas ya no esta.
    bg: 'plaza-de-bolivar-protesta-01-a.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_11" }]
  },

  intro_11: {
    text: [
      { text: "¡Sebas¿  Donde estás?", speaker: 'andrea' },
      { text: "Andrea ¿donde está tu hermano?", speaker: 'mama' },
    ],
    // Protesta en la plaza de bolivar. Andrea adulta. Sebas ya no esta.
    bg: 'plaza-de-bolivar-protesta-01-b.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_12" }]
  },

  intro_12: {
    text: [
      { text: "Sebas?! Seebaaaas!!", speaker: 'andrea' },
    ],
    bg: 'black.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_13" }]
  },

  intro_13: {
    text: [
      { text: "Alguien a quien le importe", style: 'title-main' },
    ],
    bg: 'black.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "andrea_starts_day_01a" }]
  },

  // ACTO 1: EL MENSAJE

  andrea_starts_day_01a: {
    text: [
      "Bogotá, Colombia. Un domingo cualquiera.",
      "05:45am."
    ],
    bg: 'andrea-sleeps-closed-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Signal', text: '[1 mesaje]' },
    choices: [{ text: "Continuar", next: "andrea_starts_day_01b" }]
  },

  andrea_starts_day_01b: {
    text: [
      // DIRECIÓN: si posible, vibrar el imagen.
      "bzzzzzzzzzz bzzzzzzzz;"
    ],
    bg: 'andrea-sleeps-open-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Signal', text: '[2 mesajes]' },
    choices: [{ text: "Continuar", next: "andrea_starts_day_01c" }]
  },

  andrea_starts_day_01c: {
    text: [
      "bzzzzzzzzzz bzzzzzzzz;"
    ],
    bg: 'andrea-sleeps-closed-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Signal', text: '[3 mesajes]' },
    choices: [{ text: "Continuar", next: "mensajes_notificaciones" }]
  },

  mensajes_notificaciones: {
    text: [
      "3 notificaciones en Signal. No informa quien la envió.",
      "Tus ojos están cerrados y estás cansada.",
      "Insomnio."
    ],
    bg: 'andrea-sleeps-open-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Signal', text: '[3 mesajes]' },
    choices: [
      { text: "Levantar sin mirar el teléfono", next: "acto_1_bifurcacion_01_01" },
      { text: "Lanzar el teléfono y intentar dormir", next: "acto_1_bifurcacion_02_01" },
      { text: "Apagar el teléfono y intentar dormir", next: "acto_1_bifurcacion_03_01" },
      { text: "Verificar mensajes", next: "acto_1_bifurcacion_04_01" }
    ]
  },

  // ACTO 1 - Bifurcación 1: Levanta sin mirar al teléfono

  acto_1_bifurcacion_01_01: {
    text: [
      "Tu te levantas sin mirar el teléfono",
      "' Si no durmo, mejor caminar en la quebrada'",
      "Se siente el aroma del café del vecino, Juan, enfermero.",
      "' Pero antes una ducha y café'",
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_02" }]
  },

  acto_1_bifurcacion_01_02: {
    text: [
      "05:50am",
      "Mientras estás en la ducha, recuerdas la pesadillas",
      "- Sueño o halucinación? No puedo seguir así",
      "- Y que cuesta a mamá no enviarme mensajes toda las mañana para regañarme por Sebas?",
    ],
    // mismo escenario, sin Andrea. Pero la puerte del baño está abierta y la lyuz prendida
    bg: 'bg_sala-studio-andrea-vistazo-general-01b.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_03" }]
  },

  acto_1_bifurcacion_01_03: {
    text: [
      "06:15am",
      "La ducha te conforta y quedáte en el baño por 25 minutos. Piensas: 'la cuenta del gás es más barata que terapia.'",
      "Sales del baño, pone tus ropas de caminar y prepara un café.",
      "- No es un buen café como lo de Juan, pero..."
    ],
    // mismo escenario, andrea en la cocina preparando cafe
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_04" }]
  },

  acto_1_bifurcacion_01_04: {
    text: [
      "Andrea finalmente mira el teléfono y ve que los 3 mensajes no son de su mamá.",
      "Es Carmen, su supervisora en la redacción. Andrea lee los mensajes."
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01d.png',
    signalNotif: { from: 'Carmen G.', text: 'Acerca de la despareción de hermano: Encontramos una fuente en la Procuraduría.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_05" }]
  },

  acto_1_bifurcacion_01_05: {
    text: [
      "Tu espinazo se pone frío"
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01d.png',
    signalNotif: { from: 'Carmen G.', text: 'Necesita evidencia sólida para justificar investigación.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_06" }]
  },

  acto_1_bifurcacion_01_06: {
    text: [
      "Tus ojos están húmedos y su respiración más pesada."
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01d.png',
    signalNotif: { from: 'Carmen G.', text: 'La fuente se quedá hasta las 07:00 y se vá antes que troquen el turno de seguridad.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_07" }]
  },

  acto_1_bifurcacion_01_07: {
    text: [
      "06:17am",
      "Lees el último mensaje. Demora un poco para compreender todo hasta decidir irse sin demorar",
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01d.png',
    signalNotif: { from: 'Carmen G.', text: 'Venga a la oficina ahora, apaga tu teléfono cuando salir de casa y mucho cuidado.' },
    choices: [{ text: "Solicitar un taxi o carro para ir a la oficina", next: "acto_1_bifurcacion_01_07b" }]
  },

  // FIX: era duplicate acto_1_bifurcacion_01_07, renombrado a _07b
  acto_1_bifurcacion_01_07b: {
    text: [
      "06:20am",
      "La aplicación no encuentra taxis cercanos.",
      "- No! No creo que ls malditos borrachos tomarón todos los taxis en Chapinero!",
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    // TAREA: Aplicacion de taxi
    signalNotif: { from: 'Diduber', text: 'Estamos buscando conductores aliados. Tiempo estimado 5 minutos' },
    choices: [
      { text: "Esperar 5 minutos", next: "acto_1_bifurcacion_01_08" },
      { text: "Ir hasta la avenida séptima y tomar el bus (35 minutos total)", next: "ir_a_septima" }
    ]
  },

  acto_1_bifurcacion_01_08: {
    text: [
      "06:25am",
      "La aplicación encuentra 1 taxi.",
      "- 38 minutos?!?!? voy llegar retrasada!",
      { text: "Andrea, segura la mano de tu hermano", speaker: 'mama' },
      { text: "- Pero en bus llego justo en la hora", speaker: 'andrea' },
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    // TAREA: Aplicacion de taxi
    signalNotif: { from: 'Diduber', text: 'Tu taxi llega en 10 minutos. Tiempo estimado de viaje: 28 minutos de viaje.' },
    choices: [
      { text: "Esperar 10 minutos por el taxi.", next: "acto_1_va_en_taxi_01a" },
      { text: "Cancelar taxi, y tomar el bus en la avenida séptima (35 minutos total)", next: "ir_a_septima" }
    ]
  },

  // ACTO 1 - Bifurcación 2: lanzar el teléfono y intentar dormir

  acto_1_bifurcacion_02_01: {
    text: [
      "Lanzas el teléfono lejos de ti",
      "No estás dormida, pero así mismo, sueñas",
    ],
    // TAREA/DIRECCIÓN [PHI]: aqui debes enviar a la pesadilla (scenas intro_4 a intro_12)
    // si posible, con filtro de color rojo.
    bg: 'andrea-sleeps-closed-eyes-01a.png', type: 'cinematic',
    choices: [
      { text: "Continuar (iteración 1)", next: "intro_4" },
      { text: "Continuar (iteración 2)", next: "acto_1_bifurcacion_02_02" }
    ]
  },

  acto_1_bifurcacion_02_02: {
    text: [
      "Horas más tarde, despiertas.",
      "Muchos mensajes en Signal. Todos de Carmen.",
      "'Acerca de tu hermano: Fuente en la Procuraduría.'",
      "'Necesita evidencia sólida para justificar investigación.'",
      "'La fuente se quedá hasta las 07:00.'",
      "'Venga a la oficina ahora, apaga tu teléfono cuando salir de casa.'",
      "'Estás, Andie?'",
      "'Que pasó, Andie? La fuente se fue.'",
      "'Sabes como es difícil encontrar una fuente así??????? Que pasa contigo?'",
    ],
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    signalNotif: { from: 'Carmen G.', text: '9 mensajes perdidos' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_02_03" }]
  },

  acto_1_bifurcacion_02_03: {
    text: [
      "[Fin de la demonstración]",
      "Desafortunadamente, la fuente se fue y tu supervisora no comparte la identidad de la fuente.",
      "Su investigación a respeto de la desapareción de su hermano se quedó mucho más difícil."
    ],
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    choices: [{ text: "Ver resumen del demo", next: "start", showSummary: true }]
  },

  // ACTO 1 - Bifurcación 3: apagar el teléfono y intentar dormir

  acto_1_bifurcacion_03_01: {
    text: [
      "Tu cierras los ojos. Intentas ignorar el teléfono y maldices a quien sea que esté enviando los mensajes",
      "Despues de algunos minutos, sin realmente dormir, sueñas",
    ],
    // TAREA/DIRECCIÓN [PHI]: aqui debes enviar a la pesadilla (scenas intro_4 a intro_12)
    // si posible, con filtro de color rojo.
    bg: 'andrea-sleeps-closed-eyes-01a.png', type: 'cinematic',
    choices: [
      { text: "Continuar (iteración 1)", next: "intro_4" },
      { text: "Continuar (iteración 2)", next: "acto_1_bifurcacion_02_02" }
    ]
  },

  // ACTO 1 - Bifurcación 4: verificar el teléfono

  acto_1_bifurcacion_04_01: {
    text: [
      "05:50am",
      "- Sueño o halucinación? No puedo seguir así",
      "- Que cuesta a mamá no enviarme mensajes toda las mañana para regañarme por Sebas?",
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_02" }]
  },

  acto_1_bifurcacion_04_02: {
    text: [
      "05:51am",
      "- ¿No se da cuenta de que esto duele aún más a ella y a mí?"
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_03" }]
  },

  acto_1_bifurcacion_04_03: {
    text: [
      "Andrea finalmente mira el teléfono y ve que los 3 mensajes no son de su mamá.",
      "Es Carmen, su supervisora en la redacción. Andrea lee los mensajes."
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    signalNotif: { from: 'Carmen G.', text: 'Acerca de la despareción de hermano: Encontramos una fuente en la Procuraduría.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_04" }]
  },

  acto_1_bifurcacion_04_04: {
    text: [
      "Tu espinazo se pone frío"
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    signalNotif: { from: 'Carmen G.', text: 'Necesita evidencia sólida para justificar investigación.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_05" }]
  },

  acto_1_bifurcacion_04_05: {
    text: [
      "Tus ojos están húmedos y su respiración más pesada."
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    signalNotif: { from: 'Carmen G.', text: 'La fuente se quedá hasta las 07:00 y se vá antes que troquen el turno de seguridad.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_06" }]
  },

  acto_1_bifurcacion_04_06: {
    text: [
      "06:52am",
      "Lees el último mensaje. Demora un poco para compreender todo hasta decidir irse sin demorar",
    ],
    // andrea cercano del sofa
    bg: 'bg_sala-studio-andrea-vistazo-general-01a.png',
    signalNotif: { from: 'Carmen G.', text: 'Venga a la oficina ahora, apaga tu teléfono cuando salir de casa y mucho cuidado.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_07" }]
  },

  acto_1_bifurcacion_04_07: {
    text: [
      "05:55am",
      "Tomas una ducha rápida, sin dejar de pensar ni por un momento en el mensaje y en tu pesadilla.",
      "- Dios, ¿Será que esta fuente finalmente sabes lo que pasó a Sebás?"
    ],
    // mismo escenario, sin Andrea. Pero la puerte del baño está abierta y la lyuz prendida
    bg: 'bg_sala-studio-andrea-vistazo-general-01b.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_01_03" }]
  },

  acto_1_bifurcacion_04_08: {
    text: [
      "06:03am",
      "La ducha te conforta",
      "Sales del baño, pone tus ropas de caminar y prepara un café.",
      "- Mejor llegar a la oficina realmente despierta."
    ],
    // mismo escenario, andrea en la cocina preparando cafe
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_09" }]
  },

  acto_1_bifurcacion_04_09: {
    text: [
      "06:04am",
      "La aplicación no encuentra taxis cercanos.",
      "- No! No creo que ls malditos borrachos tomarón todos los taxis en Chapinero!",
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    // TAREA: Aplicacion de taxi
    signalNotif: { from: 'Diduber', text: 'Estamos buscando conductores aliados. Tiempo estimado 5 minutos' },
    choices: [
      { text: "Esperar 5 minutos", next: "espera_taxi_ronda_2" },
      { text: "Ir hasta la avenida séptima y tomar el bus (35 minutos total)", next: "ir_a_septima" }
    ]
  },

  acto_1_bifurcacion_04_10: {
    text: [
      "06:09am",
      "La aplicación encuentra 1 taxi.",
      "- 48 minutos?!?!? voy llegar justo al tiempo!",
      { text: "Andrea, segura la mano de tu hermano", speaker: 'mama' },
      { text: "- Pero en bus llego justo en la hora", speaker: 'andrea' },
    ],
    // mismo escenario, andrea en la cocina con cafe y celular en las manos
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    // TAREA: Aplicacion de taxi
    signalNotif: { from: 'Diduber', text: 'Tu taxi llega en 20 minutos. Tiempo estimado del viaje: 28 minutos de viaje.' },
    choices: [
      { text: "Esperar 20 minutos por el taxi.", next: "acto_1_va_en_taxi_01b" },
      { text: "Cancelar taxi, y tomar el bus en la avenida séptima (35 minutos total)", next: "ir_a_septima" }
    ]
  },

  // Bifurcación - En Taxi

  acto_1_va_en_taxi_01a: {
    text: [
      "06:38am",
      "Tu taxi llegá atrasado 2 minutos",
    ],
    bg: 'bg_se-monta-en-taxi-01a.png',
    choices: [
      { text: "Apagar el teléfono", next: "oficina_telefono_apagado" },
      { text: "Mantener Prendido", next: "oficina_telefono_prendido" }
    ]
  },

  acto_1_va_en_taxi_01b: {
    text: [
      "06:35am",
      "Tu taxi llego adelantado y puedes llegar más temprano.",
      "Al montar el taxi, recuerda que Carmén solicitó apagar el telefóno. Si ella pedió, hau una buena razón.",
      "Por otro lado, muchos conductores se toman caminos malos o lentos en Bogotá y es mejor yo mantener la app Maze para verificar el mejor camino."
    ],
    bg: 'bg_se-monta-en-taxi-01a.png',
    signalNotif: { from: 'Diduber', text: 'Tu taxi llega en 20 minutos. Tiempo estimado del viaje: 28 minutos de viaje.' },
    choices: [
      { text: "Apagar el teléfono", next: "oficina_telefono_apagado" },
      { text: "Mantener Prendido", next: "oficina_telefono_prendido" }
    ]
  },

  // Bifurcación - Ir a la Séptima

  ir_a_septima: {
    text: [
      "Al salir del edifiio recuerda que Carmén solicitó apagar el telefóno. Si ella pedió, hau una buena razón.",
      "Por otro lado, quieres seguir intentando encontrar taxi con Diduber."
    ],
    bg: 'bg_sale-del-edificio-01.png',
    choices: [
      { text: "Apagar el teléfono", next: "ir_a_septima_02" },
      { text: "Mantener Prendido", next: "ir_a_septima_02" }
    ]
  },

  ir_a_septima_02: {
    text: [
      "Sigues por la carrera quinta y al entrar en la calle 66. Percebes un taxi entrando en la misma calle.",
      "El taxi para justo adelante de ti, casi golpeandote y de ahí se salle 3 chicos con cuchilos.",
    ],
    bg: 'bg_carrera-calle-66.png',
    choices: [{ text: "Continuar", next: "ir_a_septima_03" }]
  },

  ir_a_septima_03: {
    text: [
      "Sigues por la carrera quinta y al entrar en la calle 66. Percebes un taxi entrando en la misma calle.",
      "El taxi para justo adelante de ti, casi golpeandote y de ahí se salle 3 chicos con cuchilos.",
    ],
    bg: 'bg_carrera-calle-66.png',
    choices: [
      { text: "Intento huir y correr", next: "ir_a_septima_04" },
      { text: "Entrego todos mis cosas y intento desarmar la situación", next: "ir_a_septima_05" }
    ]
  },

  ir_a_septima_04: {
    text: [
      "Un instante antes de huir. Te recordas el entrenamiento de seguridad que recibiste y decide colaborar."
    ],
    bg: 'bg_carrera-calle-66.png',
    choices: [{ text: "Continuar", next: "ir_a_septima_05" }]
  },

  ir_a_septima_05: {
    text: [
      "Tu entregas tu pertenencias y desarma la situación."
    ],
    bg: 'bg_carrera-calle-66.png',
    choices: [{ text: "Continuar", next: "ir_a_septima_06" }]
  },

  ir_a_septima_06: {
    text: [
      "Llega a la oficina retrasada, pero fisicamente bien. La fuente aún está ahí y la supersivora es comprensiva y te acojes",
      //DIRECCIÓN: IF telefono_apagado == false
      "La fuente, al saber que perdiste el teléfono cuando está prendido, si muestra molesta y colabora poco."
    ],
    bg: 'bg_oficina-andrea-carmen-fuente.png',
    choices: [{ text: "Continuar", next: "fin_demo_oficina" }]
  },

  // Stubs: llegada a la oficina según estado del teléfono

  oficina_telefono_apagado: {
    text: [
      "Llegas a la oficina con el teléfono apagado.",
      "Carmen y la fuente te esperan. La fuente se muestra tranquila al saber que seguiste el protocolo."
    ],
    bg: 'bg_oficina-andrea-carmen-fuente.png',
    visibilityDelta: -5,
    choices: [{ text: "Continuar", next: "fin_demo_oficina" }]
  },

  oficina_telefono_prendido: {
    text: [
      "Llegas a la oficina con el teléfono encendido.",
      "Carmen frunce el ceño. La fuente, al notar que el teléfono sigue activo, se muestra reticente."
    ],
    bg: 'bg_oficina-andrea-carmen-fuente.png',
    visibilityDelta: 10,
    choices: [{ text: "Continuar", next: "fin_demo_oficina" }]
  },

  // Stub: segunda ronda de búsqueda de taxi

  espera_taxi_ronda_2: {
    text: [
      "Cinco minutos. La aplicación sigue buscando.",
      "Finalmente, un conductor acepta."
    ],
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    signalNotif: { from: 'Diduber', text: 'Conductor encontrado.' },
    choices: [{ text: "Continuar", next: "acto_1_bifurcacion_04_10" }]
  },

  fin_demo_oficina: {
    text: [
      "[Fin de la demonstración]",
      "Su investigación a respeto de la desapareción de su hermano justo empezó.",
      "Hay muchos retos, pero con el soporte de Carmén, tus amigos, seguro gañaras las habilidades",
      "investigativas necessarios para descobrir la verdade de forma segura.",
    ],
    bg: 'bg_sala-studio-andrea-vistazo-general-01c.png',
    choices: [{ text: "Ver resumen del demo", next: "start", showSummary: true }]
  },


  // BIFURCACIÓN: SEGURIDAD DIGITAL (herencia V1/V2, en revisión)

  seguridad_ok: {
    text: [
      "Backup en disco cifrado: listo. VPN activa. Señal de Signal verificada.",
      "Carmen siempre lo repite: 'La seguridad digital no es paranoia, es protocolo.'",
      "Ahora sí. A revisar los mensajes."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Revisar mensajes", next: "investigar_foto" }]
  },

  seguridad_skip: {
    text: [
      "Abro el correo directamente. Hay un archivo adjunto sin remitente conocido.",
      "Lo abro sin pensar.",
      "... Espera. Acabo de ejecutar algo que no debí.",
      "Si me estaban rastreando antes, ahora saben exactamente dónde estoy."
    ],
    bg: 'bg_room.png', visibilityDelta: 25,
    choices: [{ text: "Ver qué contiene el archivo", next: "investigar_foto" }]
  },

  // ACTO 1: LA FOTO

  investigar_foto: {
    text: [
      "Es una fotografía.",
      "Soy yo. Trabajando en esta misma mesa. Tomada desde el edificio de enfrente.",
      "Me están vigilando. Necesito ver los metadatos de esa imagen ahora mismo."
    ],
    bg: 'bg_room.png', action: 'open_terminal', terminalContext: 'foto',
    choices: [{ text: "Analizar metadatos con terminal OSINT", next: "revelacion_foto" }]
  },

  revelacion_foto: {
    text: [
      "GPS: Edificio Cañada Norte, piso 7. Fecha: Ayer, 18:45.",
      "El edificio que el crimen organizado lleva meses intentando desalojar.",
      "Me estaban vigilando desde ahí. Esto no es coincidencia."
    ],
    bg: 'bg_room.png',
    choices: [
      { text: "Buscar el edificio en WebArchive", next: "webarchive_busqueda" },
      { text: "Ya es suficiente, ir al barrio", next: "evaluar_evidencia_skip" }
    ]
  },

  // BIFURCACIÓN: EVALUACIÓN DE EVIDENCIA

  webarchive_busqueda: {
    text: ["Busco 'Edificio Cañada Norte' en WebArchive..."],
    bg: 'bg_room.png', action: 'open_browser',
    choices: [{ text: "Guardar evidencia y cerrar", next: "evaluar_evidencia_web" }]
  },

  evaluar_evidencia_web: {
    text: [
      "La nota es del 21 de noviembre de 2019.",
      "La misma semana que Sebastián desapareció.",
      "Y el sitio fue dado de baja dos días después. Justo el 23N.",
      "Metadata más artículo archivado. Esto ya es evidencia real. Pero antes de salir..."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Prepararse para salir", next: "evaluacion_campo" }]
  },

  evaluar_evidencia_skip: {
    text: [
      "Tengo: una IP de VPN, coordenadas GPS y una fecha.",
      "¿Es suficiente para una fuente oficial? Probablemente no.",
      "Pero el tiempo corre. Antes de ir al barrio, un momento..."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Prepararse para salir", next: "evaluacion_campo" }]
  },

  evaluacion_campo: {
    text: [
      "Confirmado: me vigilaban desde el edificio de enfrente.",
      "Debo salir al barrio. Un error ahora puede comprometer todo."
    ],
    bg: 'bg_room.png',
    action: 'open_quiz',
    quiz: {
      id: 'safety',
      question: "¿Qué medidas tomas antes de salir del depto?",
      options: [
        {
          label: 'A',
          text: "Salir directo por la puerta principal. No hay tiempo que perder.",
          correct: false,
          visibilityDelta: 20,
          feedback: "Una ruta predecible y sin aviso previo facilita el seguimiento. Si alguien te observa, sabe exactamente a dónde vas y cuándo."
        },
        {
          label: 'B',
          text: "Avisar a Carmen por Signal, variar la ruta y dejar el laptop cifrado en casa.",
          correct: true,
          visibilityDelta: -5,
          feedback: "Avisar a un contacto de confianza, cambiar la ruta y no llevar equipo innecesario son protocolos básicos de seguridad operacional en campo."
        },
        {
          label: 'C',
          text: "Publicar en redes sociales que vas a documentar el barrio para tener testigos.",
          correct: false,
          visibilityDelta: 35,
          feedback: "Las redes sociales alertan a todo el mundo, incluyendo a quienes te vigilan. Nunca publiques tu ubicación en tiempo real durante una investigación activa."
        }
      ]
    },
    choices: [{ text: "Ir al barrio", next: "transicion_barrio" }]
  },

  // ACTO 2: EL BARRIO

  transicion_barrio: {
    text: [
      "Cruzo la ciudad rápido, evitando las cámaras del centro.",
      "En La Cañada todo parece igual, pero la tensión se siente diferente.",
      "Doña Rosa me espera."
    ],
    bg: 'bg_barrio.png', type: 'cinematic',
    signalNotif: { from: 'Doña Rosa', text: 'Ven al barrio. Algo está pasando aquí. 🙏' },
    choices: [{ text: "Llegar al barrio", next: "dona_rosa_intro" }]
  },

  dona_rosa_intro: {
    text: [
      "Doña Rosa Bermúdez. 67 años. Tres décadas viviendo en La Cañada.",
      "Organizó las primeras asambleas de vecinos cuando llegaron las amenazas de desalojo.",
      "Si alguien sabe qué pasa en este barrio, y quién lo financia, es ella."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Hablar con Doña Rosa", next: "inicio_barrio" }]
  },

  inicio_barrio: {
    text: [
      "'Andrea, gracias a dios. Hay un coche oscuro sin placas rondando desde ayer.'",
      "'Y eso que vuela...' señala al cielo. 'Lleva dos noches sobrevolando las casas.'",
      "Miro hacia arriba. Un dron de vigilancia. Profesional. Caro."
    ],
    bg: 'bg_barrio.png',
    choices: [
      { text: "Interceptar la señal del dron", next: "terminal_dron" },
      { text: "Preguntar a Doña Rosa sobre el coche", next: "pista_coche" }
    ]
  },

  // BIFURCACIÓN: PISTA DEL COCHE

  pista_coche: {
    text: [
      "'El coche tiene el logo de una empresa de seguridad privada. Vi el nombre: Varela Seguridad.'",
      "Varela. La misma Inmobiliaria Varela de las amenazas de 2019.",
      "El coche y el dron son del mismo grupo. Necesito la IP del dron para confirmarlo."
    ],
    bg: 'bg_barrio.png',
    evidenceDrop: { id: 'testimonio-rosa', name: 'Coche sin placas, Varela Seguridad', type: 'Testimonio' },
    choices: [{ text: "Interceptar el dron", next: "terminal_dron" }]
  },

  // ACTO 2: EL DRON

  terminal_dron: {
    text: [
      "Despliego la antena portátil.",
      "Si capturo la IP del dron, puedo rastrear quién lo opera.",
      "Puede ser la prueba que Carmen necesita para que la Procuraduría abra el caso."
    ],
    bg: 'bg_barrio.png', action: 'open_terminal', terminalContext: 'dron',
    choices: [{ text: "Analizar resultados", next: "revelacion_dron" }]
  },

  revelacion_dron: {
    text: [
      "IP registrada a: Varela Seguridad S.A., subsidiaria de Inmobiliaria Varela S.A.",
      "La misma empresa que amenazaba a los vecinos en 2019.",
      "La misma semana en que Sebastián desapareció.",
      "Por primera vez en cuatro años... tengo una pista real. Pero antes de enviar esto..."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Preparar el envío", next: "quiz_evidencia" }]
  },

  quiz_evidencia: {
    text: [
      "Tengo el paquete completo: metadatos, WebArchive, IP del dron.",
      "Antes de enviárselo a Carmen: ¿cómo protejo esta información?"
    ],
    bg: 'bg_barrio.png',
    action: 'open_quiz',
    quiz: {
      id: 'evidence',
      question: "¿Cómo guardas y compartes de forma segura el paquete de evidencia?",
      options: [
        {
          label: 'A',
          text: "Subir todo a Google Drive con tu cuenta personal y compartir el link por email.",
          correct: false,
          visibilityDelta: 20,
          feedback: "Los servicios de nube comerciales pueden ser accedidos por terceros mediante órdenes judiciales o vulnerabilidades. Nunca uses tu cuenta personal para evidencia sensible."
        },
        {
          label: 'B',
          text: "Cifrar con VeraCrypt, guardar los originales offline y compartir copias con la metadata eliminada.",
          correct: true,
          visibilityDelta: -5,
          feedback: "Correcto. Cifrado local, respaldo de originales offline y eliminar metadata antes de compartir son las tres prácticas fundamentales para proteger evidencia sensible."
        },
        {
          label: 'C',
          text: "Comprimir todo en un ZIP y enviarlo por WhatsApp.",
          correct: false,
          visibilityDelta: 25,
          feedback: "WhatsApp almacena metadatos de mensajes y un ZIP sin contraseña no cifra el contenido. Además, el historial de chats puede ser requisado."
        }
      ]
    },
    choices: [{ text: "Enviar evidencia a Carmen", next: "final_demo" }]
  },

  // CIERRE

  final_demo: {
    text: [
      "Le envío el paquete de evidencia a Carmen: metadata de la foto, historial de WebArchive, IP del dron.",
      "Su respuesta llega en minutos: 'Es suficiente. Mi fuente va a pedir la reapertura del caso.'",
      "'Andrea... esto es real. Y va a ponerse peligroso.'",
      "Fin del demo."
    ],
    bg: 'bg_barrio.png', type: 'cinematic',
    signalNotif: { from: 'Carmen G.', text: 'Es suficiente. Mi fuente pide la reapertura. 🔒' },
    choices: [{ text: "Ver resumen del demo", next: "start", showSummary: true }]
  }
};
