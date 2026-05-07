export const storyData = {

  // ── APERTURA ────────────────────────────────────────────────────────────────

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

  // ── ACTO 1: EL MENSAJE ──────────────────────────────────────────────────────

  mensaje_supervisor: {
    text: [
      "Una notificación en Signal. Es Carmen, su supervisora en la redacción.",
      "'Andrea. Tengo una fuente en la Procuraduría dispuesta a reabrir casos de desaparición del 23N.'",
      "'Pero necesita evidencia sólida. No puede arriesgarse sin algo concreto.'",
      "'Tienes hasta el jueves. Empieza por el barrio.'"
    ],
    bg: 'bg_room.png',
    choices: [
      { text: "Responder: voy a trabajar en eso", next: "acto_1_inicio" },
      { text: "Analizar la situación primero", next: "acto_1_inicio" }
    ]
  },

  acto_1_inicio: {
    text: [
      "Lluvia constante... el tipo de ruido que me ayuda a concentrarme.",
      "Antes de moverme, necesito asegurar mis datos.",
      "Si me están vigilando, cualquier descuido puede comprometer la investigación — y a mis fuentes."
    ],
    bg: 'bg_room.png',
    choices: [
      { text: "Hacer backup cifrado y activar VPN", next: "seguridad_ok" },
      { text: "No hay tiempo — revisar mensajes primero", next: "seguridad_skip" }
    ]
  },

  // ── BIFURCACIÓN: SEGURIDAD DIGITAL ──────────────────────────────────────────

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

  // ── ACTO 1: LA FOTO ─────────────────────────────────────────────────────────

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
      { text: "Buscar el edificio en WebArchive", next: "evaluar_evidencia_web" },
      { text: "Ya es suficiente — ir al barrio", next: "evaluar_evidencia_skip" }
    ]
  },

  // ── BIFURCACIÓN: EVALUACIÓN DE EVIDENCIA ────────────────────────────────────

  evaluar_evidencia_web: {
    text: [
      "Busco 'Edificio Cañada Norte' en WebArchive...",
      "Encuentro una noticia de 2019: 'Vecinos denuncian amenazas de desalojo vinculadas a Inmobiliaria Varela S.A.'",
      "La misma semana que Sebastián desapareció.",
      "Metadata de vigilancia + historial público archivado. Esto es evidencia real."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Guardar evidencia e ir al barrio", next: "transicion_barrio" }]
  },

  evaluar_evidencia_skip: {
    text: [
      "Tengo: una IP de VPN, coordenadas GPS y una fecha.",
      "¿Es suficiente para una fuente oficial? Probablemente no.",
      "Pero el tiempo corre. En el barrio puede haber más pistas."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Ir al barrio", next: "transicion_barrio" }]
  },

  // ── ACTO 2: EL BARRIO ───────────────────────────────────────────────────────

  transicion_barrio: {
    text: [
      "Cruzo la ciudad rápido, evitando las cámaras del centro.",
      "En La Cañada todo parece igual — pero la tensión se siente diferente.",
      "Doña Rosa me espera."
    ],
    bg: 'bg_barrio.png', type: 'cinematic',
    choices: [{ text: "Llegar al barrio", next: "dona_rosa_intro" }]
  },

  dona_rosa_intro: {
    text: [
      "Doña Rosa Bermúdez. 67 años. Tres décadas viviendo en La Cañada.",
      "Organizó las primeras asambleas de vecinos cuando llegaron las amenazas de desalojo.",
      "Si alguien sabe qué pasa en este barrio — y quién lo financia — es ella."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Hablar con Doña Rosa", next: "inicio_barrio" }]
  },

  inicio_barrio: {
    text: [
      "'Andrea, gracias a dios. Hay un coche oscuro sin placas rondando desde ayer.'",
      "'Y eso que vuela...' — señala al cielo — 'lleva dos noches sobrevolando las casas.'",
      "Miro hacia arriba. Un dron de vigilancia. Profesional. Caro."
    ],
    bg: 'bg_barrio.png',
    choices: [
      { text: "Interceptar la señal del dron", next: "terminal_dron" },
      { text: "Preguntar a Doña Rosa sobre el coche", next: "pista_coche" }
    ]
  },

  // ── BIFURCACIÓN: PISTA DEL COCHE ────────────────────────────────────────────

  pista_coche: {
    text: [
      "'El coche tiene el logo de una empresa de seguridad privada. Vi el nombre: Varela Seguridad.'",
      "Varela. La misma Inmobiliaria Varela de las amenazas de 2019.",
      "El coche y el dron son del mismo grupo. Necesito la IP del dron para confirmarlo."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Interceptar el dron", next: "terminal_dron" }]
  },

  // ── ACTO 2: EL DRON ─────────────────────────────────────────────────────────

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
      "IP registrada a: Varela Seguridad S.A. — subsidiaria de Inmobiliaria Varela S.A.",
      "La misma empresa que amenazaba a los vecinos en 2019.",
      "La misma semana en que Sebastián desapareció.",
      "Por primera vez en cuatro años... tengo una pista real."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Enviar todo a Carmen", next: "final_demo" }]
  },

  // ── CIERRE ──────────────────────────────────────────────────────────────────

  final_demo: {
    text: [
      "Le envío el paquete de evidencia a Carmen: metadata de la foto, historial de WebArchive, IP del dron.",
      "Su respuesta llega en minutos: 'Es suficiente. Mi fuente va a pedir la reapertura del caso.'",
      "'Andrea... esto es real. Y va a ponerse peligroso.'",
      "— Fin del demo —"
    ],
    bg: 'bg_barrio.png', type: 'cinematic',
    choices: [{ text: "Reiniciar demo", next: "start" }]
  }
};
