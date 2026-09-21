/* ============================================================
   App — theming, accordion, rendering
   Motor genérico siguiendo la skill "explorador-interactivo"
   ============================================================ */
(function(){
  "use strict";

  /* ---------------- Theme ---------------- */
  const THEME_KEY = "aic_theme";
  function applyTheme(mode){
    if(mode === "light" || mode === "dark") document.documentElement.setAttribute("data-theme", mode);
    else document.documentElement.removeAttribute("data-theme");
  }
  function currentEffectiveTheme(){
    const attr = document.documentElement.getAttribute("data-theme");
    if(attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function initTheme(){
    let saved = null;
    try{ saved = localStorage.getItem(THEME_KEY); }catch(e){}
    applyTheme(saved);
  }
  function toggleTheme(){
    const next = currentEffectiveTheme() === "dark" ? "light" : "dark";
    applyTheme(next);
    try{ localStorage.setItem(THEME_KEY, next); }catch(e){}
  }
  initTheme();

  /* ---------------- Utility ---------------- */
  function el(tag, attrs, children){
    const node = document.createElement(tag);
    if(attrs){
      Object.keys(attrs).forEach(k=>{
        if(k === "class") node.setAttribute("class", attrs[k]);
        else if(k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children||[]).forEach(c=>{ if(c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return node;
  }
  function escapeXML(s){
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }
  function studyById(n){ return DATA.studies.find(s=>s.n===n); }
  function levelClass(level){
    const l = (level||"").toLowerCase();
    if(l.indexOf("alta")>=0 || l.indexOf("alto")>=0) return "level-alta";
    if(l.indexOf("media")>=0) return "level-media";
    if(l.indexOf("baja")>=0) return "level-baja";
    return "level-por";
  }
  function wrapLabel(text, maxChars){
    const words = text.split(" ");
    const lines = []; let cur = "";
    words.forEach(w=>{
      if((cur+" "+w).trim().length > maxChars){ lines.push(cur.trim()); cur = w; }
      else cur = (cur+" "+w).trim();
    });
    if(cur) lines.push(cur);
    return lines;
  }
  // Chip citando un estudio incluido por número, con tooltip nativo (título + autor)
  function studyRefs(nums){
    const span = el("span", {class:"refs"});
    (nums||[]).forEach((n,i)=>{
      const s = studyById(n);
      const label = s ? `#${n}` : `#${n}`;
      const chip = el("span", {class:"cite-tag", title: s ? `${s.author} — ${s.title}` : `Estudio ${n}`}, [label]);
      span.appendChild(chip);
      if(i < nums.length-1) span.appendChild(document.createTextNode(" "));
    });
    return span;
  }

  /* ============================================================
     ACCORDION
     ============================================================ */
  const SECTIONS = [
    { id:"resumen", num:"01", title:"Resumen", sub:"Objetivo, métodos, resultados y conclusiones en un párrafo", open:true },
    { id:"problema", num:"02", title:"El problema de implementación", sub:"Por qué la eficacia no basta, y cómo leer este documento", open:false,
      subs: [
        { id:"problema-narrativa", label:"Por qué la eficacia no basta" },
        { id:"problema-modelo", label:"Modelo de recorrido: etapas, actores y RACI" },
        { id:"problema-lectura", label:"Cómo leer este documento" },
      ] },
    { id:"mecanismos", num:"03", title:"Mecanismos de acceso intersectorial: qué documenta la evidencia", sub:"Ejes de convergencia temática — qué facilita y qué bloquea la coordinación intersectorial en el terreno", open:false,
      subs: [
        { id:"mecanismos-ejes", label:"Ejes de convergencia temática" },
        ...DATA.categories.map(c=>({ id:"eje-"+c.id, label:"Eje "+c.id+" — "+c.title })),
      ] },
    { id:"marcos", num:"04", title:"Marcos de referencia: implementación y acceso", sub:"Seis piezas conceptuales para interpretar los mecanismos que acabas de leer", open:false,
      subs: [
        { id:"marcos-continuo", label:"El continuo de la investigación de implementación" },
        { id:"marcos-resultados", label:"Resultados de implementación (Proctor et al., 2011)" },
        { id:"marcos-teorias", label:"Teorías y determinantes (CFIR, RE-AIM, difusión, TICD)" },
        { id:"marcos-acceso", label:"Marco de acceso (Frost & Reich, 2008)" },
        { id:"marcos-mapa", label:"Mapa mental interactivo" },
        { id:"marcos-autoevaluacion", label:"Autoevaluación de competencias en IR" },
      ] },
    { id:"dinamica", num:"05", title:"Dinámica de sistemas", sub:"El vacío de implementación: hipótesis causales del autor sobre las barreras de acceso más frecuentes", open:false },
    { id:"discusion", num:"06", title:"Discusión y estrategias de acceso", sub:"De la discusión al cierre del vacío de implementación: integridad bibliográfica, estrategias de acceso y lagunas", open:false,
      subs: [
        { id:"discusion-texto", label:"Discusión" },
        { id:"discusion-integridad", label:"Un caso de integridad bibliográfica" },
        { id:"discusion-recomendaciones", label:"Estrategias de acceso" },
        { id:"discusion-lagunas", label:"Lagunas de evidencia" },
      ] },
    { id:"metodos", num:"07", title:"Metodología y evidencia", sub:"Cómo se construyó la base empírica: diseño PRISMA-ScR, fuentes, calidad y estudios incluidos", open:false,
      subs: [
        { id:"metodos-diseno", label:"Diseño, fuentes y regla de citación" },
        { id:"metodos-prisma", label:"Selección de estudios (diagrama PRISMA)" },
        { id:"metodos-estudios", label:"Estudios incluidos (n = "+DATA.studies.length+")" },
        { id:"metodos-calidad", label:"Evaluación de la calidad de la evidencia" },
        { id:"metodos-fuentes", label:"Fuentes consultadas y limitaciones" },
      ] },
    { id:"conclusion", num:"08", title:"Conclusión", sub:"Síntesis final de la revisión", open:false },
  ];

  function buildAccordionShell(){
    const root = document.getElementById("accordion");
    SECTIONS.forEach(s=>{
      const item = el("div",{class:"acc-item"+(s.open?" open":""), id:"sec-"+s.id});
      const header = el("button",{class:"acc-header", id:"hdr-"+s.id, "aria-expanded": s.open?"true":"false", "aria-controls":"panel-"+s.id, type:"button"},[
        el("span",{class:"num"},[s.num]),
        el("span",{class:"titles"},[ el("h3",{},[s.title]), el("span",{class:"sub"},[s.sub]) ]),
        el("svg",{class:"chev",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",html:'<path d="M6 9l6 6 6-6"/>'}),
      ]);
      header.addEventListener("click", ()=> toggleSection(item, header));
      const panel = el("div",{class:"acc-panel", id:"panel-"+s.id});
      const inner = el("div",{},[ el("div",{class:"acc-body", id:"body-"+s.id, role:"region", "aria-labelledby":"hdr-"+s.id}) ]);
      panel.appendChild(inner);
      item.appendChild(header);
      item.appendChild(panel);
      root.appendChild(item);
    });
  }
  function toggleSection(item, header, forceOpen){
    const willOpen = typeof forceOpen === "boolean" ? forceOpen : !item.classList.contains("open");
    item.classList.toggle("open", willOpen);
    header.setAttribute("aria-expanded", willOpen ? "true":"false");
  }
  function setAllSections(open){
    document.querySelectorAll(".acc-item").forEach(item=>{
      toggleSection(item, item.querySelector(".acc-header"), open);
    });
  }
  function openSection(sectionId){
    const item = document.getElementById("sec-"+sectionId);
    if(!item) return;
    toggleSection(item, item.querySelector(".acc-header"), true);
  }
  function sectionDivider(body, id, title, subtitle){
    const h = el("h3",{id:id, class:"subsection-title"},[title]);
    body.appendChild(h);
    if(subtitle) body.appendChild(el("p",{class:"subsection-subtitle"},[subtitle]));
    return h;
  }

  /* ============================================================
     RENDER: Header / Hero
     ============================================================ */
  function renderHero(){
    document.getElementById("brand-title").textContent = DATA.meta.title;
    document.getElementById("hero-title").textContent = DATA.meta.title;
    document.getElementById("hero-lede").textContent = DATA.meta.subtitle;
    document.getElementById("hero-framework").textContent = DATA.meta.framework;
    document.getElementById("hero-period").textContent = DATA.meta.period;
    document.getElementById("byline").innerHTML =
      `<strong>${DATA.meta.author}</strong>${DATA.meta.credentials ? ", "+DATA.meta.credentials : ""} · ${DATA.meta.affiliation}`;

    const grid = document.getElementById("stat-grid");
    DATA.stats.forEach(s=>{
      grid.appendChild(el("div",{class:"stat-card"},[
        el("div",{class:"value"},[s.value]),
        el("div",{class:"label"},[s.label]),
        el("div",{class:"detail"},[s.detail]),
      ]));
    });

    document.getElementById("footer-disclaimer").textContent = DATA.meta.disclaimer;
    document.getElementById("footer-author").textContent =
      DATA.meta.author + (DATA.meta.credentials ? ", "+DATA.meta.credentials : "") + " · " + DATA.meta.affiliation;
    document.getElementById("year").textContent = new Date().getFullYear();

    if(DATA.meta.license){
      const lic = DATA.meta.license;
      const badge = document.getElementById("cc-badge");
      badge.href = lic.url;
      badge.title = lic.name;
      badge.innerHTML = `
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
          <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="11.2" cy="16" r="6.4" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="20.8" cy="16" r="6.4" fill="none" stroke="currentColor" stroke-width="1.6"/>
          <path d="M13 13.1c-.7-.5-1.4-.7-2.2-.7-1.9 0-3.3 1.5-3.3 3.6s1.4 3.6 3.3 3.6c.9 0 1.6-.2 2.3-.8l-.6-1.1c-.5.4-1 .6-1.6.6-1.1 0-1.9-.9-1.9-2.3s.8-2.3 1.9-2.3c.5 0 1 .2 1.5.5z" fill="currentColor" stroke="none"/>
          <path d="M22.6 13.1c-.7-.5-1.4-.7-2.2-.7-1.9 0-3.3 1.5-3.3 3.6s1.4 3.6 3.3 3.6c.9 0 1.6-.2 2.3-.8l-.6-1.1c-.5.4-1 .6-1.6.6-1.1 0-1.9-.9-1.9-2.3s.8-2.3 1.9-2.3c.5 0 1 .2 1.5.5z" fill="currentColor" stroke="none"/>
        </svg>
        <span>${lic.name}</span>`;
      document.getElementById("footer-license-text").textContent = lic.text;
    }
  }

  /* ============================================================
     RENDER: 01 Resumen
     ============================================================ */
  function renderResumen(){
    const body = document.getElementById("body-resumen");
    body.appendChild(el("p",{},[DATA.intro]));
  }

  /* ============================================================
     RENDER: 02 El problema de implementación
     ============================================================ */
  function renderProblemaNarrativa(){
    const body = document.getElementById("body-problema");
    const ip = DATA.implementationProblem;
    sectionDivider(body, "problema-narrativa", ip.caseTitle,
      "Un caso real ilustra la brecha que estudia la investigación de implementación, antes de aplicarla a esta revisión.");
    ip.caseText.forEach(p=> body.appendChild(el("p",{},[p])));
    body.appendChild(el("p",{class:"indicator-source"},[
      el("a",{href:ip.caseCitation.url, target:"_blank", rel:"noopener noreferrer"},[ip.caseCitation.label]),
    ]));
    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},["Definición"]),
      el("h3",{},["“"+ip.definitionQuote+"”"]),
      el("p",{},[ip.definitionText]),
    ]));
    body.appendChild(el("p",{class:"indicator-source"},[
      el("a",{href:ip.definitionCitation.url, target:"_blank", rel:"noopener noreferrer"},[ip.definitionCitation.label]),
    ]));
    body.appendChild(el("div",{class:"card"},[
      el("strong",{},["Por qué esta revisión es evidencia de un problema de implementación"]),
      el("p",{style:"margin:6px 0 0"},[ip.whyThisReview]),
    ]));
    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},["Lo que atraviesa toda la revisión"]),
      el("h3",{},[DATA.selectiveCategory.title]),
      el("p",{},[DATA.selectiveCategory.text]),
    ]));
  }

  /* ============================================================
     RENDER: 02 El problema de implementación — Modelo de recorrido (journey + RACI)
     ============================================================ */
  function renderProblemaModelo(){
    const body = document.getElementById("body-problema");
    const jm = DATA.journeyModel;
    sectionDivider(body, "problema-modelo", jm.title, jm.intro);
    body.appendChild(el("p",{style:"font-size:.78rem;color:var(--text-muted)"},[jm.methodNote]));

    const wrap = el("div",{class:"journey-wrap"});
    body.appendChild(wrap);

    const jState = { stage: 0, actor: null };

    function actorColorVar(actor){ return "var(--chip-"+actor.color+")"; }

    function renderJourney(){
      wrap.innerHTML = "";

      // Actor filter pills
      const pillsRow = el("div",{class:"journey-actor-pills"});
      jm.actors.forEach(a=>{
        const pressed = jState.actor === a.key;
        const pill = el("button",{class:"journey-actor-pill", type:"button", "aria-pressed": pressed?"true":"false", style:"color:"+actorColorVar(a)},[
          el("span",{class:"dot", style:"background:"+actorColorVar(a)}),
          a.name,
        ]);
        pill.addEventListener("click", ()=>{ jState.actor = pressed ? null : a.key; renderJourney(); });
        pillsRow.appendChild(pill);
      });
      wrap.appendChild(pillsRow);

      // Stage stations
      const stationsWrap = el("div",{class:"journey-stations"},[ el("div",{class:"journey-station-line"}) ]);
      jm.stages.forEach((s,i)=>{
        const btn = el("button",{class:"journey-station", type:"button", "aria-pressed": jState.stage===i?"true":"false"},[
          el("span",{class:"journey-station-num"},[String(s.num).padStart(2,"0")]),
          el("span",{class:"journey-station-label"},[s.name]),
        ]);
        btn.addEventListener("click", ()=>{ jState.stage = i; renderJourney(); });
        stationsWrap.appendChild(btn);
      });
      wrap.appendChild(stationsWrap);

      // RACI tracks grid
      const tracksWrap = el("div",{class:"journey-tracks-wrap"});
      const tracks = el("div",{class:"journey-tracks"});
      jm.actors.forEach(a=>{
        const row = el("div",{class:"journey-track-row"+((jState.actor && jState.actor!==a.key)?" dimmed":"")});
        row.appendChild(el("div",{class:"journey-track-name", style:"color:"+actorColorVar(a)},[a.name]));
        jm.stages.forEach((s,i)=>{
          const role = s.roles[a.key];
          const cell = el("div",{class:"journey-track-cell"+(i===jState.stage?" active-col":"")});
          const badge = el("span",{class:"journey-raci-badge level-"+(role?role.level:"I"), style:"color:"+actorColorVar(a)},[
            el("span",{},[role?role.level:"–"]),
          ]);
          badge.title = a.name+" — "+(role ? DATA.journeyModel.raciLegend.find(l=>l.level===role.level).label : "sin rol definido");
          cell.appendChild(badge);
          row.appendChild(cell);
        });
        tracks.appendChild(row);
      });
      tracksWrap.appendChild(tracks);
      wrap.appendChild(tracksWrap);

      // RACI legend
      const legend = el("div",{class:"journey-legend"});
      jm.raciLegend.forEach(l=> legend.appendChild(el("span",{},[ el("b",{},[l.level]), l.label ])));
      wrap.appendChild(legend);

      // Detail panel for selected stage
      const s = jm.stages[jState.stage];
      const detail = el("div",{class:"journey-detail"});
      detail.appendChild(el("p",{class:"journey-detail-eyebrow"},["Etapa "+s.num+" de "+jm.stages.length]));
      detail.appendChild(el("h4",{class:"journey-detail-title"},[s.name]));
      detail.appendChild(el("p",{class:"journey-detail-objetivo"},[s.objetivo]));

      const touchRow = el("div",{class:"journey-touchpoints"});
      s.touchpoints.forEach(t=> touchRow.appendChild(el("span",{class:"chip chip-muted"},[t])));
      detail.appendChild(touchRow);

      const roleGrid = el("div",{class:"journey-role-grid"});
      jm.actors.forEach(a=>{
        const role = s.roles[a.key];
        if(!role) return;
        const focus = jState.actor === a.key;
        const card = el("div",{class:"journey-role-card"+(focus?" focus":"")});
        card.appendChild(el("div",{class:"journey-role-top"},[
          el("span",{class:"journey-role-name", style:"color:"+actorColorVar(a)},[a.name]),
          el("span",{class:"journey-raci-badge level-"+role.level, style:"color:"+actorColorVar(a)},[ el("span",{},[role.level]) ]),
        ]));
        card.appendChild(el("p",{class:"journey-role-desc"},[role.desc]));
        roleGrid.appendChild(card);
      });
      detail.appendChild(roleGrid);

      detail.appendChild(el("div",{class:"selective-box"},[
        el("h4",{},["Riesgo / laguna en esta etapa"]),
        el("p",{},[s.riesgo]),
      ]));

      if(s.studies && s.studies.length){
        detail.appendChild(el("p",{},[
          "Respaldado por: ",
          studyRefs(s.studies),
        ]));
      }

      wrap.appendChild(detail);
    }

    renderJourney();
  }

  function renderProblemaLectura(){
    const body = document.getElementById("body-problema");
    sectionDivider(body, "problema-lectura", "Cómo leer este documento",
      "Estructura, tipos de lector y la regla de citación que gobierna todo el contenido.");
    body.appendChild(el("p",{},[DATA.introduction]));
    (DATA.meta.relatedWorks||[]).forEach(rw=>{
      body.appendChild(el("div",{class:"related-work-box"},[
        el("h4",{},["Análisis relacionado del autor"]),
        el("a",{href:rw.url, target:"_blank", rel:"noopener noreferrer", style:"font-weight:700"},[rw.title]),
        el("p",{style:"margin-top:4px"},[rw.text]),
      ]));
    });
  }

  /* ============================================================
     RENDER: 03 Materiales y métodos — Diseño, fuentes, regla de citación
     ============================================================ */
  function renderMetodosDiseno(){
    const body = document.getElementById("body-metodos");
    sectionDivider(body, "metodos-diseno", "Diseño, fuentes y regla de citación",
      "Por qué formato PCC (no PICO), qué fuentes se consultaron y la regla que gobernó toda la revisión.");
    body.appendChild(el("p",{},[DATA.methods.design]));
    body.appendChild(el("p",{},[DATA.methods.pccRationale]));

    const pccGrid = el("div",{class:"rec-board-row"},[
      el("div",{class:"rec-board-cell"},[ el("div",{class:"k"},["Población / actores"]), DATA.methods.pcc.population ]),
      el("div",{class:"rec-board-cell"},[ el("div",{class:"k"},["Concepto"]), DATA.methods.pcc.concept ]),
      el("div",{class:"rec-board-cell"},[ el("div",{class:"k"},["Contexto"]), DATA.methods.pcc.context ]),
    ]);
    body.appendChild(pccGrid);

    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:22px"},["Fuentes de información"]));
    const srcList = el("ul",{class:"gap-list"});
    DATA.methods.sources.forEach(s=>{
      srcList.appendChild(el("li",{},[ el("strong",{},[s.name+": "]), s.note ]));
    });
    body.appendChild(srcList);

    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Ecuaciones de búsqueda por fuente"]));
    const eqList = el("div",{class:"selfcheck-wrap"});
    DATA.methods.searchStrings.forEach(s=>{
      eqList.appendChild(el("div",{class:"selfcheck-item"},[
        el("div",{class:"selfcheck-statement"},[s.source]),
        el("code",{style:"display:block;font-size:.78rem;white-space:pre-wrap;color:var(--text-muted)"},[s.equation]),
      ]));
    });
    body.appendChild(eqList);
    body.appendChild(el("p",{class:"indicator-source", style:"margin-top:10px"},[DATA.methods.searchCorrectionNote]));

    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Criterios de elegibilidad"]));
    body.appendChild(el("p",{},[DATA.methods.eligibility]));
    body.appendChild(el("p",{},[DATA.methods.scopeDecision]));

    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},["Regla de citación y verificación"]),
      el("p",{},[DATA.methods.citationRule]),
    ]));
    if(DATA.methods.citationRuleUpdate){
      body.appendChild(el("div",{class:"card"},[
        el("strong",{},["Actualización posterior a la publicación"]),
        el("p",{style:"margin:6px 0 0"},[DATA.methods.citationRuleUpdate]),
      ]));
    }

    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Evaluación de calidad y síntesis"]));
    body.appendChild(el("p",{},[DATA.methods.qualityApproach]));
    body.appendChild(el("p",{},[DATA.methods.synthesisApproach]));
  }

  /* ============================================================
     RENDER: 03 Materiales y métodos — Diagrama PRISMA + Tabla 1
     ============================================================ */
  function renderPrisma(){
    const body = document.getElementById("body-metodos");
    sectionDivider(body, "metodos-prisma", "Selección de estudios",
      "45 registros identificados → 32 examinados → "+DATA.methods.prisma.includedTotal+" incluidos. Diagrama de flujo PRISMA construido con las cifras reales del documento.");
    body.appendChild(el("p",{},[
      "Diagrama de flujo PRISMA 2020 de la selección de estudios. Toca o pasa el cursor sobre cada caja para ver el detalle si aplica; la tabla debajo desagrega el proceso por fuente de información."
    ]));
    if(DATA.methods.prisma.updateNote){
      body.appendChild(el("div",{class:"card"},[
        el("strong",{},["Actualización posterior a la publicación"]),
        el("p",{style:"margin:6px 0 0"},[DATA.methods.prisma.updateNote]),
      ]));
    }
    const wrap = el("div",{class:"diagram-wrap prisma-wrap"});
    wrap.appendChild(buildPrismaSVG(DATA.methods.prisma));
    body.appendChild(wrap);

    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Flujo de identificación, cribado y selección por fuente"]));
    const tableWrap = el("div",{class:"table-wrap"});
    const table = el("table",{class:"data-table"},[
      el("caption",{class:"sr-only"},["Flujo de selección de estudios por fuente de información"]),
      el("thead",{},[ el("tr",{},[
        el("th",{},["Fuente de información"]), el("th",{},["Identificados"]), el("th",{},["Incluidos"]), el("th",{},["Observaciones sobre exclusiones"]),
      ])]),
      el("tbody",{}, DATA.methods.prisma.bySourceTable.map(r=> el("tr",{},[
        el("td",{},[r.source]),
        el("td",{},[String(r.identified)]),
        el("td",{},[String(r.included)]),
        el("td",{style:"white-space:normal;min-width:260px"},[r.note]),
      ]))),
    ]);
    tableWrap.appendChild(table);
    body.appendChild(tableWrap);
    if(DATA.methods.prisma.notRetrievedReasons && DATA.methods.prisma.notRetrievedReasons.length){
      body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Informes no recuperados (n = "+DATA.methods.prisma.notRetrievedTotal+")"]));
      const nrList = el("ul",{class:"gap-list"});
      DATA.methods.prisma.notRetrievedReasons.forEach(r=> nrList.appendChild(el("li",{},[r])));
      body.appendChild(nrList);
    }
  }

  function buildPrismaSVG(p){
    const svgNS = "http://www.w3.org/2000/svg";
    const mainX = 88, boxW = 320, gapX = 30;
    const sideX = mainX + boxW + gapX, sideW = 260;
    const stageX = 8, stageW = 42;
    const lineH = 14.5, padBottom = 12;

    const svg = document.createElementNS(svgNS,"svg");
    svg.setAttribute("role","img");
    svg.setAttribute("aria-label","Diagrama de flujo PRISMA de selección de estudios: 45 registros identificados, 32 examinados, 14 incluidos");

    const defs = document.createElementNS(svgNS,"defs");
    defs.innerHTML = `
      <marker id="parrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="context-stroke"></path>
      </marker>`;
    svg.appendChild(defs);

    function box(x, y, w, title, detailLines, extraClass){
      const titleLines = wrapLabel(title, Math.floor(w/6.1));
      const detailY0 = 16 + titleLines.length*13 + 6;
      const h = detailY0 + detailLines.length*lineH + padBottom - 4;
      const g = document.createElementNS(svgNS,"g");
      g.setAttribute("class","prisma-box"+(extraClass?" "+extraClass:""));
      let html = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8"></rect>`;
      html += titleLines.map((l,i)=> `<text x="${x+12}" y="${y+16+i*13}" class="prisma-title">${escapeXML(l)}</text>`).join("");
      detailLines.forEach((l,i)=>{ html += `<text x="${x+12}" y="${y+detailY0+i*lineH}" class="prisma-label">${escapeXML(l)}</text>`; });
      g.innerHTML = html;
      svg.appendChild(g);
      return h;
    }
    function arrowV(x,y1,y2){
      const p2 = document.createElementNS(svgNS,"path");
      p2.setAttribute("d", `M ${x} ${y1} L ${x} ${y2}`);
      p2.setAttribute("class","edge-path prisma-arrow");
      p2.setAttribute("marker-end","url(#parrow)");
      svg.appendChild(p2);
    }
    function arrowH(x1,x2,y){
      const p2 = document.createElementNS(svgNS,"path");
      p2.setAttribute("d", `M ${x1} ${y} L ${x2} ${y}`);
      p2.setAttribute("class","edge-path prisma-arrow");
      p2.setAttribute("marker-end","url(#parrow)");
      svg.appendChild(p2);
    }
    function stagePill(y1,y2,text){
      const cy = (y1+y2)/2;
      const g = document.createElementNS(svgNS,"g");
      g.setAttribute("class","prisma-stage-pill");
      g.innerHTML = `
        <rect x="${stageX}" y="${y1}" width="${stageW}" height="${Math.max(y2-y1,60)}" rx="14"></rect>
        <text x="0" y="0" class="prisma-stage" text-anchor="middle" transform="translate(${stageX+stageW/2} ${cy}) rotate(-90)">${escapeXML(text)}</text>`;
      svg.appendChild(g);
    }
    function headerPill(x,y,w,text){
      const g = document.createElementNS(svgNS,"g");
      g.setAttribute("class","prisma-header-pill");
      g.innerHTML = `
        <rect x="${x}" y="${y}" width="${w}" height="28" rx="14"></rect>
        <text x="${x+w/2}" y="${y+18}" class="prisma-header-text" text-anchor="middle">${escapeXML(text)}</text>`;
      svg.appendChild(g);
    }

    let y = 40;
    headerPill(mainX, 4, (sideX+sideW)-mainX, "Identificación de estudios (bases de datos + otros métodos)");

    const dbLines = p.identifiedByDb.map(d=>`${d.label}: ${d.n}`);
    dbLines.push(`Literatura gris institucional (otros métodos): ${p.identifiedOtherTotal}`);
    const hA = box(mainX, y, boxW, `Registros identificados (n = ${p.identifiedTotal + p.identifiedOtherTotal})`, dbLines);
    const removedLines = p.removedBreakdown.map(d=>`${d.label}: ${d.n}`);
    const hB = box(sideX, y, sideW, `Registros eliminados antes del cribado (n = ${p.removedTotal})`, removedLines, "prisma-removed");
    arrowH(mainX+boxW, sideX-2, y + hA/2);
    const row1Bottom = y + hA;
    y = row1Bottom + 26;

    const hC = box(mainX, y, boxW, `Registros examinados por título y resumen (n = ${p.screenedTotal})`, []);
    const excludedLines = [];
    p.excludedReasons.forEach(r=> wrapLabel(r, 44).forEach((l,i)=> excludedLines.push((i===0?"– ":"   ")+l)));
    const hD = box(sideX, y, sideW, `Excluidos por título/resumen (n = ${p.excludedTotal})`, excludedLines, "prisma-removed");
    arrowH(mainX+boxW, sideX-2, y + hC/2);
    const row2MainBottom = y + hC;
    const row2MaxBottom = y + Math.max(hC, hD);
    y = row2MaxBottom + 26;

    const hE = box(mainX, y, boxW, `Informes buscados para su recuperación (n = ${p.soughtTotal})`, []);
    const notRetrievedLines = [];
    (p.notRetrievedReasons||[]).forEach(r=> wrapLabel(r, 44).forEach((l,i)=> notRetrievedLines.push((i===0?"– ":"   ")+l)));
    const hF = box(sideX, y, sideW, `Informes no recuperados (n = ${p.notRetrievedTotal})`, notRetrievedLines, "prisma-removed");
    arrowH(mainX+boxW, sideX-2, y + hE/2);
    const row3MainBottom = y + hE;
    const row3MaxBottom = y + Math.max(hE, hF);
    y = row3MaxBottom + 26;

    const hG = box(mainX, y, boxW, `Informes evaluados para determinar elegibilidad (n = ${p.assessedTotal})`, []);
    const hH = box(sideX, y, sideW, `Excluidos en elegibilidad (n = ${p.excludedAtEligibilityTotal})`, [], "prisma-removed");
    arrowH(mainX+boxW, sideX-2, y + hG/2);
    const row4MainBottom = y + hG;
    y = row4MainBottom + 26;

    const includedLines = p.includedByDb.map(d=>`${d.label}: ${d.n}`);
    const hI = box(mainX, y, boxW, `Estudios y documentos incluidos en la síntesis (n = ${p.includedTotal})`, includedLines, "prisma-included");

    arrowV(mainX+boxW/2, 4+28, 40);
    arrowV(mainX+boxW/2, row1Bottom, row1Bottom+26);
    arrowV(mainX+boxW/2, row2MainBottom, row2MaxBottom+26);
    arrowV(mainX+boxW/2, row3MainBottom, y);

    stagePill(40, row1Bottom, "Identificación");
    stagePill(row1Bottom+26, row3MaxBottom, "Selección");
    stagePill(y, y+hI, "Incluidos");

    const totalH = y + hI + 16;
    const totalW = sideX + sideW + 16;
    svg.setAttribute("viewBox", `0 0 ${totalW} ${totalH}`);
    svg.setAttribute("width","100%");
    return svg;
  }

  /* ============================================================
     RENDER: 03 Materiales y métodos — Tabla de estudios incluidos
     ============================================================ */
  function renderEstudios(){
    const body = document.getElementById("body-metodos");
    sectionDivider(body, "metodos-estudios", "Estudios y documentos incluidos (n = "+DATA.studies.length+")",
      "Extracción de datos completa, con el título enlazado a su fuente verificable.");
    body.appendChild(el("p",{},[
      "Cinco estudios cualitativos indexados en PubMed centrados en el sector salud, un estudio de caso institucional de la OPS/OMS, ocho registros de Google Scholar (cinco de los cuales documentan mecanismos de gobernanza intersectorial en sectores distintos al de la salud, incluidos como evidencia comparativa) y una revisión de alcance regional."
    ]));
    const actions = el("div",{class:"data-table-actions"});
    actions.appendChild(makeDownloadLink("estudios_incluidos.csv",
      ["#","Título","Autor(es), año","Revista/editorial","Tipo de estudio","Muestra/unidad","Resultado principal","URL","Base"],
      DATA.studies.map(s=>[String(s.n), s.title, s.author, s.journal, s.type, s.sample, s.result, s.url||"", s.database])
    ));
    body.appendChild(actions);

    const tableWrap = el("div",{class:"table-wrap"});
    const table = el("table",{class:"data-table studies", id:"studies-table"},[
      el("caption",{class:"sr-only"},["Extracción de datos de los "+DATA.studies.length+" estudios y documentos incluidos"]),
      el("thead",{},[ el("tr",{},[
        el("th",{},["#"]), el("th",{},["Título"]), el("th",{},["Autor(es), año"]), el("th",{},["Tipo de estudio"]),
        el("th",{},["Resultado principal"]), el("th",{},["Base"]),
      ])]),
      el("tbody",{}, DATA.studies.map(s=>{
        const titleCell = s.url
          ? el("a",{href:s.url, target:"_blank", rel:"noopener noreferrer"},[s.title])
          : el("span",{},[s.title]);
        const cells = [
          el("td",{},[el("span",{class:"study-ref"},[String(s.n)])]),
          el("td",{style:"min-width:220px"},[titleCell]),
          el("td",{style:"white-space:nowrap"},[s.author]),
          el("td",{},[s.type]),
          el("td",{style:"min-width:260px"},[s.result]),
          el("td",{},[el("span",{class:"db-badge"},[s.database])]),
        ];
        if(s.verification){
          cells[1].appendChild(el("div",{class:"confidence-tag confidence-"+(s.verification==="parcial"?"escenario":"pendiente"), style:"margin-top:6px", title:s.verificationNote},
            [s.verification==="parcial" ? "Parcialmente verificado" : s.verification==="no-doi" ? "Sin DOI propio" : "No verificado en URL oficial"]));
        }
        return el("tr",{}, cells);
      })),
    ]);
    tableWrap.appendChild(table);
    body.appendChild(tableWrap);
  }

  /* ============================================================
     RENDER: 03 Materiales y métodos — Fuentes y limitaciones
     ============================================================ */
  function renderSources(ind){
    const wrap = el("div",{class:"indicator-source"});
    (ind.sources||[]).forEach((s, i)=>{
      const line = el("div",{class:"source-line"});
      line.appendChild(el("span",{class:"source-tag"},["Fuente"+((ind.sources.length>1)?" "+(i+1):"")+": "]));
      if(s.url) line.appendChild(el("a",{href:s.url, target:"_blank", rel:"noopener noreferrer"},[s.label]));
      else{
        line.appendChild(el("span",{},[s.label]));
        line.appendChild(el("span",{class:"chip-muted chip", style:"margin-left:6px"},["sin URL pública"]));
      }
      wrap.appendChild(line);
    });
    return wrap;
  }
  function renderMetodologiaFuentes(){
    const body = document.getElementById("body-metodos");
    sectionDivider(body, "metodos-fuentes", "Fuentes consultadas y limitaciones",
      "Todas las referencias normativas y metodológicas citadas en esta revisión, con sus limitaciones declaradas.");
    body.appendChild(el("p",{},[DATA.methodology.note]));
    body.appendChild(renderSources(DATA.methodology));
    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Limitaciones declaradas"]));
    const limitList = el("ul",{class:"limit-list"});
    DATA.methodology.limitations.forEach(l=> limitList.appendChild(el("li",{},[l])));
    body.appendChild(limitList);
  }

  /* ============================================================
     RENDER: 07 Metodología y evidencia — Evaluación de calidad
     ============================================================ */
  function renderCalidad(){
    const body = document.getElementById("body-metodos");
    sectionDivider(body, "metodos-calidad", "Evaluación de la calidad de la evidencia",
      "Herramienta EQUATOR Network aplicada según el diseño de cada estudio, en vez de forzar un único instrumento genérico.");
    const tableWrap = el("div",{class:"table-wrap"});
    const table = el("table",{class:"data-table"},[
      el("caption",{class:"sr-only"},["Evaluación de la calidad de la evidencia según el tipo de diseño"]),
      el("thead",{},[ el("tr",{},[ el("th",{},["Estudio(s)"]), el("th",{},["Diseño"]), el("th",{},["Herramienta EQUATOR"]), el("th",{},["Resultado de la evaluación"]) ]) ]),
      el("tbody",{}, DATA.qualityAssessment.map(r=> el("tr",{},[
        el("td",{style:"white-space:normal;min-width:220px"},[r.studies]),
        el("td",{},[r.design]),
        el("td",{style:"white-space:normal;min-width:180px"},[r.tool]),
        el("td",{style:"white-space:normal;min-width:260px"},[r.result]),
      ]))),
    ]);
    tableWrap.appendChild(table);
    body.appendChild(tableWrap);
  }

  /* ============================================================
     RENDER: 03 Mecanismos de acceso intersectorial — Ejes de convergencia temática
     ============================================================ */
  function renderEjes(){
    const body = document.getElementById("body-mecanismos");
    sectionDivider(body, "mecanismos-ejes", "Ejes de convergencia temática",
      "Clasificación editorial propia del autor de los hallazgos de la sección de discusión, agrupados por el patrón que documentan.");
    body.appendChild(el("p",{},[
      "Cada hallazgo cita, entre paréntesis, el número del estudio incluido que lo respalda — pasa el cursor sobre la cita para ver el título y el autor, o consulta la tabla completa y el proceso de selección PRISMA en \"Metodología y evidencia\", más adelante."
    ]));
    DATA.categories.forEach(cat=>{
      const block = el("div",{class:"category-block "+cat.color, id:"eje-"+cat.id});
      block.appendChild(el("h4",{},[
        el("span",{class:"chip "+cat.color, style:"margin-right:8px"},["Eje "+cat.id]),
        cat.title
      ]));
      const list = el("ul",{class:"code-list"});
      cat.codes.forEach(code=>{
        const li = el("li",{},[ el("span",{},[code.text]) ]);
        if(code.studies && code.studies.length) li.appendChild(studyRefs(code.studies));
        list.appendChild(li);
      });
      block.appendChild(list);
      body.appendChild(block);
    });
  }

  /* ============================================================
     RENDER: 06 Dinámica de sistemas — hipótesis causales (SVG diagram)
     ============================================================ */
  function renderDinamica(){
    const body = document.getElementById("body-dinamica");
    body.appendChild(el("p",{},[
      "Diagrama de bucles causales — no un modelo estadístico ajustado, sino una síntesis interpretativa del autor que traduce los ejes A, B y D de la sección \"Resultados\" (arriba) en hipótesis causales explícitas sobre por qué persiste la brecha de acceso intersectorial. Toca o pasa el cursor sobre un nodo para ver los estudios que lo respaldan, o sobre las etiquetas R1 / B1 para leer la explicación completa de cada bucle."
    ]));
    const wrap = el("div",{class:"diagram-wrap"});
    wrap.appendChild(buildCausalSVG());
    const tooltipEl = el("div",{class:"diagram-tooltip",hidden:"hidden"});
    tooltipEl.addEventListener("mouseenter", cancelHideTooltip);
    tooltipEl.addEventListener("mouseleave", scheduleHideTooltip);
    wrap.appendChild(tooltipEl);
    body.appendChild(wrap);
    addAccessibleListToggle(body, wrap, buildCausalAccessibleList());

    body.appendChild(el("div",{class:"loop-legend"},[
      el("span",{class:"swatch"},[el("span",{class:"sw sw-r"}), "R1 · bucle de refuerzo (el vacío de rectoría se refuerza a sí mismo)"]),
      el("span",{class:"swatch"},[el("span",{class:"sw sw-b"}), "B1 · bucle de balance, con demora (mecanismos operativos concretos)"]),
      el("span",{class:"swatch"},[el("span",{style:"color:var(--danger);font-weight:800"},["−"]), " las variables cambian en sentido opuesto"]),
      el("span",{class:"swatch"},[el("span",{style:"color:var(--success);font-weight:800"},["+"]), " las variables cambian en el mismo sentido"]),
    ]));

    body.appendChild(el("p",{class:"diagram-hint"},["Consejo: los nodos y las etiquetas R1/B1 son interactivos — pasa el cursor o tócalos para ver el detalle sin perder de vista el resto del diagrama."]));
    body.appendChild(el("p",{class:"indicator-source", style:"margin-top:8px"},[DATA.causalLoop.citation]));
  }

  function buildCausalSVG(){
    const svgNS = "http://www.w3.org/2000/svg";
    const W = 780, H = 640;
    const cx = W/2, cy = 400, R = 175;
    const nodes = DATA.causalLoop.nodes;
    const n = nodes.length;
    const pos = {};
    nodes.forEach((node,i)=>{
      const angle = -Math.PI/2 + (i * (2*Math.PI/n));
      pos[node.id] = { x: cx + R*Math.cos(angle), y: cy + R*Math.sin(angle) };
    });

    const svg = document.createElementNS(svgNS,"svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("width","100%");
    svg.setAttribute("role","img");
    svg.setAttribute("aria-label","Diagrama de bucles causales de las barreras de acceso intersectorial: bucle de refuerzo del vacío de rectoría y bucle de balance de mecanismos operativos");

    const defs = document.createElementNS(svgNS,"defs");
    defs.innerHTML = `
      <marker id="carrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="context-stroke"></path>
      </marker>`;
    svg.appendChild(defs);

    const r1Loop = DATA.causalLoop.loops.find(l=>l.id==="R1");
    const r1Group = document.createElementNS(svgNS,"g");
    r1Group.setAttribute("class","loop-tag-group r");
    r1Group.innerHTML = `
      <rect x="${cx-70}" y="${cy-26}" width="140" height="46" rx="10"></rect>
      <text x="${cx}" y="${cy-6}" text-anchor="middle" class="loop-tag r">R1</text>
      <text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="10" style="fill:var(--text-muted)">vacío de rectoría</text>`;
    if(r1Loop) attachLoopTooltip(r1Group, r1Loop);
    svg.appendChild(r1Group);

    DATA.causalLoop.edges.forEach(edge=>{
      const a = pos[edge.from], b = pos[edge.to];
      const mx = (a.x+b.x)/2, my=(a.y+b.y)/2;
      const dx = mx-cx, dy = my-cy;
      const dist = Math.sqrt(dx*dx+dy*dy) || 1;
      const bow = 18;
      const cxp = mx - (dx/dist)*bow, cyp = my - (dy/dist)*bow;

      const path = document.createElementNS(svgNS,"path");
      path.setAttribute("d", `M ${a.x} ${a.y} Q ${cxp} ${cyp} ${b.x} ${b.y}`);
      path.setAttribute("class","edge-path");
      path.setAttribute("marker-end","url(#carrow)");
      svg.appendChild(path);

      const label = document.createElementNS(svgNS,"text");
      label.setAttribute("x", cxp); label.setAttribute("y", cyp);
      label.setAttribute("text-anchor","middle");
      label.setAttribute("class","edge-label "+(edge.polarity==="-"?"neg":"pos"));
      label.textContent = edge.polarity;
      svg.appendChild(label);
    });

    // B1 loop: node 3 (déficit de coordinación operativa) <-> external "Mecanismos operativos concretos"
    const n3 = pos[3];
    const bx = n3.x, by = n3.y - 170;
    const ext = DATA.causalLoop.externalNode;
    const bnode = document.createElementNS(svgNS,"g");
    bnode.setAttribute("class","node-box");
    const extWords = wrapLabel(ext.label, 20);
    let extHtml = `<rect x="${bx-100}" y="${by-24}" width="200" height="48" rx="10"></rect>`;
    extWords.forEach((w,i)=> extHtml += `<text x="${bx}" y="${by - 6 + i*13}" text-anchor="middle">${escapeXML(w)}</text>`);
    bnode.innerHTML = extHtml;
    attachCausalNodeTooltip(bnode, { label: ext.label, studies: [], confidence: "nota-autor", detailOverride: ext.detail });
    svg.appendChild(bnode);

    const pathToB = document.createElementNS(svgNS,"path");
    pathToB.setAttribute("d", `M ${n3.x-40} ${n3.y-20} Q ${n3.x-95} ${by+40} ${bx-20} ${by+22}`);
    pathToB.setAttribute("class","edge-path b1-edge");
    pathToB.setAttribute("marker-end","url(#carrow)");
    svg.appendChild(pathToB);
    const lblToB = document.createElementNS(svgNS,"text");
    lblToB.setAttribute("x", n3.x-100); lblToB.setAttribute("y", by+60);
    lblToB.setAttribute("class","edge-label pos"); lblToB.textContent="+ (demora)";
    svg.appendChild(lblToB);

    const pathFromB = document.createElementNS(svgNS,"path");
    pathFromB.setAttribute("d", `M ${bx+20} ${by+22} Q ${n3.x+95} ${by+40} ${n3.x+40} ${n3.y-20}`);
    pathFromB.setAttribute("class","edge-path b1-edge");
    pathFromB.setAttribute("marker-end","url(#carrow)");
    svg.appendChild(pathFromB);
    const lblFromB = document.createElementNS(svgNS,"text");
    lblFromB.setAttribute("x", n3.x+100); lblFromB.setAttribute("y", by+60);
    lblFromB.setAttribute("class","edge-label neg"); lblFromB.textContent="−";
    svg.appendChild(lblFromB);

    const b1Loop = DATA.causalLoop.loops.find(l=>l.id==="B1");
    const bTagY = (by + n3.y) / 2 + 6;
    const b1Group = document.createElementNS(svgNS,"g");
    b1Group.setAttribute("class","loop-tag-group b");
    b1Group.innerHTML = `
      <rect x="${bx-24}" y="${bTagY-16}" width="48" height="26" rx="8"></rect>
      <text x="${bx}" y="${bTagY}" text-anchor="middle" class="loop-tag b">B1</text>`;
    if(b1Loop) attachLoopTooltip(b1Group, b1Loop);
    svg.appendChild(b1Group);

    nodes.forEach(node=>{
      const p = pos[node.id];
      const g = document.createElementNS(svgNS,"g");
      g.setAttribute("class","node-box");
      const words = wrapLabel(node.label, 20);
      const boxW = 168, lineH = 13;
      const boxH = 30 + words.length*lineH;
      let html = `<rect x="${p.x-boxW/2}" y="${p.y-boxH/2}" width="${boxW}" height="${boxH}" rx="10"></rect>`;
      words.forEach((w,i)=>{
        html += `<text x="${p.x}" y="${p.y - boxH/2 + 16 + i*lineH}" text-anchor="middle">${escapeXML(w)}</text>`;
      });
      g.innerHTML = html;
      attachCausalNodeTooltip(g, node);
      svg.appendChild(g);
    });

    svg.addEventListener("mouseleave", scheduleHideTooltip);
    return svg;
  }
  function causalNodeTooltipHTML(node){
    let html = `<h5>${escapeXML(node.label)}</h5>`;
    if(node.detailOverride){
      html += `<p>${escapeXML(node.detailOverride)}</p>`;
    } else if(node.studies && node.studies.length){
      html += `<p>Respaldado por: ` + node.studies.map(n=>{
        const s = studyById(n);
        return s ? `#${n} (${escapeXML(s.author)})` : `estudio ${n}`;
      }).join(", ") + `</p>`;
    } else {
      html += `<p style="color:var(--text-muted)">Nodo de enlace en la narrativa causal (síntesis del autor); no corresponde a una cifra citada individualmente.</p>`;
    }
    if(node.confidence){
      html += `<p style="margin-top:4px"><span class="confidence-tag confidence-${escapeXML(node.confidence)}">${node.confidence==="verificado"?"Verificado en los estudios citados":"Síntesis del autor"}</span></p>`;
    }
    return html;
  }
  function attachCausalNodeTooltip(gEl, node){
    const show = ()=>{
      cancelHideTooltip();
      document.querySelectorAll(".node-box, .loop-tag-group").forEach(n=>n.classList.remove("active"));
      gEl.classList.add("active");
      showDiagramTooltip(gEl, causalNodeTooltipHTML(node));
    };
    makeSvgFocusable(gEl, node.label);
    gEl.addEventListener("mouseenter", show);
    gEl.addEventListener("focus", show);
    gEl.addEventListener("click", (e)=>{ e.stopPropagation(); show(); });
    gEl.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); show(); } });
  }
  function loopTooltipHTML(loop){
    let html = `<h5>${escapeXML(loop.title)}</h5><p>${escapeXML(loop.text)}</p>`;
    if(loop.relatedInitiatives){
      html += `<div class="initiatives">` +
        loop.relatedInitiatives.map(t=>`<span class="tag-pill">${escapeXML(t)}</span>`).join("") + `</div>`;
    }
    return html;
  }
  function attachLoopTooltip(gEl, loop){
    const show = ()=>{
      cancelHideTooltip();
      document.querySelectorAll(".node-box, .loop-tag-group").forEach(n=>n.classList.remove("active"));
      gEl.classList.add("active");
      showDiagramTooltip(gEl, loopTooltipHTML(loop));
    };
    makeSvgFocusable(gEl, loop.title);
    gEl.addEventListener("mouseenter", show);
    gEl.addEventListener("focus", show);
    gEl.addEventListener("click", (e)=>{ e.stopPropagation(); show(); });
    gEl.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); show(); } });
  }
  function buildCausalAccessibleList(){
    const ul = el("ul",{class:"a11y-list"});
    DATA.causalLoop.loops.forEach(loop=>{
      ul.appendChild(el("li",{},[
        el("div",{class:"a11y-title"},[loop.title]),
        el("div",{},[loop.text]),
      ]));
    });
    DATA.causalLoop.nodes.forEach(node=>{
      const li = el("li",{},[
        el("div",{class:"a11y-title"},["Nodo "+node.id+": "+node.label]),
      ]);
      if(node.studies && node.studies.length){
        li.appendChild(el("div",{class:"a11y-meta"},[
          "Respaldado por: " + node.studies.map(n=>{ const s=studyById(n); return s?`#${n} (${s.author})`:`estudio ${n}`; }).join(", ")
        ]));
      }
      ul.appendChild(li);
    });
    ul.appendChild(el("li",{},[
      el("div",{class:"a11y-title"},["Nodo externo: "+DATA.causalLoop.externalNode.label]),
      el("div",{class:"a11y-meta"},[DATA.causalLoop.externalNode.detail]),
    ]));
    DATA.causalLoop.edges.forEach(e=>{
      const from = DATA.causalLoop.nodes.find(n=>n.id===e.from);
      const to = DATA.causalLoop.nodes.find(n=>n.id===e.to);
      ul.appendChild(el("li",{},[
        el("div",{},[`${from.label} → ${to.label}`, el("span",{class:"chip-muted chip", style:"margin-left:8px"},[e.polarity==="-"?"sentido opuesto (−)":"mismo sentido (+)"])]),
      ]));
    });
    return ul;
  }

  /* ============================================================
     RENDER: 05 Discusión — texto
     ============================================================ */
  function renderDiscusionTexto(){
    const body = document.getElementById("body-discusion");
    sectionDivider(body, "discusion-texto", "Discusión",
      "Convergencia con el marco de determinantes sociales y las limitaciones técnicas de búsqueda automatizada.");
    (DATA.discussionText||[]).forEach(p=> body.appendChild(el("p",{},[p])));
  }

  /* ============================================================
     RENDER: 03 Marcos de referencia — intro + continuo (Fig. 3, Peters et al. 2013)
     ============================================================ */
  function renderMarcosIntro(){
    const body = document.getElementById("body-marcos");
    body.appendChild(el("p",{},[DATA.irFrameworks.intro]));
  }
  function renderMarcosContinuo(){
    const body = document.getElementById("body-marcos");
    const c = DATA.irFrameworks.continuum;
    sectionDivider(body, "marcos-continuo", c.title, c.text);

    const n = c.stages.length;
    const stagePct = (i)=> 20 + Math.round((i/(n-1))*80);

    const wrap = el("div",{class:"continuum-matrix-wrap"});
    const table = el("table",{class:"continuum-matrix"},[
      el("caption",{class:"sr-only"},["Matriz del continuo de la investigación de implementación, de prueba de concepto a informar la escala"]),
    ]);
    const headRow = el("tr",{},[ el("th",{class:"row-label"},["Etapa"]) ]);
    c.stages.forEach((s,i)=>{
      const pct = stagePct(i);
      const th = el("th",{class:"stage-head"+(pct>=60?" on-dark":"")});
      th.style.backgroundColor = `color-mix(in srgb, var(--primary) ${pct}%, var(--surface))`;
      th.appendChild(el("span",{class:"stage-num"},["Etapa "+(i+1)]));
      th.appendChild(el("span",{class:"stage-name"},[s.name]));
      headRow.appendChild(th);
    });
    const rows = [
      { label:"Pregunta", cls:"stage-q", get:(s)=>s.question },
      { label:"Implementación", get:(s)=>s.implementation },
      { label:"Contexto", get:(s)=>s.context },
      { label:"Ejemplos", get:(s)=>s.examples },
    ];
    const bodyRows = rows.map(r=>{
      const tr = el("tr",{},[ el("th",{class:"row-label", scope:"row"},[r.label]) ]);
      c.stages.forEach(s=> tr.appendChild(el("td",{class:r.cls||""},[r.get(s)])));
      return tr;
    });
    table.appendChild(el("thead",{},[headRow]));
    table.appendChild(el("tbody",{}, bodyRows));
    wrap.appendChild(table);
    body.appendChild(wrap);

    body.appendChild(el("div",{class:"continuum-scale-legend"},[
      "Implementación-ligera", el("span",{class:"grad"}), "Implementación-intensa",
    ]));
    body.appendChild(el("p",{class:"indicator-source", style:"margin-top:10px"},[
      el("a",{href:c.citation.url, target:"_blank", rel:"noopener noreferrer"},[c.citation.label]),
    ]));
  }

  /* ============================================================
     RENDER: 03 Marcos de referencia — Resultados de implementación (Proctor et al., 2011)
     ============================================================ */
  function renderMarcosResultados(){
    const body = document.getElementById("body-marcos");
    const pf = DATA.irFrameworks.outcomes;
    sectionDivider(body, "marcos-resultados", pf.title,
      "El mismo marco ya usado como lente añadida en otras síntesis del autor — aquí, con su puente explícito hacia el acceso.");
    body.appendChild(el("p",{},[pf.text]));

    pf.levels.forEach((lvl,i)=>{
      const tier = el("div",{class:"outcomes-tier tier-"+(i+1)});
      tier.appendChild(el("h4",{},[lvl.name]));
      const pillRow = el("div",{class:"pill-row"});
      lvl.items.forEach(it=> pillRow.appendChild(el("span",{class:"chip chip-"+["a","d","c"][i]},[it])));
      tier.appendChild(pillRow);
      if(lvl.note) tier.appendChild(el("p",{class:"tier-note"},[lvl.note]));
      body.appendChild(tier);
    });
    if(pf.levelsSourceNote) body.appendChild(el("p",{style:"font-size:.78rem;color:var(--text-muted);margin-top:4px"},[pf.levelsSourceNote]));

    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},["De \"penetración\" a \"cobertura\" a \"acceso\""]),
      el("p",{},[pf.coverageNote]),
    ]));

    const details = el("details",{style:"margin-top:14px"});
    details.appendChild(el("summary",{style:"cursor:pointer;font-weight:700;font-size:.82rem"},["Ver figura original (inglés) y cita completa"]));
    details.appendChild(el("div",{class:"card", style:"margin-top:10px"},[
      el("img",{src:"img/proctor-2011-framework.jpg", alt:"Marco de resultados de implementación de Proctor et al. (2011), figura original en inglés: implementation, service and client outcomes", style:"max-width:420px;border:1px solid var(--border);border-radius:8px;margin:8px 0"}),
      el("p",{class:"indicator-source"},[
        el("a",{href:pf.citation.url, target:"_blank", rel:"noopener noreferrer"},[pf.citation.label]),
      ]),
      el("p",{style:"font-size:.78rem;color:var(--text-muted);margin-top:4px"},[pf.imageSourceNote]),
    ]));
    body.appendChild(details);
  }

  /* ============================================================
     RENDER: 03 Marcos de referencia — Teorías y determinantes (CFIR, RE-AIM, difusión, TICD)
     ============================================================ */
  function renderMarcosTeorias(){
    const body = document.getElementById("body-marcos");
    const th = DATA.irFrameworks.theories;
    sectionDivider(body, "marcos-teorias", th.title, th.intro);
    th.items.forEach(t=>{
      const card = el("div",{class:"card"});
      card.appendChild(el("strong",{},[t.name+" — "+t.full]));
      card.appendChild(el("p",{style:"margin:6px 0"},[t.text]));
      if(t.domains){
        const list = el("ul",{class:"gap-list"});
        t.domains.forEach(d=> list.appendChild(el("li",{},[d])));
        card.appendChild(list);
      }
      if(t.citation && t.citation.label){
        card.appendChild(el("p",{class:"indicator-source", style:"margin-top:6px"},[t.citation.label]));
      }
      body.appendChild(card);
    });
    body.appendChild(el("p",{class:"indicator-source"},[
      el("a",{href:th.citation.url, target:"_blank", rel:"noopener noreferrer"},[th.citation.label]),
    ]));

    const det = DATA.irFrameworks.determinants;
    body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:22px"},[det.title]));
    body.appendChild(el("p",{},[det.text]));
    const domGrid = el("div",{class:"rec-board-row"});
    det.domains.forEach(d=>{
      domGrid.appendChild(el("div",{class:"rec-board-cell"},[ el("div",{class:"k"},[d.name]), d.note ]));
    });
    body.appendChild(domGrid);
    body.appendChild(el("p",{class:"indicator-source", style:"margin-top:10px"},[
      el("a",{href:det.citation.url, target:"_blank", rel:"noopener noreferrer"},[det.citation.label]),
    ]));
  }

  /* ============================================================
     RENDER: 03 Marcos de referencia — Marco de acceso (Frost & Reich, 2008)
     ============================================================ */
  function renderMarcosAcceso(){
    const body = document.getElementById("body-marcos");
    const fr = DATA.irFrameworks.access;
    sectionDivider(body, "marcos-acceso", fr.title,
      "El punto de llegada de todo lo anterior: qué condiciones determinan que un servicio o una tecnología efectivamente lleguen a quien los necesita.");
    body.appendChild(el("p",{},[fr.text]));

    const arch = fr.factors[0];
    body.appendChild(el("div",{class:"access-arch-banner"},[
      arch.name,
      el("span",{class:"sub"},[arch.items[0]]),
    ]));
    const grid = el("div",{class:"access-factor-grid"});
    fr.factors.slice(1).forEach(f=>{
      grid.appendChild(el("div",{class:"access-factor"},[
        el("h4",{},[f.name]),
        el("ul",{}, f.items.map(it=> el("li",{},[it]))),
      ]));
    });
    body.appendChild(grid);

    if(fr.appliedCase){
      const ac = fr.appliedCase;
      body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:22px"},[ac.title]));
      body.appendChild(el("p",{},[ac.intro]));

      const stageTrack = el("div",{class:"access-stage-track"});
      ac.stages.forEach((s,i)=>{
        stageTrack.appendChild(el("div",{class:"access-stage"},[
          el("div",{class:"access-stage-num"},[String(i+1).padStart(2,"0")]),
          el("h4",{},[s.name]),
          el("p",{},[s.desc]),
        ]));
      });
      body.appendChild(stageTrack);

      body.appendChild(el("h4",{style:"font-size:.86rem;margin-top:18px"},["Mecanismos especiales del SGSSS ilustrados en el caso"]));
      const mechList = el("div",{class:"mech-list"});
      ac.mechanisms.forEach(m=>{
        mechList.appendChild(el("div",{class:"mech-item"},[
          el("span",{class:"mech-name"},[m.name]),
          el("p",{class:"mech-desc"},[m.desc]),
        ]));
      });
      body.appendChild(mechList);

      body.appendChild(el("a",{href:ac.link.href, target:"_blank", rel:"noopener noreferrer", class:"btn btn-primary", style:"margin-top:14px;display:inline-flex"},[ac.link.label]));
    }

    const details = el("details",{style:"margin-top:14px"});
    details.appendChild(el("summary",{style:"cursor:pointer;font-weight:700;font-size:.82rem"},["Ver figura original (inglés) y cita completa"]));
    details.appendChild(el("div",{class:"card", style:"margin-top:10px"},[
      el("img",{src:"img/frost-reich-2008-framework.png", alt:"Marco de acceso de Frost & Reich (2008), figura original en inglés: architecture, availability, affordability y adoption", style:"max-width:420px;border:1px solid var(--border);border-radius:8px;margin:8px 0"}),
      el("p",{class:"indicator-source"},[fr.citation.label]),
      el("p",{style:"font-size:.78rem;color:var(--text-muted);margin-top:4px"},[fr.citationVerificationNote]),
      el("p",{class:"indicator-source", style:"margin-top:4px"},[
        "Reproducida, bajo licencia CC BY-NC-SA 3.0, en: ",
        el("a",{href:fr.secondarySourceCitation.url, target:"_blank", rel:"noopener noreferrer"},[fr.secondarySourceCitation.label]),
      ]),
    ]));
    body.appendChild(details);
  }

  /* ============================================================
     RENDER: 03 Marcos de referencia — Mapa mental interactivo
     ============================================================ */
  function renderMarcosMapa(){
    const body = document.getElementById("body-marcos");
    sectionDivider(body, "marcos-mapa", "Mapa mental interactivo",
      "Las seis piezas anteriores, conectadas alrededor de un mismo centro. Toca o pasa el cursor sobre un nodo para ver el detalle y saltar a su sección.");
    const wrap = el("div",{class:"diagram-wrap"});
    wrap.appendChild(buildMindMapSVG());
    const tooltipEl = el("div",{class:"diagram-tooltip",hidden:"hidden"});
    tooltipEl.addEventListener("mouseenter", cancelHideTooltip);
    tooltipEl.addEventListener("mouseleave", scheduleHideTooltip);
    wrap.appendChild(tooltipEl);
    body.appendChild(wrap);
    addAccessibleListToggle(body, wrap, buildMindMapAccessibleList());
    body.appendChild(el("p",{class:"diagram-hint"},["Toca o pasa el cursor sobre un nodo para ver el detalle; usa el enlace del tooltip para saltar directamente a esa sección."]));
  }

  function buildMindMapSVG(){
    const svgNS = "http://www.w3.org/2000/svg";
    const W = 760, H = 640;
    const cx = W/2, cy = H/2, R = 250;
    const nodes = DATA.mindMap.nodes;
    const n = nodes.length;
    const pos = {};
    nodes.forEach((node,i)=>{
      const angle = -Math.PI/2 + (i * (2*Math.PI/n));
      pos[node.id] = { x: cx + R*Math.cos(angle), y: cy + R*Math.sin(angle) };
    });

    const svg = document.createElementNS(svgNS,"svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("width","100%");
    svg.setAttribute("role","img");
    svg.setAttribute("aria-label","Mapa mental de los marcos de referencia de implementación y acceso, alrededor de un nodo central");

    nodes.forEach(node=>{
      const p = pos[node.id];
      const path = document.createElementNS(svgNS,"path");
      path.setAttribute("d", `M ${cx} ${cy} L ${p.x} ${p.y}`);
      path.setAttribute("class","edge-path");
      svg.appendChild(path);
    });

    const hub = DATA.mindMap.hub;
    const hubG = document.createElementNS(svgNS,"g");
    hubG.setAttribute("class","node-box mindmap-hub");
    const hubWords = wrapLabel(hub.label, 18);
    const hubW = 190, hubLineH = 14, hubH = 26 + hubWords.length*hubLineH;
    let hubHtml = `<rect x="${cx-hubW/2}" y="${cy-hubH/2}" width="${hubW}" height="${hubH}" rx="12"></rect>`;
    hubWords.forEach((w,i)=> hubHtml += `<text x="${cx}" y="${cy - hubH/2 + 18 + i*hubLineH}" text-anchor="middle">${escapeXML(w)}</text>`);
    hubG.innerHTML = hubHtml;
    svg.appendChild(hubG);

    nodes.forEach(node=>{
      const p = pos[node.id];
      const g = document.createElementNS(svgNS,"g");
      g.setAttribute("class","node-box");
      const words = wrapLabel(node.label, 17);
      const boxW = 172, lineH = 13, boxH = 24 + words.length*lineH;
      let html = `<rect x="${p.x-boxW/2}" y="${p.y-boxH/2}" width="${boxW}" height="${boxH}" rx="10"></rect>`;
      words.forEach((w,i)=> html += `<text x="${p.x}" y="${p.y - boxH/2 + 16 + i*lineH}" text-anchor="middle">${escapeXML(w)}</text>`);
      g.innerHTML = html;
      attachMindMapNodeTooltip(g, node);
      svg.appendChild(g);
    });

    svg.addEventListener("mouseleave", scheduleHideTooltip);
    return svg;
  }
  function mindMapNodeTooltipHTML(node){
    let html = `<h5>${escapeXML(node.label)}</h5><p>${escapeXML(node.detail)}</p>`;
    if(node.jump) html += `<p><a href="#" data-jump-section="${node.jump.sectionId}" data-jump-anchor="${node.jump.anchorId}">Ir a esta sección →</a></p>`;
    return html;
  }
  function attachMindMapNodeTooltip(gEl, node){
    const show = ()=>{
      cancelHideTooltip();
      document.querySelectorAll(".node-box, .loop-tag-group").forEach(n=>n.classList.remove("active"));
      gEl.classList.add("active");
      showDiagramTooltip(gEl, mindMapNodeTooltipHTML(node));
    };
    makeSvgFocusable(gEl, node.label);
    gEl.addEventListener("mouseenter", show);
    gEl.addEventListener("focus", show);
    gEl.addEventListener("click", (e)=>{ e.stopPropagation(); show(); });
    gEl.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); show(); } });
  }
  function buildMindMapAccessibleList(){
    const ul = el("ul",{class:"a11y-list"});
    ul.appendChild(el("li",{},[ el("div",{class:"a11y-title"},[DATA.mindMap.hub.label]) ]));
    DATA.mindMap.nodes.forEach(node=>{
      ul.appendChild(el("li",{},[
        el("div",{class:"a11y-title"},[node.label]),
        el("div",{class:"a11y-meta"},[node.detail]),
      ]));
    });
    return ul;
  }

  /* ============================================================
     RENDER: 03 Marcos de referencia — Autoevaluación de competencias en IR
     ============================================================ */
  const SELFCHECK_KEY = "aic_ir_selfcheck_v1";
  function loadSelfCheckAnswers(){
    try{ return JSON.parse(localStorage.getItem(SELFCHECK_KEY) || "{}"); }catch(e){ return {}; }
  }
  function saveSelfCheckAnswers(answers){
    try{ localStorage.setItem(SELFCHECK_KEY, JSON.stringify(answers)); }catch(e){}
  }
  function renderMarcosAutoevaluacion(){
    const body = document.getElementById("body-marcos");
    const sa = DATA.irSelfAssessment;
    sectionDivider(body, "marcos-autoevaluacion", sa.title, null);
    body.appendChild(el("p",{},[sa.intro]));
    body.appendChild(el("p",{class:"indicator-source"},[
      el("a",{href:sa.sourceCitation.url, target:"_blank", rel:"noopener noreferrer"},[sa.sourceCitation.label]),
    ]));

    const answers = loadSelfCheckAnswers();
    const wrap = el("div",{class:"selfcheck-wrap"});

    sa.focusAreas.forEach(fa=>{
      wrap.appendChild(el("h4",{style:"font-size:.86rem;margin-top:14px"},[fa.name]));
      fa.competences.forEach(comp=>{
        const item = el("div",{class:"selfcheck-item"});
        item.appendChild(el("div",{class:"selfcheck-statement"},[comp.text]));
        const opts = el("div",{class:"selfcheck-options"});
        sa.scale.forEach(level=>{
          const inputId = "sc-"+comp.id+"-"+level.value;
          const input = el("input",{type:"radio", name:"sc-"+comp.id, id:inputId, value:String(level.value)});
          if(String(answers[comp.id])===String(level.value)) input.setAttribute("checked","checked");
          input.addEventListener("change", ()=>{
            answers[comp.id] = level.value;
            saveSelfCheckAnswers(answers);
            updateSelfCheckSummary(wrap, sa, answers);
          });
          const label = el("label",{for:inputId},[level.label]);
          opts.appendChild(el("span",{class:"selfcheck-opt"},[input, label]));
        });
        item.appendChild(opts);
        wrap.appendChild(item);
      });
    });

    const summary = el("div",{class:"selfcheck-result card"});
    wrap.appendChild(summary);
    body.appendChild(wrap);

    const clearBtn = el("button",{class:"btn", type:"button", style:"margin-top:10px"},["Borrar mis respuestas"]);
    clearBtn.addEventListener("click", ()=>{
      Object.keys(answers).forEach(k=> delete answers[k]);
      saveSelfCheckAnswers(answers);
      wrap.querySelectorAll("input[type=radio]").forEach(i=> i.checked=false);
      updateSelfCheckSummary(wrap, sa, answers);
    });
    body.appendChild(clearBtn);
    body.appendChild(el("p",{style:"font-size:.78rem;color:var(--text-muted);margin-top:8px"},[
      "Los cortes de este resumen (alta/media/baja) son una referencia orientativa propia del autor, no un estándar externo validado."
    ]));
    updateSelfCheckSummary(wrap, sa, answers);
  }
  function updateSelfCheckSummary(wrap, sa, answers){
    const summary = wrap.querySelector(".selfcheck-result");
    if(!summary) return;
    const totalComp = sa.focusAreas.reduce((n,fa)=>n+fa.competences.length,0);
    const answered = Object.keys(answers).filter(k=>answers[k]!=null).length;
    summary.innerHTML = "";
    summary.appendChild(el("strong",{},["Progreso: "+answered+" de "+totalComp+" competencias calificadas"]));
    if(answered>0){
      const maxLevel = Math.max(...sa.scale.map(l=>l.value));
      const sum = Object.values(answers).reduce((s,v)=> s+(Number(v)||0), 0);
      const pct = Math.round((sum/(answered*maxLevel))*100);
      const level = pct>=66 ? "alta" : pct>=33 ? "media" : "baja";
      summary.appendChild(el("p",{style:"margin:6px 0 0"},[
        "Promedio de las competencias calificadas hasta ahora: ",
        el("span",{class:"level-pill "+levelClass(level)},[pct+"%"]),
      ]));
    }
  }

  /* ============================================================
     RENDER: 05 Discusión — Caso de integridad bibliográfica
     ============================================================ */
  function renderIntegridad(){
    const body = document.getElementById("body-discusion");
    sectionDivider(body, "discusion-integridad", "Un caso de integridad bibliográfica",
      "Documentado dentro de la propia revisión, como ilustración práctica de la regla de citación.");
    const c = DATA.citationIntegrityCase;
    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},[c.title]),
      el("p",{},[c.text]),
    ]));
    const refList = el("ul",{class:"gap-list", style:"margin-top:10px"});
    c.correctedReferences.forEach(r=> refList.appendChild(el("li",{},[
      el("a",{href:r.url, target:"_blank", rel:"noopener noreferrer"},[r.label])
    ])));
    body.appendChild(refList);
    body.appendChild(el("p",{style:"margin-top:10px"},[c.closing]));
  }

  /* ============================================================
     RENDER: 05 Discusión — Recomendaciones
     ============================================================ */
  function renderRecomendaciones(){
    const body = document.getElementById("body-discusion");
    sectionDivider(body, "discusion-recomendaciones", "Estrategias de acceso",
      "El cierre del recorrido de esta app: del problema de implementación (sección 02) y sus marcos de referencia (03), pasando por la evidencia (04-05) y las hipótesis causales de \"Dinámica de sistemas\" (06), a estrategias concretas para cerrar el vacío de implementación y mejorar el acceso.");
    body.appendChild(el("p",{},[
      "Síntesis propia del autor. No son conclusiones de los estudios incluidos ni posiciones oficiales de ninguna de las instituciones citadas. Cada estrategia responde a un punto de apalancamiento distinto del bucle de refuerzo R1 (\"el vacío de rectoría se refuerza a sí mismo\") o del bucle de balance B1 (\"mecanismos operativos concretos\") descritos en la sección 06."
    ]));
    DATA.recommendations.forEach(rec=>{
      const card = el("div",{class:"rec-card"});
      card.appendChild(el("div",{class:"rec-top"},[ el("h4",{},[rec.title]) ]));
      card.appendChild(el("div",{class:"rec-leverage"},["Punto de apalancamiento: "+rec.leverage]));
      card.appendChild(el("p",{style:"margin:0 0 6px"},[rec.text]));
      if(rec.owner || rec.nextStep){
        card.appendChild(el("div",{class:"rec-board-row"},[
          rec.owner ? el("div",{class:"rec-board-cell"},[ el("div",{class:"k"},["Responsable sugerido"]), rec.owner ]) : null,
          rec.nextStep ? el("div",{class:"rec-board-cell"},[ el("div",{class:"k"},["Próximo paso"]), rec.nextStep ]) : null,
        ]));
      }
      const outWrap = el("div",{class:"outcomes"});
      rec.outcomes.forEach(o=>{
        outWrap.appendChild(el("div",{class:"outcome"},[
          el("div",{class:"name"},[o.name, el("span",{class:"level-pill "+levelClass(o.level)},[o.level])]),
          el("div",{class:"note"},[o.note]),
        ]));
      });
      card.appendChild(outWrap);
      body.appendChild(card);
    });
  }

  /* ============================================================
     RENDER: 05 Discusión — Lagunas de evidencia
     ============================================================ */
  function renderLagunas(){
    const body = document.getElementById("body-discusion");
    sectionDivider(body, "discusion-lagunas", "Lagunas de evidencia",
      "Explícitas y no forzadas a partir de un conjunto de estudios que no las cubre — sección 6 del documento.");
    const list = el("ul",{class:"gap-list"});
    DATA.gaps.forEach(g=>{
      const li = el("li",{});
      (g.segments||[]).forEach(seg=>{
        if(seg.href) li.appendChild(el("a",{href:seg.href, target:"_blank", rel:"noopener noreferrer"},[seg.text]));
        else if(seg.jump){
          const a = el("a",{href:"#"+seg.jump.anchorId},[seg.text]);
          a.addEventListener("click",(e)=>{ e.preventDefault(); openSection(seg.jump.sectionId); scrollToId(seg.jump.anchorId); });
          li.appendChild(a);
        } else li.appendChild(document.createTextNode(seg.text));
      });
      list.appendChild(li);
    });
    body.appendChild(list);
  }

  /* ============================================================
     RENDER: 06 Conclusión
     ============================================================ */
  function renderConclusion(){
    const body = document.getElementById("body-conclusion");
    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},["Conclusión de la revisión"]),
      el("p",{},[DATA.conclusionText]),
    ]));
  }

  /* ============================================================
     CSV export helper (tablas: agenda/estudios)
     ============================================================ */
  function toCSV(headers, rows){
    const esc = (v)=>{
      const s = String(v==null?"":v);
      return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s;
    };
    return [headers.map(esc).join(","), ...rows.map(r=>r.map(esc).join(","))].join("\n");
  }
  function makeDownloadLink(filename, headers, rows){
    const btn = el("button",{class:"btn csv-download", type:"button"},[
      el("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",width:"14",height:"14",html:'<path d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"/>'}),
      "Descargar CSV",
    ]);
    btn.addEventListener("click", ()=>{
      const csv = toCSV(headers, rows);
      const blob = new Blob([csv], {type:"text/csv;charset=utf-8;"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = filename;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
    return btn;
  }

  /* ============================================================
     Diagram tooltip system (mapa mental + dinámica de sistemas)
     ============================================================ */
  function showDiagramTooltip(targetEl, html){
    const wrap = targetEl.closest(".diagram-wrap");
    const tooltip = wrap ? wrap.querySelector(".diagram-tooltip") : null;
    if(!tooltip || !wrap) return;
    tooltip.innerHTML = html;
    tooltip.hidden = false;
    const wrapRect = wrap.getBoundingClientRect();
    const elRect = targetEl.getBoundingClientRect();
    const cx = elRect.left - wrapRect.left + wrap.scrollLeft + elRect.width/2;
    const topOfEl = elRect.top - wrapRect.top + wrap.scrollTop;
    const bottomOfEl = elRect.bottom - wrapRect.top + wrap.scrollTop;
    requestAnimationFrame(()=>{
      const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
      let left = cx - tw/2;
      let top = topOfEl - th - 10;
      if(top < wrap.scrollTop + 4) top = bottomOfEl + 10;
      left = Math.max(wrap.scrollLeft + 6, Math.min(left, wrap.scrollLeft + wrapRect.width - tw - 6));
      tooltip.style.left = left + "px";
      tooltip.style.top = top + "px";
    });
  }
  function hideDiagramTooltip(){
    document.querySelectorAll(".diagram-tooltip").forEach(t=> t.hidden = true);
    document.querySelectorAll(".node-box, .loop-tag-group").forEach(n=>n.classList.remove("active"));
  }
  let tooltipHideTimer = null;
  function scheduleHideTooltip(){ clearTimeout(tooltipHideTimer); tooltipHideTimer = setTimeout(hideDiagramTooltip, 300); }
  function cancelHideTooltip(){ clearTimeout(tooltipHideTimer); }
  function makeSvgFocusable(gEl, label){
    gEl.setAttribute("tabindex","0");
    gEl.setAttribute("role","button");
    gEl.setAttribute("aria-label", label);
  }
  function addAccessibleListToggle(body, wrap, listEl){
    listEl.hidden = true;
    const btn = el("button",{class:"btn", type:"button", "aria-pressed":"false"},["Ver como lista (accesible)"]);
    btn.addEventListener("click", ()=>{
      const showingList = listEl.hidden;
      listEl.hidden = !showingList;
      wrap.hidden = showingList;
      btn.setAttribute("aria-pressed", showingList?"true":"false");
      btn.textContent = showingList ? "Ver como diagrama" : "Ver como lista (accesible)";
    });
    body.appendChild(el("div",{class:"a11y-list-toggle"},[btn]));
    body.appendChild(listEl);
  }

  /* ============================================================
     SIDEBAR TOC + SCROLLSPY + BREADCRUMB
     ============================================================ */
  function scrollToId(id){
    const target = document.getElementById(id);
    if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
  }
  function renderSidebarTOC(){
    const nav = document.getElementById("toc");
    SECTIONS.forEach(s=>{
      const a = el("a",{class:"toc-link", href:"#sec-"+s.id, "data-target":"sec-"+s.id},[
        el("span",{class:"toc-num"},[s.num]), s.title
      ]);
      a.addEventListener("click",(e)=>{
        e.preventDefault();
        openSection(s.id);
        scrollToId("sec-"+s.id);
        closeMobileSidebar();
      });
      nav.appendChild(a);
      (s.subs||[]).forEach(sub=>{
        const sa = el("a",{class:"toc-link sub", href:"#"+sub.id, "data-target":sub.id},[sub.label]);
        sa.addEventListener("click",(e)=>{
          e.preventDefault();
          openSection(s.id);
          scrollToId(sub.id);
          closeMobileSidebar();
        });
        nav.appendChild(sa);
      });
    });
  }
  let landmarks = [];
  function buildLandmarks(){
    landmarks = [];
    SECTIONS.forEach(s=>{
      landmarks.push({ sectionId:s.id, subId:null, el: document.getElementById("sec-"+s.id) });
      (s.subs||[]).forEach(sub=> landmarks.push({ sectionId:s.id, subId:sub.id, el: document.getElementById(sub.id) }));
    });
  }
  function setActiveTOC(lm){
    if(!lm) return;
    document.querySelectorAll(".toc-link").forEach(a=> a.classList.remove("active"));
    const targetId = lm.subId || ("sec-"+lm.sectionId);
    const link = document.querySelector('.toc-link[data-target="'+targetId+'"]');
    if(link) link.classList.add("active");
    renderBreadcrumb(lm);
  }
  function renderBreadcrumb(lm){
    const bc = document.getElementById("breadcrumb");
    bc.innerHTML = "";
    const section = SECTIONS.find(s=>s.id===lm.sectionId);
    bc.appendChild(el("a",{href:"#"},["Inicio"]));
    if(section){
      bc.appendChild(el("span",{class:"sep"},["›"]));
      bc.appendChild(el("span",{class: lm.subId?"":"current"},[section.title]));
      if(lm.subId){
        const sub = (section.subs||[]).find(su=>su.id===lm.subId);
        if(sub){ bc.appendChild(el("span",{class:"sep"},["›"])); bc.appendChild(el("span",{class:"current"},[sub.label])); }
      }
    }
  }
  let scrollRAF = null;
  function initScrollspy(){
    buildLandmarks();
    function update(){
      const offset = 100;
      let current = null;
      for(const lm of landmarks){
        if(!lm.el) continue;
        if(lm.subId){
          const parentItem = document.getElementById("sec-"+lm.sectionId);
          if(!parentItem || !parentItem.classList.contains("open")) continue;
        }
        if(lm.el.getBoundingClientRect().top - offset <= 0) current = lm;
      }
      setActiveTOC(current || landmarks[0]);
    }
    window.addEventListener("scroll", ()=>{
      if(scrollRAF) return;
      scrollRAF = requestAnimationFrame(()=>{ update(); scrollRAF = null; });
    }, {passive:true});
    update();
  }

  /* ============================================================
     MOBILE SIDEBAR
     ============================================================ */
  function initMobileSidebar(){
    const toggle = document.getElementById("toc-toggle");
    const sidebar = document.getElementById("sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    toggle.addEventListener("click", ()=>{
      const open = !sidebar.classList.contains("open");
      sidebar.classList.toggle("open", open);
      scrim.hidden = !open;
      toggle.setAttribute("aria-expanded", open?"true":"false");
    });
    scrim.addEventListener("click", closeMobileSidebar);
  }
  function closeMobileSidebar(){
    const sidebar = document.getElementById("sidebar");
    const scrim = document.getElementById("sidebar-scrim");
    const toggle = document.getElementById("toc-toggle");
    if(!sidebar) return;
    sidebar.classList.remove("open");
    scrim.hidden = true;
    toggle.setAttribute("aria-expanded","false");
  }

  /* ============================================================
     LIVE SEARCH
     ============================================================ */
  let SEARCH_INDEX = [];
  let searchResults = [];
  let searchActiveIndex = -1;
  function buildSearchIndex(){
    const idx = [];
    DATA.studies.forEach(s=>{
      idx.push({ type:"Estudio #"+s.n, label:s.title, detail:s.author+" — "+s.result, sectionId:"metodos", anchorId:"metodos-estudios" });
    });
    DATA.categories.forEach(cat=>{
      cat.codes.forEach(code=>{
        idx.push({ type:"Eje "+cat.id, label: code.text.length>90? code.text.slice(0,90)+"…" : code.text, detail: cat.title, sectionId:"mecanismos", anchorId:"eje-"+cat.id });
      });
    });
    DATA.recommendations.forEach(r=>{
      idx.push({ type:"Estrategia de acceso", label:r.title, detail:r.leverage, sectionId:"discusion", anchorId:"discusion-recomendaciones" });
    });
    DATA.gaps.forEach(g=>{
      const text = (g.segments||[]).map(s=>s.text).join("");
      idx.push({ type:"Laguna", label: text.length>90? text.slice(0,90)+"…" : text, detail:"Lagunas de evidencia", sectionId:"discusion", anchorId:"discusion-lagunas" });
    });
    idx.push({ type:"Sección", label:"Diagrama PRISMA", detail:"Selección de los "+DATA.studies.length+" estudios incluidos", sectionId:"metodos", anchorId:"metodos-prisma" });
    idx.push({ type:"Sección", label:"El problema de implementación", detail:"Caso Foege/viruela y definición de Peters, Tran & Adam (2013)", sectionId:"problema", anchorId:"problema-narrativa" });
    idx.push({ type:"Sección", label:"Modelo de recorrido: etapas, actores y RACI", detail:"4 etapas, 5 actores, responsabilidad RACI del problema de implementación", sectionId:"problema", anchorId:"problema-modelo" });
    idx.push({ type:"Sección", label:"El continuo de la investigación de implementación", detail:"Peters, Tran & Adam (2013), figura 3", sectionId:"marcos", anchorId:"marcos-continuo" });
    idx.push({ type:"Sección", label:"Resultados de implementación", detail:"Proctor et al. (2011)", sectionId:"marcos", anchorId:"marcos-resultados" });
    idx.push({ type:"Sección", label:"Teorías y determinantes", detail:"CFIR, RE-AIM, difusión de innovaciones, checklist TICD", sectionId:"marcos", anchorId:"marcos-teorias" });
    idx.push({ type:"Sección", label:"Marco de acceso", detail:"Frost & Reich (2008)", sectionId:"marcos", anchorId:"marcos-acceso" });
    idx.push({ type:"Sección", label:"Acceso estratégico a medicamentos", detail:"Caso aplicado: 4 etapas, herramienta interactiva del autor", sectionId:"marcos", anchorId:"marcos-acceso" });
    idx.push({ type:"Sección", label:"Mapa mental interactivo", detail:"Los seis marcos de referencia conectados", sectionId:"marcos", anchorId:"marcos-mapa" });
    idx.push({ type:"Sección", label:"Autoevaluación de competencias en IR", detail:"IR Toolkit (TDR/OMS) — 16 competencias en 6 focos", sectionId:"marcos", anchorId:"marcos-autoevaluacion" });
    idx.push({ type:"Sección", label:"Dinámica de sistemas", detail:"Bucles R1 (vacío de rectoría) y B1 (mecanismos operativos)", sectionId:"dinamica", anchorId:"sec-dinamica" });
    idx.push({ type:"Sección", label:"Caso de integridad bibliográfica", detail:"Corrección de una cita mal atribuida (PMID 20957426)", sectionId:"discusion", anchorId:"discusion-integridad" });
    return idx;
  }
  function openSearch(){
    const panel = document.getElementById("search-panel");
    const input = document.getElementById("search-input");
    panel.hidden = false;
    input.value = "";
    document.getElementById("search-results").innerHTML = "";
    searchResults = []; searchActiveIndex = -1;
    setTimeout(()=> input.focus(), 10);
  }
  function closeSearch(){
    const panel = document.getElementById("search-panel");
    if(panel.hidden) return;
    panel.hidden = true;
    document.getElementById("search-trigger").focus();
  }
  function isSearchOpen(){ return !document.getElementById("search-panel").hidden; }
  function runSearch(q){
    const resultsEl = document.getElementById("search-results");
    const input = document.getElementById("search-input");
    resultsEl.innerHTML = "";
    searchActiveIndex = -1;
    const query = q.trim().toLowerCase();
    if(!query){ searchResults = []; input.setAttribute("aria-expanded","false"); return; }
    searchResults = SEARCH_INDEX.filter(e=>
      (e.label && e.label.toLowerCase().indexOf(query)>=0) ||
      (e.detail && e.detail.toLowerCase().indexOf(query)>=0) ||
      (e.type && e.type.toLowerCase().indexOf(query)>=0)
    ).slice(0,30);
    input.setAttribute("aria-expanded", searchResults.length ? "true":"false");
    if(!searchResults.length){
      resultsEl.appendChild(el("li",{class:"search-empty"},['Sin resultados para "'+q+'"']));
      return;
    }
    searchResults.forEach((r,i)=>{
      const li = el("li",{role:"presentation"});
      const a = el("a",{class:"search-result", href:"#", role:"option", id:"sr-"+i},[
        el("div",{class:"sr-type"},[r.type]),
        el("div",{class:"sr-label"},[r.label]),
        el("div",{class:"sr-detail"},[r.detail||""]),
      ]);
      a.addEventListener("click",(e)=>{ e.preventDefault(); goToSearchResult(r); });
      li.appendChild(a);
      resultsEl.appendChild(li);
    });
  }
  function goToSearchResult(r){
    closeSearch();
    openSection(r.sectionId);
    setTimeout(()=> scrollToId(r.anchorId), 60);
  }
  function moveSearchActive(delta){
    if(!searchResults.length) return;
    searchActiveIndex = Math.max(0, Math.min(searchResults.length-1, searchActiveIndex+delta));
    document.querySelectorAll(".search-result").forEach((a,i)=> a.classList.toggle("active", i===searchActiveIndex));
    const active = document.querySelectorAll(".search-result")[searchActiveIndex];
    if(active) active.scrollIntoView({block:"nearest"});
  }
  function initSearch(){
    SEARCH_INDEX = buildSearchIndex();
    const trigger = document.getElementById("search-trigger");
    const input = document.getElementById("search-input");
    const closeBtn = document.getElementById("search-close");
    trigger.addEventListener("click", openSearch);
    closeBtn.addEventListener("click", closeSearch);
    document.getElementById("search-panel").addEventListener("click",(e)=>{ if(e.target.id==="search-panel") closeSearch(); });
    input.addEventListener("input", ()=> runSearch(input.value));
    input.addEventListener("keydown",(e)=>{
      if(e.key==="ArrowDown"){ e.preventDefault(); moveSearchActive(1); }
      else if(e.key==="ArrowUp"){ e.preventDefault(); moveSearchActive(-1); }
      else if(e.key==="Enter"){ e.preventDefault(); if(searchActiveIndex>=0) goToSearchResult(searchResults[searchActiveIndex]); else if(searchResults.length) goToSearchResult(searchResults[0]); }
    });
  }

  /* ============================================================
     SHORTCUTS PANEL
     ============================================================ */
  function openShortcuts(){ document.getElementById("shortcuts-panel").hidden = false; }
  function closeShortcuts(){ document.getElementById("shortcuts-panel").hidden = true; document.getElementById("help-toggle").focus(); }
  function isShortcutsOpen(){ return !document.getElementById("shortcuts-panel").hidden; }
  function initShortcutsPanel(){
    document.getElementById("help-toggle").addEventListener("click", ()=> isShortcutsOpen()?closeShortcuts():openShortcuts());
    document.getElementById("shortcuts-close").addEventListener("click", closeShortcuts);
    document.getElementById("shortcuts-panel").addEventListener("click",(e)=>{ if(e.target.id==="shortcuts-panel") closeShortcuts(); });
  }
  function initKeyboardShortcuts(){
    document.addEventListener("keydown",(e)=>{
      const tag = (e.target && e.target.tagName || "").toLowerCase();
      const typing = tag==="input" || tag==="textarea" || (e.target && e.target.isContentEditable);
      if(e.key==="/" && !typing){ e.preventDefault(); openSearch(); return; }
      if(e.key==="?" && !typing){ e.preventDefault(); isShortcutsOpen() ? closeShortcuts() : openShortcuts(); return; }
      if(e.key==="Escape"){
        if(isSearchOpen()) closeSearch();
        else if(isShortcutsOpen()) closeShortcuts();
        else { const sb = document.getElementById("sidebar"); if(sb && sb.classList.contains("open")) closeMobileSidebar(); }
      }
    });
  }

  /* ============================================================
     FOCUS MODE / SCROLL TO TOP
     ============================================================ */
  function initFocusMode(){
    const btn = document.getElementById("focus-toggle");
    btn.addEventListener("click", ()=>{
      const on = !document.body.classList.contains("focus-mode");
      document.body.classList.toggle("focus-mode", on);
      btn.setAttribute("aria-pressed", on?"true":"false");
    });
  }
  function initScrollTop(){
    const btn = document.getElementById("scroll-top");
    window.addEventListener("scroll", ()=>{ btn.hidden = window.scrollY < 600; }, {passive:true});
    btn.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
  }

  /* ============================================================
     SOURCES PANEL
     ============================================================ */
  function renderSourcesPanel(){
    const body = document.getElementById("sources-panel-body");
    const groups = [];
    const methodologySources = DATA.methodology.sources.filter(s=>s.url);
    if(methodologySources.length) groups.push({ title:"Marco normativo y metodológico", items: methodologySources });
    const studySources = DATA.studies.filter(s=>s.url).map(s=>({ label:"#"+s.n+" — "+s.author+": "+s.title, url:s.url }));
    if(studySources.length) groups.push({ title:"Estudios incluidos con URL pública verificable", items: studySources });
    const relatedItems = (DATA.meta.relatedWorks||[]).map(rw=>({ label: rw.title, url: rw.url }));
    if(relatedItems.length) groups.push({ title:"Análisis relacionado del autor", items: relatedItems });
    const ip = DATA.implementationProblem;
    const irf = DATA.irFrameworks;
    const frameworkItems = [];
    if(ip.caseCitation.url) frameworkItems.push({ label: ip.caseCitation.label, url: ip.caseCitation.url });
    if(irf.continuum.citation.url) frameworkItems.push({ label: irf.continuum.citation.label, url: irf.continuum.citation.url });
    if(irf.outcomes.citation.url) frameworkItems.push({ label: irf.outcomes.citation.label, url: irf.outcomes.citation.url });
    if(irf.determinants.citation.url) frameworkItems.push({ label: irf.determinants.citation.label, url: irf.determinants.citation.url });
    if(irf.access.secondarySourceCitation.url) frameworkItems.push({ label: irf.access.secondarySourceCitation.label, url: irf.access.secondarySourceCitation.url });
    if(DATA.irSelfAssessment.sourceCitation.url) frameworkItems.push({ label: DATA.irSelfAssessment.sourceCitation.label, url: DATA.irSelfAssessment.sourceCitation.url });
    if(frameworkItems.length) groups.push({ title:"Marcos de referencia de implementación y acceso", items: frameworkItems });
    if(!groups.length){
      body.appendChild(el("p",{style:"color:var(--text-muted);font-size:.85rem"},["No hay fuentes con URL pública verificable registradas."]));
      return;
    }
    groups.forEach(g=>{
      const gEl = el("div",{class:"sources-panel-group"},[ el("h3",{},[g.title]) ]);
      const ul = el("ul",{class:"sources-panel-list"});
      g.items.forEach(it=> ul.appendChild(el("li",{},[ el("a",{href:it.url, target:"_blank", rel:"noopener noreferrer"},[it.label]) ])));
      gEl.appendChild(ul);
      body.appendChild(gEl);
    });
  }
  function initSourcesPanelToggle(){
    const btn = document.getElementById("sources-panel-btn");
    const panel = document.getElementById("sources-panel");
    btn.addEventListener("click", ()=>{
      panel.hidden = !panel.hidden;
      if(!panel.hidden) panel.scrollIntoView({behavior:"smooth", block:"start"});
    });
  }

  /* ============================================================
     EXPORT: single "export to PDF" control, visible sections only.
     ============================================================ */
  function initGlobalExport(){
    document.querySelectorAll(".js-export-pdf").forEach(btn=>{
      btn.addEventListener("click", ()=> window.print());
    });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  function boot(){
    renderHero();
    buildAccordionShell();
    renderResumen();
    renderProblemaNarrativa();
    renderProblemaModelo();
    renderProblemaLectura();
    renderEjes();
    renderMarcosIntro();
    renderMarcosContinuo();
    renderMarcosResultados();
    renderMarcosTeorias();
    renderMarcosAcceso();
    renderMarcosMapa();
    renderMarcosAutoevaluacion();
    renderDinamica();
    renderDiscusionTexto();
    renderIntegridad();
    renderRecomendaciones();
    renderLagunas();
    renderMetodosDiseno();
    renderPrisma();
    renderEstudios();
    renderCalidad();
    renderMetodologiaFuentes();
    renderConclusion();

    renderSidebarTOC();
    renderSourcesPanel();
    initGlobalExport();

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    document.getElementById("expand-all").addEventListener("click", ()=> setAllSections(true));
    document.getElementById("collapse-all").addEventListener("click", ()=> setAllSections(false));
    document.getElementById("section-count-hint").textContent = SECTIONS.length+" secciones · el resumen está abierto, el resto se expande a tu ritmo";

    document.addEventListener("click", (e)=>{
      const jumpLink = e.target.closest && e.target.closest("[data-jump-section]");
      if(jumpLink){
        e.preventDefault();
        openSection(jumpLink.getAttribute("data-jump-section"));
        hideDiagramTooltip();
        setTimeout(()=> scrollToId(jumpLink.getAttribute("data-jump-anchor")), 60);
        return;
      }
      if(!e.target.closest || !e.target.closest(".node-box, .loop-tag-group, .diagram-tooltip")) hideDiagramTooltip();
    });

    initMobileSidebar();
    initSearch();
    initShortcutsPanel();
    initKeyboardShortcuts();
    initFocusMode();
    initScrollTop();
    initSourcesPanelToggle();
    initScrollspy();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
