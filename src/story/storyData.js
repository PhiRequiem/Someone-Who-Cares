export const storyData = {

  // APERTURA

  start: {
    text: [
      "Martes 3 de octubre...",
      "5:30 am... Empieza a amanecer en Barrio La Cañada."
    ],
    bg: 'bg_barrio_dawn.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_2" }]
  },

  intro_2: {
    text: [
      "Las calles parecen tranquilas...",
      "Pero todos saben que un grupo de crimen organizado lleva meses intentando apropiarse de varios edificios del barrio.",
      "Los vecinos resisten. La presión aumenta."
    ],
    bg: 'bg_barrio_dawn.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_3" }]
  },

  intro_3: {
    text: [
      "Andrea, periodista y hacktivista, lleva horas despierta.",
      "En su escritorio, junto al computador, hay una foto desteñida: ella y su hermano Sebastián, de niños, en este mismo barrio.",
      "Sebastián desapareció durante la protesta del 23 de noviembre de 2019. Cuatro años. El caso sigue archivado.",
      "Por eso no duerme."
    ],
    bg: 'bg_room.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "mensaje_supervisor" }]
  },

  // ACTO 1: EL MENSAJE

  mensaje_supervisor: {
    text: [
      "Una notificación en Signal. Es Carmen, su supervisora en la redacción.",
      "'Andrea. Tengo una fuente en la Procuraduría dispuesta a reabrir casos de desaparición del 23N.'",
      "'Pero necesita evidencia sólida. No puede arriesgarse sin algo concreto.'",
      "'Tienes hasta el jueves. Empieza por el barrio.'"
    ],
    bg: 'bg_room.png',
    signalNotif: { from: 'Carmen G.', text: 'Fuente en la Procuraduría. Necesito evidencia sólida.' },
    choices: [
      { text: "Responder: voy a trabajar en eso", next: "acto_1_inicio" },
      { text: "Analizar la situación primero", next: "acto_1_inicio" }
    ]
  },

  acto_1_inicio: {
    text: [
      "Lluvia constante... el tipo de ruido que me ayuda a concentrarme.",
      "Antes de moverme, necesito asegurar mis datos.",
      "Si me están vigilando, cualquier descuido puede comprometer la investigación. También a mis fuentes."
    ],
    bg: 'bg_room.png',
    choices: [
      { text: "Hacer backup cifrado y activar VPN", next: "seguridad_ok" },
      { text: "No hay tiempo, revisar mensajes primero", next: "seguridad_skip" }
    ]
  },

  // BIFURCACIÓN: SEGURIDAD DIGITAL

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
    bg: 'bg_room.png', action: 'increase_visibility',
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
