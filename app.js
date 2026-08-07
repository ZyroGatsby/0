// ---- "On my mind" - array of sayings (text / author / year). ----
// Cycles automatically with a swipe animation.
const QUOTES = [
  {
    text: "I want AI to do my laundry and dishes so that I can do art and writing, not for AI to do my art and writing so that I can do my laundry and dishes.",
    author: "Joanna Maciejewska",
    year: 2024,
  },
  {
    text: "Real artists ship.",
    author: "Steve Jobs",
    year: 1983,
  },
];

// ---- "Recent reads" ----
// One entry per paper. `key` prefixes its strings in I18N: <key>_title,
// <key>_meta, <key>_why and <key>_n1..n4. Adding a second paper is this array
// plus its keys; the section cycles the same way the quote does.
const PAPERS = [
  {
    key: "p2",
    // Machine Learning: Science and Technology, via DOI so the link outlives
    // any one publisher's URL scheme.
    url: "https://doi.org/10.1088/2632-2153/ae792d",
    nums: 4,
  },
  {
    key: "p1",
    // Materials Genome Engineering Advances.
    url: "https://onlinelibrary.wiley.com/doi/10.1002/mgea.70064",
    nums: 4,
  },
];

// ---- Languages ----
const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
];

// ---- Themes ----
// The palettes live in styles.css under :root[data-theme="…"]; this list only
// says which ones exist and what to call them. "midnight-canvas" is Sous's own
// palette and keeps its name in every language, because it is the name of a
// colour in a product rather than a description of one.
const THEMES = [
  { code: "dark", key: "theme_dark" },
  { code: "light", key: "theme_light" },
  { code: "paper", key: "theme_paper" },
  { code: "midnight-canvas", key: "theme_midnight" },
];

const LINK_ICON =
  '<svg class="link-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></svg>';
const EXTERNAL = (label, url) =>
  `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${label}, opens in a new tab">${label}${LINK_ICON}</a>`;
const SOUS = (label) => EXTERNAL(label, "https://sous.software");
const AI = (label) => EXTERNAL(label, "https://ai.sous.social");
const SECONDARY = (label) => `<span class="intro-secondary">${label}</span>`;

// content[lang][key]. Missing keys fall back to English.
const I18N = {
  en: {
    intro: `${SECONDARY("Building ")}${SOUS("Sous")}${SECONDARY(" &amp; Thinking ")}${AI("Assistive Intelligence (AI)")}`,
    exp: "Experience",
    founder: "Founder",
    exp1_when: "Aug 2026 - Now",
    mle: '<span class="mle-full">Machine Learning Engineer</span><span class="mle-abbr">ML Engineer</span>',
    exp2_when: "Sep 2021 - Dec 2025",
    certs: "Certification(s) &amp; Contribution(s)",
    cert_contributor: "Contributor",
    cert_unsplash_note: "Open-licensed photography, 1,000+ views.",
    education: "Education",
    edu_degree: "B.Sc. Computer Science &amp; Mathematics",
    edu_badge: "First Class · Best Graduating Student",
    elsewhere: "Elsewhere",
    link_email: "Email",
    onmymind: "On my mind",
    reading:
      "Recent reads",
    p1_meta:
      "DeepSeek-R1-14B, fine-tuned, with a Neo4j knowledge graph over 50,000 publications",
    p1_why:
      "How far can a small model be pushed? This one is 14B, fine-tuned on 2,500 papers and wired to a knowledge graph of 50,000 more, and in its own field it beats a 670B model. If that holds generally, the interesting question stops being which frontier model you rent and starts being what you can run on the machine in front of you.",
    p1_n1: "Base 14B <b>71.7%</b>",
    p1_n2: "Fine-tuned <b>82.9%</b>",
    p1_n3: "With the graph <b>94.8%</b>",
    p1_n4: "Beats a <b>670B</b> model in its own domain",
    theme_dark: "Dark",
    theme_light: "Light",
    theme_paper: "Paper",
    theme_midnight: "Midnight canvas",
    paper_why_label:
      "Motivation",
    p1_title:
      "DeepSeek-Lattice-KG: A Compact Language Model with Knowledge Graph Augmentation for Lattice Structure Design",
    p2_title:
      "The Ballad of LLM Agents: Philosophical Reasoning for Chemistry",
    p2_meta:
      "Seven philosophy-inspired system prompts, tested against three GPT models on ChemBench",
    p2_why:
      "Seven prompts, each written in the voice of a different philosopher, and nothing else: no new facts, no retrieval, no fine-tuning. Socratic questioning took one model from 51% to 73% on a chemistry benchmark. A good reminder that much of what looks like a knowledge problem is a reasoning-structure problem, and that the cheapest fix is usually how you ask.",
    p2_n1:
      "GPT-4o, with Hume <b>57 → 68%</b>",
    p2_n2:
      "GPT-5, with Kant <b>86 → 91%</b>",
    p2_n3:
      "GPT-5.1, with Socrates <b>51 → 73%</b>",
    p2_n4:
      "No retrieval, no fine-tuning",
  },
  fr: {
    intro: `${SECONDARY("Je développe ")}${SOUS("Sous")}${SECONDARY(" et je réfléchis à ")}${AI("l’intelligence assistive (IA)")}`,
    exp: "Expérience",
    founder: "Fondateur",
    exp1_when: "août 2026 - aujourd'hui",
    mle: '<span class="mle-full">Ingénieur Machine Learning</span><span class="mle-abbr">Ingénieur ML</span>',
    exp2_when: "sept. 2021 - déc. 2025",
    certs: "Certification(s) &amp; Contribution(s)",
    cert_contributor: "Contributeur",
    cert_unsplash_note: "Photographie sous licence libre, plus de 1 000 vues.",
    education: "Formation",
    edu_degree: "Licence en informatique &amp; mathématiques",
    edu_badge: "Mention très bien · Major de promotion",
    elsewhere: "Ailleurs",
    link_email: "E-mail",
    onmymind: "Dans mes pensées",
    reading:
      "Lectures récentes",
    p1_meta:
      "DeepSeek-R1-14B, affiné, avec un graphe de connaissances Neo4j sur 50 000 publications",
    p1_why:
      "Jusqu'où peut-on pousser un petit modèle ? Celui-ci fait 14B, affiné sur 2 500 articles et relié à un graphe de connaissances de 50 000 autres, et dans son domaine il dépasse un modèle de 670B. Si cela se généralise, la question intéressante n'est plus quel modèle de pointe on loue, mais ce que l'on peut faire tourner sur la machine devant soi.",
    p1_n1: "Base 14B <b>71,7 %</b>",
    p1_n2: "Affiné <b>82,9 %</b>",
    p1_n3: "Avec le graphe <b>94,8 %</b>",
    p1_n4: "Dépasse un modèle de <b>670B</b> dans son domaine",
    theme_dark: "Sombre",
    theme_light: "Clair",
    theme_paper: "Papier",
    theme_midnight: "Midnight canvas",
    paper_why_label:
      "Motivation",
    p1_title:
      "DeepSeek-Lattice-KG : un modèle de langage compact augmenté par graphe de connaissances pour la conception de structures en treillis",
    p2_title:
      "La ballade des agents LLM : le raisonnement philosophique appliqué à la chimie",
    p2_meta:
      "Sept prompts système inspirés de philosophes, testés sur trois modèles GPT avec ChemBench",
    p2_why:
      "Sept prompts, chacun écrit dans la voix d'un philosophe différent, et rien d'autre : aucun fait nouveau, aucune recherche documentaire, aucun affinage. Le questionnement socratique a fait passer un modèle de 51 % à 73 % sur un benchmark de chimie. Un bon rappel : beaucoup de ce qui ressemble à un problème de connaissances est un problème de structure du raisonnement, et le remède le moins cher est souvent la façon de poser la question.",
    p2_n1:
      "GPT-4o, avec Hume <b>57 → 68 %</b>",
    p2_n2:
      "GPT-5, avec Kant <b>86 → 91 %</b>",
    p2_n3:
      "GPT-5.1, avec Socrate <b>51 → 73 %</b>",
    p2_n4:
      "Sans recherche documentaire, sans affinage",
  },
  es: {
    intro: `${SECONDARY("Construyendo ")}${SOUS("Sous")}${SECONDARY(" y pensando en la ")}${AI("inteligencia asistiva (IA)")}`,
    exp: "Experiencia",
    founder: "Fundador",
    exp1_when: "ago 2026 - ahora",
    mle: '<span class="mle-full">Ingeniero de Machine Learning</span><span class="mle-abbr">Ingeniero de ML</span>',
    exp2_when: "sept 2021 - dic 2025",
    certs: "Certificación(es) &amp; Contribución(es)",
    cert_contributor: "Colaborador",
    cert_unsplash_note: "Fotografía con licencia abierta, más de 1000 visitas.",
    education: "Formación",
    edu_degree: "Lic. en Informática &amp; Matemáticas",
    edu_badge: "Sobresaliente · Mejor estudiante de la promoción",
    elsewhere: "En otros lugares",
    link_email: "Correo",
    onmymind: "En mi mente",
    reading:
      "Lecturas recientes",
    p1_meta:
      "DeepSeek-R1-14B, ajustado, con un grafo de conocimiento Neo4j sobre 50.000 publicaciones",
    p1_why:
      "¿Hasta dónde se puede llevar un modelo pequeño? Este tiene 14B, está ajustado con 2.500 artículos y conectado a un grafo de conocimiento de otros 50.000, y en su campo supera a uno de 670B. Si eso se generaliza, la pregunta interesante deja de ser qué modelo de frontera alquilas y pasa a ser qué puedes ejecutar en la máquina que tienes delante.",
    p1_n1: "Base 14B <b>71,7 %</b>",
    p1_n2: "Ajustado <b>82,9 %</b>",
    p1_n3: "Con el grafo <b>94,8 %</b>",
    p1_n4: "Supera a un modelo de <b>670B</b> en su propio dominio",
    theme_dark: "Oscuro",
    theme_light: "Claro",
    theme_paper: "Papel",
    theme_midnight: "Midnight canvas",
    paper_why_label:
      "Motivación",
    p1_title:
      "DeepSeek-Lattice-KG: un modelo de lenguaje compacto con grafo de conocimiento para el diseño de estructuras reticulares",
    p2_title:
      "La balada de los agentes LLM: razonamiento filosófico para la química",
    p2_meta:
      "Siete prompts de sistema inspirados en filósofos, probados en tres modelos GPT con ChemBench",
    p2_why:
      "Siete prompts, cada uno escrito con la voz de un filósofo distinto, y nada más: ningún dato nuevo, ninguna recuperación, ningún ajuste fino. El método socrático llevó a un modelo del 51 % al 73 % en un examen de química. Un buen recordatorio de que mucho de lo que parece un problema de conocimiento es un problema de estructura del razonamiento, y de que el arreglo más barato suele ser cómo preguntas.",
    p2_n1:
      "GPT-4o, con Hume <b>57 → 68 %</b>",
    p2_n2:
      "GPT-5, con Kant <b>86 → 91 %</b>",
    p2_n3:
      "GPT-5.1, con Sócrates <b>51 → 73 %</b>",
    p2_n4:
      "Sin recuperación, sin ajuste fino",
  },
  it: {
    intro: `${SECONDARY("Sto costruendo ")}${SOUS("Sous")}${SECONDARY(" e pensando all’")}${AI("intelligenza assistiva (IA)")}`,
    exp: "Esperienza",
    founder: "Fondatore",
    exp1_when: "ago 2026 - oggi",
    mle: '<span class="mle-full">Ingegnere Machine Learning</span><span class="mle-abbr">Ingegnere ML</span>',
    exp2_when: "set 2021 - dic 2025",
    certs: "Certificazione/i &amp; Contributo/i",
    cert_contributor: "Collaboratore",
    cert_unsplash_note:
      "Fotografia con licenza aperta, oltre 1.000 visualizzazioni.",
    education: "Istruzione",
    edu_degree: "Laurea in Informatica &amp; Matematica",
    edu_badge: "Lode · Miglior laureato del corso",
    elsewhere: "Altrove",
    link_email: "E-mail",
    onmymind: "Nei miei pensieri",
    reading:
      "Letture recenti",
    p1_meta:
      "DeepSeek-R1-14B, messo a punto, con un grafo di conoscenza Neo4j su 50.000 pubblicazioni",
    p1_why:
      "Fin dove si può spingere un modello piccolo? Questo è da 14B, messo a punto su 2.500 articoli e collegato a un grafo di conoscenza di altri 50.000, e nel suo campo batte un modello da 670B. Se vale in generale, la domanda interessante smette di essere quale modello di frontiera affitti e diventa cosa riesci a far girare sulla macchina che hai davanti.",
    p1_n1: "Base 14B <b>71,7%</b>",
    p1_n2: "Messo a punto <b>82,9%</b>",
    p1_n3: "Con il grafo <b>94,8%</b>",
    p1_n4: "Batte un modello da <b>670B</b> nel suo dominio",
    theme_dark: "Scuro",
    theme_light: "Chiaro",
    theme_paper: "Carta",
    theme_midnight: "Midnight canvas",
    paper_why_label:
      "Motivazione",
    p1_title:
      "DeepSeek-Lattice-KG: un modello linguistico compatto con grafo di conoscenza per la progettazione di strutture reticolari",
    p2_title:
      "La ballata degli agenti LLM: ragionamento filosofico per la chimica",
    p2_meta:
      "Sette prompt di sistema ispirati a filosofi, provati su tre modelli GPT con ChemBench",
    p2_why:
      "Sette prompt, ciascuno scritto nella voce di un filosofo diverso, e nulla più: nessun fatto nuovo, nessun recupero, nessuna messa a punto. Il metodo socratico ha portato un modello dal 51% al 73% su una prova di chimica. Un buon promemoria: molto di ciò che sembra un problema di conoscenza è un problema di struttura del ragionamento, e la correzione più economica è di solito il modo in cui chiedi.",
    p2_n1:
      "GPT-4o, con Hume <b>57 → 68%</b>",
    p2_n2:
      "GPT-5, con Kant <b>86 → 91%</b>",
    p2_n3:
      "GPT-5.1, con Socrate <b>51 → 73%</b>",
    p2_n4:
      "Senza recupero, senza messa a punto",
  },
  de: {
    intro: `${SECONDARY("Ich baue ")}${SOUS("Sous")}${SECONDARY(" und denke über ")}${AI("assistive Intelligenz (KI)")}${SECONDARY(" nach")}`,
    exp: "Erfahrung",
    founder: "Gründer",
    exp1_when: "Aug. 2026 - heute",
    mle: '<span class="mle-full">Machine-Learning-Ingenieur</span><span class="mle-abbr">ML-Ingenieur</span>',
    exp2_when: "Sep. 2021 - Dez. 2025",
    certs: "Zertifikat(e) &amp; Beiträge",
    cert_contributor: "Mitwirkender",
    cert_unsplash_note: "Frei lizenzierte Fotografie, über 1.000 Aufrufe.",
    education: "Ausbildung",
    edu_degree: "B.Sc. Informatik &amp; Mathematik",
    edu_badge: "Mit Auszeichnung · Jahrgangsbester",
    elsewhere: "Anderswo",
    link_email: "E-Mail",
    onmymind: "Was mich beschäftigt",
    reading:
      "Zuletzt gelesen",
    p1_meta:
      "DeepSeek-R1-14B, feinabgestimmt, mit einem Neo4j-Wissensgraphen über 50.000 Publikationen",
    p1_why:
      "Wie weit lässt sich ein kleines Modell treiben? Dieses hat 14B, ist auf 2.500 Arbeiten feinabgestimmt und an einen Wissensgraphen aus 50.000 weiteren angebunden, und in seinem Feld schlägt es ein Modell mit 670B. Gilt das allgemein, lautet die interessante Frage nicht mehr, welches Spitzenmodell man mietet, sondern was auf dem Rechner vor einem läuft.",
    p1_n1: "Basis 14B <b>71,7 %</b>",
    p1_n2: "Feinabgestimmt <b>82,9 %</b>",
    p1_n3: "Mit dem Graphen <b>94,8 %</b>",
    p1_n4: "Schlägt ein <b>670B</b>-Modell in dessen Domäne",
    theme_dark: "Dunkel",
    theme_light: "Hell",
    theme_paper: "Papier",
    theme_midnight: "Midnight canvas",
    paper_why_label:
      "Motivation",
    p1_title:
      "DeepSeek-Lattice-KG: ein kompaktes Sprachmodell mit Wissensgraph-Augmentierung für den Entwurf von Gitterstrukturen",
    p2_title:
      "Die Ballade der LLM-Agenten: philosophisches Denken für die Chemie",
    p2_meta:
      "Sieben von Philosophen inspirierte System-Prompts, getestet an drei GPT-Modellen auf ChemBench",
    p2_why:
      "Sieben Prompts, jeder in der Stimme eines anderen Philosophen, und sonst nichts: keine neuen Fakten, kein Retrieval, kein Feintuning. Sokratisches Fragen brachte ein Modell in einem Chemie-Benchmark von 51 % auf 73 %. Eine gute Erinnerung daran, dass vieles, was nach einem Wissensproblem aussieht, ein Problem der Denkstruktur ist, und dass die billigste Lösung meist die Art des Fragens ist.",
    p2_n1:
      "GPT-4o, mit Hume <b>57 → 68 %</b>",
    p2_n2:
      "GPT-5, mit Kant <b>86 → 91 %</b>",
    p2_n3:
      "GPT-5.1, mit Sokrates <b>51 → 73 %</b>",
    p2_n4:
      "Kein Retrieval, kein Feintuning",
  },
};

// ---- preferences state ----
// Shared with the inline <head> script in index.html, which reads theme out of
// the same key before first paint. Changing STORE_KEY means changing it there.
const STORE_KEY = "ok.prefs";

/** The system's preference, used only until an explicit choice is made. */
function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

let state = { lang: "en", theme: null };
try {
  const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
  if (LANGS.some((l) => l.code === saved.lang)) state.lang = saved.lang;
  if (THEMES.some((t) => t.code === saved.theme)) state.theme = saved.theme;
} catch (e) {
  /* ignore */
}

function t(key) {
  const L = I18N[state.lang] || I18N.en;
  return L[key] ?? I18N.en[key] ?? "";
}

function buildSelects() {
  const langSel = document.getElementById("langSel");
  langSel.innerHTML = LANGS.map(
    (l) => `<option value="${l.code}">${l.label}</option>`,
  ).join("");
  langSel.value = state.lang;
  langSel.onchange = () => {
    state.lang = langSel.value;
    save();
    render();
  };

  const themeSel = document.getElementById("themeSel");
  if (!themeSel) return;
  themeSel.onchange = () => {
    state.theme = themeSel.value;
    save();
    applyTheme();
  };
}

/**
 * Writes the chosen theme onto <html>, or clears it so the system's preference
 * takes over again. The inline script in <head> does the same thing one frame
 * earlier on a cold load; this is the path for a live change.
 */
function applyTheme() {
  const root = document.documentElement;
  if (state.theme) root.dataset.theme = state.theme;
  else delete root.dataset.theme;

  const sel = document.getElementById("themeSel");
  if (sel) sel.value = state.theme || systemTheme();

  syncPixels();
}

// ===================================================================
//  Feature: drifting pixels, midnight canvas only
//
//  The texture Sous's own site carries, and the reason that theme exists here
//  at all. On paper or light stock a field of glowing dots is decoration
//  borrowed from a different design, so it runs on one theme and stops on the
//  other three: no canvas painting behind a page nobody is looking at it
//  through.
// ===================================================================
const PX_COUNT = 70;
const PX_SPEED = 0.05; // px per ms, before each dot's own multiplier

let pxRaf = 0;
let pxDots = null;

/** Starts the field on midnight canvas and stops it everywhere else. */
function syncPixels() {
  const on = document.documentElement.dataset.theme === "midnight-canvas";
  if (on && !REDUCE_MOTION) startPixels();
  else stopPixels();
}

function stopPixels() {
  if (pxRaf) cancelAnimationFrame(pxRaf);
  pxRaf = 0;
  pxDots = null;
  const c = document.getElementById("px");
  if (c) {
    const ctx = c.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, c.width, c.height);
  }
}

function startPixels() {
  const c = document.getElementById("px");
  if (!c || pxRaf) return;
  const ctx = c.getContext("2d");
  if (!ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0;
  let h = 0;

  const size = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  size();
  window.addEventListener("resize", () => {
    if (pxRaf) size();
  });

  pxDots = Array.from({ length: PX_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    // Two sizes and a spread of speeds, so the field has depth rather than
    // reading as one sheet of dots sliding sideways.
    r: Math.random() < 0.22 ? 1.6 : 1,
    v: 0.3 + Math.random() * 1.4,
    a: 0.1 + Math.random() * 0.3,
    drift: (Math.random() - 0.5) * 0.4,
  }));

  let last = 0;
  const frame = (now) => {
    pxRaf = requestAnimationFrame(frame);
    // A hidden tab still fires rAF in some browsers, and a first frame with no
    // previous timestamp would jump the whole field.
    const dt = last ? Math.min(now - last, 64) : 16;
    last = now;
    if (document.hidden) return;

    ctx.clearRect(0, 0, w, h);
    for (const d of pxDots) {
      d.y -= PX_SPEED * d.v * dt;
      d.x += d.drift * (dt / 16);
      if (d.y < -4) {
        d.y = h + 4;
        d.x = Math.random() * w;
      }
      if (d.x < -4) d.x = w + 4;
      if (d.x > w + 4) d.x = -4;

      ctx.globalAlpha = d.a;
      ctx.fillStyle = "#b6d9fc";
      ctx.fillRect(d.x, d.y, d.r, d.r);
    }
    ctx.globalAlpha = 1;
  };
  pxRaf = requestAnimationFrame(frame);
}

function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch (e) {
    /* ignore */
  }
}

function render() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.getElementById("langSel").value = state.lang;

  // The theme names are translated too, so the options are rebuilt with the
  // rest of the copy rather than once at boot.
  const themeSel = document.getElementById("themeSel");
  if (themeSel) {
    themeSel.innerHTML = THEMES.map(
      (th) => `<option value="${th.code}">${t(th.key)}</option>`,
    ).join("");
    themeSel.value = state.theme || systemTheme();
  }

  // Built by script rather than marked up, so it has no [data-i18n] for the
  // sweep above to find.
  renderPaper();
}


// ===================================================================
//  The decode
//
//  Both cycling sections resolve their new text out of noise rather than
//  sliding it in, which is the gesture Sous's own site uses for its wordmark.
//  It is the one piece of family resemblance between this page and the product.
//
//  Text nodes rather than a single string: the markup carries links, a cite and
//  a bold or two, and scrambling the HTML would scramble the tags with it.
// ===================================================================
const CIPHER = "01!<>-_\\/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ$%&@";
const DECODE_MS = 560;

/**
 * Resolves every text node under an element out of cipher noise.
 *
 * @param {HTMLElement} root Element whose text should decode in.
 * @param {number} [ms] How long the whole reveal takes.
 */
function decodeIn(root, ms) {
  if (REDUCE_MOTION) return;

  const parts = [];
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walk.nextNode())) {
    if (n.nodeValue.trim()) parts.push({ node: n, text: n.nodeValue });
  }
  if (!parts.length) return;

  // Each character gets its own moment inside the run, so the text resolves
  // left to right instead of the whole block clearing at once.
  const total = parts.reduce((sum, p) => sum + p.text.length, 0);
  const span = ms || DECODE_MS;
  let seen = 0;
  for (const p of parts) {
    p.at = p.text.split("").map((_, i) => ((seen + i) / total) * span * 0.7);
    seen += p.text.length;
  }

  const started = performance.now();
  const tick = (now) => {
    const t = now - started;
    let settled = true;
    for (const p of parts) {
      let out = "";
      for (let i = 0; i < p.text.length; i++) {
        const ch = p.text[i];
        if (ch === " " || t >= p.at[i] + span * 0.3) { out += ch; continue; }
        settled = false;
        out += t < p.at[i] ? " " : CIPHER[(Math.random() * CIPHER.length) | 0];
      }
      p.node.nodeValue = out;
    }
    if (settled) { for (const p of parts) p.node.nodeValue = p.text; return; }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// ===================================================================
//  Feature: "On my mind" auto-rotating quotes
// ===================================================================
const REDUCE_MOTION = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const QUOTE_INTERVAL = 8000;

function quoteHTML(q) {
  const cite = [q.author, q.year].filter(Boolean).join(", ");
  return `“${q.text}”<cite>• ${cite}</cite>`;
}

function initQuotes() {
  const el = document.getElementById("quote");
  if (!el || !QUOTES.length) return;
  let i = 0;
  let paused = false;

  el.innerHTML = quoteHTML(QUOTES[0]);
  decodeIn(el);

  function advance() {
    if (QUOTES.length < 2) return;
    const next = (i + 1) % QUOTES.length;
    if (REDUCE_MOTION) {
      i = next;
      el.innerHTML = quoteHTML(QUOTES[i]);
      return;
    }
    i = next;
    el.innerHTML = quoteHTML(QUOTES[i]);
    decodeIn(el);
  }

  if (QUOTES.length > 1) {
    setInterval(() => {
      if (!paused && !document.hidden) advance();
    }, QUOTE_INTERVAL);
  }

  // pause while the visitor is reading / interacting
  const section = el.closest("section") || el;
  ["mouseenter", "focusin"].forEach((ev) =>
    section.addEventListener(ev, () => (paused = true)),
  );
  ["mouseleave", "focusout"].forEach((ev) =>
    section.addEventListener(ev, () => (paused = false)),
  );
}

// ===================================================================
//  Feature: "Recent reads"
//
//  Stacked, not cycled. Two papers is a list; hiding one behind a timer means
//  the reader sees whichever happened to be up, and the one they wanted is the
//  one they cannot get to. The disclosure already keeps each entry short.
// ===================================================================
function paperHTML(p) {
  const nums = [];
  for (let i = 1; i <= (p.nums || 0); i++) nums.push(`<span>${t(`${p.key}_n${i}`)}</span>`);

  return `
    <article class="paper">
      <div class="paper-title">
        <a class="cert-link" href="${p.url}" target="_blank" rel="noopener noreferrer">
          ${t(`${p.key}_title`)}${LINK_ICON}
        </a>
      </div>
      <div class="paper-meta">${t(`${p.key}_meta`)}</div>
      <details class="paper-more">
        <summary>
          <svg class="paper-bulb" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
          <span>${t("paper_why_label")}</span>
          <svg class="paper-chev" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </summary>
        <div class="paper-body">
          <p class="paper-why">${t(`${p.key}_why`)}</p>
          ${nums.length ? `<div class="paper-nums">${nums.join("")}</div>` : ""}
        </div>
      </details>
    </article>`;
}

/** Repaints the stack in whatever language is selected, keeping what is open. */
function renderPaper() {
  const el = document.getElementById("paper");
  if (!el || !PAPERS.length) return;
  const open = [...el.querySelectorAll("details")].map((d) => d.open);
  el.innerHTML = PAPERS.map(paperHTML).join("");
  el.querySelectorAll("details").forEach((d, i) => { d.open = !!open[i]; });
}

function initPapers() {
  const el = document.getElementById("paper");
  if (!el || !PAPERS.length) return;
  renderPaper();
  decodeIn(el);
}

// ===================================================================
//  Feature: select a word to light up every other occurrence of it
//  on the page. No counting, no toast - just the highlight.
// ===================================================================
function clearHighlight() {
  if (window.CSS && CSS.highlights) CSS.highlights.delete("occurrence");
}

function highlightWord(word) {
  if (!window.CSS || !CSS.highlights || typeof Highlight === "undefined") return;
  const root = document.querySelector(".wrap");
  if (!root) return;
  // lookbehind keeps "art" from matching inside "start"; older engines that
  // reject it simply get no highlighting
  let re;
  try {
    re = new RegExp(
      "(?<![\\p{L}\\p{N}])" +
        word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
        "(?![\\p{L}\\p{N}])",
      "giu",
    );
  } catch (e) {
    return;
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const ranges = [];
  let node;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue;
    if (!text) continue;
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      const range = document.createRange();
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      ranges.push(range);
      if (ranges.length > 400) break;
    }
  }
  if (ranges.length) CSS.highlights.set("occurrence", new Highlight(...ranges));
}

function initSelection() {
  const single = /^[\p{L}\p{N}][\p{L}\p{N}'-]*$/u;

  const handle = () => {
    const sel = window.getSelection();
    const raw = sel ? sel.toString().trim() : "";
    if (!raw || !single.test(raw) || raw.length < 3) {
      clearHighlight();
      return;
    }
    highlightWord(raw.toLowerCase());
  };

  document.addEventListener("mouseup", () => setTimeout(handle, 10));
  document.addEventListener("touchend", () => setTimeout(handle, 60), {
    passive: true,
  });
}

// ---- boot ----
document.getElementById("year").textContent = new Date().getFullYear();
buildSelects();
render();
applyTheme();
initQuotes();
initPapers();
initSelection();
