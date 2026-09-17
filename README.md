# Mecanismos de acceso intersectorial — Explorador interactivo

Síntesis interactiva de una revisión sistemática exploratoria (scoping review, PRISMA-ScR) de autoría propia sobre los mecanismos de acceso intersectorial y su aplicación al contexto colombiano, leída a través del lenguaje de la investigación de implementación (implementation research).

**Vista en vivo:** se publica con GitHub Pages desde la rama `main` (carpeta raíz). Actívalo en *Settings → Pages* si aún no está activo.

## Contenido de la app

1. **Resumen** — objetivo, métodos, resultados y conclusiones en un párrafo.
2. **El problema de implementación** — el caso real de William Foege y la erradicación de la viruela en Nigeria (1966) como ilustración de por qué la eficacia no basta, la definición de investigación de implementación de Peters, Tran & Adam (2013), y por qué esta revisión es, ante todo, evidencia de un problema de implementación. Incluye también cómo leer el documento y su relación con dos trabajos previos del autor.
3. **Marcos de referencia: implementación y acceso** — seis piezas conceptuales que reencuadran toda la revisión: el continuo de la investigación de implementación (Peters, Tran & Adam, 2013), los resultados de implementación de Proctor et al. (2011), tres teorías sobre adopción (CFIR, RE-AIM, difusión de innovaciones) y el checklist de determinantes TICD (Flottorp et al., 2013), el marco de acceso de Frost & Reich (2008), un **mapa mental interactivo** que conecta las seis piezas, y una **autoevaluación interactiva de competencias en investigación de implementación** (16 competencias en 6 focos, adaptada del IR Toolkit del TDR/OMS, persistida en el navegador).
4. **Materiales y métodos** — diseño PCC (no PICO), las 6 fuentes consultadas con sus ecuaciones de búsqueda reales, la regla de citación y verificación que gobernó toda la revisión, un diagrama de flujo PRISMA construido con las cifras reales del proceso de selección, la tabla completa de los 14 estudios incluidos, y las fuentes/limitaciones declaradas.
5. **Resultados** — evaluación de la calidad de la evidencia por tipo de diseño (herramientas EQUATOR) y 4 ejes de convergencia temática, cada hallazgo citando el estudio incluido que lo respalda.
6. **Dinámica de sistemas** — un diagrama de bucles causales (metodología de Homer & Hirsch, 2006) con las hipótesis del autor sobre por qué persiste la brecha de acceso intersectorial: un bucle de refuerzo (R1, "el vacío de rectoría se refuerza a sí mismo", construido a partir de los ejes A y D) y un bucle de balance con demora (B1, "mecanismos operativos concretos", construido a partir del eje B y del checklist TICD).
7. **Discusión y recomendaciones** — el texto de discusión del documento original, el caso de integridad bibliográfica documentado dentro de la propia revisión, un tablero de recomendaciones y las 6 lagunas de evidencia explícitas.
8. **Conclusión** — el texto de conclusión del documento original.

## Nota sobre el alcance de esta app

Todas las cifras del proceso de selección PRISMA, la tabla de estudios incluidos y las citas provienen del documento completo de la revisión (PDF) y de las fuentes primarias que este mismo verifica explícitamente. La clasificación por ejes temáticos, el tablero de recomendaciones, el diagrama de dinámica de sistemas y los marcos de referencia de implementación y acceso (Peters, Tran & Adam 2013; Proctor et al. 2011; CFIR; RE-AIM; difusión de innovaciones; TICD; Frost & Reich 2008) son una elaboración propia del autor para facilitar la lectura — no forman parte de los 14 estudios incluidos en la revisión ni alteran sus hallazgos originales.

## Marcos de referencia — procedencia de cada fuente

- **Peters, Tran & Adam (2013)**, *Implementation Research in Health: A Practical Guide* (OMS/Alianza para la Investigación en Políticas y Sistemas de Salud) — caso Foege, definición, continuo de la IR y nota de "cobertura" que conecta Proctor con Frost & Reich.
- **Proctor et al. (2011)**, *Outcomes for implementation research* — los ocho resultados de implementación (mismo marco usado en las apps hermanas del autor). La imagen (`img/proctor-2011-framework.jpg`) es la figura original (PMID 20957426).
- **CFIR (Damschroder et al., 2009), RE-AIM (Glasgow et al., 2009) y difusión de innovaciones (Rogers, 2003)** — citadas tal como las reúne el recuadro 10 de Peters, Tran & Adam (2013).
- **Checklist TICD (Flottorp et al., 2013)**, *Implementation Science* 8:35 — 57 determinantes de la práctica en 7 dominios; base del diagrama de dinámica de sistemas.
- **Frost & Reich (2008)** — arquitectura, disponibilidad, asequibilidad y adopción. La imagen (`img/frost-reich-2008-framework.png`) se reprodujo, bajo licencia CC BY-NC-SA 3.0, en Brooks et al. (2012), *BMC Public Health*, 12:683 — fuente usada también para completar la cita bibliográfica de Frost & Reich, que en el archivo original solo indicaba "Reich, 2008" sin coautoría ni datos completos.
- **IR Toolkit — Implementation Research Competency: Self-assessment tool** (TDR/OMS y Alliance for Health Policy and Systems Research, `adphealth.org/irtoolkit/`) — los 6 focos y 16 competencias reales de la autoevaluación interactiva; la escala de calificación de 4 niveles es una adaptación propia del autor para esta interfaz.
- **Homer & Hirsch (2006)**, *System dynamics modeling for public health* — metodología de diagramación de bucles causales, ya usada en la app hermana del XXI Congreso.

## Navegación, búsqueda y accesibilidad

- **Índice lateral pegajoso** con subsecciones, resaltado de sección activa por scroll (scrollspy) y breadcrumb superior. En móvil se convierte en un panel deslizante.
- **Buscador en vivo** (`/` para abrir) que filtra por estudio, autor, tema, eje, marco de referencia y fuente, con navegación por teclado (`↑`/`↓`/`Enter`).
- **Atajos de teclado** documentados en un panel de ayuda (`?`).
- **Modo de lectura enfocada** y **botón "volver arriba"**.
- **Dos diagramas SVG interactivos** (mapa mental de marcos de referencia, dinámica de sistemas de barreras de acceso), cada uno con tooltips accesibles por teclado y una vista alterna "Ver como lista".
- **Panel de fuentes** que agrega todas las URLs públicas verificables citadas (marco normativo, los 14 estudios incluidos, análisis relacionados del autor, marcos de referencia de implementación y acceso).
- **Exportación a PDF**: mismo control global al inicio y al final del contenido, sin librerías externas, exportando solo las secciones expandidas en ese momento.

## Stack técnico

HTML/CSS/JS sin build step ni frameworks, siguiendo el mismo sistema de diseño que las apps hermanas del autor ([gobernanza-salud-publica-colombia](https://github.com/fadavilar/gobernanza-salud-publica-colombia), [xxi-congreso-nacional-salud-2026](https://github.com/fadavilar/xxi-congreso-nacional-salud-2026)) — construido a partir de la skill personal `explorador-interactivo`.

- `index.html` — estructura, shell de dos columnas (índice + contenido), buscador, panel de fuentes y control de exportación.
- `css/style.css` — sistema de diseño (tokens de color claro/oscuro, acordeón, diagramas, tablas, responsive, impresión).
- `js/data.js` — todo el contenido editorial (problema de implementación, marcos de referencia, mapa mental, dinámica de sistemas, autoevaluación, métodos, PRISMA, estudios incluidos, ejes temáticos, recomendaciones, lagunas).
- `js/app.js` — renderizado, tema claro/oscuro persistente, acordeón, diagramas SVG (PRISMA, mapa mental, bucles causales), autoevaluación con persistencia en `localStorage`, índice/scrollspy, buscador, exportación a PDF.
- `img/` — las figuras originales de los marcos de resultados de implementación y de acceso.

Para editar contenido, generalmente basta con modificar `js/data.js`; el resto se renderiza automáticamente.

## Autor

Fabian Dávila Ramírez, MD, MBA, PhD — Universidad de Navarra · Universidad de Bogotá Jorge Tadeo Lozano (Doctorado en Gestión y Modelado de Políticas Públicas)
