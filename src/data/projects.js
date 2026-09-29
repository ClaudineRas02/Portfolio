import portfolioImage from "../assets/projects/portfolio.png";
import certManagerImage from "../assets/projects/certmanager_mobile.png";
import numicampImage from "../assets/projects/numicamp.png";
import popquizzImage from "../assets/projects/popquizz.png";
export const projects = [
  {
    id: "devops-portfolio",
    image: portfolioImage,
    alt: "Portfolio personnel avec projets DevOps et full-stack",
    title: "Portfolio personnel",
    challenge:
      "Construire un portfolio personnel soigné, rapide et clair, qui présente au même endroit mes compétences en développement, DevOps et sécurité.",
    contribution: [
      "Création d'une interface responsive avec React et Vite, sections réutilisables, animations d'apparition et assets visuels optimisés.",
      "Ajout de contrôles qualité automatisés avec GitHub Actions, tests, linting et structure adaptée à SonarCloud.",
      "Organisation des compétences, certifications, distinctions et projets dans un parcours clair avec une navigation fluide entre les sections.",
    ],
    impact: [
      "Un portfolio prêt à évoluer au fil des nouveaux projets et certifications.",
      "Meilleures performances grâce au chargement lazy des sections.",
    ],
    githubUrl: "https://github.com/ClaudineRas02/Portfolio",
    chips: ["React", "TailwindCSS", "GitHub Actions", "SonarCloud", "Vercel"],
  },
  {
    id: "numicamp-platform",
    image: numicampImage,
    alt: "Tableau de bord de la plateforme d'orientation numérique NumiCamp",
    title: "Plateforme NumiCamp",
    challenge:
      "Construire une plateforme backend scalable pour aider les jeunes à découvrir les métiers du numérique, les organisations et les opportunités d'apprentissage via un système centralisé et porté par la communauté.",
    contribution: [
      "Conception et développement de fonctionnalités backend avec Node.js, Express et MySQL, en architecture en couches (routes, services, modèles, middleware).",
      "Mise en place d'API REST pour l'authentification, les publications, les organisations, les commentaires, les retours utilisateurs et la gestion de profils.",
      "Renforcement de la fiabilité backend avec les standards ESLint, des tests unitaires Jest, une meilleure gestion d'erreurs et l'analyse statique SonarCloud.",
      "Création de pipelines CI/CD avec GitLab CI pour le linting, les tests, l'analyse qualité et la génération d'images Docker.",
      "Travail sur une infrastructure orientée déploiement avec load balancing HAProxy, keepalived, nginx et NFS dans un environnement de lab réseau Linux.",
    ],
    impact: [
      "Meilleure maîtrise du développement backend sécurisé, surtout l'authentification JWT, le contrôle d'accès par rôles et les routes API protégées.",
      "Collaboration backend/frontend plus fluide grâce à l'intégration d'API, aux tests et au débogage.",
      "Exploration d'environnements réseau Linux avec HAProxy et stockage partagé, avec une vraie compréhension des enjeux de synchronisation, de cohérence et de gestion multi-serveurs.",
    ],
    githubUrl: "https://gitlab.com/numicamp-infra",
    chips: [
      "Node.js",
      "Express",
      "MySQL",
      "Jest",
      "ESLint",
      "SonarCloud",
      "GitLab CI/CD",
      "Docker",
      "HAProxy",
      "Load balancing",
      "HTTPS",
    ],
  },
  {
    id: "certmanager-mobile",
    image: certManagerImage,
    alt: "Application mobile de gestion de certificats SSL/TLS",
    title: "Gestionnaire de certificats SSL/TLS",
    challenge:
      "Les workflows de certificats deviennent vite difficiles à suivre quand la génération, l'expiration, la révocation et la hiérarchie des CA sont gérées manuellement.",
    contribution: [
      "Développement d'API backend pour générer des certificats SSL/TLS via l'intégration d'OpenSSL avec Node.js et Express.",
      "Mise en place de la gestion des Root CA et Intermediate CA, des workflows de signature, de l'import/export et de l'upload/download de fichiers de certificats.",
      "Création de fonctionnalités pour lister les certificats, visualiser la chaîne de confiance CA, gérer les révocations et suivre les expirations avec PostgreSQL.",
    ],
    impact: [
      "Meilleure compréhension des certificats TLS/SSL, de l'architecture PKI, de la révocation, des workflows CSR et des chaînes de confiance CA.",
      "Expérience pratique avec OpenSSL et Node.js pour générer, signer, stocker et gérer des certificats via des API backend.",
    ],
    githubUrl: "https://github.com/ClaudineRas02/pki-backend",
    chips: ["React Native", "Node.js", "Express", "PostgreSQL", "OpenSSL"],
  },
  {
    id: "pop-quizz",
    image: popquizzImage,
    alt: "Application de quiz Pop-Quizz avec son pipeline CI/CD et son déploiement automatisé",
    title: "Pop-Quizz",
    challenge:
      "Contribuer au développement d'une application de quiz utilisée par des utilisateurs réels, et mettre en place un workflow CI/CD traçable qui sépare la construction des versions de leur déploiement.",
    contribution: [
      "Participation au développement backend de l'application, en collaboration avec l'équipe, du code jusqu'à la mise en production.",
      "Mise en place de pipelines GitHub Actions avec linting, tests unitaires Jest et analyse statique SonarQube / SonarCloud avant chaque build.",
      "Construction d'images Docker versionnées par SHA de commit et publiées sur Docker Hub, pour relier chaque image au code qui l'a produite.",
      "Création d'un workflow de déploiement manuel (workflow_dispatch) qui transmet les versions choisies à Ansible pour déployer sur la VM.",
    ],
    impact: [
      "Application utilisée par une dizaine d'utilisateurs réels.",
      "Déploiements traçables et reproductibles : on sait à tout moment quelles versions du frontend et du backend sont en production.",
      "Séparation claire entre CI, registry et déploiement, avec une décision humaine explicite avant chaque mise en production.",
    ],
    githubUrl: "https://github.com/orgs/POP-QUIZZ/repositories",
    chips: [
      "Docker",
      "GitHub Actions",
      "Ansible",
      "Jest",
      "SonarCloud",
      "Linux",
    ],
  },
];
