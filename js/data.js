/* ============================================================
   Datos de la aplicación — Evaluación económica e implementación
   Contenido derivado íntegramente de la revisión de alcance
   (marco PCC, PRISMA 2020) del autor: "Aportes de la evaluación
   económica al Sistema de Salud de Colombia: mitos, realidades y
   desafíos" (Bogotá, 25 de septiembre de 2026), presentada el
   mismo día en el II Simposio Internacional de Innovación y
   Desarrollo Farmacéutico (U.D.C.A.). Todas las cifras, citas y
   URLs provienen de ese documento (Revision_EE_Sistema_Salud_
   Colombia.docx) o de las fuentes primarias que él mismo cita y
   verifica — ninguna fue inventada para esta app. Reemplaza el
   contenido de la revisión anterior de esta misma app (mecanismos
   de acceso intersectorial), que queda disponible en el historial
   de git del repositorio.
   ============================================================ */

const DATA = {

  meta: {
    title: "Evaluación económica e implementación en Colombia",
    subtitle: "El sistema colombiano ya tiene el instrumento técnico —un umbral empírico propio, manuales metodológicos, una comunidad de evaluadores— pero su efecto sobre la asignación real de recursos sigue siendo parcial. Esta app trata los aportes de la evaluación económica en salud (EE) al SGSSS como lo que son: evidencia real, con mitos que no resisten los datos, realidades cuantificables y desafíos de implementación todavía abiertos. Revisión de alcance propia (marco PCC, PRISMA 2020), 2021–2026, leída de principio a fin desde la investigación de implementación.",
    author: "Fabian Dávila Ramírez",
    credentials: "MD, MBA, PhD",
    affiliation: "Universidad de Navarra · Universidad de Bogotá Jorge Tadeo Lozano (Doctorado en Gestión y Modelado de Políticas Públicas)",
    period: "Revisión completada el 25 de septiembre de 2026 · horizonte de búsqueda 2021–2026",
    framework: "Investigación de implementación · evaluación económica en salud",
    disclaimer: "Esta aplicación trata los aportes de la evaluación económica en salud (EE) al sistema de salud colombiano como un problema de implementación: el país cuenta con el instrumento técnico, pero su uso vinculante en decisiones de cobertura y precio sigue siendo parcial. La base empírica es una revisión de alcance (marco PCC, PRISMA 2020) de autoría propia; todas las cifras del proceso de selección, la tabla de estudios incluidos y las citas provienen del documento completo y de las fuentes primarias que este verifica explícitamente. La clasificación por mitos/realidades/desafíos, las estrategias de acceso, el diagrama de dinámica de sistemas, el modelo de recorrido y los marcos de referencia de implementación y acceso (Peters, Tran & Adam 2013; Proctor et al. 2011; CFIR; RE-AIM; difusión de innovaciones; TICD; Frost & Reich 2008) son una elaboración propia del autor para facilitar la lectura — no sustituyen ni alteran los hallazgos originales del documento.",
    license: {
      name: "Creative Commons Atribución 4.0 Internacional (CC BY 4.0)",
      url: "https://creativecommons.org/licenses/by/4.0/deed.es",
      text: "Este contenido puede compartirse y adaptarse libremente, incluso con fines comerciales, siempre citando al autor."
    },
    relatedWorks: [
      {
        title: "Gobernanza y Rectoría en Salud Pública en Colombia",
        text: "Revisión de alcance del mismo autor sobre gobernanza y rectoría en el sector salud colombiano (2021–2026). La misma tensión entre capacidad técnica instalada y decisión vinculante que esta revisión documenta para la evaluación económica ya aparecía, en clave más amplia, en esa revisión sobre rectoría del sistema.",
        url: "https://fadavilar.github.io/gobernanza-salud-publica-colombia/"
      },
      {
        title: "XXI Congreso Nacional de Salud 2026 — Explorador interactivo",
        text: "Síntesis del mismo autor sobre el XXI Congreso Nacional de Salud. Comparte con esta revisión el mismo marco de resultados de implementación de Proctor et al. (2011) y la misma metodología de diagramación de dinámica de sistemas (Homer & Hirsch, 2006).",
        url: "https://fadavilar.github.io/xxi-congreso-nacional-salud-2026/"
      }
    ],
  },

  citation: {
    text: "Dávila Ramírez, F. (2026). Aportes de la evaluación económica al Sistema de Salud de Colombia: mitos, realidades y desafíos. Revisión de alcance (marco PCC), 2021–2026.",
    linkLabel: "Repositorio público con la metodología completa, el código y los 17 estudios incluidos",
    url: "https://github.com/fadavilar/mecanismos-acceso-intersectorial-colombia",
  },

  intro: "Objetivo: mapear la evidencia publicada entre 2021 y 2026 sobre los aportes de la evaluación económica (EE) y la evaluación de tecnologías sanitarias (ETES) al Sistema General de Seguridad Social en Salud (SGSSS) de Colombia, distinguiendo mitos, realidades y desafíos. Materiales y métodos: revisión de alcance con marco PCC. Se consultaron PubMed/MEDLINE, SciELO, LILACS (ejecución y exportación manual por el investigador) y Google Scholar, además de literatura gris institucional (IETS, Ministerio de Salud, OPS, BID). La selección siguió PRISMA 2020 y la calidad se valoró con herramientas acordes a cada diseño. Resultados: se identificaron 639 registros en bases de datos y 4 en organizaciones; tras eliminar 59 duplicados se tamizaron 580, se buscaron 25 informes a texto completo (4 no recuperados) y se incluyeron 17 estudios (18 informes). La evidencia converge en que Colombia dispone de un umbral empírico cercano a un PIB per cápita por AVAC, de manuales metodológicos vigentes y de un volumen creciente de EE, pero su uso vinculante en cobertura y precios sigue siendo limitado. Estudios de costo de oportunidad estiman pérdidas netas de salud relevantes por financiar medicamentos de alto costo de beneficio incierto, y la actualización del plan de beneficios amplió el acceso sin generar ahorros. Persisten brechas de calidad, transparencia y judicialización. Conclusiones: la EE ha aportado métricas y capacidad institucional, pero su efecto sobre la asignación real de recursos es parcial; los desafíos son su institucionalización vinculante, la transparencia de datos y su articulación con la regulación de precios y la jurisprudencia.",

  introduction: "Este documento sintetiza una revisión de alcance de autoría propia pensando en dos tipos de lector: quien busca un resumen ordenado de qué documenta la evidencia disponible sobre los aportes de la evaluación económica al sistema de salud colombiano, y quien quiere revisar con detalle la metodología, la tabla completa de estudios incluidos y el proceso de verificación bibliográfica. Por eso el documento está organizado por tema —el problema de implementación, qué documenta la evidencia, los marcos para interpretarla, la dinámica de sistemas, las estrategias de acceso— y deja la metodología completa (PRISMA, ecuaciones de búsqueda, evaluación de calidad) para el final, como sustento técnico en vez de portal de entrada. La sección de metodología incluye, de forma deliberada y visible, la regla de citación que gobernó toda la revisión: ningún dato se cita sin poder verificarse, y cuando algo no pudo verificarse se documenta así explícitamente en vez de omitirse en silencio.",

  selectiveCategory: {
    title: "La brecha no es de evidencia, es de uso vinculante",
    text: "Colombia dispone de un instrumento técnico relevante para la evaluación económica en salud —un umbral de costo-efectividad empírico propio, manuales metodológicos vigentes del IETS y del Ministerio de Salud, una comunidad técnica consolidada—, pero la literatura reciente documenta de manera consistente que ese aporte se concentra más en la generación de métricas y capacidades que en la modificación vinculante de decisiones de cobertura, precio o compra. La ausencia de institucionalización vinculante, no la ausencia de evidencia técnica, es el obstáculo más citado."
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
    whyThisReview: "Esta revisión sobre los aportes de la evaluación económica en salud (EE) al SGSSS colombiano es, ante todo, evidencia sobre un problema de implementación: Colombia ya cuenta con la \"intervención\" — un umbral de costo-efectividad empírico, manuales metodológicos vigentes del IETS y del Ministerio de Salud, una comunidad técnica consolidada —, pero la literatura identificada documenta de forma consistente que esa capacidad técnica rara vez se traduce en decisiones vinculantes de cobertura, precio o compra. Leer esta revisión a través del lenguaje de la investigación de implementación —qué se está implementando, con qué estrategias, con qué resultados de implementación, y con qué barreras— es el propósito central de esta edición de la aplicación; el modelo de recorrido que sigue muestra ese mismo problema como una secuencia de etapas, actores y responsabilidades; la sección \"Marcos de referencia\" reúne las herramientas conceptuales para interpretarlo, y la sección \"Dinámica de sistemas\" traduce los hallazgos de esta misma revisión en hipótesis causales explícitas sobre por qué persiste la brecha."
  },

  // ------------------------------------------------------------------
  // Modelo de recorrido (journey map) del problema de implementación —
  // síntesis interpretativa propia del autor, en el mismo patrón de
  // mapa de ruta + RACI usado en el caso aplicado de "Marco de acceso"
  // (acceso-estrategico-medicamentos.html), aplicado aquí al problema
  // central de esta revisión: de la generación de evidencia económica
  // a su uso efectivo en el terreno. Actores, touchpoints y niveles
  // RACI se derivan de los mitos, realidades y desafíos y de las
  // estrategias de acceso de esta misma revisión — no son un hallazgo
  // de los estudios incluidos ni un instrumento validado externamente.
  // ------------------------------------------------------------------
  journeyModel: {
    title: "El recorrido de la evaluación económica: etapas, actores y responsabilidad",
    intro: "El mismo patrón de mapa de ruta y matriz RACI usado en el caso aplicado de acceso a medicamentos (ver \"Marco de acceso\"), aplicado aquí al problema central de esta revisión: cómo se supone que la evidencia de evaluación económica recorre el camino entre su generación y una decisión vinculante de cobertura o precio, y qué actor tiene qué grado de responsabilidad en cada etapa, según la evidencia reunida. El acceso no depende solo de la negociación comercial con EPS y aseguradores: el evaluador técnico, el regulador, el financiador y la voz del paciente (vía tutela) tienen, cada uno, un papel distinto en etapas distintas.",
    methodNote: "Síntesis interpretativa propia del autor — no un hallazgo de los estudios incluidos ni un instrumento validado externamente. Las 4 etapas siguen el recorrido real que documenta esta revisión, de la generación de evidencia a su uso en el terreno. Los actores y touchpoints combinan los mitos, realidades y desafíos de esta misma revisión con los actores reales del caso aplicado de acceso a medicamentos (ver \"Marco de acceso\"); la selección de actores se apoya además en dos guías metodológicas de mapeo de partes interesadas.",
    methodCitations: [
      { label: "World Bank Group, Disaster Risk Financing & Insurance Program. Stakeholder Mapping.", url: "https://www.worldbank.org/en/programs/disaster-risk-financing-and-insurance-program" },
      { label: "Implementation Guide Toolkit. Stakeholder Mapping Guide (2018).", url: null },
    ],
    raciDefinition: {
      title: "¿Qué es una matriz RACI?",
      text: "RACI es un acrónimo de Responsible, Accountable, Consulted, Informed (responsable, quien rinde cuentas, consultado, informado): una matriz de asignación de responsabilidades que describe el nivel de participación de cada actor en una tarea o etapa de un proceso. El PMBOK® Guide del Project Management Institute (PMI) la define como \"un tipo común de matriz de asignación de responsabilidades que usa los estados responsable, quien rinde cuentas, consultado e informado para definir la participación de los interesados en las actividades del proyecto\".",
      citation: { label: "Responsibility assignment matrix (RACI). Wikipedia, con referencia al PMBOK® Guide del Project Management Institute.", url: "https://en.wikipedia.org/wiki/Responsibility_assignment_matrix" },
    },
    raciLegend: [
      { level: "R", label: "Responsable", desc: "Ejecuta la etapa." },
      { level: "A", label: "Aprueba / rinde cuentas", desc: "Respalda o responde por el resultado de la etapa." },
      { level: "C", label: "Consultado", desc: "Su opinión se recoge antes de actuar." },
      { level: "I", label: "Informado", desc: "Se le comunica el avance, sin incidencia directa." },
    ],
    actors: [
      { key: "iets", name: "IETS (evaluador técnico / ETES)", color: "a" },
      { key: "minsalud", name: "MinSalud / CNPMDM (regulación y decisión de cobertura y precio)", color: "b" },
      { key: "financiador", name: "ADRES / EPS (financiamiento y aseguramiento)", color: "c" },
      { key: "industria", name: "Industria e investigadores (generación de evidencia local)", color: "d" },
      { key: "comunidad", name: "Jueces, pacientes y sociedad civil (tutela y participación)", color: "e" },
    ],
    stages: [
      {
        num: 1, name: "Generación de evidencia técnica",
        objetivo: "Producir evaluaciones económicas y evidencia local con rigor metodológico suficiente para informar decisiones.",
        touchpoints: ["CHEERS 2022 como estándar de reporte", "Guías metodológicas del IETS", "Manual de impacto presupuestal (IETS, 2024)", "Manual de ETES para dispositivos médicos (MinSalud-IETS, 2026)"],
        roles: {
          iets: { level: "A", desc: "Desarrolla y actualiza las guías y manuales metodológicos que rigen la generación de EE en Colombia." },
          minsalud: { level: "I", desc: "Informado del volumen y la calidad de la evidencia generada." },
          financiador: { level: "I", desc: "Informado; no interviene directamente en la generación de evidencia." },
          industria: { level: "R", desc: "Genera evidencia local de costos, utilidades y efectividad — sin datos colombianos no hay EE creíble." },
          comunidad: { level: "I", desc: "Sin rol formal documentado en esta etapa." },
        },
        riesgo: "La calidad y la transparencia siguen siendo insuficientes: las EE producidas en la región reportan la mayoría de ítems de CHEERS, pero fallan en justificar la perspectiva, describir el contexto y analizar sesgos y subgrupos, y la guía colombiana comparte con otras guías de la región problemas de heterogeneidad metodológica.",
        studies: [7, 4, 8],
      },
      {
        num: 2, name: "Evaluación técnica (ETES)",
        objetivo: "Evaluar la evidencia contra el umbral de costo-efectividad y emitir una recomendación técnica.",
        touchpoints: ["Umbral empírico ≈1 PIB per cápita (US$5.180,8 por AVAC)", "Posicionamiento terapéutico", "Guías de práctica clínica"],
        roles: {
          iets: { level: "R", desc: "Aplica el umbral de costo-efectividad y emite la recomendación técnica de posicionamiento terapéutico." },
          minsalud: { level: "C", desc: "Consultado sobre las implicaciones de política de la recomendación técnica." },
          financiador: { level: "I", desc: "Informado del resultado de la evaluación técnica." },
          industria: { level: "C", desc: "Consultada para aclarar supuestos y datos de su evaluación económica." },
          comunidad: { level: "I", desc: "Sin rol formal documentado en esta etapa." },
        },
        riesgo: "El mito de que Colombia paga entre 1 y 3 PIB per cápita por AVAC persiste en EE individuales recientes, pese a que el umbral empírico real es ≈1 PIB per cápita (0,86 según el IETS en 2021) — el mito sobrevive a la evidencia agregada.",
        studies: [1, 17],
      },
      {
        num: 3, name: "Decisión vinculante de cobertura y precio",
        objetivo: "Traducir la evaluación técnica en decisiones oficiales de cobertura, precio o compra.",
        touchpoints: ["Actualización del plan de beneficios (PBS-UPC)", "Regulación de precios por referenciación internacional (CNPMDM)", "Negociación de presupuestos máximos"],
        roles: {
          iets: { level: "C", desc: "Consultado; su recomendación informa la decisión, pero no la determina por sí sola." },
          minsalud: { level: "R", desc: "Decide la inclusión en el plan de beneficios y la regulación de precio." },
          financiador: { level: "A", desc: "Rinde cuentas por la sostenibilidad financiera de la decisión adoptada." },
          industria: { level: "I", desc: "Informada del resultado de la decisión de cobertura y precio." },
          comunidad: { level: "I", desc: "Sin rol formal documentado en esta etapa." },
        },
        riesgo: "En un análisis de 9 países el umbral rara vez es un criterio oficial y vinculante de cobertura o precio, y en Colombia la literatura que muestra su aplicación efectiva a la asignación de recursos es escasa — el mito de que la EE es un ejercicio académico sin consecuencias se sostiene aquí, en la etapa de decisión.",
        studies: [2, 13, 10, 9],
      },
      {
        num: 4, name: "Uso en el terreno",
        objetivo: "Que la decisión se traduzca en acceso efectivo y sostenible, sin desvíos que erosionen el valor generado.",
        touchpoints: ["Giro Directo (ADRES)", "MIPRES / UNIRS", "Tutela y judicialización"],
        roles: {
          iets: { level: "I", desc: "Informado del uso real de sus recomendaciones en el terreno." },
          minsalud: { level: "I", desc: "Informado del efecto de sus decisiones sobre acceso y gasto." },
          financiador: { level: "R", desc: "Ejecuta el pago y el flujo de recursos que sostiene el acceso efectivo (Giro Directo, presupuestos máximos)." },
          industria: { level: "I", desc: "Informada del desempeño de su tecnología en el terreno." },
          comunidad: { level: "R", desc: "Los jueces, mediante la tutela, y los pacientes activan vías de acceso al margen de la evaluación técnica cuando esta no responde a tiempo." },
        },
        riesgo: "La actualización del plan de beneficios amplió el uso y el acceso (sobre todo en zonas apartadas) pero no generó ahorros — el costo por usuario en medicamentos incluso creció; y el modelo de «lista negativa» combinado con la judicialización tensiona la sostenibilidad y la equidad del sistema.",
        studies: [3, 12],
      },
    ],
  },

  // ------------------------------------------------------------------
  // Materiales y métodos — PRISMA-ScR. Cada campo es texto o cifra real
  // tomada directamente del documento completo (sección 2 y 3.1).
  // ------------------------------------------------------------------
  methods: {
    design: "Revisión de alcance (scoping review) siguiendo la lógica de reporte de PRISMA 2020 y su diagrama de flujo, adaptado del paquete PRISMA2020 de Haddaway, Page, Pritchard & McGuinness (2022).",
    pccRationale: "La pregunta que orienta esta revisión (aportes de la evaluación económica al SGSSS colombiano) no compara una intervención clínica frente a un comparador para medir un desenlace individual, por lo que no admite un encuadre PICO. Se trata, en cambio, de una pregunta de política y gestión sanitaria sobre el papel, el uso y los efectos sistémicos de la evaluación económica, lo que corresponde al formato PCC (Población/actores, Concepto, Contexto) propio de las revisiones de alcance.",
    pcc: {
      population: "El SGSSS y sus tomadores de decisión: Ministerio de Salud, IETS, ADRES, Comisión Nacional de Precios de Medicamentos y Dispositivos Médicos (CNPMDM), EPS, IPS, academia y pacientes.",
      concept: "La evaluación económica en salud (análisis de costo-efectividad, costo-utilidad, costo-beneficio, impacto presupuestal, ETES y umbral de costo-efectividad) y su uso en cobertura, priorización, precios y sostenibilidad.",
      context: "Colombia, entre 2021 y 2026.",
    },
    sources: [
      { name: "PubMed/MEDLINE", note: "Consultada de forma directa el 25 de septiembre de 2026, por su cobertura de la literatura biomédica internacional sobre evaluación económica y ETES.", automated: true },
      { name: "SciELO", note: "Consultada de forma directa, por su cobertura regional de literatura en español y portugués sobre economía de la salud y política sanitaria.", automated: true },
      { name: "LILACS/BVS", note: "Ejecutada y exportada manualmente por el investigador (archivo Lilacs_(2021-2026).csv), en atención a la política de ese portal frente a consultas automatizadas.", automated: false },
      { name: "Google Scholar", note: "Consultada con el enlace proporcionado por el investigador, que incluye el filtro de artículos de revisión; se recuperaron todas las páginas de resultados.", automated: false },
      { name: "Literatura gris institucional (IETS, MinSalud, OPS, BID)", note: "Búsqueda dirigida en los sitios oficiales de cada organización; cada documento se verificó en su fuente antes de incluirlo.", automated: false },
    ],
    excludedSourcesNote: "Cochrane Library se excluyó a priori por no indexar evaluaciones económicas ni ETES desde el cierre de NHS EED. Scopus y Web of Science no se ejecutaron por requerir acceso institucional del que no se disponía.",
    searchStrings: [
      { source: "PubMed/MEDLINE", equation: "(\"Cost-Benefit Analysis\"[Mesh] OR \"Technology Assessment, Biomedical\"[Mesh] OR \"Quality-Adjusted Life Years\"[Mesh] OR \"economic evaluation*\"[tiab] OR \"cost-effectiveness\"[tiab] OR \"cost effectiveness\"[tiab] OR \"cost-utility\"[tiab] OR \"cost-benefit\"[tiab] OR \"budget impact\"[tiab] OR \"health technology assessment*\"[tiab] OR \"cost-effectiveness threshold*\"[tiab] OR \"willingness to pay\"[tiab] OR \"value-based pricing\"[tiab] OR \"evaluación económica\"[tiab] OR \"costo-efectividad\"[tiab]) AND (\"Colombia\"[Mesh] OR colombia*[tiab] OR \"IETS\"[tiab]) AND (\"Health Policy\"[Mesh] OR \"Decision Making\"[Mesh] OR \"Health Priorities\"[Mesh] OR \"Insurance, Health, Reimbursement\"[Mesh] OR \"Review\"[pt] OR \"Systematic Review\"[pt] OR polic*[tiab] OR decision*[tiab] OR reimburs*[tiab] OR coverage[tiab] OR \"benefit package*\"[tiab] OR \"priority setting\"[tiab] OR pricing[tiab] OR institutionali*[tiab] OR barrier*[tiab] OR challenge*[tiab] OR \"health system*\"[tiab] OR bibliometric*[tiab]) AND 2021:2026[dp]" },
      { source: "LILACS/BVS", equation: "(mh:\"Análisis Costo-Beneficio\" OR mh:\"Evaluación de la Tecnología Biomédica\" OR mh:\"Años de Vida Ajustados por Calidad de Vida\" OR tw:(\"evaluación económica\" OR \"evaluacion economica\" OR \"economic evaluation\" OR \"costo-efectividad\" OR \"cost-effectiveness\" OR \"costo-utilidad\" OR \"impacto presupuestal\" OR \"evaluación de tecnologías\" OR \"health technology assessment\")) AND (mh:Colombia OR tw:colombia* OR tw:IETS) AND db:(\"LILACS\"), años 2021-2026" },
      { source: "SciELO", equation: "(\"evaluación económica\" OR \"evaluacion economica\" OR \"economic evaluation\" OR \"costo-efectividad\" OR \"costo efectividad\" OR \"cost-effectiveness\" OR \"costo-utilidad\" OR \"impacto presupuestal\" OR \"evaluación de tecnologías\" OR \"health technology assessment\" OR \"umbral de costo-efectividad\" OR AVAC OR QALY) AND (Colombia OR colombian$ OR IETS); filtro años 2021-2026" },
      { source: "Google Scholar", equation: "(\"evaluación económica\" OR \"costo-efectividad\" OR \"evaluación de tecnologías en salud\" OR \"umbral de costo-efectividad\") Colombia (IETS OR \"sistema de salud\" OR \"toma de decisiones\"); 2021-2026; artículos de revisión" },
      { source: "Literatura gris institucional", equation: "IETS \"umbral de costo-efectividad\"; site:iets.org.co manual evaluación económica; site:publications.iadb.org Colombia evaluación de tecnologías / plan de beneficios; ETES Colombia institucionalización BID/OPS." },
    ],
    searchCorrectionNote: "La interfaz de Google Scholar reportó «aproximadamente 361 resultados», pero la paginación completa devolvió 375 registros efectivamente recuperados; se reporta la cifra recuperada, no la estimada por la interfaz, en cumplimiento del principio de transparencia metodológica adoptado desde el protocolo.",
    eligibility: "Se incluyeron revisiones sistemáticas, de alcance y bibliométricas, estudios econométricos o cuasiexperimentales, análisis de política, estudios cualitativos y documentales, encuestas a actores y documentos institucionales que analizaran el papel, el uso, el marco institucional, los métodos (umbral, guías, manuales), la calidad o los efectos sistémicos (costo de oportunidad, desinversión, actualización del plan de beneficios, precios, judicialización) de la evaluación económica en Colombia. Los estudios multipaís se incluyeron solo si reportaban hallazgos desagregados y sustantivos para Colombia. Se excluyeron, por decisión acordada con el investigador, las evaluaciones económicas individuales de una tecnología o programa específico, así como cartas, comentarios, protocolos y documentos fuera del periodo.",
    scopeDecision: "Cochrane Library se excluyó a priori por no indexar evaluaciones económicas ni ETES desde el cierre de NHS EED, y Scopus y Web of Science no se ejecutaron por requerir acceso institucional. La literatura gris se identificó mediante búsquedas dirigidas en sitios del IETS, el Ministerio de Salud, la OPS y el BID; esta identificación dirigida no produce un denominador comparable al de las bases bibliográficas y se reporta por separado en el diagrama PRISMA.",
    citationRule: "Solo se citan referencias verificadas con autor, año, título, revista o editorial y DOI o URL estable en alguna de las fuentes consultadas, con indicación de la base de origen. El tamizaje por título y resumen fue realizado por un revisor (documentalista asistido por IA) con reglas explícitas de exclusión y verificación manual de los casos ambiguos, sin doble revisión independiente — limitación declarada explícitamente. Durante la verificación se documentaron varias discrepancias: Google Scholar agrega al título de Espinosa (2024) el sufijo «: O. Espinosa et al.», un artefacto de los metadatos de Springer, corregido con PubMed (PMID 38995492); PubMed clasifica a Hutchinson (2022) como «Case Reports», cuando en realidad son casos de inversión (análisis económicos), no reportes de caso clínicos; y la nota técnica del BID (Gutiérrez, 2023) no muestra DOI en el documento consultado, por lo que se cita por su URL estable y su código IDB-TN-02786.",
    qualityApproach: "La calidad se valoró con la herramienta de la red EQUATOR correspondiente a cada diseño: PRISMA 2020 y AMSTAR-2 para revisiones sistemáticas, RECORD/STROBE para estudios observacionales, CHEERS 2022 para evaluaciones económicas y SRQR para estudios cualitativos o documentales. Para revisiones narrativas se usó SANRA y para documentos institucionales la lista AACODS, que no forman parte del catálogo EQUATOR y se declaran como tales. La valoración se hizo sobre texto completo cuando fue accesible y, en los demás casos, sobre resumen y metadatos verificados, lo que la convierte en una valoración preliminar que debe confirmarse con lectura completa.",
    synthesisApproach: "Dada la heterogeneidad de diseños, poblaciones y desenlaces reportados, no fue posible ni apropiado realizar una síntesis cuantitativa o un metaanálisis. Se optó por una síntesis narrativa organizada por mitos, realidades y desafíos.",
    prisma: {
      identifiedByDb: [
        { label: "PubMed/MEDLINE", n: 162 },
        { label: "LILACS/BVS", n: 57 },
        { label: "SciELO", n: 45 },
        { label: "Google Scholar", n: 375 },
      ],
      identifiedTotal: 639,
      identifiedOtherTotal: 4,
      removedBreakdown: [
        { label: "Registros idénticos (entre o dentro de fuentes)", n: 41 },
        { label: "Versiones bilingües del mismo artículo (Google Scholar)", n: 18 },
      ],
      removedTotal: 59,
      screenedTotal: 580,
      excludedReasons: [
        "Fuera de concepto (n = 223)",
        "Fuera de contexto: sin Colombia (n = 182)",
        "EE de una tecnología o programa específico (n = 144)",
        "Tipo documental no elegible (n = 6)",
      ],
      excludedTotal: 555,
      soughtTotal: 29,
      notRetrievedTotal: 4,
      notRetrievedReasons: [
        "4 informes no recuperados de bases de datos por bloqueo antibots o documentos sin acceso (incluye un artículo atribuido por Google Scholar a la Revista Científica Salud Uninorte, no recuperable a texto completo)",
      ],
      assessedTotal: 25,
      excludedAtEligibilityTotal: 7,
      excludedAtEligibilityReasons: [
        "Colombia tratada tangencialmente o no desagregada (n = 6)",
        "Sin datos originales sobre Colombia (n = 1)",
      ],
      includedByDb: [
        { label: "De bases de datos (informes)", n: 14 },
        { label: "De organizaciones / otros métodos (informes)", n: 4 },
      ],
      includedTotal: 17,
      includedReportsNote: "17 estudios descritos en 18 informes: la nota técnica del BID (2023) y el artículo de Value in Health (2026) de Gutiérrez et al. corresponden a la misma línea de investigación sobre costo de oportunidad y se presentan como un único estudio (#6) en la tabla de estudios incluidos.",
      bySourceTable: [
        { source: "PubMed/MEDLINE (automatizada)", identified: 162, included: 8, note: "154 registros excluidos por título/resumen; de los 8 buscados a texto completo, la mayoría corresponde a los estudios econométricos y de costo de oportunidad de Espinosa y Gutiérrez." },
        { source: "LILACS/BVS (ejecución manual)", identified: 57, included: 3, note: "5 duplicados y 49 excluidos por título/resumen; aportó el estudio transversal de Antioquia (Barrientos, 2022) y la síntesis rápida de ETES para enfermedades poco frecuentes (MINSAL Chile, 2024)." },
        { source: "SciELO (automatizada)", identified: 45, included: 1, note: "18 duplicados (principalmente versiones ya recuperadas en otras bases) y 26 excluidos por título/resumen; aportó el análisis comparado de judicialización (Gutiérrez Silva, 2025)." },
        { source: "Google Scholar (automatizada desde enlace del investigador, filtro \"artículos de revisión\")", identified: 375, included: 3, note: "36 duplicados (18 versiones bilingües) y 326 excluidos por título/resumen; aportó la tesis de maestría sobre asignación de recursos (Suárez Fernández, 2021) y dos artículos con metadatos verificados cruzando con PubMed." },
        { source: "Organizaciones — IETS, MinSalud, OPS, BID (búsqueda dirigida y verificación)", identified: 4, included: 4, note: "Los 4 documentos institucionales identificados se incluyeron: los manuales metodológicos del IETS (2024) y de MinSalud-IETS (2026), la nota institucional de la OPS (2023) sobre umbrales, y la nota técnica del BID (2023, parte del estudio #6)." },
      ],
    },
  },

  // ------------------------------------------------------------------
  // Estudios incluidos (n = 17) — Tabla 2 del documento. "Unidad
  // citable" de esta revisión. #6 fusiona los dos informes de la misma
  // línea de investigación de costo de oportunidad (Value in Health
  // 2026 + nota técnica BID 2023), tal como lo declara el documento
  // original ("17 estudios, 18 informes").
  // ------------------------------------------------------------------
  studies: [
    { n: 1, title: "Estimating cost-effectiveness thresholds under a managed healthcare system: experiences from Colombia", author: "Espinosa O, 2022", journal: "Health Policy and Planning 37(3):359-368", type: "Estudio econométrico con datos administrativos (efectos fijos bidireccionales, variables instrumentales)", sample: "Aseguradoras × regiones × grupos diagnósticos × años (SGSSS)", result: "Umbral de oferta: US$5.180,8 por AVAC (17 millones COP de 2019) y US$4.487,5 por AVP evitado, ≈1 PIB per cápita.", url: "https://doi.org/10.1093/heapol/czab146", database: "PubMed" },
    { n: 2, title: "Use of Cost-Effectiveness Thresholds in Healthcare Public Policy: Progress and Challenges", author: "Espinosa O, 2024", journal: "Applied Health Economics and Health Policy 22(6):797-804", type: "Análisis comparado de políticas (revisión)", sample: "9 países, incluido Colombia", result: "Pocos países adoptan el umbral como criterio oficial de financiación, cobertura o precios; donde se aplica (p. ej., Tailandia) contribuye a contener precios y a la sostenibilidad.", url: "https://doi.org/10.1007/s40258-024-00900-5", database: "Google Scholar", verification: "parcial", verificationNote: "Google Scholar agrega al título el sufijo «: O. Espinosa et al.», un artefacto de los metadatos de Springer; corregido y verificado con PubMed (PMID 38995492)." },
    { n: 3, title: "The impact of periodic updates to health benefits plan: access gains without cost savings?", author: "Espinosa O, 2025", journal: "International Journal of Health Economics and Management 25(3):317-336", type: "Cuasiexperimental (diferencias en diferencias, múltiples periodos)", sample: "Tecnologías incluidas en el PBS-UPC 2012-2019; datos administrativos nacionales", result: "La inclusión aumentó uso y acceso (sobre todo en zonas remotas) sin generar ahorros; costo por usuario estable en procedimientos y creciente en medicamentos.", url: "https://doi.org/10.1007/s10754-025-09394-7", database: "PubMed" },
    { n: 4, title: "Economic evaluation guidelines in low- and middle-income countries: a systematic review", author: "Daccache C, 2021", journal: "Int J Technol Assess Health Care 38(1):e1", type: "Revisión sistemática", sample: "13 guías oficiales de EE (incluida la colombiana)", result: "Predominio del análisis costo-utilidad; mitad recomienda perspectiva social; 7 guías obligatorias; brechas y heterogeneidad metodológica.", url: "https://doi.org/10.1017/S0266462321000659", database: "PubMed" },
    { n: 5, title: "Disinvestment and Health Spending Efficiency in Latin America and the Caribbean: A Case Study of Colombia", author: "Moreno-López C, 2026", journal: "Value in Health 29(3):383-390", type: "Microcosteo y análisis de costo de oportunidad", sample: "6 tecnologías candidatas a desinversión", result: "La TAC en cefalea sin signos de alarma genera el mayor desperdicio; su reasignación permitiría 4 controles prenatales a 9.029 mujeres adicionales (≈6,4 % de la brecha).", url: "https://doi.org/10.1016/j.jval.2025.09.3069", database: "PubMed" },
    { n: 6, title: "Assessing the Population-Health Loss From Funding High-Cost Medicines: Case Studies From Colombia and the Dominican Republic (con su informe complementario del BID)", author: "Gutiérrez C, 2026 (+ Gutiérrez C, 2023, BID)", journal: "Value in Health 29(6):1045-1052 · BID, Nota técnica IDB-TN-02786 (2023)", type: "Modelación de beneficio neto en salud / evaluación económica de costo de oportunidad", sample: "10 medicamentos de alto costo por país (Colombia y República Dominicana)", result: "Colombia: US$642 millones adicionales para 22.155 pacientes y pérdida neta ≈122.507 AVAC; el informe del BID estima que reasignar esos recursos produciría ≈88.000 años de vida saludable. Las cifras de ambos informes no son directamente comparables (métodos y periodos distintos).", url: "https://doi.org/10.1016/j.jval.2025.12.015", database: "PubMed", verification: "no-doi", verificationNote: "El informe técnico complementario del BID (IDB-TN-02786, 2023) no muestra DOI en el documento consultado; se cita por su URL estable: https://publications.iadb.org/publications/spanish/document/Cual-es-el-costo-de-oportunidad-de-financiar-medicamentos-de-alto-costo-el-caso-de-Colombia.pdf" },
    { n: 7, title: "The Quality of Economic Evaluations of Interventions to Improve Women and Child Health in Latin America: A Systematic Review", author: "Al Ghouch Y, 2025", journal: "Value in Health Regional Issues 48:101101", type: "Revisión sistemática (CHEERS 2013 y QHES)", sample: "55 evaluaciones económicas (mayoría realizadas en Colombia)", result: "La mayoría de ítems se reporta en ≥60 %; déficits en contexto, justificación de perspectiva, sesgos y subgrupos.", url: "https://doi.org/10.1016/j.vhri.2025.101101", database: "PubMed" },
    { n: 8, title: "Transparency of data on the value chain of medicines in Argentina, Brazil, and Colombia", author: "Ribeiro AA, 2022", journal: "Frontiers in Pharmacology 13:1063300", type: "Estudio descriptivo documental", sample: "3 países; 6 eslabones de la cadena de valor (incluida ETES)", result: "Colombia mantiene 5 años de exclusividad de datos; ningún país usa de forma robusta estos datos en decisiones públicas.", url: "https://doi.org/10.3389/fphar.2022.1063300", database: "PubMed" },
    { n: 9, title: "The case for investment in tobacco control: lessons from four countries in the Americas", author: "Hutchinson B, 2022", journal: "Rev Panam Salud Publica 46:e174", type: "Casos de inversión (costo de enfermedad + retorno de la inversión)", sample: "4 países (Colombia, Costa Rica, El Salvador, Surinam)", result: "Pérdidas por tabaco del 1,0-1,8 % del PIB; beneficios superan costos; los gobiernos usaron los casos para leyes, impuestos y planeación.", url: "https://doi.org/10.26633/RPSP.2022.174", database: "PubMed y LILACS", verification: "parcial", verificationNote: "PubMed clasifica este artículo como «Case Reports»; en realidad son casos de inversión (análisis económicos), no reportes de caso clínicos." },
    { n: 10, title: "Criterios de evaluación de nuevas tecnologías en salud que utilizan en las Instituciones Prestadoras de Servicios de Salud en Antioquia, Colombia: estudio transversal", author: "Barrientos JG, 2022", journal: "Medicina UPB 41(1):22-28", type: "Transversal (encuesta de 21 preguntas a directivos)", sample: "Directivos de hospitales y clínicas de Antioquia (n no reportado en el resumen)", result: "El 100 % declara usar la evaluación de costo-efectividad al incorporar tecnologías; el perfil epidemiológico institucional es el criterio de mayor peso.", url: "https://doi.org/10.18566/medupb.v41n1.a04", database: "LILACS" },
    { n: 11, title: "¿Cuáles son las metodologías de evaluación de tecnologías sanitarias para enfermedades poco frecuentes a nivel internacional? Síntesis rápida de evidencia", author: "Ministerio de Salud de Chile, 2024", journal: "MINSAL (Santiago de Chile), 25 p.", type: "Síntesis rápida de evidencia (documental)", sample: "5 países (Reino Unido, Canadá, Colombia, Brasil, Argentina)", result: "Colombia acepta evidencia distinta de ensayos clínicos aleatorizados para ETES en enfermedades poco frecuentes y tiene el criterio de excepción más estrecho (menos de 1 por 100.000).", url: "https://fi-admin.bvsalud.org/document/view/wc5sk", database: "LILACS" },
    { n: 12, title: "Judicialization of Health Rights in Colombia and Brazil: A Comparative Analysis of Courts' Approaches to Experimental, Excluded and Included Medicaments and Technologies", author: "Gutiérrez Silva R, 2025", journal: "Revista de Investigações Constitucionais 12(1):e505", type: "Análisis cualitativo comparado de jurisprudencia", sample: "Jurisprudencia y literatura de 2 países", result: "Colombia opera con «lista negativa»; la judicialización amplía derechos pero tensiona sostenibilidad y equidad; se recomienda fortalecer la ETES.", url: "https://doi.org/10.5380/rinc.v12i1.96212", database: "SciELO" },
    { n: 13, title: "Asignación de recursos en el sector salud colombiano: una revisión sistemática de literatura", author: "Suárez Fernández LJ, 2021", journal: "Universidad del Rosario (tesis de maestría)", type: "Revisión sistemática (PRISMA; calidad con CHEERS)", sample: "Literatura 2010-2020 (n de estudios no reportado en el resumen accesible)", result: "60 % de los estudios con calidad aceptable y 40 % cuestionable; las evaluaciones económicas aplicadas a la asignación de recursos en el SGSSS son escasas.", url: "https://repository.urosario.edu.co/handle/10336/31692", database: "Google Scholar" },
    { n: 14, title: "High cost drugs in Latin America: access and barriers", author: "Rosselli D, 2023", journal: "Expert Rev Pharmacoecon Outcomes Res 23(6):619-623", type: "Revisión narrativa", sample: "Países de América Latina (incluye Colombia/IETS)", result: "Agencias de ETES creadas en varios países; la regulación de precios por referenciación internacional ha tenido éxito en pocos casos.", url: "https://doi.org/10.1080/14737167.2023.2207825", database: "Google Scholar", verification: "parcial", verificationNote: "Metadatos verificados cruzando Google Scholar con PubMed (PMID 37185151)." },
    { n: 15, title: "Manual metodológico para la elaboración de análisis de impacto presupuestal de tecnologías en salud en Colombia (segunda edición)", author: "IETS, 2024", journal: "Instituto de Evaluación Tecnológica en Salud", type: "Manual metodológico institucional", sample: "No aplica", result: "Estandariza el análisis de impacto presupuestal para decisiones del SGSSS.", url: "https://www.iets.org.co/wp-content/uploads/2024/02/Manual-Metodologico-Analisis-Impacto-Presupuestal-IETS.pdf", database: "Literatura gris (IETS)" },
    { n: 16, title: "Manual para la realización de evaluaciones de tecnologías en salud para dispositivos médicos a nivel del prestador de servicios de salud", author: "MinSalud e IETS, 2026", journal: "Ministerio de Salud y Protección Social (versión final, 14-jul-2026)", type: "Manual metodológico institucional", sample: "No aplica (dirigido a IPS)", result: "Incorpora un dominio económico-financiero con microcosteo, valor presente neto, costo anual equivalente e impacto presupuestal institucional.", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/MET/manual-evaluaciones-tec-salud-dispositivos-medicos-pss.pdf", database: "Literatura gris (MinSalud)" },
    { n: 17, title: "Umbrales de costo-efectividad: optimizando la asignación de recursos en salud en las Américas", author: "OPS, 2023", journal: "Organización Panamericana de la Salud (nota institucional sobre seminario web)", type: "Informe institucional (opinión de expertos)", sample: "No aplica", result: "El IETS reporta 52 evaluaciones económicas completas desde 2015 y un umbral de 0,86 PIB per cápita (2021) aplicado a posicionamiento terapéutico y guías de práctica clínica.", url: "https://www.paho.org/es/noticias/9-9-2023-umbrales-costo-efectividad-optimizando-asignacion-recursos-salud-americas", database: "Literatura gris (OPS)" },
  ],

  // ------------------------------------------------------------------
  // Síntesis por ejes: mitos, realidades y desafíos — sección 3.3 del
  // documento. Clasificación editorial propia del autor de los
  // hallazgos, agrupando los 17 estudios por el patrón que documentan.
  // Cada hallazgo cita los estudios (por número) que lo respaldan.
  // ------------------------------------------------------------------
  categories: [
    {
      id: "Mitos", title: "Tres creencias que no resisten los datos", color: "cat-b",
      codes: [
        { text: "Mito 1 — «Colombia paga entre 1 y 3 PIB per cápita por AVAC». La evidencia muestra que el país dispone de un umbral empírico basado en la oferta del sistema, estimado en US$5.180,8 por AVAC con precios de 2019, alrededor de un PIB per cápita; la cifra de 0,86 PIB per cápita de 2021 comunicada por el IETS es coherente con esa magnitud. Aun así, EE colombianas individuales recientes siguen aplicando la regla de tres PIB per cápita o disposiciones a pagar de hasta US$19.000 por AVAC: el mito persiste en la práctica aunque no lo respalde la evidencia agregada.", studies: [1, 17] },
        { text: "Mito 2 — «Ampliar el plan de beneficios genera ahorros por economías de escala y negociación». El único estudio cuasiexperimental identificado encontró lo contrario: la inclusión de tecnologías en el PBS-UPC entre 2012 y 2019 aumentó el uso y el acceso, sobre todo en regiones apartadas, pero no redujo el gasto, y el costo por usuario de los medicamentos incluso creció. La EE aporta acceso y cobertura efectiva, pero no contención de costos por sí sola si no se articula con regulación de precios y mecanismos de control del gasto.", studies: [3] },
        { text: "Mito 3 — «La EE es un ejercicio académico sin consecuencias». La evidencia lo matiza en dos sentidos: existen usos documentados (52 EE completas del IETS desde 2015 aplicadas a posicionamiento terapéutico y guías de práctica clínica; los casos de inversión en control del tabaco usados para reformar leyes e impuestos; el 100 % de las IPS antioqueñas encuestadas declara considerar la costo-efectividad al incorporar tecnologías), pero el análisis comparado de nueve países concluye que el umbral rara vez es un criterio oficial y vinculante de cobertura o precio, y la revisión sobre asignación de recursos halló escasa literatura que muestre su aplicación efectiva en el SGSSS.", studies: [17, 9, 10, 2, 13] },
      ]
    },
    {
      id: "Realidades", title: "Lo que la evidencia sí muestra", color: "cat-d",
      codes: [
        { text: "Realidad 1 — El costo de oportunidad es medible y es grande. Financiar diez medicamentos de alto costo de beneficio limitado supuso en Colombia US$642 millones adicionales para 22.155 pacientes y una pérdida neta cercana a 122.507 AVAC; el informe complementario del BID estimó que reasignar esos recursos produciría unos 88.000 años de vida saludable. Las cifras de ambos informes no son directamente comparables porque difieren en métodos, periodo y alcance.", studies: [6] },
        { text: "Realidad 2 — Desinvertir también es invertir. Desinvertir en seis prácticas de bajo valor (entre ellas la TAC en cefalea sin signos de alarma, la principal fuente de desperdicio) liberaría recursos suficientes para financiar 4 controles prenatales a 9.029 mujeres adicionales, cerca del 6,4 % de la brecha de cobertura prenatal.", studies: [5] },
        { text: "Realidad 3 — Más evidencia, pero con brechas de calidad y transparencia. Las EE producidas en la región, en buena parte colombianas, reportan la mayoría de ítems de CHEERS, pero fallan en justificar la perspectiva, describir el contexto y analizar sesgos y subgrupos; la guía colombiana comparte con otras guías de países de ingreso medio problemas de heterogeneidad terminológica y metodológica; y Colombia mantiene cinco años de exclusividad de datos de prueba sin usar de forma robusta la información de la cadena de valor en sus decisiones.", studies: [7, 4, 8] },
      ]
    },
    {
      id: "Desafíos", title: "La agenda 2026 en adelante", color: "cat-c",
      codes: [
        { text: "Vincular la ETES con las decisiones. El modelo de «lista negativa» y la jurisprudencia constitucional amplían el acceso, pero tensionan la sostenibilidad y la equidad; la literatura jurídica propone fortalecer la ETES y el diálogo interinstitucional como respuesta a la tensión entre la lógica poblacional de la EE y la lógica individual de la tutela.", studies: [12] },
        { text: "Homologar criterios para enfermedades poco frecuentes. La comparación internacional muestra que Colombia acepta evidencia distinta de ensayos clínicos aleatorizados para ETES en enfermedades poco frecuentes y aplica el criterio de excepción más estrecho de los cinco países comparados (menos de 1 por 100.000).", studies: [11] },
        { text: "Sostener la regulación de precios más allá del nivel central. La región discute la sostenibilidad del acceso a medicamentos de alto costo a través de agencias de ETES y regulación de precios por referenciación internacional, con resultados heterogéneos entre países.", studies: [14] },
        { text: "Extender la capacidad metodológica a nuevos niveles de decisión. La capacidad técnica ya se amplió con un manual de impacto presupuestal actualizado del IETS y un manual de ETES para dispositivos médicos dirigido a los prestadores — normativos todavía, sin evaluación de su implementación real.", studies: [15, 16] },
      ]
    },
  ],

  // ------------------------------------------------------------------
  // Evaluación de la calidad de la evidencia — Tabla 3 del documento
  // ------------------------------------------------------------------
  qualityAssessment: [
    { studies: "Espinosa 2022 (#1); Espinosa 2025 (#3)", design: "Observacional con datos administrativos / cuasiexperimental (diferencias en diferencias)", tool: "RECORD (extensión de STROBE)", result: "Fuente de datos, estrategia de identificación y supuestos descritos con claridad; la validez depende de la calidad de los registros administrativos y de posibles sesgos de selección de tecnologías incluidas." },
    { studies: "Daccache 2021 (#4); Al Ghouch 2025 (#7); Suárez Fernández 2021 (#13)", design: "Revisiones sistemáticas", tool: "PRISMA 2020 / AMSTAR-2", result: "Búsqueda multibase y listas de extracción predefinidas en Daccache; Al Ghouch se limitó a una sola base (PubMed), lo que reduce su exhaustividad; la revisión de Suárez Fernández (tesis) declara PRISMA y CHEERS pero no fue revisada por pares y su número de estudios no es verificable en el resumen accesible." },
    { studies: "Moreno-López 2026 (#5); Gutiérrez 2026 / BID 2023 (#6); Hutchinson 2022 (#9)", design: "Evaluaciones económicas (costo de oportunidad, beneficio neto en salud, retorno de la inversión)", tool: "CHEERS 2022", result: "Perspectiva y fuentes de costos explícitas en los tres estudios; los resultados de #5 y #6 son sensibles a los umbrales y alternativas de reasignación asumidos, y las dos cifras de #6 no son directamente comparables entre sí; #9 usa la metodología OMS/PNUD estandarizada pero incluye coautoría de autoridades nacionales (posible sesgo de reporte)." },
    { studies: "Espinosa 2024 (#2); Rosselli 2023 (#14)", design: "Análisis comparado de políticas / revisión narrativa", tool: "SANRA*", result: "Objetivo claro y comparación explícita de 9 países en #2, con criterio de selección de países no sistemático; #14 declara una búsqueda en PubMed y Scopus con términos libres y síntesis de autor único." },
    { studies: "Ribeiro 2022 (#8); Gutiérrez Silva 2025 (#12)", design: "Descriptivo documental / cualitativo jurídico comparado", tool: "SRQR (adaptado a análisis documental)", result: "Fuentes y periodo explícitos en #8, con comparación cualitativa sin protocolo publicado; #12 tiene un marco analítico explícito pero una selección de sentencias no sistemática." },
    { studies: "Barrientos 2022 (#10)", design: "Transversal (encuesta a directivos)", tool: "STROBE (transversal)", result: "Muestra por conveniencia de directivos interesados; tamaño muestral no reportado en el resumen accesible; riesgo de deseabilidad social en las respuestas." },
    { studies: "Ministerio de Salud de Chile 2024 (#11)", design: "Síntesis rápida documental", tool: "SANRA* / AACODS**", result: "Elaborada por un organismo gubernamental con búsqueda declarada en sitios oficiales durante dos semanas; no reporta evaluación crítica de las fuentes consultadas." },
    { studies: "IETS 2024 (#15); MinSalud-IETS 2026 (#16); OPS 2023 (#17)", design: "Manuales metodológicos institucionales y nota institucional", tool: "AACODS**", result: "Autoridad, propósito y fecha claros en los tres documentos; #15 y #16 no constituyen evidencia empírica (son documentos normativo-técnicos) y #17 reporta cifras del IETS no verificables en un documento primario propio." },
  ],
  qualityAssessmentNote: "* SANRA (Baethge, Goldbeck-Wood & Mertens, 2019, Research Integrity and Peer Review, doi:10.1186/s41073-019-0064-8) procede de la red Latitudes y no del catálogo EQUATOR. ** AACODS (Tyndall, 2010) es una lista de verificación para literatura gris que tampoco pertenece a EQUATOR. La valoración se hizo sobre texto completo cuando fue accesible y, en los demás casos, sobre resumen y metadatos verificados — una valoración preliminar que debe confirmarse con lectura completa.",

  // ------------------------------------------------------------------
  // Marcos de referencia de implementación y acceso — núcleo conceptual
  // de esta edición de la app. Ninguno forma parte de los 17 estudios
  // incluidos en la revisión; se incorporan como lente interpretativa
  // del autor, cada uno con su cita verificada contra la fuente primaria
  // (WHO/TDR, Implementation Science, o el artículo original).
  // ------------------------------------------------------------------
  irFrameworks: {
    intro: "Cinco piezas conceptuales, ninguna de las cuales forma parte de los 17 estudios incluidos en la revisión, ayudan a leerla a través del lenguaje de la investigación de implementación: cómo situar una pregunta de implementación en un continuo (Peters, Tran & Adam, 2013), cómo evaluar si una implementación funcionó (Proctor et al., 2011), qué teorías explican por qué una intervención se adopta o no (CFIR, RE-AIM, difusión de innovaciones), qué determinantes concretos de la práctica hay que revisar (TICD, Flottorp et al., 2013), y qué condiciones determinan el acceso a una tecnología o servicio (Frost & Reich, 2008). Todas se presentan explícitamente como una capa interpretativa del autor, no como hallazgos de la revisión.",

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
      text: "La revisión señala, en su primera laguna de evidencia, que ningún estudio midió el efecto causal de las recomendaciones del IETS sobre decisiones concretas de inclusión, exclusión o precio, ni evaluó el Decreto 433 de 2018 sobre valor terapéutico y precio con un marco explícito de resultados — pese a que ese marco conceptual está disponible en la literatura metodológica. Proctor y colaboradores proponen ocho resultados de implementación, organizados en tres niveles.",
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
          citation: { label: "Glasgow, R.E., Vogt, T.M., & Boles, S.M. (1999). Evaluating the public health impact of health promotion interventions: the RE-AIM framework. American Journal of Public Health, 89(9), 1322–1327. Citado en Peters, Tran & Adam (2013).", url: "https://doi.org/10.2105/ajph.89.9.1322" },
          text: "Marco de uso frecuente en intervenciones de promoción de la salud; ofrece un enfoque práctico para evaluar los efectos de una intervención a través de cambios en individuos, organizaciones y comunidades: alcance (reach), eficacia, adopción, implementación y mantenimiento.",
        },
        {
          name: "Difusión de innovaciones", full: "Diffusion of Innovations Theory",
          citation: { label: "Rogers, E.M. (2003). Diffusion of Innovations (5.ª ed.). Free Press. Citado en Peters, Tran & Adam (2013).", url: "https://www.simonandschuster.com/books/Diffusion-of-Innovations-5th-Edition/Everett-M-Rogers/9780743258234" },
          text: "Explica cómo se propagan las innovaciones, destacando los atributos percibidos de la innovación (ventaja relativa, compatibilidad con enfoques existentes, capacidad de observar resultados, capacidad de probarla y su complejidad), la disposición al cambio del adoptante, el sistema social, los procesos individuales de adopción y el sistema de difusión.",
        },
        {
          name: "CFIR", full: "Consolidated Framework for Implementation Research",
          citation: { label: "Damschroder, L.J., Aron, D.C., Keith, R.E., Kirsh, S.R., Alexander, J.A., & Lowery, J.C. (2009). Fostering implementation of health services research findings into practice: a consolidated framework for advancing implementation science. Implementation Science, 4:50. Citado en Peters, Tran & Adam (2013).", url: "https://doi.org/10.1186/1748-5908-4-50" },
          text: "Desarrollado para consolidar las distintas teorías y términos usados en el campo. Comprende cinco dominios: (1) características de la intervención; (2) contexto externo; (3) contexto interno; (4) características de los individuos involucrados; y (5) el proceso de implementación.",
          domains: ["Características de la intervención", "Contexto externo", "Contexto interno", "Características de los individuos involucrados", "Proceso de implementación"],
        },
      ],
    },

    determinants: {
      title: "Determinantes concretos de la práctica (checklist TICD)",
      citation: { label: "Flottorp, S.A., Oxman, A.D., Krause, J., Musila, N.R., Wensing, M., Godycki-Cwirko, M., Baker, R., & Eccles, M.P. (2013). A checklist for identifying determinants of practice: A systematic review and synthesis of frameworks and taxonomies of factors that prevent or enable improvements in healthcare professional practice. Implementation Science, 8:35.", url: "https://doi.org/10.1186/1748-5908-8-35" },
      text: "A partir de una revisión sistemática y una síntesis de 12 listas de verificación existentes, Flottorp y colaboradores desarrollaron el checklist TICD (\"Tailored Implementation for Chronic Diseases\"): 57 determinantes potenciales de la práctica agrupados en siete dominios. Es una herramienta genérica, pensada tanto para investigadores de implementación como para quienes diseñan intervenciones — útil para leer, dominio por dominio, por qué una recomendación técnica del IETS no siempre se traduce en una decisión vinculante de cobertura o precio (ver \"Dinámica de sistemas\", más abajo).",
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
      text: "Frost y Reich analizaron el acceso a seis tecnologías de salud en países en desarrollo y propusieron que el acceso depende de una arquitectura coordinadora (architecture) que articula tres factores: disponibilidad (availability), asequibilidad (affordability) y adopción (adoption). Aunque este marco se desarrolló para tecnologías sanitarias específicas (vacunas, pruebas diagnósticas, anticonceptivos), su estructura —una instancia coordinadora que articula distintos factores de acceso— es conceptualmente análoga a lo que esta revisión documenta para la evaluación económica: el IETS y el marco regulatorio del CNPMDM como \"arquitectura\", y la decisión vinculante de cobertura y precio como el factor de asequibilidad que esa arquitectura debe coordinar con la disponibilidad y la adopción efectiva en el terreno. Es, además, el mismo punto de llegada que la nota sobre \"cobertura\" del marco de resultados de implementación: acceso, alcance y cobertura son, en la literatura de implementación, tres caras del mismo resultado.",
      factors: [
        { name: "Arquitectura", items: ["Estructuras organizativas y relaciones establecidas para coordinar la disponibilidad, la asequibilidad y la adopción."] },
        { name: "Disponibilidad", items: ["Manufactura", "Proyección de demanda", "Adquisición", "Distribución", "Entrega"] },
        { name: "Asequibilidad", items: ["Asequibilidad gubernamental", "Asequibilidad de agencias no gubernamentales", "Asequibilidad para el usuario final"] },
        { name: "Adopción", items: ["Adopción global", "Adopción nacional", "Adopción por el proveedor", "Adopción y uso apropiado por el usuario final (aceptabilidad)"] },
      ],
      appliedCase: {
        title: "Caso aplicado: acceso estratégico a medicamentos en Colombia",
        intro: "Herramienta interactiva propia del autor (no un marco académico externo) que operacionaliza disponibilidad, asequibilidad y adopción en cuatro etapas operativas, para dos mercados —Institucional (general y especializado) y Retail (OTC y ético/Rx)— y seis equipos de una organización farmacéutica (Medical, Acceso, Marketing, Comercial, Regulatorio/GA, Finanzas). Además de las EPS y ADRES, la ruta involucra actores externos que suelen quedar fuera de la conversación de acceso: INVIMA, sociedades científicas, sociedades de pacientes, programas de soporte al paciente (PSP), importadores, gestores farmacéuticos y centros de dispensación. Se incluye aquí porque hace tangible, con un caso real del sector salud colombiano, lo que el marco de Frost & Reich describe en abstracto.",
        stages: [
          { name: "Priorización", desc: "Identificar y priorizar instituciones o canales (hospitales, centros de referencia, cadenas, farmacias) según pertinencia clínica, volumen y relación contractual — la primera decisión de disponibilidad: dónde enfocar el esfuerzo de acceso." },
          { name: "Codificación", desc: "Formalizar el registro sanitario (INVIMA) y la homologación administrativa del medicamento (CUM/IUM/CUPS o EAN/UPC), el precio y las condiciones de pago — habilita su circulación y es donde se juega buena parte de la asequibilidad." },
          { name: "Prescripción", desc: "Lograr la inclusión en guías, comités o rutas de decisión (comité de farmacia, comité de tumores, recomendación en mostrador) y habilitar la prescripción efectiva, incluyendo mecanismos especiales cuando el uso o el registro lo requieren — el núcleo de la adopción." },
          { name: "Continuidad", desc: "Sostener la disponibilidad y la adherencia en el tiempo, evitando interrupciones por desabastecimiento, cartera o discontinuidad entre el manejo hospitalario y el ambulatorio — el mismo problema de sostenibilidad que documenta esta revisión para el uso en el terreno de las decisiones de cobertura (Giro Directo, presupuestos máximos)." },
        ],
        mechanisms: [
          { name: "Vital No Disponible (VNP)", desc: "Mecanismo administrado por INVIMA que permite el ingreso y uso de un medicamento sin registro sanitario vigente en Colombia cuando constituye la única alternativa terapéutica disponible para una condición que pone en riesgo la vida.", citation: { label: "INVIMA. Medicamentos Vitales No Disponibles.", url: "https://www.invima.gov.co/productos-vigilados/medicamentos-y-productos-biologicos/medicamentos-vitales-no-disponibles" } },
          { name: "Giro Directo", desc: "Mecanismo de ADRES que gira los recursos directamente a la IPS o al prestador, sin pasar por la EPS, para reducir los tiempos de pago y la cartera que puede afectar la disponibilidad de tratamientos de alto costo.", citation: { label: "ADRES. Giro Directo.", url: "https://www.adres.gov.co/ips-y-proveedores/giro-directo" } },
          { name: "UNIRS (Uso No Incluido en Registro Sanitario)", desc: "Mecanismo del Ministerio de Salud e INVIMA que permite prescribir un medicamento ya registrado en una indicación, dosis, vía o población distinta a la aprobada, cuando existe evidencia de eficacia y seguridad.", citation: { label: "Ministerio de Salud y Protección Social. ABECÉ sobre medicamentos con usos no incluidos en el registro sanitario (UNIRS).", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/MET/abc-medicamentos-con-unirs.pdf" } },
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
    hub: { id: "hub", label: "Investigación de implementación aplicada a la evaluación económica en salud" },
    nodes: [
      { id: "continuum", label: "Continuo de la IR", detail: "Peters, Tran & Adam (2013) — sitúa una pregunta de investigación entre \"prueba de concepto\" e \"informar la escala\".", jump: { sectionId: "marcos", anchorId: "marcos-continuo" } },
      { id: "outcomes", label: "Resultados de implementación", detail: "Proctor et al. (2011) — ocho resultados para evaluar si una implementación funcionó: aceptabilidad, adopción, pertinencia, costos, factibilidad, fidelidad, penetración/cobertura, sostenibilidad.", jump: { sectionId: "marcos", anchorId: "marcos-resultados" } },
      { id: "cfir", label: "CFIR", detail: "Damschroder et al. (2009) — cinco dominios que consolidan las teorías de implementación: intervención, contexto externo, contexto interno, individuos, proceso.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "reaim", label: "RE-AIM", detail: "Glasgow et al. (1999) — alcance, eficacia, adopción, implementación y mantenimiento.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "diffusion", label: "Difusión de innovaciones", detail: "Rogers (2003) — por qué y cómo se propaga (o no) una innovación entre adoptantes.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "ticd", label: "Determinantes TICD", detail: "Flottorp et al. (2013) — 57 determinantes de la práctica en 7 dominios; base del diagrama de dinámica de sistemas de esta app.", jump: { sectionId: "marcos", anchorId: "marcos-teorias" } },
      { id: "access", label: "Marco de acceso", detail: "Frost & Reich (2008) — arquitectura, disponibilidad, asequibilidad y adopción como condiciones del acceso.", jump: { sectionId: "marcos", anchorId: "marcos-acceso" } },
    ],
  },

  // ------------------------------------------------------------------
  // Dinámica de sistemas — hipótesis causales del autor sobre por qué
  // la evaluación económica no siempre se traduce en una decisión
  // vinculante de cobertura o precio. Diagramación siguiendo Homer &
  // Hirsch (2006); nodos y bucle de refuerzo (R1) construidos a partir
  // de los mitos y realidades ya documentados en "Resultados" (ver los
  // estudios citados en cada nodo). No es un modelo estadístico
  // ajustado ni un hallazgo de los 17 estudios incluidos — es una
  // síntesis interpretativa explícita del autor.
  // ------------------------------------------------------------------
  causalLoop: {
    citation: "Diagramación siguiendo a Homer, J. B., & Hirsch, G. B. (2006). System dynamics modeling for public health. American Journal of Public Health, 96(3), 452–458. Nodos construidos a partir de los mitos, realidades y desafíos de esta misma revisión (ver estudios citados en cada nodo) — no de un modelo estadístico ajustado.",
    nodes: [
      { id: 1, label: "El umbral empírico no es criterio vinculante de decisión", studies: [2, 9, 10, 13], confidence: "verificado" },
      { id: 2, label: "Persisten los mitos sobre el nivel del umbral (1-3 PIB)", studies: [1, 17], confidence: "verificado" },
      { id: 3, label: "Baja calidad y transparencia de la evidencia económica local", studies: [7, 4, 8], confidence: "verificado" },
      { id: 4, label: "Menor legitimidad técnica de la EE frente a decisores", studies: [], confidence: "nota-autor" },
      { id: 5, label: "Brecha entre capacidad técnica instalada y su efecto en la asignación real de recursos", studies: [], confidence: "nota-autor" },
    ],
    edges: [
      { from: 1, to: 5, polarity: "+" },
      { from: 5, to: 4, polarity: "+" },
      { from: 4, to: 3, polarity: "+" },
      { from: 3, to: 2, polarity: "+" },
      { from: 2, to: 1, polarity: "+" },
    ],
    loops: [
      {
        id: "R1", title: "R1 · el umbral no vinculante se refuerza a sí mismo",
        text: "Cuando el umbral empírico no es criterio oficial y vinculante de cobertura o precio (Mito 3), la capacidad técnica instalada del IETS no se traduce sistemáticamente en la asignación real de recursos: se abre una brecha entre lo que el sistema sabe evaluar y lo que efectivamente decide. Esa brecha erosiona la legitimidad técnica de la EE frente a los decisores, que a su vez reduce el incentivo institucional para exigir e invertir en evidencia económica local de mayor calidad y transparencia (Realidad 3). Una evidencia de menor calidad no logra desplazar los mitos ya instalados sobre el nivel del umbral (Mito 1), y esos mitos, al no ser corregidos, reducen la presión política para volver el umbral vinculante — cerrando el ciclo de refuerzo.",
        relatedInitiatives: ["Mito 1", "Mito 3", "Realidad 3"],
      },
      {
        id: "B1", title: "B1 · tutela y mecanismos de pago ágiles, con demora institucional",
        text: "Cuando la brecha entre capacidad técnica y decisión efectiva persiste, la lógica individual de la tutela (Gutiérrez Silva, 2025) y los mecanismos de pago ágiles del sistema —Giro Directo, presupuestos máximos, actualización del plan de beneficios— actúan como válvula de presión: con demora institucional, absorben parte de la urgencia de acceso que la decisión vinculante no resolvió a tiempo. Esto alivia la brecha en el margen, pero no corrige su causa estructural: la actualización del plan de beneficios ampliada por esta vía amplió el acceso sin generar los ahorros esperados, y en algunos casos aumentó el costo por usuario.",
        relatedInitiatives: ["Desafío: judicialización", "Realidad 2: costo de oportunidad y desinversión"],
      },
    ],
    externalNode: { label: "Tutela y mecanismos de pago ágiles", detail: "Giro Directo, presupuestos máximos y actualización del plan de beneficios, activados con demora institucional cuando la decisión vinculante no llega a tiempo (estudios #3, #12)." },
  },

  // ------------------------------------------------------------------
  // Discusión — texto real del documento, sección 4
  // ------------------------------------------------------------------
  discussionText: [
    "La literatura reciente permite afirmar que el aporte de la evaluación económica (EE) al SGSSS es real, pero se concentra más en la generación de métricas y capacidades que en la modificación vinculante de decisiones. Hay consenso entre Espinosa (2022), Espinosa (2024) y la información institucional del IETS (OPS, 2023) en que Colombia cuenta hoy con un umbral empírico cercano a un PIB per cápita, más exigente que la regla de uno a tres PIB que dominó la práctica durante la década anterior. También hay convergencia entre Gutiérrez (2023, 2026) y Moreno-López (2026) en que el marco de costo de oportunidad ofrece una vía pedagógica y política para explicar por qué financiar tecnologías de bajo valor no es neutral, porque desplaza servicios esenciales con mayor rendimiento sanitario.",
    "Las contradicciones son más sutiles. Mientras los documentos institucionales describen un uso efectivo de la EE en guías y posicionamiento terapéutico (OPS, 2023; IETS, 2024), los análisis independientes encuentran que ese uso rara vez se traduce en decisiones oficiales de cobertura o precio (Espinosa, 2024; Suárez Fernández, 2021) y que las actualizaciones del plan de beneficios no generan los ahorros que a veces se les atribuyen (Espinosa, 2025). Del mismo modo, los estudios sobre calidad (Al Ghouch, 2025) coexisten con la persistencia en EE individuales de umbrales heterogéneos, lo que sugiere que la adopción de estándares metodológicos no ha sido homogénea entre los productores de evidencia. La tensión entre la lógica poblacional de la EE y la lógica individual de la tutela (Gutiérrez Silva, 2025) atraviesa todo el cuerpo de evidencia y explica parte de la brecha entre la capacidad técnica instalada y su efecto en la asignación real de recursos.",
    "Desde la perspectiva de la pregunta planteada, la revisión deja tres lagunas explícitas (ver \"Lagunas de evidencia\", más abajo). La revisión también tiene limitaciones que deben tenerse en cuenta: el tamizaje fue realizado por un solo revisor con apoyo de reglas explícitas, sin doble revisión independiente; la búsqueda en Google Scholar incluyó por diseño el filtro de artículos de revisión, lo que pudo omitir estudios primarios relevantes; Scopus y Web of Science no se consultaron por falta de acceso institucional, y cuatro informes no pudieron recuperarse; la evaluación de calidad se basó en parte en resúmenes y metadatos, por lo que debe considerarse preliminar; y la ventana 2021-2026 deja fuera la evidencia fundacional sobre la creación del IETS y los primeros años de la regulación de precios.",
  ],

  citationIntegrityCase: {
    title: "Un hallazgo de integridad bibliográfica, documentado dentro de la propia revisión",
    text: "Durante la verificación de citas exigida por la regla de citación de esta revisión (ver \"Metodología y evidencia\"), se detectó que Google Scholar reporta el título del artículo de Espinosa (2024) sobre umbrales de costo-efectividad con el sufijo añadido «: O. Espinosa et al.» — un artefacto de cómo Springer expone sus metadatos a los agregadores, no parte del título real del artículo. Verificado de forma cruzada en PubMed (PMID 38995492), el título correcto es «Use of Cost-Effectiveness Thresholds in Healthcare Public Policy: Progress and Challenges», sin ese sufijo. Se corrigió antes de citarlo en este documento.",
    correctedReferences: [
      { label: "Espinosa O (2024). Use of Cost-Effectiveness Thresholds in Healthcare Public Policy: Progress and Challenges. Applied Health Economics and Health Policy 22(6):797-804.", url: "https://doi.org/10.1007/s40258-024-00900-5" },
      { label: "PubMed, PMID 38995492 (verificación cruzada del título y los metadatos).", url: "https://pubmed.ncbi.nlm.nih.gov/38995492/" },
    ],
    closing: "Este episodio, junto con la clasificación errónea de Hutchinson et al. (2022) como «Case Reports» en PubMed y la ausencia de DOI en la nota técnica del BID (2023), ilustra en la práctica por qué esta revisión verifica cada cita contra su fuente de origen antes de usarla, en vez de confiar en los metadatos que exponen los agregadores.",
  },

  // ------------------------------------------------------------------
  // Estrategias de acceso — síntesis propia del autor ("Implicaciones
  // para la innovación farmacéutica", presentadas el mismo día en el
  // II Simposio Internacional de Innovación y Desarrollo Farmacéutico,
  // U.D.C.A.), ancladas en los mitos, realidades y desafíos de esta
  // misma revisión.
  // ------------------------------------------------------------------
  recommendations: [
    {
      title: "Diseñar para el valor desde el desarrollo, no solo para el registro",
      leverage: "Responde al Mito 3: la EE rara vez es un criterio oficial y vinculante de cobertura o precio cuando se produce después de la decisión regulatoria, no como parte del diseño del desarrollo.",
      text: "Definir desde el desarrollo los desenlaces que importan al sistema colombiano (AVAC, eventos evitados, impacto presupuestal), no solo los desenlaces regulatorios exigidos para el registro sanitario. Anticipar la pregunta de valor reduce la fricción en la etapa de evaluación técnica y de decisión.",
      owner: "Equipos de acceso, asuntos médicos y desarrollo clínico de la industria",
      nextStep: "Incorporar el umbral empírico colombiano y los desenlaces relevantes para el SGSSS en el diseño de los estudios pivotales y de vida real, desde las fases tempranas del desarrollo.",
      outcomes: [
        { name: "Factibilidad", level: "alta", note: "No requiere nueva regulación; es una decisión de diseño de estudio que la propia industria controla." },
        { name: "Evidencia disponible", level: "media", note: "El umbral empírico y el marco de outcomes ya están documentados (Espinosa 2022; OPS 2023), pero su adopción temprana en el diseño de estudios no está evaluada en esta revisión." },
        { name: "Transferibilidad", level: "alta", note: "Aplica a cualquier tecnología en desarrollo que aspire a entrar al SGSSS, no solo a medicamentos de alto costo." },
      ]
    },
    {
      title: "Generar evidencia económica local, no solo extrapolada",
      leverage: "Responde a la Realidad 3: las EE de la región reportan la mayoría de ítems de CHEERS pero fallan en justificar la perspectiva y describir el contexto; sin datos colombianos no hay EE creíble.",
      text: "Costos, utilidades y datos del mundo real colombianos son la base de una evaluación económica creíble ante el IETS y los pagadores. La heterogeneidad metodológica que documenta esta revisión (Daccache, 2021; Al Ghouch, 2025) es, en parte, un problema de insumos locales insuficientes, no solo de rigor de reporte.",
      owner: "Industria, academia e IETS",
      nextStep: "Priorizar estudios de costos y de efectividad en el mundo real colombiano para las tecnologías con mayor probabilidad de generar impacto presupuestal, antes de someterlas a evaluación.",
      outcomes: [
        { name: "Factibilidad", level: "media", note: "Requiere inversión y tiempo, pero no depende de cambios normativos previos." },
        { name: "Evidencia disponible", level: "alta", note: "La brecha de calidad y transparencia está bien documentada (Al Ghouch 2025; Daccache 2021; Ribeiro 2022)." },
        { name: "Transferibilidad", level: "alta", note: "Aplica a cualquier actor —industria, academia, aseguradores— que produzca evidencia económica para el sistema." },
      ]
    },
    {
      title: "Anclar el precio al umbral empírico, no a reglas obsoletas",
      leverage: "Responde directamente al Mito 1: el umbral real es ≈1 PIB per cápita por AVAC (US$5.180,8), pero EE individuales recientes siguen usando la regla de 1-3 PIB o disposiciones a pagar muy superiores.",
      text: "El umbral empírico (~1 PIB per cápita, 0,86 según el IETS en 2021) marca el techo razonable del precio por AVAC que un desarrollador puede defender ante el sistema colombiano. Anclar la estrategia de precio a esa cifra, y no a la regla de tres PIB per cápita que ya no representa la práctica real, reduce el riesgo de objeciones técnicas en la evaluación.",
      owner: "Equipos de acceso al mercado y pricing",
      nextStep: "Auditar los supuestos de umbral usados en los modelos de precio vigentes de cada tecnología frente a los US$5.180,8 por AVAC (o el 0,86 PIB per cápita del IETS) documentados en esta revisión.",
      outcomes: [
        { name: "Factibilidad", level: "alta", note: "Es un ajuste de modelo interno, no requiere negociación regulatoria previa." },
        { name: "Evidencia disponible", level: "alta", note: "El umbral está documentado en dos fuentes independientes que convergen (Espinosa 2022; OPS 2023)." },
        { name: "Transferibilidad", level: "media", note: "Aplica mejor a tecnologías nuevas en desarrollo de precio que a productos con precios regulados ya establecidos." },
      ]
    },
    {
      title: "Reportar con estándares reconocidos y compartir los modelos",
      leverage: "Responde a la Realidad 3 y al Desafío de judicialización: la falta de transparencia de datos y de reporte estandarizado debilita la legitimidad de la EE frente a pagadores y jueces.",
      text: "Reportar con CHEERS 2022 de manera sistemática, y compartir los modelos y supuestos con el IETS y otros evaluadores, construye la legitimidad técnica que hoy limita el uso vinculante de la EE (Mito 3) y que la literatura jurídica identifica como una vía para reducir la tensión entre la lógica poblacional de la EE y la lógica individual de la tutela (Gutiérrez Silva, 2025).",
      owner: "Industria, IETS y Ministerio de Salud",
      nextStep: "Adoptar CHEERS 2022 como estándar mínimo de reporte para toda EE sometida a evaluación del IETS, con publicación de los modelos cuando sea posible.",
      outcomes: [
        { name: "Factibilidad", level: "media", note: "Depende de un acuerdo institucional sobre qué se publica y cómo se protege la información comercialmente sensible." },
        { name: "Evidencia disponible", level: "alta", note: "El déficit de transparencia está documentado con cifras concretas (Ribeiro 2022: 5 años de exclusividad de datos sin uso robusto en decisiones)." },
        { name: "Transferibilidad", level: "alta", note: "Aplica a todo el ecosistema de evaluación económica en Colombia, no solo a una tecnología o actor." },
      ]
    },
  ],

  // ------------------------------------------------------------------
  // Lagunas de evidencia — sección 4 del documento (Discusión), texto real
  // ------------------------------------------------------------------
  gaps: [
    { segments: [
      { text: "La primera es la ausencia de estudios que midan el efecto causal de las recomendaciones del IETS sobre decisiones concretas de inclusión, exclusión o precio, así como de evaluaciones del Decreto 433 de 2018 sobre valor terapéutico y precio. El marco de " },
      { text: "resultados de implementación de Proctor et al. (2011)", jump: { sectionId: "marcos", anchorId: "marcos-resultados" } },
      { text: ", ya disponible en la literatura metodológica, podría aplicarse a esta evaluación pendiente." },
    ]},
    { segments: [
      { text: "La segunda es la falta de evidencia sobre actores y subpoblaciones clave: no se hallaron estudios sobre el uso de la evaluación económica por EPS y gestores farmacéuticos en la negociación de presupuestos máximos, por jueces al fallar tutelas, ni sobre la participación de pacientes; y los territorios fuera de Bogotá y Antioquia están subrepresentados en la evidencia disponible." },
    ]},
    { segments: [
      { text: "La tercera es temporal: no se identificaron análisis del efecto de la reforma a la salud en trámite desde 2023 ni de la transición del modelo de aseguramiento sobre el papel de la evaluación económica, y la evidencia sobre dispositivos médicos a nivel de prestador es todavía normativa (los manuales del IETS y de MinSalud-IETS), sin evaluación de su implementación real." },
    ]},
  ],

  // ------------------------------------------------------------------
  // Conclusión — sección 5 del documento, texto real
  // ------------------------------------------------------------------
  conclusionText: "La evaluación económica ha aportado al sistema de salud colombiano un umbral empírico propio, manuales metodológicos vigentes, una comunidad técnica consolidada y una forma rigurosa de cuantificar el costo de oportunidad de las decisiones de financiamiento. Su efecto sobre la asignación real de recursos, sin embargo, es parcial: la ampliación del plan de beneficios mejora el acceso sin generar ahorros, el umbral no es un criterio vinculante y la judicialización mantiene abiertas vías de financiamiento al margen de la evidencia de valor. Los desafíos para los próximos años consisten en vincular formalmente los resultados de la ETES con las decisiones de cobertura y precio, mejorar la calidad y la transparencia de los datos, extender la evaluación al nivel de aseguradores, prestadores y jueces, y evaluar empíricamente el impacto de las reformas en curso. La evaluación económica no es un freno al acceso: es la herramienta para que cada peso del sistema produzca la mayor salud posible.",

  // ------------------------------------------------------------------
  // Metodología y fuentes — referencias completas [1]-[24] del documento
  // ------------------------------------------------------------------
  methodology: {
    note: "Este documento se elaboró a partir de una revisión de alcance (scoping review) de autoría propia, siguiendo la lógica de reporte de PRISMA 2020, con una regla fija de citación: solo se cita información verificable con datos completos y reales; todo dato no verificable se marca de manera explícita como tal, nunca se omite en silencio ni se sustituye por una estimación.",
    sources: [
      { label: "Instituto de Evaluación Tecnológica en Salud (IETS). Sitio oficial.", url: "https://www.iets.org.co/" },
      { label: "Congreso de Colombia. (2011). Ley 1438 de 2011, por medio de la cual se reforma el Sistema General de Seguridad Social en Salud (crea el IETS).", url: "https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1438-de-2011.pdf" },
      { label: "Congreso de Colombia. (2015). Ley Estatutaria 1751 de 2015, por medio de la cual se regula el derecho fundamental a la salud.", url: "https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf" },
      { label: "Haddaway, N. R., Page, M. J., Pritchard, C. C., & McGuinness, L. A. (2022). PRISMA2020: An R package and Shiny app for producing PRISMA 2020-compliant flow diagrams. Campbell Systematic Reviews, 18, e1230.", url: "https://doi.org/10.1002/cl2.1230" },
      { label: "Page, M. J., McKenzie, J. E., Bossuyt, P. M., et al. (2021). The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ, 372, n71.", url: "https://doi.org/10.1136/bmj.n71" },
      { label: "Husereau, D., Drummond, M., Augustovski, F., et al. (2022). Consolidated Health Economic Evaluation Reporting Standards 2022 (CHEERS 2022) Statement. Value in Health, 25(1), 3–9.", url: "https://doi.org/10.1016/j.jval.2021.11.1351" },
      { label: "O'Brien, B. C., Harris, I. B., Beckman, T. J., Reed, D. A., & Cook, D. A. (2014). Standards for reporting qualitative research: a synthesis of recommendations. Academic Medicine, 89(9), 1245–1251.", url: "https://doi.org/10.1097/ACM.0000000000000388" },
      { label: "Baethge, C., Goldbeck-Wood, S., & Mertens, S. (2019). SANRA — a scale for the quality assessment of narrative review articles. Research Integrity and Peer Review, 4:5.", url: "https://doi.org/10.1186/s41073-019-0064-8" },
    ],
    limitations: [
      "El tamizaje por título y resumen fue realizado por un revisor (documentalista asistido por IA) con reglas explícitas de exclusión y verificación manual de los casos ambiguos, sin doble revisión independiente.",
      "La búsqueda en Google Scholar incluyó por diseño el filtro de \"artículos de revisión\", lo que pudo omitir estudios primarios relevantes no clasificados como tales por la propia interfaz.",
      "Cochrane Library se excluyó a priori por no indexar evaluaciones económicas ni ETES desde el cierre de NHS EED; Scopus y Web of Science no se consultaron por falta de acceso institucional, y cuatro informes no pudieron recuperarse a texto completo.",
      "La evaluación de calidad se basó en parte en resúmenes y metadatos verificados, no siempre en el texto completo, por lo que debe considerarse una valoración preliminar.",
      "La ventana de búsqueda 2021–2026 deja fuera la evidencia fundacional sobre la creación del IETS (2011) y los primeros años de la regulación de precios de medicamentos, anteriores al periodo cubierto por esta revisión.",
      "Los marcos de referencia reunidos en \"El problema de implementación\" y \"Marcos de referencia\" (Peters, Tran & Adam 2013; Proctor et al. 2011; CFIR; RE-AIM; difusión de innovaciones; TICD; Frost & Reich 2008), así como el diagrama de dinámica de sistemas y el modelo de recorrido, son una capa interpretativa añadida por el autor de esta síntesis — no forman parte de los 17 estudios incluidos en la revisión ni fueron aplicados empíricamente a la evaluación económica colombiana por ningún estudio identificado (ver las lagunas de evidencia correspondientes).",
    ]
  },
};
