# Someone Who Cares
# Alguien a quien le importe

Demo interactivo del Capítulo 1 de *Someone Who Cares / Alguien a quien le importe*, una novela visual educativa sobre periodismo de investigación y técnicas OSINT.

Desarrollado por [Tecnologia Humanista](https://tecnologiahumanista.ong.br/) en asociación con [seguridades.org](https://seguridades.org).

**Demo:** [someone-who-cares.vercel.app](https://someone-who-cares.vercel.app/)

---

## Descripción

Andrea es una periodista colombiana que investiga la desaparición de su hermano durante las protestas de noviembre de 2019 en Bogotá. A través de decisiones narrativas y herramientas interactivas, el jugador aprende técnicas reales del kit educativo [Exposing the Invisible (ETI)](https://exposingtheinvisible.org/):

- Análisis de metadatos con terminal OSINT
- Recuperación de información con WebArchive
- Comunicación segura con Signal
- Seguridad operacional en campo
- Evaluación y protección de evidencia

La historia arranca con una secuencia de intro cinematográfica y se bifurca en cuatro caminos narrativos según la decisión del jugador al despertar. El juego registra la visibilidad del jugador a lo largo de sus decisiones y presenta un resumen de habilidades al final del demo.

---

## Stack

- **React 19** con Vite
- **Framer Motion** para animaciones y transiciones
- **Lucide React** para iconografía
- **Web Audio API** para sonido ambiente procedural y efectos de sonido
- **CSS custom properties** (sin framework externo)

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
  story/          storyDataV3.js — nodos, diálogos, bifurcaciones y evidencia
public/
  assets/         Fondos placeholder etiquetados e imagen de Andrea
```

### Sistemas principales

| Sistema | Descripción |
|---|---|
| `visibilityDelta` | Cada nodo puede subir o bajar la visibilidad operacional del personaje |
| `autoAdvance` | Nodos cinematográficos con avance automático por timer |
| `signalNotif` | Notificaciones de Signal que aparecen sobre la escena |
| `evidenceDrop` | Evidencia que se agrega al diario automáticamente al llegar a un nodo |
| `speaker` | Diálogos con color por personaje (Andrea, Sebas, Mamá) |
| `style` | Estilos visuales especiales para créditos, citas y título del juego |
| Sonido ambiente | Generación procedural con Web Audio; mapeo indoor/outdoor por fondo |

---

## Estado

Demo funcional del Capítulo 1. Los fondos son placeholders etiquetados con el nombre del archivo para referencia durante el desarrollo — se reemplazarán con los assets finales. El juego completo contempla 3 capítulos con lanzamiento progresivo desde Q3 2026.
