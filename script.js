const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const toast = document.querySelector('[data-toast]');

const projectDetails = {
  'project-1': {
    title: 'Détection de visages avec Graph Neural Networks',
    text: 'Projet d exploration de la détection de visages à partir des relations contextuelles présentes dans une image.',
    items: ['Modélisation des relations entre éléments visuels.', 'Approche basée sur les Graph Neural Networks.', 'Mobilisation du Deep Learning et de la Computer Vision.', 'Résultats et métriques à documenter lorsque le projet sera finalisé.']
  },
  'project-2': {
    title: "Application d optimisation / Recherche Opérationnelle",
    text: 'Application Python avec interface graphique pour résoudre et visualiser des problèmes d optimisation et de graphes.',
    items: ['Programmation linéaire, Simplexe, Grand M et deux phases.', 'Branch & Bound pour les problèmes d optimisation combinatoire.', 'Dijkstra, Bellman-Ford, Kruskal et Floyd-Warshall.', 'Welsh-Powell et visualisation des solutions et graphes pondérés.']
  },
  'project-3': {
    title: 'TaskMe',
    text: 'Application web Full-Stack de gestion et de suivi des tâches.',
    items: ['Organisation et suivi des tâches.', 'Technologies et fonctionnalités détaillées à préciser.', 'Lien GitHub et démonstration à ajouter lorsqu ils seront disponibles.']
  },
  'project-4': {
    title: 'Plateforme Étudiants',
    text: 'Application web permettant la gestion de services académiques.',
    items: ['Centralisation de services destinés aux étudiants.', 'Fonctionnalités et technologies détaillées à préciser.', 'Lien GitHub et démonstration à ajouter lorsqu ils seront disponibles.']
  },
  'project-5': {
    title: 'Plateforme de gestion et de suivi des formations',
    text: 'Conception et développement d une plateforme web pour gérer et suivre les formations.',
    items: ['Frontend avec React.js et Next.js.', 'Backend avec Node.js et Express.js.', 'Conception et gestion de la base PostgreSQL.', 'Intégration de fonctionnalités IA et d un chatbot conversationnel avec LLM.']
  },
  'project-6': {
    title: "Site vitrine de l'entreprise ASRM",
    text: "Conception et développement d un site vitrine présentant les activités, les services et les coordonnées de l entreprise.",
    items: ['Développement et intégration des interfaces web.', 'React.js et Tailwind CSS pour le frontend.', 'Python (FastAPI / Django) et API REST.', 'Stage effectué au sein de SRM DT.']
  },
  'project-7': {
    title: 'Application web de gestion de location de voitures',
    text: 'Conception et développement d une application web pour le suivi du parc automobile et la gestion des locations.',
    items: ['Gestion et suivi du parc automobile.', 'Gestion des locations.', 'Stack MERN : MongoDB, Express.js, React.js et Node.js.', 'API REST.']
  },
  'project-8': {
    title: "Moteur d'analyse prédictive et traitement NLP",
    text: 'Développement de modèles NLP et de régression pour la classification automatique des requêtes et l estimation prédictive.',
    items: ['Modèles développés avec Python et Scikit-Learn.', 'API REST Node.js sécurisée par JWT pour l orchestration inter-services.', 'Interface avec Next.js.', 'Conteneurisation Docker et automatisation des builds et tests avec GitHub Actions.']
  },
  'project-9': {
    title: 'Pipeline Big Data et Computer Vision distribué',
    text: 'Pipeline de stockage distribué et d analyse d images construit autour d un cluster Hadoop multinœud.',
    items: ['Configuration de HDFS sous Docker.', 'Utilitaires Java pour interagir avec HDFS.', 'Intégration d un modèle Python d analyse d images avec OpenCV.', 'Automatisation des workflows CI/CD avec GitHub Actions et conteneurisation avec Docker Compose.']
  }
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 4200);
}

function closeMenu() {
  navMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.querySelector('.sr-only').textContent = 'Ouvrir le menu';
}

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Fermer le menu' : 'Ouvrir le menu';
});

document.querySelectorAll('.nav-menu a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !navMenu.classList.contains('is-open')) return;
  closeMenu();
  menuToggle.focus();
});

window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 20), { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('[data-filter]').forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((button) => button.classList.remove('is-active'));
    filterButton.classList.add('is-active');
    const selectedFilter = filterButton.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const shouldShow = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

const dialog = document.querySelector('[data-project-dialog]');
const dialogTitle = document.querySelector('#dialog-title');
const dialogContent = document.querySelector('[data-dialog-content]');

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projectDetails[button.dataset.project];
    dialogTitle.textContent = project.title;
    dialogContent.innerHTML = `<p>${project.text}</p><ul>${project.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    dialog.showModal();
  });
});

document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showToast('Placeholder : ajoutez votre URL ou votre fichier réel dans le README et le HTML.');
  });
});

document.querySelector('[data-contact-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Contact portfolio - ${formData.get('name')}`);
  const body = encodeURIComponent(`${formData.get('message')}\n\nRépondre à : ${formData.get('email')}`);
  window.location.href = `mailto:drissouchaghoui119@gmail.com?subject=${subject}&body=${body}`;
});
