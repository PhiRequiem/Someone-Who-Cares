# Especificaciones Técnicas: Someone Who Cares (Demo)

## 1. Visión General

- **Stack:** 100% Web (HTML5, CSS3, JavaScript).
- **Framework Principal:** Antigravity (Arquitectura basada en componentes reactivos).
- **Lógica Narrativa:** InkJS (Motor de estados para diálogos y ramificaciones).
- **Audio:** Howler.js (Gestión de atmósfera diegética y SFX).

## 2. Arquitectura de Componentes (Antigravity)

El proyecto se dividirá en módulos independientes para facilitar la auditoría y escalabilidad:

- `SceneManager`: Orquestador principal que renderiza el fondo y los paneles según el estado de la historia.
- `DialogueBox`: Componente de interfaz de usuario para texto, decisiones y retratos de personajes.
- `EvidenceJournal`: Sistema de inventario para pistas recolectadas (Mapeo de Activos).
- `OSINT-Terminal`: Mini-app integrada que simula herramientas de investigación (navegador falso, terminal de consola).

## 3. Mecánicas Core (Acciones)

- **Navegación:** Avance por clics o scroll basado en paneles de novela gráfica.
- **Mapeo de Activos:** Acción de recolectar evidencia técnica (metadata de fotos, perfiles de redes sociales).
- **Gestión de Riesgos:** Un medidor de "Visibilidad" que aumenta si Andrea comete errores de seguridad digital en su investigación.

## 4. Requisitos de Accesibilidad

- Soporte nativo para lectores de pantalla (Aria-labels en componentes de diálogo).
- Navegación completa mediante teclado.
- Modos de alto contraste y escalado de texto.

## 5. Privacidad y Seguridad (Higiene Digital)

- Persistencia de datos local (`localStorage`) cifrada.
- Cero tracking de terceros.
- Código abierto y auditable.

## 6. Gestión de Activos Visuales

- **Sistema de Capas (Z-Index):**
  1. Fondo (`bg-layer`): Estático o con efecto Parallax suave.
  2. Personajes (`sprite-layer`): Posiciones predefinidas (izquierda, centro, derecha).
  3. UI Narrativa (`ui-layer`): Cuadros de texto y botones de decisión.
  4. Overlay de Investigación (`fx-layer`): Filtros de pantalla o interfaces de OSINT.

- **Formatos Requeridos:**
  - Fondos: WebP (1920x1080px).
  - Personajes: WebP transparente.
  - Evidencia: Miniaturas de 200x200px para el Diario.
