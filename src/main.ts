import "./portfolio.css";
import {
  createIcons,
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Github,
  Gitlab,
  Linkedin,
  Download,
  Menu,
  X,
  Globe2,
  MapPin,
  Layers,
  Code2,
  Database,
  ExternalLink,
} from "lucide";
import { projects, categories, type Category } from "./projects";

const icon = (name: string) =>
  `<i data-lucide="${name}" aria-hidden="true"></i>`;
const external = 'target="_blank" rel="noopener noreferrer"';
const base = import.meta.env.BASE_URL;
const email = "gaetan.tiazara@ensg.eu";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <a class="skip-link" href="#projets">Aller au contenu</a>
  <header class="header"><div class="container header-inner">
    <a class="wordmark" href="#accueil" aria-label="Gaëtan Tiazara, accueil"><span class="monogram">gt<span>.</span></span><span class="wordmark-label">GAËTAN TIAZARA<span>GÉOMATIQUE & DÉVELOPPEMENT</span></span></a>
    <button class="menu-toggle icon-button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="navigation">${icon("menu")}</button>
    <nav id="navigation" aria-label="Navigation principale"><a class="nav-link active" href="#projets">Projets</a><a class="nav-link" href="#parcours">Parcours</a><a class="nav-link" href="#competences">Compétences</a><a class="nav-contact" href="#contact">Échangeons ${icon("arrow-up-right")}</a></nav>
  </div></header>
  <main id="accueil">
    <section class="intro container" aria-labelledby="intro-title">
      <div class="eyebrow"><span class="small-cross">+</span> ENTRE DONNÉES, CODE ET TERRITOIRES</div>
      <h1 id="intro-title">Gaëtan Tiazara<span class="green">.</span></h1>
      <div class="intro-bottom"><div><p class="intro-role">La géomatique comme terrain de jeu.<br>Le développement comme langage.</p><p class="intro-description">Des données géographiques aux applications qui leur donnent vie.<br class="desktop-break"> Découvrez mes projets à la croisée des sciences et du numérique.</p></div><div class="intro-aside"><span class="coordinate">20°53′ S &nbsp; 55°27′ E</span><span>${icon("map-pin")} De La Réunion à l’ENSG</span><a href="#projets">Explorer mes projets ${icon("arrow-down")}</a></div></div>
      <div class="intro-foot"><span>GÉOMATIQUE <b>×</b> DÉVELOPPEMENT <b>×</b> VISUALISATION</span><span>PORTFOLIO / 2022 — 2023</span></div>
    </section>
    <section class="projects-section" id="projets" aria-labelledby="projects-title"><div class="container">
      <div class="section-heading"><div><span class="eyebrow section-number">01 / EXPLORATIONS</span><h2 id="projects-title">Une idée, du code,<br>un projet concret<span class="green">.</span></h2></div><p>Explorer, comprendre, construire.<br>Une sélection de projets réalisés à l’ENSG.</p></div>
      <div class="filter-bar"><div class="filters" role="group" aria-label="Filtrer les projets par domaine">${categories.map((category, index) => `<button class="filter${index === 0 ? " selected" : ""}" data-category="${category}" aria-pressed="${index === 0}">${category}${index === 0 ? `<span>${projects.length.toString().padStart(2, "0")}</span>` : ""}</button>`).join("")}</div><span class="project-count" aria-live="polite">${projects.length} projets</span></div>
      <div class="project-grid" id="project-grid"></div>
      <div class="projects-foot"><span>${icon("gitlab")} Le code est aussi une façon de partager.</span><a href="https://gitlab.com/GTiazara" ${external}>Tous mes dépôts GitLab ${icon("arrow-up-right")}</a></div>
    </div></section>
    <section class="about-section container" id="parcours" aria-labelledby="about-title">
      <div class="about-intro"><span class="eyebrow section-number">02 / PARCOURS</span><h2 id="about-title">La curiosité<br>comme boussole<span class="green">.</span></h2><p>Originaire de La Réunion, mon parcours relie les sciences de la Terre, l’information géographique et la conception de systèmes d’information.</p><p>À l’ENSG, j’ai exploré toute la chaîne de la donnée : l’acquérir, l’analyser, la représenter et la rendre accessible.</p><a class="text-link" href="https://gtiazara.gitlab.io/portfolio/cv" ${external}>Consulter mon CV ${icon("download")}</a></div>
      <ol class="timeline"><li><span class="timeline-date">2020 — 2023</span><h3>ENSG Géomatique</h3><span class="timeline-subtitle">Cycle ingénieur · Champs-sur-Marne</span><p>Spécialisation en technologies des systèmes d’information. SIG, développement logiciel, architectures distribuées, visualisation 3D et gestion de projet agile.</p><span class="timeline-tag">Géomatique & systèmes d’information</span></li><li><span class="timeline-date">2018 — 2020</span><h3>Classe préparatoire BCPST</h3><span class="timeline-subtitle">Lycée Roland Garros · Le Tampon, La Réunion</span><p>Biologie, chimie, physique et sciences de la Terre. Une formation scientifique qui nourrit mon approche des données et des territoires.</p></li><li><span class="timeline-date">2018</span><h3>Baccalauréat scientifique</h3><span class="timeline-subtitle">Lycée Lislet Geoffroy · Saint-Denis, La Réunion</span><p>Spécialité sciences de la vie et de la Terre · Mention bien.</p></li></ol>
    </section>
    <section class="skills-section" id="competences" aria-labelledby="skills-title"><div class="container"><div class="section-heading"><div><span class="eyebrow section-number">03 / SAVOIR-FAIRE</span><h2 id="skills-title">Des outils pour<br>donner du sens<span class="green">.</span></h2></div><p>Un socle scientifique.<br>Une approche transversale du numérique.</p></div><div class="skills-grid">
      ${[
    {
      icon: "layers",
      title: "Géomatique & données",
      description:
        "Analyser les territoires et comprendre les données spatiales.",
      tools: [
        "QGIS",
        "ArcGIS",
        "GDAL / OGR",
        "Télédétection",
        "Géostatistiques",
      ],
    },
    {
      icon: "code-2",
      title: "Développement",
      description:
        "Concevoir des applications, du navigateur au logiciel métier.",
      tools: [
        "Python",
        "JavaScript",
        "Vue.js",
        "Node.js",
        "Java / Spring",
        "C++ / Qt",
      ],
    },
    {
      icon: "globe-2",
      title: "Visualisation & 3D",
      description:
        "Rendre visible l’information, de la carte au jumeau numérique.",
      tools: ["OpenGL", "Three.js", "WebGL", "Cartographie", "BIM"],
    },
    {
      icon: "database",
      title: "Systèmes & méthodes",
      description:
        "Construire ensemble avec des méthodes et des outils adaptés.",
      tools: ["Git", "Docker", "CI/CD", "Scrum", "NoSQL", "Raspberry Pi"],
    },
  ]
    .map(
      (skill) =>
        `<article class="skill"><span class="skill-icon">${icon(skill.icon)}</span><h3>${skill.title}</h3><p>${skill.description}</p><div class="skill-tags">${skill.tools.map((tool) => `<span>${tool}</span>`).join("")}</div></article>`,
    )
    .join("")}
    </div></div></section>
    <section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="container"><div class="eyebrow">04 / ET LA SUITE ?</div><div class="contact-main"><div><h2 id="contact-title">Les belles idées<br>commencent par<br>une conversation<span>.</span></h2><p>Géomatique, développement ou simplement envie d’échanger ?</p><a class="email-link" href="mailto:${email}">${email} ${icon("arrow-up-right")}</a></div><a class="contact-orbit" href="mailto:${email}" aria-label="Envoyer un e-mail à Gaëtan Tiazara">${icon("arrow-up-right")}</a></div><div class="contact-social"><a href="https://github.com/GTiazara" ${external}>${icon("github")} GitHub ${icon("arrow-up-right")}</a><a href="https://gitlab.com/GTiazara" ${external}>${icon("gitlab")} GitLab ${icon("arrow-up-right")}</a><a href="https://fr.linkedin.com/in/tiazara-ga%C3%ABtan-887a95226/" ${external}>${icon("linkedin")} LinkedIn ${icon("arrow-up-right")}</a></div></div></section>
  </main>
  <footer class="footer container"><a class="monogram" href="#accueil" aria-label="Retour à l’accueil">gt<span>.</span></a><span>© ${new Date().getFullYear()} Gaëtan Tiazara</span><a href="#accueil">Retour en haut ${icon("arrow-up")}</a></footer>
  <dialog class="project-dialog" aria-labelledby="dialog-title"><button class="dialog-close icon-button" aria-label="Fermer la fiche projet">${icon("x")}</button><div id="dialog-content"></div></dialog>
`;

const refreshIcons = () =>
  createIcons({
    icons: {
      ArrowUpRight,
      ArrowDown,
      ArrowUp,
      Github,
      Gitlab,
      Linkedin,
      Download,
      Menu,
      X,
      Globe2,
      MapPin,
      Layers,
      Code2,
      Database,
      ExternalLink,
    },
    attrs: { "stroke-width": 1.6 },
  });
const grid = document.querySelector<HTMLDivElement>("#project-grid")!;
const dialog = document.querySelector<HTMLDialogElement>(".project-dialog")!;
let previousFocus: HTMLElement | null = null;

function renderProjects(category: Category = "Tous les projets") {
  const visible = projects.filter(
    (project) =>
      category === "Tous les projets" || project.categories.includes(category),
  );
  grid.innerHTML = visible
    .map(
      (project) =>
        `<article class="project-card"><button class="project-image-button ${project.visual}" data-project="${project.id}" aria-label="Découvrir le projet ${project.title}"><img src="${base}images/${project.image}" alt="${project.imageAlt}" loading="lazy" width="900" height="560"><span class="image-label">${project.label}</span><span class="image-open">${icon("arrow-up-right")}</span></button><div class="project-meta"><span>${project.domain}</span><span>${project.year}</span></div><button class="project-title" data-project="${project.id}"><h3>${project.title}</h3>${icon("arrow-up-right")}</button><p class="project-description">${project.summary}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div></article>`,
    )
    .join("");
  document.querySelector(".project-count")!.textContent =
    `${visible.length} projet${visible.length > 1 ? "s" : ""}`;
  refreshIcons();
}

document.querySelectorAll<HTMLButtonElement>(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("selected", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    renderProjects(button.dataset.category as Category);
  });
});

grid.addEventListener("click", (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>(
    "[data-project]",
  );
  const project = projects.find((item) => item.id === button?.dataset.project);
  if (!project) return;
  previousFocus = button;
  document.querySelector("#dialog-content")!.innerHTML =
    `<img class="dialog-image ${project.visual}" src="${base}images/${project.image}" alt="${project.imageAlt}" width="900" height="560"><div class="dialog-body"><span class="eyebrow">${project.domain} / ${project.year}</span><h2 id="dialog-title">${project.title}</h2><p>${project.description}</p><div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><div class="dialog-links">${project.repository ? `<a class="button-primary" href="${project.repository}" ${external}>Voir le code ${icon("arrow-up-right")}</a>` : ""}${project.demo ? `<a class="text-link" href="${project.demo}" ${external}>Voir la démo ${icon("external-link")}</a>` : ""}<a class="text-link" href="${project.source}" ${external}>Fiche d’origine ${icon("arrow-up-right")}</a></div></div>`;
  refreshIcons();
  dialog.showModal();
  document.body.classList.add("dialog-open");
});

document
  .querySelector(".dialog-close")!
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  previousFocus?.focus();
});

const menuToggle = document.querySelector<HTMLButtonElement>(".menu-toggle")!;
const navigation = document.querySelector<HTMLElement>("#navigation")!;
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  navigation.classList.remove("open");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Fermer le menu" : "Ouvrir le menu",
  );
  navigation.classList.toggle("open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (dialog.open) {
    event.preventDefault();
    dialog.close();
  }
  if (menuToggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuToggle.focus();
  }
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        document
          .querySelectorAll(".nav-link")
          .forEach((link) =>
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`,
            ),
          );
    });
  },
  { rootMargin: "-15% 0px -55% 0px" },
);
document
  .querySelectorAll("#projets, #parcours, #competences, #contact")
  .forEach((section) => observer.observe(section));
renderProjects();
