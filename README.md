# Someone Who Cares

Demo interactivo del Capítulo 1 de *Someone Who Cares*, una novela visual educativa sobre periodismo de investigación y técnicas OSINT.

Desarrollado por [Tecnologia Humanista](https://tecnologiahumanista.ong.br/).

**Demo:** [someone-who-cares-demo.vercel.app](https://someone-who-cares-demo.vercel.app/)

---

## Descripción

Andrea es una periodista colombiana que investiga la desaparición de su hermano durante la protesta del 23 de noviembre de 2019. A través de decisiones narrativas y herramientas interactivas, el jugador aprende técnicas reales del kit educativo [Exposing the Invisible (ETI)](https://exposingtheinvisible.org/):

- Análisis de metadatos con terminal OSINT
- Recuperación de información con WebArchive
- Comunicación segura con Signal
- Seguridad operacional en campo
- Evaluación y protección de evidencia

El juego registra la visibilidad del jugador según sus decisiones y presenta un resumen de habilidades al final del demo.

---

## Stack

- **React 19** con Vite
- **Framer Motion** para animaciones y transiciones
- **Lucide React** para iconografía
- **Web Audio API** para sonido ambiente procedural y efectos de sonido
- **Tailwind** (utilidades básicas via CSS custom properties)

---

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build para producción

```bash
npm run build
```

Compatible con deploy directo en **Vercel** (sin configuración adicional).

---

## Estructura

```
src/
  audio/          AudioContext compartido, click/notif/keyboard sounds
  components/     DialogueBox, OSINTTerminal, BrowserWindow, QuizPanel,
                  SignalNotif, LocationBadge, VisibilityMeter,
                  EvidenceJournal, TitleScreen, DemoSummary, MuteButton
  hooks/          useStory, useAmbientSound
  story/          storyData.js — nodos, diálogos, quizzes y evidencia
public/
  assets/         Fondos e imagen de Andrea
```

---

## Estado

Demo funcional del Capítulo 1. El juego completo contempla 3 capítulos con lanzamiento progresivo desde Q3 2026.
