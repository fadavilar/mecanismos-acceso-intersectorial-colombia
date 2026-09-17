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
    { id:"introduccion", num:"02", title:"Introducción", sub:"Por qué esta revisión, y cómo leer este documento", open:false },
    { id:"metodos", num:"03", title:"Materiales y métodos", sub:"Diseño PRISMA-ScR, fuentes, estrategia de búsqueda y estudios incluidos", open:false,
      subs: [
        { id:"metodos-diseno", label:"Diseño, fuentes y regla de citación" },
        { id:"metodos-prisma", label:"Selección de estudios (diagrama PRISMA)" },
        { id:"metodos-estudios", label:"Estudios incluidos (n = 14)" },
        { id:"metodos-fuentes", label:"Fuentes consultadas y limitaciones" },
      ] },
    { id:"resultados", num:"04", title:"Resultados", sub:"Evaluación de calidad y ejes de convergencia temática", open:false,
      subs: [
        { id:"resultados-calidad", label:"Evaluación de la calidad de la evidencia" },
        { id:"resultados-ejes", label:"Ejes de convergencia temática" },
        ...DATA.categories.map(c=>({ id:"eje-"+c.id, label:"Eje "+c.id+" — "+c.title })),
      ] },
    { id:"discusion", num:"05", title:"Discusión y recomendaciones", sub:"Marcos conceptuales, integridad bibliográfica, recomendaciones y lagunas", open:false,
      subs: [
        { id:"discusion-texto", label:"Discusión" },
        { id:"discusion-marcos", label:"Marcos conceptuales añadidos" },
        { id:"discusion-integridad", label:"Un caso de integridad bibliográfica" },
        { id:"discusion-recomendaciones", label:"Recomendaciones" },
        { id:"discusion-lagunas", label:"Lagunas de evidencia" },
      ] },
    { id:"conclusion", num:"06", title:"Conclusión", sub:"Síntesis final de la revisión", open:false },
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
     RENDER: 02 Introducción
     ============================================================ */
  function renderIntroduccion(){
    const body = document.getElementById("body-introduccion");
    body.appendChild(el("p",{},[DATA.introduction]));
    body.appendChild(el("div",{class:"selective-box"},[
      el("h4",{},["Lo que atraviesa toda la revisión"]),
      el("h3",{},[DATA.selectiveCategory.title]),
      el("p",{},[DATA.selectiveCategory.text]),
    ]));
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
      "45 registros identificados → 32 examinados → 14 incluidos. Diagrama de flujo PRISMA construido con las cifras reales del documento.");
    body.appendChild(el("p",{},[
      "Diagrama de flujo PRISMA 2020 de la selección de estudios. Toca o pasa el cursor sobre cada caja para ver el detalle si aplica; la tabla debajo desagrega el proceso por fuente de información."
    ]));
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
    sectionDivider(body, "metodos-estudios", "Estudios y documentos incluidos (n = 14)",
      "Extracción de datos completa, con el título enlazado a su fuente verificable.");
    body.appendChild(el("p",{},[
      "Cinco estudios cualitativos indexados en PubMed centrados en el sector salud, un estudio de caso institucional de la OPS/OMS, siete registros de Google Scholar (cuatro de los cuales documentan mecanismos de gobernanza intersectorial en sectores distintos al de la salud, incluidos como evidencia comparativa) y una revisión de alcance regional."
    ]));
    const actions = el("div",{class:"data-table-actions"});
    actions.appendChild(makeDownloadLink("estudios_incluidos.csv",
      ["#","Título","Autor(es), año","Revista/editorial","Tipo de estudio","Muestra/unidad","Resultado principal","URL","Base"],
      DATA.studies.map(s=>[String(s.n), s.title, s.author, s.journal, s.type, s.sample, s.result, s.url||"", s.database])
    ));
    body.appendChild(actions);

    const tableWrap = el("div",{class:"table-wrap"});
    const table = el("table",{class:"data-table studies", id:"studies-table"},[
      el("caption",{class:"sr-only"},["Extracción de datos de los 14 estudios y documentos incluidos"]),
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
     RENDER: 04 Resultados — Evaluación de calidad
     ============================================================ */
  function renderCalidad(){
    const body = document.getElementById("body-resultados");
    sectionDivider(body, "resultados-calidad", "Evaluación de la calidad de la evidencia",
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
     RENDER: 04 Resultados — Ejes de convergencia temática
     ============================================================ */
  function renderEjes(){
    const body = document.getElementById("body-resultados");
    sectionDivider(body, "resultados-ejes", "Ejes de convergencia temática",
      "Clasificación editorial propia del autor de los hallazgos de la sección de discusión, agrupados por el patrón que documentan.");
    body.appendChild(el("p",{},[
      "Cada hallazgo cita, entre paréntesis, el número del estudio incluido (ver \"Estudios incluidos\" en Materiales y métodos) que lo respalda — pasa el cursor sobre la cita para ver el título y el autor."
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
     RENDER: 05 Discusión — texto
     ============================================================ */
  function renderDiscusionTexto(){
    const body = document.getElementById("body-discusion");
    sectionDivider(body, "discusion-texto", "Discusión",
      "Convergencia con el marco de determinantes sociales y las limitaciones técnicas de búsqueda automatizada.");
    (DATA.discussionText||[]).forEach(p=> body.appendChild(el("p",{},[p])));
  }

  /* ============================================================
     RENDER: 05 Discusión — Marcos conceptuales añadidos
     ============================================================ */
  function renderMarcos(){
    const body = document.getElementById("body-discusion");
    sectionDivider(body, "discusion-marcos", "Marcos conceptuales añadidos",
      "Dos lentes interpretativas del autor, ninguna parte de los 14 estudios incluidos — cada una con su cita verificada.");
    body.appendChild(el("p",{},[DATA.conceptualFrameworks.intro]));

    const pf = DATA.conceptualFrameworks.proctor;
    body.appendChild(el("div",{class:"card"},[
      el("strong",{},[pf.title]),
      el("p",{style:"margin:6px 0"},[pf.text]),
      el("img",{src:"img/proctor-2011-framework.jpg", alt:"Marco de resultados de implementación de Proctor et al. (2011): resultados de implementación, de servicio y del cliente", style:"max-width:420px;border:1px solid var(--border);border-radius:8px;margin:8px 0"}),
      el("p",{class:"indicator-source"},[
        el("a",{href:pf.citation.url, target:"_blank", rel:"noopener noreferrer"},[pf.citation.label]),
      ]),
      el("p",{style:"font-size:.78rem;color:var(--text-muted);margin-top:4px"},[pf.imageSourceNote]),
    ]));

    const fr = DATA.conceptualFrameworks.frostReich;
    body.appendChild(el("div",{class:"card"},[
      el("strong",{},[fr.title]),
      el("p",{style:"margin:6px 0"},[fr.text]),
      el("img",{src:"img/frost-reich-2008-framework.png", alt:"Marco de acceso de Frost & Reich (2008): arquitectura, disponibilidad, asequibilidad y adopción", style:"max-width:420px;border:1px solid var(--border);border-radius:8px;margin:8px 0"}),
      el("p",{class:"indicator-source"},[fr.citation.label]),
      el("p",{style:"font-size:.78rem;color:var(--text-muted);margin-top:4px"},[fr.citationVerificationNote]),
      el("p",{class:"indicator-source", style:"margin-top:4px"},[
        "Reproducida, bajo licencia CC BY-NC-SA 3.0, en: ",
        el("a",{href:fr.secondarySourceCitation.url, target:"_blank", rel:"noopener noreferrer"},[fr.secondarySourceCitation.label]),
      ]),
    ]));
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
    sectionDivider(body, "discusion-recomendaciones", "Recomendaciones",
      "Tablero de acción — síntesis propia, ancladas en la discusión y en las lagunas de evidencia.");
    body.appendChild(el("p",{},[
      "Síntesis propia del autor. No son conclusiones de los estudios incluidos ni posiciones oficiales de ninguna de las instituciones citadas."
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
     Diagram tooltip system (reservado para futuros diagramas)
     ============================================================ */
  function hideDiagramTooltip(){
    document.querySelectorAll(".diagram-tooltip").forEach(t=> t.hidden = true);
    document.querySelectorAll(".node-box").forEach(n=>n.classList.remove("active"));
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
        idx.push({ type:"Eje "+cat.id, label: code.text.length>90? code.text.slice(0,90)+"…" : code.text, detail: cat.title, sectionId:"resultados", anchorId:"eje-"+cat.id });
      });
    });
    DATA.recommendations.forEach(r=>{
      idx.push({ type:"Recomendación", label:r.title, detail:r.leverage, sectionId:"discusion", anchorId:"discusion-recomendaciones" });
    });
    DATA.gaps.forEach(g=>{
      const text = (g.segments||[]).map(s=>s.text).join("");
      idx.push({ type:"Laguna", label: text.length>90? text.slice(0,90)+"…" : text, detail:"Lagunas de evidencia", sectionId:"discusion", anchorId:"discusion-lagunas" });
    });
    idx.push({ type:"Sección", label:"Diagrama PRISMA", detail:"Selección de los 14 estudios incluidos", sectionId:"metodos", anchorId:"metodos-prisma" });
    idx.push({ type:"Sección", label:"Marcos conceptuales añadidos", detail:"Proctor et al. (2011) y Frost & Reich (2008)", sectionId:"discusion", anchorId:"discusion-marcos" });
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
    const cf = DATA.conceptualFrameworks;
    const frameworkItems = [];
    if(cf.proctor.citation.url) frameworkItems.push({ label: cf.proctor.citation.label, url: cf.proctor.citation.url });
    if(cf.frostReich.secondarySourceCitation.url) frameworkItems.push({ label: cf.frostReich.secondarySourceCitation.label, url: cf.frostReich.secondarySourceCitation.url });
    if(frameworkItems.length) groups.push({ title:"Marcos conceptuales añadidos", items: frameworkItems });
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
    renderIntroduccion();
    renderMetodosDiseno();
    renderPrisma();
    renderEstudios();
    renderMetodologiaFuentes();
    renderCalidad();
    renderEjes();
    renderDiscusionTexto();
    renderMarcos();
    renderIntegridad();
    renderRecomendaciones();
    renderLagunas();
    renderConclusion();

    renderSidebarTOC();
    renderSourcesPanel();
    initGlobalExport();

    document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
    document.getElementById("expand-all").addEventListener("click", ()=> setAllSections(true));
    document.getElementById("collapse-all").addEventListener("click", ()=> setAllSections(false));
    document.getElementById("section-count-hint").textContent = SECTIONS.length+" secciones · el resumen está abierto, el resto se expande a tu ritmo";

    document.addEventListener("click", (e)=>{
      if(!e.target.closest || !e.target.closest(".node-box")) hideDiagramTooltip();
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
