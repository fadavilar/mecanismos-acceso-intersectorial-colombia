# Mecanismos de acceso intersectorial — Explorador interactivo

Síntesis interactiva de una revisión sistemática exploratoria (scoping review, PRISMA-ScR) de autoría propia sobre los mecanismos de acceso intersectorial y su aplicación al contexto colombiano.

**Vista en vivo:** se publica con GitHub Pages desde la rama `main` (carpeta raíz). Actívalo en *Settings → Pages* si aún no está activo.

## Contenido de la app

La app sigue la estructura de un artículo científico (resumen → introducción → materiales y métodos → resultados → discusión y recomendaciones → conclusión), reflejando la estructura que ya tiene el documento original.

1. **Resumen** — objetivo, métodos, resultados y conclusiones en un párrafo.
2. **Introducción** — por qué esta revisión, y su relación con dos trabajos previos del autor (la revisión de gobernanza en salud pública y la síntesis del XXI Congreso Nacional de Salud).
3. **Materiales y métodos** — diseño PCC (no PICO), las 6 fuentes consultadas con sus ecuaciones de búsqueda reales, la regla de citación y verificación que gobernó toda la revisión, un diagrama de flujo PRISMA construido con las cifras reales del proceso de selección, la tabla completa de los 14 estudios incluidos, y las fuentes/limitaciones declaradas.
4. **Resultados** — evaluación de la calidad de la evidencia por tipo de diseño (herramientas EQUATOR) y 4 ejes de convergencia temática, cada hallazgo citando el estudio incluido que lo respalda.
5. **Discusión y recomendaciones** — el texto de discusión del documento original, dos marcos conceptuales añadidos por el autor (Proctor et al. 2011 y Frost & Reich 2008, cada uno con su imagen original y cita verificada), el caso de integridad bibliográfica documentado dentro de la propia revisión, un tablero de recomendaciones y las 6 lagunas de evidencia explícitas.
6. **Conclusión** — el texto de conclusión del documento original.

## Nota sobre el alcance de esta app

Todas las cifras del proceso de selección PRISMA, la tabla de estudios incluidos y las citas provienen del documento completo de la revisión (PDF) y de las fuentes primarias que este mismo verifica explícitamente. La clasificación por ejes temáticos, el tablero de recomendaciones y los dos marcos conceptuales añadidos (Proctor 2011, Frost & Reich 2008) son una elaboración propia del autor para facilitar la lectura — no forman parte de los 14 estudios incluidos en la revisión ni alteran sus hallazgos originales.

## Marcos conceptuales añadidos

Las imágenes de ambos marcos (`img/proctor-2011-framework.jpg`, `img/frost-reich-2008-framework.png`) provienen de fuentes reales ya verificadas: la de Proctor et al. (2011) es la figura original de ese artículo (PMID 20957426); la de Frost & Reich (2008) se reprodujo, bajo licencia CC BY-NC-SA 3.0, en Brooks et al. (2012), *BMC Public Health*, 12:683 — fuente usada también para completar la cita bibliográfica de Frost & Reich, que en el archivo original solo indicaba "Reich, 2008" sin coautoría ni datos completos.

## Navegación, búsqueda y accesibilidad

- **Índice lateral pegajoso** con subsecciones, resaltado de sección activa por scroll (scrollspy) y breadcrumb superior. En móvil se convierte en un panel deslizante.
- **Buscador en vivo** (`/` para abrir) que filtra por estudio, autor, tema, eje y fuente, con navegación por teclado (`↑`/`↓`/`Enter`).
- **Atajos de teclado** documentados en un panel de ayuda (`?`).
- **Modo de lectura enfocada** y **botón "volver arriba"**.
- **Panel de fuentes** que agrega todas las URLs públicas verificables citadas (marco normativo, los 14 estudios incluidos, análisis relacionados del autor, marcos conceptuales).
- **Exportación a PDF**: mismo control global al inicio y al final del contenido, sin librerías externas, exportando solo las secciones expandidas en ese momento.

## Stack técnico

HTML/CSS/JS sin build step ni frameworks, siguiendo el mismo sistema de diseño que las apps hermanas del autor ([gobernanza-salud-publica-colombia](https://github.com/fadavilar/gobernanza-salud-publica-colombia), [xxi-congreso-nacional-salud-2026](https://github.com/fadavilar/xxi-congreso-nacional-salud-2026)) — construido a partir de la skill personal `explorador-interactivo`.

- `index.html` — estructura, shell de dos columnas (índice + contenido), buscador, panel de fuentes y control de exportación.
- `css/style.css` — sistema de diseño (tokens de color claro/oscuro, acordeón, diagramas, tablas, responsive, impresión).
- `js/data.js` — todo el contenido editorial (métodos, PRISMA, estudios incluidos, ejes temáticos, marcos conceptuales, recomendaciones, lagunas).
- `js/app.js` — renderizado, tema claro/oscuro persistente, acordeón, diagrama PRISMA en SVG, índice/scrollspy, buscador, exportación a PDF.
- `img/` — las dos figuras originales de los marcos conceptuales añadidos.

Para editar contenido, generalmente basta con modificar `js/data.js`; el resto se renderiza automáticamente.

## Autor

Fabian Dávila Ramírez, MD, MBA, PhD — Universidad de Navarra · Universidad de Bogotá Jorge Tadeo Lozano (Doctorado en Gestión y Modelado de Políticas Públicas)
