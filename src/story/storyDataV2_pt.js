export const storyData = {

  // ABERTURA

  start: {
    text: [
      ""Precisamos de gente que coloque seu olho, seu coração e sua consciência a serviço de uma sociedade que precisa ser contada, fotografada e narrada com muito respeito e humanidade"",
      "Jesus Abad Colorado"
    ],
    bg: 'black.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_2" }]
  },

  intro_2: {
    text: [
      { text: "Tecnologia Humanista", style: 'credit-main' },
      { text: "em associação com seguridades.org", style: 'credit-sub' },
      { text: "apresenta", style: 'credit-presents' },
    ],
    bg: 'black.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_3" }]
  },

  intro_3: {
    text: [
      "Bogotá, Colômbia. 2020"
    ],
    bg: 'plaza-de-bolivar-geral-01-a.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_4" }]
  },

  intro_4: {
    text: [
      "Ei, não! Tá vendo aquele policial ali? Não gosto não.",
      "Pombos? São ratos voadores! hahahaha",
      "Era isso ou nada.",
      { text: "Andeeeee, olha a alpaca!", speaker: 'sebas' },
      "É que eu dormi, cara, e ela ficou brava.",
    ],
    bg: 'plaza-de-bolivar-geral-01-b.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_5" }]
  },

  intro_5: {
    text: [
      "O cara caiu de medo!",
      "Às suas ordens, senhora!",
      { text: "Andrea, segura a mão do seu irmão", speaker: 'mama' },
      "Não! Que chateação!",
    ],
    bg: 'plaza-de-bolivar-geral-01-c.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_6" }]
  },

  intro_6: {
    text: [
      "Andrea e seu irmão caminham pela Praça de Bolívar em sua primeira visita a Bogotá."
    ],
    bg: 'plaza-de-bolivar-al-piso-01-a.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_7" }]
  },

  intro_7: {
    text: [
      { text: "(rindo) Não, não, não. Não gosto de pombos.", speaker: 'andrea' },
      { text: "Mamãe! Quero um Chocomaro!", speaker: 'sebas' },
    ],
    bg: 'plaza-de-bolivar-al-piso-01-b.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_8" }]
  },

  intro_8: {
    text: [
      { text: "Sebas, aqui! Aqui!", speaker: 'andrea' },
    ],
    bg: 'plaza-de-bolivar-al-piso-01-c.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_9" }]
  },

  intro_9: {
    text: [
      { text: "Sebás, onde você vai?", speaker: 'andrea' },
      { text: "Andrea, segura a mão do seu irmão", speaker: 'mama' },
    ],
    bg: 'plaza-de-bolivar-al-piso-01-d.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_10" }]
  },

  intro_10: {
    text: [
      { text: "Onde você está?", speaker: 'andrea' }
    ],
    bg: 'plaza-de-bolivar-protesta-01-a.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "intro_11" }]
  },

  intro_11: {
    text: [
      { text: "Sebas! Onde você está?", speaker: 'andrea' },
      { text: "Andrea, onde está o seu irmão?", speaker: 'mama' },
    ],
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
      "Alguém que se importe",
    ],
    bg: 'black.png', type: 'cinematic',
    choices: [{ text: "Continuar", next: "andrea_starts_day_01a" }]
  },

  // ATO 1: A MENSAGEM

  andrea_starts_day_01a: {
    text: [
      "bzzzzzzzzzz bzzzzzzzz;"
    ],
    bg: 'andrea-sleeps-closed-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Carmen G.', text: '[1 mensagem]' },
    autoAdvance: { next: 'andrea_starts_day_01b', delay: 3000 }
  },

  andrea_starts_day_01b: {
    text: [
      "bzzzzzzzzzz bzzzzzzzz;"
    ],
    bg: 'andrea-sleeps-open-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Carmen G.', text: '[2 mensagens]' },
    autoAdvance: { next: 'andrea_starts_day_01c', delay: 3000 }
  },

  andrea_starts_day_01c: {
    text: [
      "bzzzzzzzzzz bzzzzzzzz;"
    ],
    bg: 'andrea-sleeps-closed-eyes-01a.png', type: 'cinematic',
    signalNotif: { from: 'Carmen G.', text: '[3 mensagens]' },
    autoAdvance: { next: 'mensaje_supervisor', delay: 3000 }
  },

  mensaje_supervisor: {
    text: [
      "3 notificações no Signal. É Carmen, sua supervisora na redação.",
      "Seus olhos estão fechados e você está cansada. Não dormiu nada.",
      "Mais uma noite de insônia."
    ],
    bg: 'bg_room.png',
    signalNotif: { from: 'Carmen G.', text: '[3 mensagens]' },
    choices: [
      { text: "Levantar sem atender", next: "msg_se_levanta_sin_leer" },
      { text: "Jogar o celular e tentar dormir", next: "msg_lanza_telefono" },
      { text: "Desligar o celular e tentar dormir", next: "msg_apaga_telefono" },
      { text: "Verificar mensagens", next: "msg_lee_mensajes" }
    ]
  },

  msg_lee_mensajes: {
    text: [
      "'Andrea. Tenho uma fonte na Procuradoria disposta a reabrir casos de desaparecimento do 23N.'",
      "'Mas precisa de evidência sólida. Não pode se arriscar sem algo concreto.'",
      "'Você tem até quinta-feira. Comece pelo bairro.'",
      "Quinta-feira. Hoje é terça. 48 horas."
    ],
    bg: 'bg_room.png',
    visibilityDelta: -5,
    choices: [{ text: "Levantar", next: "acto_1_inicio" }]
  },

  msg_se_levanta_sin_leer: {
    text: [
      "Me levanto sem olhar o celular.",
      "Dois minutos depois, toca uma chamada. Signal. Carmen.",
      "Atendo de má vontade.",
      "'Andrea. Preciso que você vá ao bairro hoje. É urgente.'",
      "Urgente. Sem contexto. Sem saber por quê."
    ],
    bg: 'bg_room.png',
    signalNotif: { from: 'Carmen G.', text: 'Chamada entrante...' },
    visibilityDelta: 10,
    choices: [{ text: "Certo", next: "acto_1_inicio" }]
  },

  msg_apaga_telefono: {
    text: [
      "Celular desligado. Fecho os olhos.",
      "Dez minutos. Quinze.",
      "Não funciona.",
      "Me levanto sem ter lido nada."
    ],
    bg: 'bg_room.png',
    visibilityDelta: -3,
    choices: [{ text: "Levantar", next: "acto_1_inicio" }]
  },

  msg_lanza_telefono: {
    text: [
      "O celular bate na parede.",
      "A tela... intacta. Sorte.",
      "O impacto me acordou de vez.",
      "Me levanto. Sem ter lido nada. Com um humor péssimo."
    ],
    bg: 'bg_room.png',
    visibilityDelta: 15,
    choices: [{ text: "Levantar (de mau humor)", next: "acto_1_inicio" }]
  },

  acto_1_inicio: {
    text: [
      "Chuva constante... o tipo de barulho que me ajuda a me concentrar.",
      "Antes de me mover, preciso proteger meus dados.",
      "Se estão me monitorando, qualquer descuido pode comprometer a investigação. E minhas fontes também."
    ],
    bg: 'bg_room.png',
    choices: [
      { text: "Fazer backup cifrado e ativar VPN", next: "seguridad_ok" },
      { text: "Sem tempo, ver as mensagens primeiro", next: "seguridad_skip" }
    ]
  },

  // BIFURCAÇÃO: SEGURANÇA DIGITAL

  seguridad_ok: {
    text: [
      "Backup em disco cifrado: feito. VPN ativa. Sinal do Signal verificado.",
      "Carmen sempre repete: 'Segurança digital não é paranoia, é protocolo.'",
      "Agora sim. Vamos ver as mensagens."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Ver as mensagens", next: "investigar_foto" }]
  },

  seguridad_skip: {
    text: [
      "Abro o e-mail diretamente. Há um arquivo anexado sem remetente conhecido.",
      "Abro sem pensar.",
      "... Espera. Acabei de executar algo que não devia.",
      "Se estavam me rastreando antes, agora sabem exatamente onde estou."
    ],
    bg: 'bg_room.png', visibilityDelta: 25,
    choices: [{ text: "Ver o que tem no arquivo", next: "investigar_foto" }]
  },

  // ATO 1: A FOTO

  investigar_foto: {
    text: [
      "É uma fotografia.",
      "Sou eu. Trabalhando nessa mesma mesa. Tirada do prédio da frente.",
      "Estão me monitorando. Preciso ver os metadados dessa imagem agora."
    ],
    bg: 'bg_room.png', action: 'open_terminal', terminalContext: 'foto',
    choices: [{ text: "Analisar metadados com terminal OSINT", next: "revelacion_foto" }]
  },

  revelacion_foto: {
    text: [
      "GPS: Edifício Cañada Norte, 7º andar. Data: Ontem, 18:45.",
      "O prédio que o crime organizado tenta desocupar há meses.",
      "Estavam me monitorando de lá. Isso não é coincidência."
    ],
    bg: 'bg_room.png',
    choices: [
      { text: "Buscar o prédio no WebArchive", next: "webarchive_busqueda" },
      { text: "Já é suficiente, ir ao bairro", next: "evaluar_evidencia_skip" }
    ]
  },

  // BIFURCAÇÃO: AVALIAÇÃO DE EVIDÊNCIAS

  webarchive_busqueda: {
    text: ["Busco 'Edifício Cañada Norte' no WebArchive..."],
    bg: 'bg_room.png', action: 'open_browser',
    choices: [{ text: "Salvar evidência e fechar", next: "evaluar_evidencia_web" }]
  },

  evaluar_evidencia_web: {
    text: [
      "A matéria é de 21 de novembro de 2019.",
      "A mesma semana em que Sebastián desapareceu.",
      "E o site foi tirado do ar dois dias depois. Exatamente no 23N.",
      "Metadados mais artigo arquivado. Isso já é evidência real. Mas antes de sair..."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Preparar para sair", next: "evaluacion_campo" }]
  },

  evaluar_evidencia_skip: {
    text: [
      "Tenho: um IP de VPN, coordenadas GPS e uma data.",
      "É suficiente para uma fonte oficial? Provavelmente não.",
      "Mas o tempo passa. Antes de ir ao bairro, um momento..."
    ],
    bg: 'bg_room.png',
    choices: [{ text: "Preparar para sair", next: "evaluacion_campo" }]
  },

  evaluacion_campo: {
    text: [
      "Confirmado: me monitoravam do prédio da frente.",
      "Preciso ir ao bairro. Um erro agora pode comprometer tudo."
    ],
    bg: 'bg_room.png',
    action: 'open_quiz',
    quiz: {
      id: 'safety',
      question: "Quais medidas você toma antes de sair do apartamento?",
      options: [
        {
          label: 'A',
          text: "Sair direto pela porta principal. Não há tempo a perder.",
          correct: false,
          visibilityDelta: 20,
          feedback: "Uma rota previsível e sem aviso prévio facilita o monitoramento. Se alguém está observando, sabe exatamente para onde você vai e quando."
        },
        {
          label: 'B',
          text: "Avisar a Carmen pelo Signal, variar a rota e deixar o laptop cifrado em casa.",
          correct: true,
          visibilityDelta: -5,
          feedback: "Avisar um contato de confiança, mudar a rota e não levar equipamento desnecessário são protocolos básicos de segurança operacional em campo."
        },
        {
          label: 'C',
          text: "Publicar nas redes sociais que vai documentar o bairro para ter testemunhas.",
          correct: false,
          visibilityDelta: 35,
          feedback: "As redes sociais alertam todo o mundo, incluindo quem está te monitorando. Nunca publique sua localização em tempo real durante uma investigação ativa."
        }
      ]
    },
    choices: [{ text: "Ir ao bairro", next: "transicion_barrio" }]
  },

  // ATO 2: O BAIRRO

  transicion_barrio: {
    text: [
      "Atravesso a cidade rápido, evitando as câmeras do centro.",
      "No La Cañada tudo parece igual, mas a tensão se sente diferente.",
      "Dona Rosa me espera."
    ],
    bg: 'bg_barrio.png', type: 'cinematic',
    signalNotif: { from: 'Dona Rosa', text: 'Venha ao bairro. Algo está acontecendo aqui. 🙏' },
    choices: [{ text: "Chegar ao bairro", next: "dona_rosa_intro" }]
  },

  dona_rosa_intro: {
    text: [
      "Dona Rosa Bermúdez. 67 anos. Três décadas morando no La Cañada.",
      "Organizou as primeiras assembleias de moradores quando chegaram as ameaças de despejo.",
      "Se alguém sabe o que acontece neste bairro, e quem financia, é ela."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Falar com Dona Rosa", next: "inicio_barrio" }]
  },

  inicio_barrio: {
    text: [
      "'Andrea, graças a Deus. Tem um carro escuro sem placa circulando desde ontem.'",
      "'E aquilo que está voando...' aponta para o céu. 'Já faz duas noites sobrevoando as casas.'",
      "Olho para cima. Um drone de vigilância. Profissional. Caro."
    ],
    bg: 'bg_barrio.png',
    choices: [
      { text: "Interceptar o sinal do drone", next: "terminal_dron" },
      { text: "Perguntar a Dona Rosa sobre o carro", next: "pista_coche" }
    ]
  },

  // BIFURCAÇÃO: PISTA DO CARRO

  pista_coche: {
    text: [
      "'O carro tem o logo de uma empresa de segurança privada. Vi o nome: Varela Seguridad.'",
      "Varela. A mesma Imobiliária Varela das ameaças de 2019.",
      "O carro e o drone são do mesmo grupo. Preciso do IP do drone para confirmar."
    ],
    bg: 'bg_barrio.png',
    evidenceDrop: { id: 'testimonio-rosa', name: 'Carro sem placa, Varela Seguridad', type: 'Testemunho' },
    choices: [{ text: "Interceptar o drone", next: "terminal_dron" }]
  },

  // ATO 2: O DRONE

  terminal_dron: {
    text: [
      "Abro a antena portátil.",
      "Se capturar o IP do drone, posso rastrear quem o opera.",
      "Pode ser a prova que Carmen precisa para a Procuradoria abrir o caso."
    ],
    bg: 'bg_barrio.png', action: 'open_terminal', terminalContext: 'dron',
    choices: [{ text: "Analisar resultados", next: "revelacion_dron" }]
  },

  revelacion_dron: {
    text: [
      "IP registrado em: Varela Seguridad S.A., subsidiária de Imobiliária Varela S.A.",
      "A mesma empresa que ameaçava os moradores em 2019.",
      "A mesma semana em que Sebastián desapareceu.",
      "Pela primeira vez em quatro anos... tenho uma pista real. Mas antes de enviar isso..."
    ],
    bg: 'bg_barrio.png',
    choices: [{ text: "Preparar o envio", next: "quiz_evidencia" }]
  },

  quiz_evidencia: {
    text: [
      "Tenho o pacote completo: metadados, WebArchive, IP do drone.",
      "Antes de enviar para a Carmen: como protejo essa informação?"
    ],
    bg: 'bg_barrio.png',
    action: 'open_quiz',
    quiz: {
      id: 'evidence',
      question: "Como você guarda e compartilha de forma segura o pacote de evidências?",
      options: [
        {
          label: 'A',
          text: "Fazer upload de tudo no Google Drive com sua conta pessoal e compartilhar o link por e-mail.",
          correct: false,
          visibilityDelta: 20,
          feedback: "Os serviços de nuvem comerciais podem ser acessados por terceiros mediante ordens judiciais ou vulnerabilidades. Nunca use sua conta pessoal para evidências sensíveis."
        },
        {
          label: 'B',
          text: "Cifrar com VeraCrypt, guardar os originais offline e compartilhar cópias com os metadados removidos.",
          correct: true,
          visibilityDelta: -5,
          feedback: "Correto. Criptografia local, backup dos originais offline e remoção de metadados antes de compartilhar são as três práticas fundamentais para proteger evidências sensíveis."
        },
        {
          label: 'C',
          text: "Comprimir tudo em um ZIP e enviar pelo WhatsApp.",
          correct: false,
          visibilityDelta: 25,
          feedback: "O WhatsApp armazena metadados de mensagens e um ZIP sem senha não cifra o conteúdo. Além disso, o histórico de chats pode ser requisitado."
        }
      ]
    },
    choices: [{ text: "Enviar evidências para a Carmen", next: "final_demo" }]
  },

  // ENCERRAMENTO

  final_demo: {
    text: [
      "Envio o pacote de evidências para a Carmen: metadados da foto, histórico do WebArchive, IP do drone.",
      "A resposta chega em minutos: 'É suficiente. Minha fonte vai pedir a reabertura do caso.'",
      "'Andrea... isso é real. E vai ficar perigoso.'",
      "Fim da demo."
    ],
    bg: 'bg_barrio.png', type: 'cinematic',
    signalNotif: { from: 'Carmen G.', text: 'É suficiente. Minha fonte pede a reabertura. 🔒' },
    choices: [{ text: "Ver resumo da demo", next: "start", showSummary: true }]
  }
};
