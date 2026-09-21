/* ============================================================
   Datos de la aplicación — Mecanismos de acceso intersectorial
   Contenido derivado íntegramente de la revisión sistemática
   exploratoria (scoping review, PRISMA-ScR) del autor:
   "Mecanismos de acceso intersectorial y su aplicación al
   contexto colombiano" (16 de septiembre de 2026). Todas las
   cifras, citas y URLs provienen de ese documento o de las
   fuentes primarias que él mismo cita y verifica — ninguna fue
   inventada para esta app.
   ============================================================ */

const DATA = {

  meta: {
    title: "Acceso e implementación en Colombia",
    subtitle: "El vacío entre la arquitectura normativa y la coordinación operativa — y los mecanismos que sí funcionan cuando el acceso intersectorial se vuelve una estrategia concreta, no solo una declaración. Evidencia propia (scoping review, PRISMA-ScR) leída de principio a fin desde la investigación de implementación.",
    author: "Fabian Dávila Ramírez",
    credentials: "MD, MBA, PhD",
    affiliation: "Universidad de Navarra · Universidad de Bogotá Jorge Tadeo Lozano (Doctorado en Gestión y Modelado de Políticas Públicas)",
    period: "Revisión completada el 16 de septiembre de 2026 · horizonte de búsqueda 2021–2026",
    framework: "Investigación de implementación · mecanismos de acceso intersectorial",
    disclaimer: "Esta aplicación trata el acceso intersectorial en Colombia como un problema de implementación: por qué una arquitectura normativa disponible no siempre se traduce en coordinación operativa, y qué mecanismos sí lo logran. La base empírica es una revisión sistemática exploratoria (scoping review) de autoría propia; todas las cifras del proceso de selección, la tabla de estudios incluidos y las citas provienen del documento completo (PDF) y de las fuentes primarias que este verifica explícitamente. La clasificación por ejes temáticos, las recomendaciones, el diagrama de dinámica de sistemas y los marcos de referencia de implementación y acceso (Peters, Tran & Adam 2013; Proctor et al. 2011; CFIR; RE-AIM; difusión de innovaciones; TICD; Frost & Reich 2008) son una elaboración propia del autor para facilitar la lectura — no sustituyen ni alteran los hallazgos originales del documento.",
    license: {
      name: "Creative Commons Atribución 4.0 Internacional (CC BY 4.0)",
      url: "https://creativecommons.org/licenses/by/4.0/deed.es",
      text: "Este contenido puede compartirse y adaptarse libremente, incluso con fines comerciales, siempre citando al autor."
    },
    relatedWorks: [
      {
        title: "Gobernanza y Rectoría en Salud Pública en Colombia",
        text: "Revisión de alcance del mismo autor sobre gobernanza y rectoría en el sector salud colombiano (2021–2026). La debilidad de rectoría que esa revisión documenta para el sistema de salud en general es, en esta revisión, la misma barrera más citada para la coordinación intersectorial específicamente.",
        url: "https://fadavilar.github.io/gobernanza-salud-publica-colombia/"
      },
      {
        title: "XXI Congreso Nacional de Salud 2026 — Explorador interactivo",
        text: "Síntesis del mismo autor sobre el XXI Congreso Nacional de Salud. Comparte con esta revisión el mismo marco de resultados de implementación de Proctor et al. (2011) y la misma metodología de diagramación de dinámica de sistemas (Homer & Hirsch, 2006).",
        url: "https://fadavilar.github.io/xxi-congreso-nacional-salud-2026/"
      }
    ],
  },

  stats: [
    { value: "4", label: "Mecanismos de acceso documentados", detail: "Ejes de convergencia temática — qué facilita y qué bloquea la coordinación intersectorial en el terreno" },
    { value: "2", label: "Bucles causales del vacío de implementación", detail: "R1 (vacío de rectoría) y B1 (mecanismos operativos) — dinámica de sistemas" },
    { value: "3", label: "Estrategias de acceso propuestas", detail: "Cada una vinculada a un punto de apalancamiento de los bucles causales" },
    { value: "15", label: "Estudios que sustentan el diagnóstico", detail: "45 registros identificados, 14 de bases de datos + 1 de búsqueda dirigida — ver Metodología y evidencia" },
  ],

  intro: "Objetivo: sintetizar la evidencia sobre los mecanismos de acceso intersectorial —arreglos de gobernanza que articulan sectores distintos al de la salud para garantizar el acceso a servicios y al bienestar— y examinar su aplicación al contexto colombiano. Métodos: se realizó una revisión sistemática exploratoria siguiendo la metodología PRISMA 2020 y su extensión para revisiones de alcance (PRISMA-ScR), a partir de una pregunta en formato Población-Concepto-Contexto (PCC). Se consultaron PubMed/MEDLINE, LILACS/BVS, SciELO, Cochrane Library, Google Scholar y literatura gris institucional, con ecuaciones booleanas adaptadas a cada fuente y un horizonte de 2021 a 2026. La calidad se evaluó con las herramientas EQUATOR Network pertinentes a cada diseño (SRQR, PRISMA-ScR), declarando los documentos sin checklist aplicable. Resultados: de 45 registros identificados (44 en bases de datos, 1 en literatura gris), se eliminaron 13 duplicados, se examinaron 32 y se incluyeron 15 estudios y documentos: cinco cualitativos indexados en PubMed, un estudio de caso institucional de la OPS/OMS, ocho registros de Google Scholar y una revisión de alcance regional. (Cifras actualizadas tras la publicación inicial: una tesis de la Universidad Externado de Colombia, identificada originalmente sin URL verificable, fue localizada y verificada por el autor — ver la nota en \"Materiales y métodos\".) Los hallazgos convergen en que la gobernanza formal, el financiamiento compartido y la participación comunitaria determinan una acción intersectorial efectiva, mientras que la fragmentación institucional y la débil rectoría son las barreras más citadas. Conclusiones: Colombia dispone de una arquitectura normativa relevante, pero enfrenta brechas de implementación, financiamiento sostenido y evidencia de efectividad medida con rigor.",

  introduction: "Este documento sintetiza una revisión sistemática exploratoria de autoría propia pensando en dos tipos de lector: quien busca un resumen ordenado de qué documenta la evidencia disponible sobre acceso intersectorial, y quien quiere revisar con detalle la metodología, la tabla completa de estudios incluidos y el proceso de verificación bibliográfica. Por eso la estructura sigue el formato de un artículo científico —resumen, introducción, materiales y métodos, resultados, discusión y recomendaciones, conclusión— en vez de la organización de una presentación. La sección de métodos incluye, de forma deliberada y visible, la regla de citación que gobernó toda la revisión: ningún dato se cita sin poder verificarse, y cuando algo no pudo verificarse se documenta así explícitamente en vez de omitirse u omitirse en silencio.",

  selectiveCategory: {
    title: "La brecha no es normativa, es de implementación",
    text: "Colombia dispone de una arquitectura institucional relevante para la acción intersectorial —la Comisión Intersectorial de Salud Pública, el Plan Decenal de Salud Pública 2022–2031, las redes integradas e integrales territoriales de salud—, pero los estudios primarios identificados en esta revisión documentan de manera consistente que esa arquitectura formal no siempre se traduce en coordinación operativa efectiva en el terreno. La ausencia de rectoría intersectorial efectiva, no la ausencia de normativa, es el obstáculo más citado."
  },

  // ------------------------------------------------------------------
  // El problema de implementación — marco central de esta edición de la
  // app (a solicitud del autor). Caso real (Foege, viruela en Nigeria) y
  // definición tomados de Peters, Tran & Adam (2013), guía práctica de la
  // OMS/Alianza para la Investigación en Políticas y Sistemas de Salud.
  // ------------------------------------------------------------------
  implementationProblem: {
    caseTitle: "Por qué la eficacia no basta: el caso de la viruela en Nigeria",
    caseText: [
      "En diciembre de 1966 el doctor William Foege investigó un brote de viruela en el este de Nigeria. La vacuna liofilizada contra la viruela ya existía, era segura y eficaz, y la campaña mundial de erradicación llevaba siete años en marcha — pero a finales de 1966 la enfermedad seguía circulando en 31 países y territorios. El problema no era la vacuna: era alcanzar el 80% de cobertura necesario para la inmunidad de rebaño con los recursos realmente disponibles en el terreno.",
      "Foege tenía vacunada solo al 35% de la población y los refuerzos tardarían semanas en llegar. En vez de esperar, trazó las rutas de transporte y los mercados que conectaban a las poblaciones afectadas y concentró la vacuna disponible en \"anillos de inmunidad\" alrededor de cada brote detectado — la estrategia de vigilancia-contención. Esa estrategia detuvo la transmisión en el este de Nigeria en cinco meses, vacunando solo a 750 000 personas de una población de 12 millones. Escalada globalmente, condujo a la erradicación mundial de la viruela en 1979.",
      "En sentido estricto, no fue investigación de implementación — Foege respondía a un brote, no ejecutaba un protocolo de investigación —, pero el episodio ilustra con precisión la brecha que esta disciplina estudia: una intervención eficaz, respaldada por evidencia sólida, no llega automáticamente a quien la necesita. Entre la eficacia demostrada y el acceso real se interpone siempre un problema de implementación."
    ],
    caseCitation: { label: "Peters, D.H., Tran, N.T., & Adam, T. (2013). Implementation Research in Health: A Practical Guide. Alianza para la Investigación en Políticas y Sistemas de Salud (AHPSR), Organización Mundial de la Salud, capítulo 1.", url: "https://apps.who.int/iris/handle/10665/91758" },
    definitionQuote: "La investigación de implementación es la indagación científica sobre preguntas relativas a la implementación.",
    definitionCitation: { label: "Peters, D.H., Tran, N.T., & Adam, T. (2013). Implementation Research in Health: A Practical Guide, capítulo 3, p. 27.", url: "https://apps.who.int/iris/handle/10665/91758" },
    definitionText: "Bajo esta definición deliberadamente amplia, la investigación de implementación puede abordar los factores que afectan la implementación (pobreza, lejanía geográfica, creencias locales), los procesos de implementación en sí mismos, o los resultados de la implementación. En la práctica suele enfocarse en identificar problemas de implementación comunes, entender los factores que facilitan o dificultan el acceso a una intervención de salud, desarrollar y probar soluciones a las barreras de implementación, y determinar la mejor manera de introducir innovaciones en un sistema de salud o de sostener su uso a escala.",
    whyThisReview: "Esta revisión sobre mecanismos de acceso intersectorial es, ante todo, evidencia sobre un problema de implementación: Colombia ya cuenta con la \"intervención\" — una arquitectura normativa e institucional para la acción intersectorial (Comisión Intersectorial de Salud Pública, Plan Decenal de Salud Pública, redes territoriales) —, pero los estudios primarios identificados documentan de forma consistente que esa arquitectura no siempre se traduce en coordinación operativa efectiva ni en mejor acceso en el terreno. Leer esta revisión a través del lenguaje de la investigación de implementación —qué se está implementando, con qué estrategias, con qué resultados de implementación, y con qué barreras— es el propósito central de esta edición de la aplicación; la sección \"Marcos de referencia\" que sigue reúne las herramientas conceptuales para hacerlo, y la sección \"Dinámica de sistemas\" traduce los ejes de esta misma revisión en hipótesis causales explícitas sobre por qué persiste la brecha."
  },

  // ------------------------------------------------------------------
  // Materiales y métodos — PRISMA-ScR. Cada campo es texto o cifra real
  // tomada directamente del documento completo (sección 2 y 3.1).
  // ------------------------------------------------------------------
  methods: {
    design: "Revisión sistemática de alcance (scoping review) siguiendo los lineamientos de la declaración PRISMA 2020 y de su extensión específica para este tipo de revisión, PRISMA-ScR. El diagrama de flujo se construyó siguiendo la metodología y las convenciones gráficas propuestas por Haddaway y colaboradores en el paquete PRISMA2020.",
    pccRationale: "La pregunta que orienta esta revisión (mecanismos de acceso intersectorial y su aplicación al contexto colombiano) no compara una intervención clínica frente a un comparador para medir un desenlace individual, por lo que no admite un encuadre PICO. Se trata, en cambio, de una pregunta de gobernanza y política pública sobre cómo se articulan distintos sectores para garantizar acceso y cómo opera ese diseño institucional en un país determinado, lo que corresponde al formato PCC (Población/actores, Concepto, Contexto) propio de las revisiones de alcance.",
    pcc: {
      population: "La población colombiana usuaria de servicios públicos y sociales, y las instituciones responsables de garantizar su acceso (sector salud, protección social, gobierno territorial, sector educativo, entre otros).",
      concept: "Los mecanismos, modelos o estrategias de coordinación y acción intersectorial orientados al acceso.",
      context: "Colombia, su sistema de protección social y su marco normativo de articulación intersectorial.",
    },
    sources: [
      { name: "PubMed/MEDLINE", note: "Por su cobertura del descriptor MeSH \"Intersectoral Collaboration\", reconocido y vinculado a la literatura de la OMS sobre determinantes sociales y Salud en Todas las Políticas.", automated: true },
      { name: "LILACS/BVS", note: "Por su cobertura de revistas colombianas y latinoamericanas de salud pública y ciencias sociales.", automated: false },
      { name: "SciELO", note: "Misma razón que LILACS/BVS: cobertura regional de literatura sobre gobernanza en salud y determinantes sociales.", automated: true },
      { name: "Cochrane Library", note: "Incluida de manera exploratoria pese a su énfasis en eficacia de intervenciones clínicas, para verificar si el grupo temático de sistemas de salud producía evidencia pertinente.", automated: false },
      { name: "Google Scholar", note: "Por su alcance multidisciplinario y su capacidad de capturar literatura de ciencias políticas y administración pública que las bases biomédicas no indexan.", automated: false },
      { name: "Literatura gris institucional (OPS/OMS, MinSalud)", note: "Búsqueda dirigida, por documentar directamente el diseño normativo e instrumental de estos mecanismos en Colombia.", automated: false },
    ],
    searchStrings: [
      { source: "PubMed/MEDLINE", equation: "(\"Intersectoral Collaboration\"[Mesh] OR \"intersectoral action\"[tiab] OR \"intersectoral collaboration\"[tiab] OR \"cross-sectoral\"[tiab] OR \"multisectoral\"[tiab]) AND (\"Health Services Accessibility\"[Mesh] OR \"access\"[tiab] OR \"acceso\"[tiab]) AND (\"Colombia\"[Mesh] OR \"Colombia\"[tiab])" },
      { source: "SciELO", equation: "(\"acción intersectorial\" OR \"colaboración intersectorial\" OR \"articulación intersectorial\" OR \"intersectoral collaboration\") AND (\"acceso\" OR \"accesibilidad\" OR \"access\") AND \"Colombia\"" },
      { source: "LILACS/BVS", equation: "tw:((\"acción intersectorial\" OR \"colaboración intersectorial\" OR \"articulación intersectorial\" OR \"intersectorialidad\" OR \"intersectoral collaboration\" OR \"intersectoral action\")) AND (tw:(\"acceso\" OR \"accesibilidad\" OR \"access\")) AND (tw:(\"Colombia\"))" },
      { source: "Google Scholar", equation: "allintitle: Colombia (intersectorial OR intersectorialidad OR multisectorial), restringida a 2021–2026 (parámetros as_q=Colombia, as_oq=\"intersectorial intersectorialidad multisectorial\", as_occt=title, as_ylo=2021, as_yhi=2026)" },
      { source: "Literatura gris institucional", equation: "Búsquedas dirigidas combinando \"acción intersectorial\" y \"acceso\" con Colombia, restringidas a los dominios de la OPS/OMS y del Ministerio de Salud y Protección Social, verificando cada documento mediante lectura directa antes de su inclusión." },
    ],
    searchCorrectionNote: "La ecuación inicialmente aprobada para Google Scholar (allintitle: Colombia Acceso Intersectorial OR salud) resultó, en la práctica, conceptualmente defectuosa: el operador OR entre \"Intersectorial\" y \"salud\" volvía opcional el término central de la pregunta, de modo que prácticamente cualquier artículo sobre salud en Colombia satisfacía la ecuación. La ejecución de esa ecuación produjo 73 resultados que, tras el cribado por título y resumen, no aportaron ningún estudio sobre mecanismos de coordinación intersectorial. Este hallazgo se reportó de manera explícita y se corrigió la ecuación restringiendo el término de coordinación intersectorial al campo de título, lo que redujo el universo a un conjunto pequeño y temáticamente preciso de 13 registros (12 únicos tras deduplicar).",
    eligibility: "Se incluyeron documentos publicados entre 2021 y 2026, en español o inglés, que documentaran mecanismos, modelos, estrategias o arreglos de gobernanza para la coordinación intersectorial orientada al acceso a servicios o al bienestar, con aplicación empírica o conceptual a Colombia o con relevancia directa para su interpretación. Se dio prioridad a revisiones sistemáticas y metaanálisis; al no encontrarse revisiones específicas sobre mecanismos de acceso intersectorial en el dominio de la salud colombiana, se amplió explícitamente la búsqueda a revisiones de alcance, estudios cualitativos, estudios de caso, tesis de posgrado y documentos oficiales de política. Se excluyeron los registros centrados en barreras de acceso a servicios de salud sin componente de coordinación intersectorial, así como los registros fuera del rango de fecha.",
    scopeDecision: "Durante el cribado surgió una decisión de alcance que se sometió al solicitante de la revisión: varios registros documentaban genuinos mecanismos de gobernanza intersectorial colombianos, pero en sectores distintos al de la salud (economía solidaria, educación y deporte, desarrollo agrícola, participación comunitaria). Se optó por incluirlos como evidencia comparativa, en la medida en que informan sobre los factores de éxito y las barreras de los mecanismos de coordinación intersectorial como fenómeno de gobernanza, independientemente del sector sustantivo en el que operen.",
    citationRule: "Se estableció como regla fija que solo se citaría información verificable con datos completos y reales (autor, año, título, revista o editorial y DOI o URL estable). Todo dato no verificable se marca de manera explícita como \"no verificado\" o como \"informe no recuperado\", sin omitirlo en silencio ni sustituirlo por una estimación. Esta regla se aplicó de manera estricta durante toda la revisión: dos registros identificados por su cita en Google Scholar no pudieron recuperarse a texto completo ni verificarse mediante una URL primaria estable al momento de la publicación inicial de esta revisión (16 de septiembre de 2026), por lo que se excluyeron del conjunto final de estudios incluidos y se documentaron como hallazgo no verificado; un tercer documento se mantuvo en el conjunto incluido porque su existencia y su contenido general pudieron corroborarse indirectamente, pero se marca explícitamente como no verificado en su URL oficial primaria.",
    citationRuleUpdate: "Actualización posterior a la publicación inicial (17 de septiembre de 2026): el autor localizó y verificó, mediante el repositorio institucional bdigital.uexternado.edu.co, la tesis de maestría de la Universidad Externado de Colombia sobre la Comisión Intersectorial de Participación (2012–2016), uno de los dos registros no recuperados originalmente. Se incorporó como estudio incluido #15 y las cifras del diagrama PRISMA se actualizaron en consecuencia. El otro registro (Pacto Intersectorial por la Madera Legal, Fedemaderas 2021) permanece sin URL primaria estable. Un tercer dato se corrigió por la misma vía: el estudio #13 (estrategia de cuidado menstrual) se había atribuido por error al Ministerio de Salud y Protección Social nacional; se verificó que su autor real es la Gobernación del Caquetá (Observatorio de Salud Pública departamental).",
    qualityApproach: "La evaluación de calidad se realizó con la herramienta de EQUATOR Network más apropiada para cada diseño de estudio identificado, en lugar de forzar un único instrumento genérico sobre un conjunto de diseños heterogéneos. A los estudios cualitativos se les aplicó la lista de verificación SRQR (Standards for Reporting Qualitative Research); a la revisión de alcance se le aplicó PRISMA-ScR. Para los estudios de caso institucionales, las tesis de posgrado y los documentos de política —literatura académica y gris no empírica— no existe ninguna guía EQUATOR Network aplicable de manera directa; esta ausencia se declara de manera explícita como una limitación metodológica en lugar de forzar un instrumento inadecuado.",
    synthesisApproach: "Dada la heterogeneidad de diseños, poblaciones y desenlaces reportados, no fue posible ni apropiado realizar una síntesis cuantitativa o un metaanálisis. Se optó por una síntesis narrativa, organizada por convergencias y divergencias temáticas entre los estudios.",
    prisma: {
      identifiedByDb: [
        { label: "PubMed/MEDLINE", n: 7 },
        { label: "LILACS/BVS", n: 18 },
        { label: "SciELO", n: 3 },
        { label: "Cochrane Library", n: 3 },
        { label: "Google Scholar", n: 13 },
      ],
      identifiedTotal: 44,
      identifiedOtherTotal: 1,
      removedBreakdown: [
        { label: "Registros duplicados", n: 13 },
      ],
      removedTotal: 13,
      screenedTotal: 32,
      excludedReasons: [
        "Fuera de dominio o concepto (n = 5)",
        "Fuera del rango de fecha 2021–2026 (n = 11)",
      ],
      excludedTotal: 16,
      soughtTotal: 17,
      notRetrievedTotal: 1,
      notRetrievedReasons: [
        "Pacto Intersectorial por la Madera Legal (Fedemaderas, 2021) — sin URL primaria estable",
      ],
      assessedTotal: 16,
      excludedAtEligibilityTotal: 0,
      includedByDb: [
        { label: "De bases de datos", n: 14 },
        { label: "De otros métodos (lit. gris)", n: 1 },
      ],
      includedTotal: 15,
      updateNote: "Cifras actualizadas el 17 de septiembre de 2026 respecto de la publicación inicial de esta revisión (16 de septiembre de 2026): un registro no recuperado (tesis, Universidad Externado de Colombia) fue localizado y verificado, y pasó de \"informe no recuperado\" a \"estudio incluido\" (#15) — ver la nota en \"Diseño, fuentes y regla de citación\".",
      bySourceTable: [
        { source: "PubMed/MEDLINE (automatizada)", identified: 7, included: 5, note: "Se excluyeron por título/resumen dos registros fuera del concepto específico de mecanismos de acceso intersectorial." },
        { source: "LILACS/BVS (ejecución manual)", identified: 18, included: 1, note: "17 registros duplicaban PubMed/MEDLINE o PAHOIRIS, o quedaban fuera del rango 2021–2026 (el más antiguo data de 1999). El único aporte nuevo fue un estudio de caso institucional de la OPS/OMS sobre atención primaria en Colombia durante la pandemia." },
        { source: "SciELO (booleana + dirigida)", identified: 3, included: 0, note: "Los dos artículos únicos recuperados se publicaron en 2018 y 2013, fuera del rango de fecha 2021–2026." },
        { source: "Cochrane Library (ejecución manual, tras bloqueo automatizado)", identified: 3, included: 0, note: "Los tres registros corresponden a revisiones Cochrane sobre gestión de sistemas de salud publicadas antes de 2021 o sin relación directa con mecanismos de acceso intersectorial." },
        { source: "Google Scholar (ejecución manual, ecuación corregida)", identified: 13, included: 8, note: "Tres registros se excluyeron por concepto (reforma pensional, asistencia consular, empleo informal). De los dos registros identificados por su cita que no pudieron recuperarse a texto completo en la publicación inicial, uno (tesis, Universidad Externado de Colombia) fue localizado y verificado posteriormente y se incorporó como estudio incluido (#15); el otro (Fedemaderas, 2021) permanece como informe no recuperado." },
        { source: "Literatura gris institucional (búsqueda dirigida)", identified: 1, included: 1, note: "Revisión de alcance regional sobre Salud en Todas las Políticas e intersectorialidad en América Latina y el Caribe, verificada mediante DOI." },
      ],
    },
  },

  // ------------------------------------------------------------------
  // Estudios incluidos (n = 14) — Tabla 2 del documento. "Unidad
  // citable" de esta revisión, equivalente a las sesiones de un
  // congreso o los artículos de otra revisión ya publicada.
  // ------------------------------------------------------------------
  studies: [
    { n: 1, title: "Access to mental health and psychosocial support among migrants in transit in Colombia", author: "Greene et al., 2026", journal: "SSM Mental Health", type: "Cualitativo (dinámica de sistemas participativa)", sample: "10 talleres de modelado grupal en albergues para migrantes", result: "La coordinación interagencial y la acción multisectorial son puntos de apalancamiento clave para reducir inequidades de acceso a salud mental en migrantes en tránsito.", url: "https://doi.org/10.1016/j.ssmmh.2026.100617", database: "PubMed" },
    { n: 2, title: "Perceived Barriers and Facilitators in Cardiovascular Risk Management in Colombia: A Qualitative Analysis of the RE-HOPE Study", author: "López-López et al., 2025", journal: "International Journal of Environmental Research and Public Health", type: "Cualitativo (fenomenológico, grupos focales)", sample: "5 grupos focales con actores del sistema de salud, Santander", result: "La débil articulación y rectoría intersectorial son las principales barreras percibidas para el control de la hipertensión en Colombia.", url: "https://doi.org/10.3390/ijerph22081199", database: "PubMed" },
    { n: 3, title: "‘The policies say something else’: Psychiatric rehabilitation in Colombia, a necessity amid contradictory public policies", author: "Agudelo-Hernández et al., 2025", journal: "Global Public Health", type: "Cualitativo", sample: "63 participantes en 6 departamentos", result: "Falta de continuidad y de articulación intersectorial en los servicios de salud mental, pese a la existencia de políticas públicas que resultan contradictorias entre sí.", url: "https://doi.org/10.1080/17441692.2025.2541233", database: "PubMed" },
    { n: 4, title: "Programa de acción para superar las brechas en salud mental: un modelo teórico de las barreras de implementación desde el personal de salud en Chocó, Colombia", author: "Agudelo-Hernández et al., 2024", journal: "Revista Panamericana de Salud Pública", type: "Cualitativo (análisis de contenido)", sample: "21 entrevistas semiestructuradas", result: "La \"acción intersectorial\" emerge como categoría temática central entre las barreras de implementación del programa mhGAP.", url: "https://doi.org/10.26633/RPSP.2024.49", database: "PubMed" },
    { n: 5, title: "Promoting immunization equity in Latin America and the Caribbean: Case studies, lessons learned, and their implication for COVID-19 vaccine equity", author: "Chan et al., 2022", journal: "Vaccine", type: "Estudio de caso descriptivo multipaís", sample: "Colombia, Guyana y Sucre (Bolivia)", result: "La colaboración intersectorial y comunitaria mejora el acceso equitativo a la vacunación en poblaciones de difícil acceso.", url: "https://doi.org/10.1016/j.vaccine.2022.02.051", database: "PubMed" },
    { n: 6, title: "Colombia: a primary health care case study in the context of the COVID-19 pandemic", author: "Rodríguez Moreno, 2024", journal: "Organización Mundial de la Salud (WHOLIS)", type: "Estudio de caso institucional", sample: "Sistema de salud colombiano durante la pandemia de COVID-19", result: "Documenta la respuesta de la atención primaria en salud colombiana y su articulación intersectorial durante la pandemia.", url: "https://iris.who.int/handle/10665/376143", database: "LILACS/BVS" },
    { n: 7, title: "Reemergencia de la fiebre amarilla en Colombia: urgencia de respuesta intersectorial", author: "Rincón-Orozco, 2025", journal: "Revista Universidad Industrial de Santander, Salud", type: "Ensayo / revisión narrativa", sample: "No aplica (análisis de política de salud pública)", result: "Los vacíos de cobertura y la fragmentación institucional exigen una respuesta intersectorial articulada frente a la reemergencia de la fiebre amarilla.", url: "http://www.scielo.org.co/scielo.php?pid=S0121-08072025000100003&script=sci_arttext", database: "Google Scholar", verification: "parcial", verificationNote: "Metadatos confirmados vía Google Scholar; el texto completo no pudo auto-verificarse por un error de redirección persistente del sitio scielo.org.co." },
    { n: 8, title: "Análisis del rol de la Comisión Intersectorial de la Economía Solidaria en la política pública", author: "Jiménez Cabas y Eljaiek Julio, 2022", journal: "Tesis, Maestría en Gestión y Desarrollo, Universidad de La Salle", type: "Estudio de caso (tesis)", sample: "Comisión Intersectorial de la Economía Solidaria (nivel nacional)", result: "Caracteriza el rol de la Comisión como mecanismo formal de gobernanza intersectorial dentro de la política pública. Estudio comparativo fuera del sector salud, incluido como evidencia de gobernanza intersectorial.", url: "https://ciencia.lasalle.edu.co/items/5af2e810-394a-469a-a983-a5982d2617cb", database: "Google Scholar" },
    { n: 9, title: "Política pública intersectorial de educación y deporte", author: "Villegas Estrada, 2025", journal: "Tesis, Universidad de La Salle", type: "Estudio de caso (tesis)", sample: "Programa de educación en valores olímpicos, Colombia", result: "Analiza los aportes de un programa educativo a la construcción de política pública intersectorial. Estudio comparativo fuera del sector salud, incluido como evidencia de gobernanza intersectorial.", url: "https://ciencia.lasalle.edu.co/items/29a482b8-75f2-4211-b789-6cdca2acfb8a", database: "Google Scholar" },
    { n: 10, title: "Articulación intersectorial para el desarrollo del sector agrícola: caso ReaCTívate Santander", author: "Delgado Jaimes, Flórez Gómez y Ortiz Isarra, 2025", journal: "European Public & Social Innovation Review, vol. 10", type: "Estudio de caso", sample: "Alianza intersectorial e interinstitucional, Santander", result: "Describe los factores que permitieron una articulación intersectorial efectiva para reactivar el sector agrícola. Estudio comparativo fuera del sector salud, incluido como evidencia de gobernanza intersectorial.", url: "https://doi.org/10.31637/epsir-2025-887", database: "Google Scholar" },
    { n: 11, title: "Articulación multisectorial y Juntas de Acción Comunal en Colombia (Ley 2166 de 2021)", author: "Bocanegra, 2025", journal: "Tesis, Universidad Icesi", type: "Estudio de caso (tesis)", sample: "Juntas de Acción Comunal, marco de la Ley 2166 de 2021", result: "Analiza desafíos y oportunidades de la articulación multisectorial para fortalecer la participación comunitaria. Estudio comparativo fuera del sector salud, incluido como evidencia de gobernanza intersectorial.", url: "https://repository.icesi.edu.co/bitstreams/fce35eb2-7378-4d4a-b44e-46327882d887/download", database: "Google Scholar" },
    { n: 12, title: "Implementación de la terapia génica en Colombia: un reto multisectorial", author: "Zarante y Ruiz, 2021", journal: "Revista INNOS", type: "Ensayo / análisis", sample: "No aplica", result: "La incorporación de terapias génicas en Colombia requiere coordinación multisectorial entre salud, regulación, industria y academia.", url: "https://www.researchgate.net/publication/359204264", database: "Google Scholar", verification: "no-doi", verificationNote: "No indexado con DOI propio; verificado mediante ResearchGate." },
    { n: 13, title: "Estrategia intersectorial para la promoción de la salud y el cuidado menstrual", author: "Lozano Orrego, L. — Gobernación del Caquetá, Observatorio de Salud Pública (Secretaría de Salud Departamental)", journal: "Documento de gobierno departamental", type: "Documento de política", sample: "Departamento del Caquetá (municipios de Solita, Solano y Milán)", result: "Propone una estrategia intersectorial para abordar el cuidado menstrual como determinante de acceso y equidad, con 7 metas territoriales a 2026 y fundamento en la Ley 2261 de 2022 y la Resolución 3280 de 2018.", url: "https://caqueta.micolombiadigital.gov.co/sites/caqueta/content/files/003142/157052_observatorio-promocion-de-la-salud-y-cuidado-menstrual.pdf", database: "Google Scholar", verification: "parcial", verificationNote: "El documento inicialmente se atribuyó, por error, al Ministerio de Salud y Protección Social nacional; verificado y corregido: es un documento de la Gobernación del Caquetá (Observatorio de Salud Pública departamental), localizado en su portal oficial. El texto no declara una fecha de publicación explícita; el metadato del archivo indica mayo de 2025." },
    { n: 14, title: "Health in All Policies and intersectorality in Latin America and the Caribbean, 2011-2021: a scoping review", author: "Escobar Díaz y Rodríguez Corredor, 2023", journal: "Revista de Salud Pública, vol. 29(2)", type: "Revisión de alcance", sample: "Literatura de América Latina y el Caribe, 2011–2021 (incluye Colombia)", result: "Sintetiza la evolución conceptual y la implementación de Salud en Todas las Políticas/intersectorialidad en la región e identifica brechas de gobernanza persistentes.", url: "https://doi.org/10.31052/1853.1180.v29.n2.42180", database: "Búsqueda dirigida (otros métodos)" },
    { n: 15, title: "Estudio de caso: análisis de capacidades organizacionales del Instituto Distrital de la Participación y Acción Comunal (IDPAC), para coordinar el funcionamiento de la Comisión Intersectorial de Participación (CIP), durante el período 2012 a 2016", author: "Peña Pinzón, J.S., 2021", journal: "Tesis, Maestría en Gobierno y Políticas Públicas, Universidad Externado de Colombia", type: "Estudio de caso (tesis)", sample: "Comisión Intersectorial de Participación (CIP), Bogotá D.C., 2012–2016", result: "El IDPAC, como secretaría técnica de la CIP, muestra un nivel medio de desarrollo de sus capacidades organizacionales; la Comisión funcionó como espacio de deliberación con decisiones no vinculantes, sin asignación presupuestal clara y con liderazgo disputado entre el IDPAC y la Secretaría de Gobierno distrital, lo que limitó su capacidad de coordinación. Estudio comparativo fuera del sector salud, incluido como evidencia de gobernanza intersectorial; identificado originalmente por su cita en Google Scholar, no se pudo recuperar a texto completo durante la publicación inicial de esta revisión y se localizó y verificó después, vía el repositorio institucional de la Universidad Externado de Colombia (ver nota de actualización en \"Diseño, fuentes y regla de citación\").", url: "https://bdigital.uexternado.edu.co/server/api/core/bitstreams/e34e5e12-a2f0-4fe0-898e-0149580d34bf/content", database: "Google Scholar" },
  ],

  // ------------------------------------------------------------------
  // Ejes de convergencia temática — clasificación editorial propia del
  // autor de los hallazgos de la sección de Discusión (4), agrupando
  // los 15 estudios por el patrón que documentan. Cada hallazgo cita
  // los estudios (por número) que lo respaldan.
  // ------------------------------------------------------------------
  categories: [
    {
      id: "A", title: "La débil rectoría intersectorial es la barrera más citada", color: "cat-a",
      codes: [
        { text: "En López-López y colaboradores, la debilidad de la articulación y de la rectoría intersectorial emerge como la principal barrera percibida por los actores del sistema de salud para el control de la hipertensión en Santander.", studies: [2] },
        { text: "En Agudelo-Hernández y colaboradores (2025), la falta de continuidad y de articulación intersectorial en los servicios de salud mental persiste pese a la existencia de políticas públicas que, paradójicamente, resultan contradictorias entre sí.", studies: [3] },
        { text: "En el estudio de 2024 del mismo grupo sobre el programa mhGAP en Chocó, la \"acción intersectorial\" emerge directamente como categoría temática central entre las barreras de implementación identificadas por el personal de salud.", studies: [4] },
        { text: "Estos tres estudios, con poblaciones y objetivos distintos, coinciden en señalar que la ausencia de una rectoría intersectorial efectiva —y no la ausencia de normativa— es el obstáculo operativo más citado.", studies: [2, 3, 4] },
        { text: "Peña Pinzón (2021), en un estudio comparativo fuera del sector salud, documenta el mismo patrón en la Comisión Intersectorial de Participación de Bogotá (2012–2016): un liderazgo disputado entre dos entidades coordinadoras, decisiones sin capacidad vinculante y sin presupuesto propio asignado, que redujeron el espacio de coordinación a un ejercicio en buena medida declarativo.", studies: [15] },
      ]
    },
    {
      id: "B", title: "La coordinación sí funciona cuando se materializa en mecanismos operativos", color: "cat-b",
      codes: [
        { text: "Greene y colaboradores, mediante un ejercicio participativo de dinámica de sistemas con migrantes en tránsito, identifican la coordinación interagencial como uno de los puntos de apalancamiento más relevantes para reducir las inequidades de acceso a apoyo psicosocial.", studies: [1] },
        { text: "Chan y colaboradores muestran, en un estudio de caso descriptivo que incluye a Colombia junto con Guyana y Sucre (Bolivia), que la colaboración intersectorial y comunitaria mejora el acceso equitativo a la vacunación en poblaciones de difícil acceso.", studies: [5] },
        { text: "Ambos estudios refuerzan, desde contextos de política distintos (salud mental de poblaciones migrantes e inmunización), la misma conclusión: la coordinación intersectorial funciona cuando se articula con participación comunitaria y con mecanismos operativos concretos (rutas de atención, protocolos de referencia, intercambio de información), no como una declaración normativa aislada.", studies: [1, 5] },
      ]
    },
    {
      id: "C", title: "El diseño institucional de la intersectorialidad se transfiere entre sectores", color: "cat-c",
      codes: [
        { text: "Los cinco estudios comparativos de sectores distintos al de la salud, incluidos por decisión explícita de ampliar el alcance más allá del dominio estrictamente sanitario, aportan una perspectiva adicional: los factores de éxito —y de fracaso— de un mecanismo de gobernanza intersectorial parecen ser transferibles entre sectores.", studies: [8, 9, 10, 11, 15] },
        { text: "El estudio sobre la Comisión Intersectorial de la Economía Solidaria y el que analiza la articulación intersectorial en el caso ReaCTívate Santander (sector agrícola) caracterizan mecanismos formales de gobernanza con una lógica de funcionamiento equivalente a la que la literatura de salud describe para las comisiones intersectoriales sanitarias.", studies: [8, 10] },
        { text: "Esta lectura es consistente con la revisión de alcance de Escobar Díaz y Rodríguez Corredor (2023), que sintetiza la evolución conceptual y la implementación de Salud en Todas las Políticas/intersectorialidad en América Latina y el Caribe entre 2011 y 2021, e identifica brechas de gobernanza persistentes en toda la región, no exclusivas de Colombia ni del sector salud.", studies: [14] },
      ]
    },
    {
      id: "D", title: "Ningún estudio reporta un efecto negativo de la coordinación, pero la evidencia es mayoritariamente cualitativa", color: "cat-d",
      codes: [
        { text: "No se identificaron contradicciones directas entre los estudios incluidos respecto del sentido del efecto de la coordinación intersectorial sobre el acceso: ningún estudio reporta que una mayor coordinación intersectorial perjudique el acceso.", studies: [] },
        { text: "La tensión que sí emerge del conjunto de la evidencia es de naturaleza distinta, entre el nivel normativo y el nivel de implementación: la arquitectura institucional colombiana declara la intersectorialidad como principio orientador, pero los estudios primarios cualitativos identificados documentan de manera consistente que esa arquitectura formal no siempre se traduce en una coordinación operativa efectiva en el terreno.", studies: [2, 3, 4] },
        { text: "Es más sólido afirmar que la intersectorialidad crea condiciones para abordar determinantes sociales que atribuirle automáticamente una mejora sanitaria específica, en la medida en que la mayoría de los estudios disponibles emplea diseños cualitativos o de caso, no diseños que permitan establecer causalidad.", studies: [] },
      ]
    },
  ],

  // ------------------------------------------------------------------
  // Evaluación de la calidad de la evidencia — Tabla 3 del documento
  // ------------------------------------------------------------------
  qualityAssessment: [
    { studies: "Greene et al. 2026; López-López et al. 2025 (RE-HOPE); Agudelo-Hernández et al. 2025; Agudelo-Hernández et al. 2024", design: "Cualitativo", tool: "SRQR (Standards for Reporting Qualitative Research)", result: "Los cuatro estudios reportan con claridad el objetivo, el método y el contexto; ninguno detalla explícitamente la reflexividad del equipo investigador, criterio que se considera parcialmente cumplido." },
    { studies: "Escobar Díaz y Rodríguez Corredor, 2023", design: "Revisión de alcance", tool: "PRISMA-ScR", result: "Cumple con el registro de las bases consultadas, el período cubierto y el proceso de extracción; no reporta un diagrama de flujo PRISMA propio en el resumen disponible para verificación." },
    { studies: "Chan et al. 2022", design: "Estudio de caso descriptivo multipaís", tool: "No existe una lista de verificación EQUATOR específica para estudios de caso multipaís; se evaluó con dimensiones básicas de transparencia metodológica", result: "Cumple con la declaración del objetivo y de las fuentes de datos; la metodología de recolección de datos (2019–2020) se describe con claridad." },
    { studies: "Estudio de caso OMS/OPS sobre atención primaria en Colombia; Jiménez Cabas y Eljaiek Julio 2022; Villegas Estrada 2025; Delgado Jaimes et al. 2025; Bocanegra 2025; Zarante y Ruiz 2021; estrategia de cuidado menstrual de la Gobernación del Caquetá (verificada en su portal oficial, sin fecha de publicación explícita)", design: "Estudios de caso institucionales, tesis de posgrado y documentos de política", tool: "Ninguna guía EQUATOR Network aplica de manera directa a este tipo de literatura académica y gris no empírica; esta ausencia se documenta de forma explícita en lugar de forzar un instrumento inadecuado", result: "No evaluable con una herramienta EQUATOR Network. La calidad se valoró cualitativamente por la transparencia de las fuentes y la trazabilidad institucional de cada documento." },
  ],

  // ------------------------------------------------------------------
  // Marcos de referencia de implementación y acceso — núcleo conceptual
  // de esta edición de la app. Ninguno forma parte de los 15 estudios
  // incluidos en la revisión; se incorporan como lente interpretativa
  // del autor, cada uno con su cita verificada contra la fuente primaria
  // (WHO/TDR, Implementation Science, o el artículo original).
  // ------------------------------------------------------------------
  irFrameworks: {
    intro: "Seis piezas conceptuales, ninguna de las cuales forma parte de los 15 estudios incluidos en la revisión, ayudan a leerla a través del lenguaje de la investigación de implementación: cómo situar una pregunta de implementación en un continuo (Peters, Tran & Adam, 2013), cómo evaluar si una implementación funcionó (Proctor et al., 2011), qué teorías explican por qué una intervención se adopta o no (CFIR, RE-AIM, difusión de innovaciones), qué determinantes concretos de la práctica hay que revisar (TICD, Flottorp et al., 2013), y qué condiciones determinan el acceso a una tecnología o servicio (Frost & Reich, 2008). Todas se presentan explícitamente como una capa interpretativa del autor, no como hallazgos de la revisión.",

    continuum: {
      title: "El continuo de la investigación de implementación",
      citation: { label: "Peters, D.H., Tran, N.T., & Adam, T. (2013). Implementation Research in Health: A Practical Guide, capítulo 3, figura 3 (\"The continuum of implementation research\").", url: "https://apps.who.int/iris/handle/10665/91758" },
      text: "Una crítica frecuente a la investigación de implementación es que carece de una definición precisa como campo de estudio — en parte porque es aplicable en dominios muy distintos, y en parte porque, según el objeto de estudio, resulta \"pesada\" o \"ligera\" en implementación en grados muy diferentes. Peters, Tran y Adam proponen pensarla como un continuo: las preguntas de investigación se vuelven más intensivas en implementación a medida que la innovación avanza de la prueba de concepto a la información para la escala.",
      stages: [
        { name: "Prueba de concepto", question: "¿Es seguro y funciona?", implementation: "No relevante", context: "Controlado o no relacionado con implementación", examples: "Ciencia básica; ensayos clínicos fase I y II" },
        { name: "Susceptible de implementación", question: "¿Puede funcionar en el mundo real?", implementation: "Relevante, pero no considerada", context: "Población altamente seleccionada, controlada", examples: "Estudios de eficacia; ensayo clínico aleatorizado fase III" },
        { name: "Prueba de implementación", question: "¿Cómo funciona en entornos reales?", implementation: "Relevante, pero con efectos reducidos", context: "Entorno real, intervención parcialmente controlada", examples: "Ensayos pragmáticos; estudios cuasiexperimentales" },
        { name: "Implementación estudiada como factor", question: "¿Qué papel juega la implementación en el efecto observado?", implementation: "Estudiada como factor contribuyente", context: "Entorno y población reales", examples: "Estudios observacionales que tratan la implementación como variable secundaria" },
        { name: "Informando la escala", question: "¿Cómo cambian las partes del programa, y por qué?", implementation: "Foco primario", context: "Entorno y población reales, integración al sistema de salud", examples: "Estudios mixtos y cuasiexperimentales sobre adaptación, aprendizaje y escalamiento" },
      ],
    },

    outcomes: {
      title: "Resultados de implementación (Proctor et al., 2011)",
      citation: { label: "Proctor, E., Silmere, H., Raghavan, R., Hovmand, P., Aarons, G., Bunger, A., Griffey, R., & Hensley, M. (2011). Outcomes for implementation research: Conceptual distinctions, measurement challenges, and research agenda. Administration and Policy in Mental Health and Mental Health Services Research, 38, 65–76.", url: "https://pubmed.ncbi.nlm.nih.gov/20957426/" },
      text: "La revisión cita este marco (referencia [9] del documento) al señalar, en sus lagunas de evidencia, que ningún estudio aplicó de manera sistemática una taxonomía de resultados de implementación a los mecanismos intersectoriales colombianos existentes, pese a que ese marco conceptual está disponible en la literatura metodológica. Proctor y colaboradores proponen ocho resultados de implementación, organizados en tres niveles.",
      levelsSourceNote: "Traducción propia del autor de los términos de Proctor et al. (2011); los nombres en inglés se conservan en la figura original más abajo.",
      levels: [
        { name: "Resultados de la implementación", items: ["Aceptabilidad", "Adopción", "Adecuación (o Idoneidad)", "Costos", "Factibilidad", "Fidelidad", "Penetración", "Sostenibilidad"] },
        { name: "Resultados del servicio", items: ["Eficiencia", "Seguridad", "Efectividad", "Equidad", "Atención centrada en el paciente", "Oportunidad (o Puntualidad)"], note: "Estándares de atención del IOM (Institute of Medicine)." },
        { name: "Resultados del cliente", items: ["Satisfacción", "Funcionalidad", "Sintomatología"] },
      ],
      imageSourceNote: "El diagrama de este marco se reprodujo, en la fuente consultada para esta síntesis, a partir de la figura publicada en Brooks et al. (2012) — ver el marco de acceso, más abajo.",
      coverageNote: "La guía práctica de la OMS (Peters, Tran & Adam, 2013) adapta esta taxonomía para programas y políticas y sustituye \"penetración\" por \"cobertura\" (coverage): el grado en que la población elegible para beneficiarse de una intervención efectivamente la recibe — término que la propia guía asocia explícitamente con \"alcance\" (reach) y \"acceso\" (access). Es el puente conceptual directo entre los resultados de implementación y el marco de acceso de Frost & Reich que cierra esta sección.",
    },

    theories: {
      title: "Teorías sobre por qué una intervención se adopta o no",
      citation: { label: "Peters, D.H., Tran, N.T., & Adam, T. (2013). Implementation Research in Health: A Practical Guide, capítulo 5, recuadro 10 (\"Implementation theory\").", url: "https://apps.who.int/iris/handle/10665/91758" },
      intro: "La guía de la OMS reúne tres teorías de uso frecuente en investigación de implementación para explicar el comportamiento individual o grupal frente a la implementación.",
      items: [
        {
          name: "RE-AIM", full: "Reach, Efficacy, Adoption, Implementation, Maintenance",
          citation: { label: "Glasgow, R.E., et al. (2009), citado en Peters, Tran & Adam (2013).", url: null },
          text: "Marco de uso frecuente en intervenciones de promoción de la salud; ofrece un enfoque práctico para evaluar los efectos de una intervención a través de cambios en individuos, organizaciones y comunidades: alcance (reach), eficacia, adopción, implementación y mantenimiento.",
        },
        {
          name: "Difusión de innovaciones", full: "Diffusion of Innovations Theory",
          citation: { label: "Rogers, E.M. (2003), citado en Peters, Tran & Adam (2013).", url: null },
          text: "Explica cómo se propagan las innovaciones, destacando los atributos percibidos de la innovación (ventaja relativa, compatibilidad con enfoques existentes, capacidad de observar resultados, capacidad de probarla y su complejidad), la disposición al cambio del adoptante, el sistema social, los procesos individuales de adopción y el sistema de difusión.",
        },
        {
          name: "CFIR", full: "Consolidated Framework for Implementation Research",
          citation: { label: "Damschroder, L.J., et al. (2009), citado en Peters, Tran & Adam (2013).", url: null },
          text: "Desarrollado para consolidar las distintas teorías y términos usados en el campo. Comprende cinco dominios: (1) características de la intervención; (2) contexto externo; (3) contexto interno; (4) características de los individuos involucrados; y (5) el proceso de implementación.",
          domains: ["Características de la intervención", "Contexto externo", "Contexto interno", "Características de los individuos involucrados", "Proceso de implementación"],
        },
      ],
    },

    determinants: {
      title: "Determinantes concretos de la práctica (checklist TICD)",
      citation: { label: "Flottorp, S.A., Oxman, A.D., Krause, J., Musila, N.R., Wensing, M., Godycki-Cwirko, M., Baker, R., & Eccles, M.P. (2013). A checklist for identifying determinants of practice: A systematic review and synthesis of frameworks and taxonomies of factors that prevent or enable improvements in healthcare professional practice. Implementation Science, 8:35.", url: "https://doi.org/10.1186/1748-5908-8-35" },
      text: "A partir de una revisión sistemática y una síntesis de 12 listas de verificación existentes, Flottorp y colaboradores desarrollaron el checklist TICD (\"Tailored Implementation for Chronic Diseases\"): 57 determinantes potenciales de la práctica agrupados en siete dominios. Es una herramienta genérica, pensada tanto para investigadores de implementación como para quienes diseñan intervenciones — y es la base que esta app usa, en la sección \"Dinámica de sistemas\", para agrupar las barreras de acceso intersectorial identificadas en los ejes de esta revisión.",
      domains: [
        { name: "Factores de la guía/intervención", note: "Claridad, evidencia que la respalda, facilidad de uso." },
        { name: "Factores individuales del profesional de salud", note: "Conocimiento, actitudes, motivación." },
        { name: "Factores del paciente/usuario", note: "Conocimiento, actitudes, comportamiento." },
        { name: "Interacciones profesionales", note: "Cultura de colaboración entre disciplinas y niveles." },
        { name: "Incentivos y recursos", note: "Financiamiento, personal, tiempo, infraestructura." },
        { name: "Capacidad de cambio organizacional", note: "Liderazgo, cultura institucional, gestión del cambio." },
        { name: "Factores sociales, políticos y legales", note: "Normativa, prioridad política, contexto social." },
      ],
    },

    access: {
      title: "Marco de acceso de Frost & Reich (2008)",
      citation: { label: "Frost, L. J., & Reich, M. R. (2008). Access: How Do Good Health Technologies Get to Poor People in Poor Countries? Harvard Center for Population and Development Studies.", url: null },
      citationVerificationNote: "El nombre del archivo de imagen original solo indicaba \"Reich, 2008\", sin coautoría ni datos completos. La cita se verificó y completó a partir de la referencia [8] de Brooks, A., Smith, T. A., de Savigny, D., & Lengeler, C. (2012), Implementing new health interventions in developing countries: why do we lose a decade or more?, BMC Public Health, 12:683 — artículo que reproduce la figura de Frost & Reich bajo licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0.",
      secondarySourceCitation: { label: "Brooks, A., Smith, T. A., de Savigny, D., & Lengeler, C. (2012). Implementing new health interventions in developing countries: why do we lose a decade or more? BMC Public Health, 12:683.", url: "https://doi.org/10.1186/1471-2458-12-683" },
      text: "Frost y Reich analizaron el acceso a seis tecnologías de salud en países en desarrollo y propusieron que el acceso depende de una arquitectura coordinadora (architecture) que articula tres factores: disponibilidad (availability), asequibilidad (affordability) y adopción (adoption). Aunque este marco se desarrolló para tecnologías sanitarias específicas (vacunas, pruebas diagnósticas, anticonceptivos), su estructura —una instancia coordinadora que articula distintos factores de acceso— es conceptualmente análoga a lo que esta revisión documenta para el acceso intersectorial: la Comisión Intersectorial de Salud Pública como \"arquitectura\", y los mecanismos operativos (rutas, presupuestos, participación) como los factores que esa arquitectura debe coordinar. Es, además, el mismo punto de llegada que la nota sobre \"cobertura\" del marco de resultados de implementación: acceso, alcance y cobertura son, en la literatura de implementación, tres caras del mismo resultado.",
      factors: [
        { name: "Arquitectura", items: ["Estructuras organizativas y relaciones establecidas para coordinar la disponibilidad, la asequibilidad y la adopción."] },
        { name: "Disponibilidad", items: ["Manufactura", "Proyección de demanda", "Adquisición", "Distribución", "Entrega"] },
        { name: "Asequibilidad", items: ["Asequibilidad gubernamental", "Asequibilidad de agencias no gubernamentales", "Asequibilidad para el usuario final"] },
        { name: "Adopción", items: ["Adopción global", "Adopción nacional", "Adopción por el proveedor", "Adopción y uso apropiado por el usuario final (aceptabilidad)"] },
      ],
      appliedCase: {
        title: "Caso aplicado: acceso estratégico a medicamentos en Colombia",
        intro: "Herramienta interactiva propia del autor (no un marco académico externo) que operacionaliza disponibilidad, asequibilidad y adopción en cuatro etapas operativas, para dos mercados —Institucional (general y especializado) y Retail (OTC y ético/Rx)— y seis equipos de una organización farmacéutica. Se incluye aquí porque hace tangible, con un caso real del sector salud colombiano, lo que el marco de Frost & Reich describe en abstracto.",
        stages: [
          { name: "Priorización", desc: "Identificar y priorizar instituciones o canales (hospitales, centros de referencia, cadenas, farmacias) según pertinencia clínica, volumen y relación contractual — la primera decisión de disponibilidad: dónde enfocar el esfuerzo de acceso." },
          { name: "Codificación", desc: "Formalizar el registro sanitario (INVIMA) y la homologación administrativa del medicamento (CUM/IUM/CUPS o EAN/UPC), el precio y las condiciones de pago — habilita su circulación y es donde se juega buena parte de la asequibilidad." },
          { name: "Prescripción", desc: "Lograr la inclusión en guías, comités o rutas de decisión (comité de farmacia, comité de tumores, recomendación en mostrador) y habilitar la prescripción efectiva, incluyendo mecanismos especiales cuando el uso o el registro lo requieren — el núcleo de la adopción." },
          { name: "Continuidad", desc: "Sostener la disponibilidad y la adherencia en el tiempo, evitando interrupciones por desabastecimiento, cartera o discontinuidad entre el manejo hospitalario y el ambulatorio — el mismo problema de sostenibilidad que documenta el eje B de esta revisión para la coordinación intersectorial." },
        ],
        mechanisms: [
          { name: "Vital No Disponible (VNP)", desc: "Mecanismo administrado por INVIMA que permite el ingreso y uso de un medicamento sin registro sanitario vigente en Colombia cuando constituye la única alternativa terapéutica disponible para una condición que pone en riesgo la vida." },
          { name: "Giro Directo", desc: "Mecanismo de ADRES que gira los recursos directamente a la IPS o al prestador, sin pasar por la EPS, para reducir los tiempos de pago y la cartera que puede afectar la disponibilidad de tratamientos de alto costo." },
          { name: "UNIRS (Uso No Incluido en Registro Sanitario)", desc: "Mecanismo del Ministerio de Salud e INVIMA que permite prescribir un medicamento ya registrado en una indicación, dosis, vía o población distinta a la aprobada, cuando existe evidencia de eficacia y seguridad." },
        ],
        link: { label: "Abrir la herramienta interactiva completa (mapa de ruta por mercado, segmento y equipo, con roles RACI)", href: "acceso-estrategico-medicamentos.html" },
      },
    },
  },

  // ------------------------------------------------------------------
  // Mapa mental interactivo — conecta las seis piezas de irFrameworks
  // alrededor de un nodo central. Solo enlaza contenido ya presentado
  // en "Marcos de referencia"; no añade ninguna afirmación nueva.
  // ------------------------------------------------------------------
  mindMap: {
    hub: { id: "hub", label: "Investigación de implementación aplicada al acceso intersectorial" },
    nodes: [
      { id: "continuum", label: "Continuo de la IR", detail: "Peters, Tran & Adam (2013) — sitúa una pregunta de investigación entre \"prueba de concepto\" e \"informar la escala\".", jump: { sectionId: "marcos", anchorId: "marcos-continuo" } },
      { id: "outcomes", label: "Resultados de implementación", detail: "Proctor et al. (2011) — ocho resultados para evaluar si una implementación funcionó: aceptabilidad, adopción, pertinencia, costos, factibilidad, fidelidad, penetración/cobertura, sostenibilidad.", jump: { sectionId: "marcos", anchorId: "marcos-resultados" } },
      { id: "cfir", label: "CFIR", detail: "Damschroder et al. (2009) — cinco dominios que consolidan las teorías de implementación: intervención, contexto externo, contexto interno, individuos, proceso.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "reaim", label: "RE-AIM", detail: "Glasgow et al. (2009) — alcance, eficacia, adopción, implementación y mantenimiento.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "diffusion", label: "Difusión de innovaciones", detail: "Rogers (2003) — por qué y cómo se propaga (o no) una innovación entre adoptantes.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "ticd", label: "Determinantes TICD", detail: "Flottorp et al. (2013) — 57 determinantes de la práctica en 7 dominios; base del diagrama de dinámica de sistemas de esta app.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "access", label: "Marco de acceso", detail: "Frost & Reich (2008) — arquitectura, disponibilidad, asequibilidad y adopción como condiciones del acceso.", jump: { sectionId: "marcos", anchorId: "marcos-acceso" } },
    ],
  },

  // ------------------------------------------------------------------
  // Dinámica de sistemas — hipótesis causales del autor sobre por qué
  // persiste la brecha de acceso intersectorial. Diagramación siguiendo
  // Homer & Hirsch (2006); nodos y bucle de refuerzo (R1) construidos a
  // partir de los ejes A, B y D ya documentados en "Resultados" (ver los
  // estudios citados en cada nodo); el bucle de balance (B1) se apoya en
  // el checklist de determinantes TICD (Flottorp et al., 2013). No es un
  // modelo estadístico ajustado ni un hallazgo de los 15 estudios
  // incluidos — es una síntesis interpretativa explícita del autor.
  // ------------------------------------------------------------------
  causalLoop: {
    citation: "Diagramación siguiendo a Homer, J. B., & Hirsch, G. B. (2006). System dynamics modeling for public health. American Journal of Public Health, 96(3), 452–458. Nodos construidos a partir de los ejes A, B y D de esta misma revisión (ver estudios citados en cada nodo) y del checklist de determinantes TICD (Flottorp et al., 2013) — no de un modelo estadístico ajustado.",
    nodes: [
      { id: 1, label: "Débil rectoría intersectorial", studies: [2, 3, 4], confidence: "verificado" },
      { id: 2, label: "Fragmentación institucional entre sectores", studies: [2, 3, 4], confidence: "nota-autor" },
      { id: 3, label: "Déficit de coordinación operativa en el terreno", studies: [2, 3, 4], confidence: "verificado" },
      { id: 4, label: "Resultados de implementación no medidos", studies: [], confidence: "nota-autor" },
      { id: 5, label: "Brecha de acceso y bienestar persistente", studies: [], confidence: "nota-autor" },
    ],
    edges: [
      { from: 1, to: 2, polarity: "+" },
      { from: 2, to: 3, polarity: "+" },
      { from: 3, to: 4, polarity: "+" },
      { from: 4, to: 5, polarity: "+" },
      { from: 5, to: 1, polarity: "+" },
    ],
    loops: [
      {
        id: "R1", title: "R1 · el vacío de rectoría se refuerza a sí mismo",
        text: "Una rectoría intersectorial débil (eje A) favorece la fragmentación institucional entre sectores; ambas producen un déficit de coordinación operativa en el terreno —rutas, protocolos e intercambio de información que no llegan a funcionar (ejes A y D)—. Sin coordinación operativa medible, ningún actor aplica un marco de resultados de implementación como el de Proctor et al. (laguna de evidencia documentada en esta misma revisión), de modo que la brecha de acceso y bienestar persiste sin que se explique sistemáticamente por qué. Una brecha persistente y no explicada reduce, a su vez, el incentivo político para fortalecer la rectoría intersectorial — cerrando el ciclo de refuerzo.",
        relatedInitiatives: ["Eje A", "Eje D", "Laguna de evidencia: taxonomía de Proctor no aplicada"],
      },
      {
        id: "B1", title: "B1 · mecanismos operativos concretos, con demora institucional",
        text: "El eje B de esta revisión documenta que la coordinación intersectorial sí funciona cuando se traduce en mecanismos operativos concretos —rutas de atención activas, protocolos de referencia, presupuestos y metas compartidas— articulados con participación comunitaria real. Un déficit de coordinación sostenido y documentado activa, con demora institucional, la decisión de construir esos mecanismos; una vez implementados y sostenidos, reducen directamente el déficit, actuando como bucle de balance frente al refuerzo de R1.",
        relatedInitiatives: ["Eje B", "Checklist TICD: incentivos y recursos", "Checklist TICD: capacidad de cambio organizacional"],
      },
    ],
    externalNode: { label: "Mecanismos operativos concretos", detail: "Rutas de atención activas, protocolos de referencia, presupuestos y metas compartidas, articulados con participación comunitaria (eje B)." },
  },

  // ------------------------------------------------------------------
  // Autoevaluación de competencias en investigación de implementación —
  // los 6 focos y 16 competencias son reales, del "IR Toolkit" del
  // TDR/OMS (adphealth.org/irtoolkit/self-assessment-tool/), traducidos
  // fielmente por el autor. La escala de 4 niveles usada en esta app es
  // una adaptación propia para esta interfaz — no una reproducción de
  // las opciones exactas del formulario original, que no se pudieron
  // verificar en su totalidad a partir de la copia guardada de la
  // herramienta.
  // ------------------------------------------------------------------
  irSelfAssessment: {
    title: "Autoevaluación de competencias en investigación de implementación",
    intro: "Herramienta de autoevaluación adaptada del \"IR Toolkit\" del Programa Especial de Investigaciones y Enseñanzas sobre Enfermedades Tropicales (TDR) y la Alianza para la Investigación en Políticas y Sistemas de Salud, ambos de la OMS. Los 6 focos y las 16 competencias centrales son los del marco original; la escala de 4 niveles usada aquí para calificarlas es una adaptación propia del autor para esta interfaz interactiva, no una reproducción literal del formulario original. Tus respuestas se guardan solo en este navegador (localStorage) — nunca se envían a ningún servidor.",
    sourceCitation: { label: "IR Toolkit. Implementation Research Competency: Self-assessment tool. TDR/OMS y Alliance for Health Policy and Systems Research.", url: "https://adphealth.org/irtoolkit/self-assessment-tool/" },
    scale: [
      { value: 0, label: "Sin conocimiento" },
      { value: 1, label: "Conocimiento limitado" },
      { value: 2, label: "Con experiencia práctica" },
      { value: 3, label: "Puedo liderar esto" },
    ],
    focusAreas: [
      { id: "fa1", name: "Trabajar con otros actores", competences: [
        { id: "c1", text: "Identificar los actores relevantes para planear y conducir investigación de implementación (e implementar intervenciones de salud con respaldo de evidencia)." },
        { id: "c2", text: "Involucrar a los actores relevantes para planear y conducir investigación de implementación." },
      ]},
      { id: "fa2", name: "Reunir los recursos necesarios", competences: [
        { id: "c3", text: "Construir un equipo de investigación de implementación para diseñar, planear y conducir un proyecto de forma conjunta." },
        { id: "c4", text: "Movilizar y aprovechar los recursos necesarios para conducir investigación de implementación." },
      ]},
      { id: "fa3", name: "El proceso de indagación científica de la IR", competences: [
        { id: "c5", text: "Formular preguntas apropiadas de investigación de implementación." },
        { id: "c6", text: "Determinar las medidas o indicadores apropiados para conducir investigación de implementación." },
        { id: "c7", text: "Determinar los diseños y métodos de estudio aplicables para conducir investigación de implementación." },
        { id: "c8", text: "Conducir investigación de implementación de manera robusta y rigurosa." },
      ]},
      { id: "fa4", name: "Estrategias y pasos específicos de implementación", competences: [
        { id: "c9", text: "Encontrar y sintetizar evidencia que respalde la implementación de una o varias intervenciones." },
        { id: "c10", text: "Analizar los facilitadores y las barreras para la implementación de intervenciones." },
        { id: "c11", text: "Desarrollar estrategias de implementación para abordar las barreras a la implementación de investigación e intervenciones con respaldo de evidencia." },
        { id: "c12", text: "Analizar en profundidad y ajustar las estrategias de implementación." },
      ]},
      { id: "fa5", name: "Considerar el contexto y la ética", competences: [
        { id: "c13", text: "Analizar los contextos (sistemas de salud, organizaciones o socios implementadores, entornos comunitarios) que afectan la implementación de intervenciones con respaldo de evidencia." },
        { id: "c14", text: "Aplicar principios éticos al planear y conducir investigación de implementación." },
      ]},
      { id: "fa6", name: "Comunicación y abogacía", competences: [
        { id: "c15", text: "Usar la información de la investigación de implementación de manera efectiva." },
        { id: "c16", text: "Comunicar y abogar de manera efectiva a lo largo de todo el proceso de investigación de implementación." },
      ]},
    ],
  },

  // ------------------------------------------------------------------
  // Discusión — texto real del documento, sección 4
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  // Discusión — texto real del documento, sección 4
  // ------------------------------------------------------------------
  discussionText: [
    "Los hallazgos de esta revisión convergen con el marco conceptual de los determinantes sociales de la salud y de Salud en Todas las Políticas que sustenta la política colombiana de intersectorialidad. La OPS distingue distintos niveles de intensidad de la colaboración intersectorial (información, cooperación, coordinación y acción conjunta con presupuestos y metas compartidas) y recomienda el uso de comités interministeriales, presupuestos y contabilidad integrados, análisis de impacto en salud y mecanismos de rendición de cuentas.",
    "Esta revisión también documenta las limitaciones técnicas de acceso automatizado que condicionaron su ejecución, en cumplimiento del principio de transparencia metodológica adoptado desde el protocolo. Google Scholar y SciELO bloquean el acceso automatizado mediante robots.txt, Cochrane Library rechazó las solicitudes automatizadas con un error de control anti-bot, y LILACS/BVS fue excluida de manera deliberada y permanente de cualquier ejecución booleana automatizada por el riesgo documentado de bloqueo temporal de dirección IP frente a patrones de consulta automatizados. En consecuencia, las búsquedas en estas cuatro fuentes se ejecutaron manualmente, lo que introduce un grado de dependencia del investigador que debe tenerse en cuenta al valorar la reproducibilidad de esta revisión.",
  ],

  citationIntegrityCase: {
    title: "Un hallazgo de integridad bibliográfica, documentado dentro de la propia revisión",
    text: "Al preparar el material conceptual de referencia empleado para contextualizar esta revisión, se detectó que una cita atribuida a un informe anual de país 2024 de la OPS sobre Colombia remitía, en realidad, al identificador PMID 20957426, que corresponde a un artículo metodológico completamente distinto de Proctor y colaboradores sobre resultados de implementación — el mismo marco conceptual usado más arriba en esta síntesis. La referencia se verificó y se corrigió antes de su uso en el documento, y el artículo de Proctor y colaboradores se conserva únicamente como fuente metodológica sobre evaluación de la implementación, sin atribuírsele contenido sobre Colombia que no contiene.",
    correctedReferences: [
      { label: "Organización Panamericana de la Salud. (2025). Colombia, informe anual de país 2024. OPS.", url: "https://www.paho.org/es/publicaciones/colombia-informe-anual-pais-2024" },
      { label: "Proctor, E., Silmere, H., Raghavan, R., Hovmand, P., Aarons, G., Bunger, A., Griffey, R., & Hensley, M. (2011). Outcomes for implementation research: Conceptual distinctions, measurement challenges, and research agenda. Administration and Policy in Mental Health and Mental Health Services Research, 38, 65–76.", url: "https://pubmed.ncbi.nlm.nih.gov/20957426/" },
    ],
    closing: "Este episodio ilustra, en la práctica, la importancia de la verificación bibliográfica sistemática establecida como regla fija para toda esta revisión, y la razón por la cual cada dato aquí presentado remite a una fuente verificable o se marca explícitamente como no verificado.",
  },

  // ------------------------------------------------------------------
  // Recomendaciones — síntesis propia del autor, ancladas en la
  // discusión y en las lagunas de evidencia identificadas.
  // ------------------------------------------------------------------
  recommendations: [
    {
      title: "Medir la implementación de los mecanismos intersectoriales existentes, no solo su diseño normativo",
      leverage: "Responde directamente a la laguna de evidencia más citada: ningún estudio aplicó de manera sistemática un marco de resultados de implementación a un mecanismo intersectorial colombiano existente.",
      text: "Colombia ya cuenta con el marco conceptual necesario (Proctor et al., 2011, ya disponible en la literatura metodológica) para evaluar aceptabilidad, adopción, factibilidad, penetración y sostenibilidad de la Comisión Intersectorial de Salud Pública y de las redes territoriales. Falta aplicarlo, no diseñarlo.",
      owner: "Ministerio de Salud y Protección Social / academia",
      nextStep: "Encargar una evaluación de implementación de la Comisión Intersectorial de Salud Pública usando las ocho dimensiones de Proctor et al. como marco explícito.",
      outcomes: [
        { name: "Factibilidad", level: "alta", note: "El marco conceptual y la institución a evaluar ya existen; falta el encargo de la evaluación, no su diseño." },
        { name: "Evidencia disponible", level: "baja", note: "Esta es, precisamente, la laguna de evidencia más citada en la revisión: no existe ningún estudio de este tipo todavía." },
        { name: "Transferibilidad", level: "alta", note: "Los cuatro estudios comparativos de otros sectores sugieren que el mismo ejercicio de evaluación podría transferirse a comisiones intersectoriales de otros sectores." },
      ]
    },
    {
      title: "Distinguir explícitamente coordinación declarativa de coordinación operativa en el diseño de nuevos mecanismos",
      leverage: "Responde a la tensión central identificada en la discusión: la arquitectura normativa colombiana no garantiza, por sí sola, coordinación operativa efectiva.",
      text: "Los tres estudios cualitativos de salud mental y control cardiovascular documentan de forma consistente que la existencia de políticas y comisiones formales no se traduce automáticamente en rutas de atención, protocolos de referencia o intercambio de información funcionales en el terreno. Cualquier mecanismo intersectorial nuevo debería especificar desde su diseño estos componentes operativos, no solo su instancia de gobernanza.",
      owner: "Comisión Intersectorial de Salud Pública / entes territoriales",
      nextStep: "Incorporar, en el diseño de cada acuerdo intersectorial nuevo, indicadores de funcionamiento operativo (rutas activas, tiempos de respuesta, intercambio de información) además de indicadores de existencia normativa.",
      outcomes: [
        { name: "Factibilidad", level: "alta", note: "No requiere nueva normativa, solo un cambio en qué se mide al suscribir un nuevo acuerdo intersectorial." },
        { name: "Evidencia disponible", level: "media", note: "Tres estudios cualitativos documentan el problema con claridad, pero no evalúan si esta solución específica lo resuelve." },
        { name: "Transferibilidad", level: "alta", note: "Aplica igual a los mecanismos comparativos de otros sectores identificados en la revisión." },
      ]
    },
    {
      title: "Completar la verificación del registro que aún no se ha recuperado",
      leverage: "Es la única laguna de esta revisión que depende exclusivamente de trabajo bibliográfico adicional, no de nueva evidencia primaria — y ya se resolvió parcialmente.",
      text: "De los dos registros identificados por su cita en Google Scholar que no pudieron recuperarse a texto completo durante la publicación inicial de esta revisión (16 de septiembre de 2026), la tesis de maestría de la Universidad Externado de Colombia sobre la Comisión Intersectorial de Participación (2012–2016) fue localizada y verificada por el autor al día siguiente y se incorporó como estudio incluido #15. Queda pendiente únicamente el documento sobre el Pacto Intersectorial por la Madera Legal (Fedemaderas, 2021).",
      owner: "Autor de la revisión / bibliotecas institucionales",
      nextStep: "Buscar el documento de Fedemaderas directamente en su repositorio institucional o solicitarlo por contacto directo con la entidad, en una actualización futura de esta revisión.",
      outcomes: [
        { name: "Factibilidad", level: "alta", note: "Es una tarea de búsqueda bibliográfica acotada, no de investigación primaria nueva — y el mismo tipo de búsqueda ya funcionó para el otro registro." },
        { name: "Evidencia disponible", level: "media", note: "El documento fue identificado y parcialmente descrito; falta únicamente la verificación a texto completo." },
        { name: "Transferibilidad", level: "baja", note: "Es una recomendación específica de mantenimiento de esta revisión, no generalizable a otros mecanismos." },
      ]
    },
  ],

  // ------------------------------------------------------------------
  // Lagunas de evidencia — sección 6 del documento, texto real
  // ------------------------------------------------------------------
  gaps: [
    { segments: [
      { text: "No se identificaron revisiones sistemáticas ni metaanálisis clásicos que evalúen de manera específica la efectividad de mecanismos de acceso intersectorial dentro del sector salud colombiano; la única evidencia de tipo secundario disponible es una revisión de alcance de ámbito regional, no específica de Colombia." },
    ]},
    { segments: [
      { text: "No se identificaron estudios cuantitativos o comparativos que midan, con un diseño que permita alguna inferencia causal, el efecto de arreglos específicos de gobernanza intersectorial sobre desenlaces de acceso a servicios de salud en Colombia; la evidencia disponible es mayoritariamente cualitativa y descriptiva." },
    ]},
    { segments: [
      { text: "No se identificaron estudios que apliquen de manera sistemática marcos de evaluación de resultados de implementación (como la taxonomía de Proctor y colaboradores: aceptabilidad, adopción, pertinencia, factibilidad, fidelidad, costo, penetración y sostenibilidad) a los mecanismos intersectoriales colombianos existentes, pese a que ese marco conceptual está disponible en la literatura metodológica de referencia — ver " },
      { text: "\"Resultados de implementación (Proctor et al., 2011)\"", jump: { sectionId: "marcos", anchorId: "marcos-resultados" } },
      { text: " en esta síntesis." },
    ]},
    { segments: [
      { text: "La literatura académica y gris no empírica (tesis de posgrado y documentos oficiales de política) predomina sobre la evidencia revisada por pares dentro del conjunto de estudios comparativos de sectores distintos al de la salud, lo que limita la evaluabilidad de sus hallazgos con instrumentos EQUATOR Network." },
    ]},
    { segments: [
      { text: "Un registro identificado por su cita en Google Scholar (el Pacto Intersectorial por la Madera Legal de Fedemaderas, 2021) permanece sin verificación bibliográfica completa; se recomienda su búsqueda directa en el repositorio institucional correspondiente en una actualización futura de esta revisión. Un segundo registro con el mismo problema (tesis de maestría de la Universidad Externado de Colombia sobre la Comisión Intersectorial de Participación, 2012–2016) se localizó y verificó el 17 de septiembre de 2026, un día después de la publicación inicial, y se incorporó como estudio incluido #15." },
    ]},
    { segments: [
      { text: "No se identificó evidencia específica sobre la interacción entre los mecanismos de acceso intersectorial y los actores del aseguramiento privado y mixto (Entidades Promotoras de Salud) ni con otros actores de acceso y valor en el sistema colombiano, una laguna directamente relevante para la gestión de acceso en el sector salud." },
    ]},
  ],

  // ------------------------------------------------------------------
  // Conclusión — sección 5 del documento, texto real
  // ------------------------------------------------------------------
  conclusionText: "El acceso intersectorial es, ante todo, un mecanismo de gobernanza para enfrentar problemas de acceso y de bienestar cuya causalidad excede la capacidad de un solo sector. La evidencia identificada en esta revisión (quince estudios y documentos, de calidad y rigor metodológico heterogéneos, que combinan estudios cualitativos, un estudio de caso descriptivo multipaís, evidencia comparativa de sectores distintos al de la salud y una revisión de alcance regional) converge en que su eficacia depende de transformar la colaboración declarativa en arreglos institucionales verificables: instancias formales de gobernanza con roles definidos, presupuestos y metas compartidas, participación comunitaria con capacidad real de incidencia, rutas de coordinación operativa entre sectores y evaluación de la implementación. Colombia dispone de una base normativa e institucional relevante para sostener estos mecanismos (la Comisión Intersectorial de Salud Pública, el Plan Decenal de Salud Pública 2022-2031 y las redes integradas e integrales territoriales de salud), pero la evidencia primaria identificada en esta revisión documenta de manera consistente que esa arquitectura formal no siempre se traduce, en el terreno, en una coordinación operativa efectiva entre sectores. La consolidación de esa arquitectura exige fortalecer la rectoría y la capacidad territorial, asegurar financiación sostenida y evaluar de manera sistemática la implementación de los mecanismos existentes, más que ampliar su diseño normativo.",

  // ------------------------------------------------------------------
  // Metodología y fuentes — referencias completas [1]-[24] del documento
  // ------------------------------------------------------------------
  methodology: {
    note: "Este documento se elaboró a partir de una revisión sistemática exploratoria (scoping review) de autoría propia, siguiendo PRISMA 2020 y su extensión PRISMA-ScR, con una regla fija de citación: solo se cita información verificable con datos completos y reales; todo dato no verificable se marca de manera explícita como tal, nunca se omite en silencio ni se sustituye por una estimación.",
    sources: [
      { label: "Organización Panamericana de la Salud. Determinantes sociales de la salud.", url: "https://www.paho.org/es/temas/determinantes-sociales-salud" },
      { label: "Ministerio de Salud y Protección Social de Colombia. Comisión Intersectorial de Salud Pública.", url: "https://www.minsalud.gov.co/salud/epidemiologia-demografia/Paginas/comision-intersectorial-de-salud-publica.aspx" },
      { label: "Organización Panamericana de la Salud. Acción intersectorial y Salud en Todas las Políticas.", url: "https://www.paho.org/es/temas/accion-intersectorial-salud-todas-politicas" },
      { label: "Ministerio de Salud y Protección Social de Colombia. (2022). Plan Decenal de Salud Pública 2022–2031.", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/documento-plan-decenal-salud-publica-2022-2031.pdf" },
      { label: "Haddaway, N. R., Page, M. J., Pritchard, C. C., & McGuinness, L. A. (2022). PRISMA2020: An R package and Shiny app for producing PRISMA 2020-compliant flow diagrams. Campbell Systematic Reviews, 18, e1230.", url: "https://doi.org/10.1002/cl2.1230" },
      { label: "Page, M. J., McKenzie, J. E., Bossuyt, P. M., et al. (2021). The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ, 372, n71.", url: "https://doi.org/10.1136/bmj.n71" },
      { label: "Tricco, A. C., Lillie, E., Zarin, W., et al. (2018). PRISMA Extension for Scoping Reviews (PRISMA-ScR): Checklist and Explanation. Annals of Internal Medicine, 169(7), 467–473.", url: "https://doi.org/10.7326/M18-0850" },
      { label: "O'Brien, B. C., Harris, I. B., Beckman, T. J., Reed, D. A., & Cook, D. A. (2014). Standards for reporting qualitative research: a synthesis of recommendations. Academic Medicine, 89(9), 1245–1251.", url: "https://doi.org/10.1097/ACM.0000000000000388" },
      { label: "Proctor, E., Silmere, H., Raghavan, R., et al. (2011). Outcomes for implementation research: conceptual distinctions, measurement challenges, and research agenda. Administration and Policy in Mental Health and Mental Health Services Research, 38, 65–76.", url: "https://pubmed.ncbi.nlm.nih.gov/20957426/" },
      { label: "Organización Panamericana de la Salud. (2025). Colombia, informe anual de país 2024.", url: "https://www.paho.org/es/publicaciones/colombia-informe-anual-pais-2024" },
      { label: "Brooks, A., Smith, T. A., de Savigny, D., & Lengeler, C. (2012). Implementing new health interventions in developing countries: why do we lose a decade or more? BMC Public Health, 12:683.", url: "https://doi.org/10.1186/1471-2458-12-683" },
    ],
    limitations: [
      "Un único investigador realizó la identificación, la eliminación de duplicados, el cribado por título y resumen, la evaluación de elegibilidad a texto completo y la extracción de datos, sin uso de herramientas de automatización para la toma de decisiones de inclusión o exclusión.",
      "Google Scholar, SciELO, Cochrane Library y LILACS/BVS bloquean o restringen el acceso automatizado (robots.txt, control anti-bot, riesgo de bloqueo de IP); las búsquedas en estas cuatro fuentes se ejecutaron manualmente, lo que introduce un grado de dependencia del investigador en la reproducibilidad de esta revisión.",
      "Para los estudios de caso institucionales, las tesis de posgrado y los documentos de política no existe ninguna guía EQUATOR Network aplicable de manera directa; la calidad de estos documentos se valoró cualitativamente por transparencia y trazabilidad institucional, no con un instrumento validado externamente.",
      "Dos registros identificados por su cita en Google Scholar no pudieron recuperarse a texto completo ni verificarse mediante una URL primaria estable, por lo que se excluyeron del conjunto final y se documentan como hallazgo no verificado en vez de citarse con datos incompletos.",
      "Los marcos de referencia reunidos en \"El problema de implementación\" y \"Marcos de referencia\" (Peters, Tran & Adam 2013; Proctor et al. 2011; CFIR; RE-AIM; difusión de innovaciones; TICD; Frost & Reich 2008), así como el diagrama de dinámica de sistemas, son una capa interpretativa añadida por el autor de esta síntesis — no forman parte de los 15 estudios incluidos en la revisión ni fueron aplicados empíricamente a los mecanismos intersectoriales colombianos por ningún estudio identificado (ver la laguna de evidencia correspondiente).",
    ]
  },
};
