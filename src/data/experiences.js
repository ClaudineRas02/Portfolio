import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: "devops-projects",
    role: "Projets d'ingénierie DevOps",
    company: "Lab personnel / Projets d'équipe",
    period: "2025 - aujourd'hui",
    summary:
      "Construction de workflows CI/CD sécurisés et de pipelines de déploiement reproductibles avec des outils orientés Linux. Focus sur la fiabilité, l'observabilité et l'automatisation entre environnements.",
    icon: Briefcase,
    highlights: [
      { title: "CI/CD", subtitle: "GitHub Actions pipelines" },
      { title: "Sécurité", subtitle: "Hardening & contrôles" },
      { title: "Observabilité", subtitle: "Monitoring & alertes" },
      { title: "Collaboration", subtitle: "Livraison en équipe" },
    ],
  },
  {
    id: "backend-systems",
    role: "Stage backend & systèmes",
    company: "Youth Computing",
    period: "sept. 2025 - déc. 2025",
    summary:
      "Conception de services backend et de composants d'infrastructure avec de solides bases en design système et bases de données. L'accent est mis sur une architecture propre et des services maintenables.",
    icon: Briefcase,
    highlights: [
      { title: "API backend", subtitle: "Architecture de services" },
      { title: "Automatisation", subtitle: "Scripts & outils" },
      { title: "Performance", subtitle: "Débogage & optimisation" },
      { title: "Travail d'équipe", subtitle: "Collaboration entre pairs" },
    ],
  },
  {
    id: "c3lf-mentor-treasurer",
    role: "Mentore & trésorière",
    company: "C3LF - Club Linux et Logiciels Libres de Fianarantsoa",
    period: "2025 - aujourd'hui",
    summary:
      "Accompagnement des étudiants dans la découverte de l'open source, de Linux et des pratiques de développement collaboratif. J'aide à organiser les activités du club, je mentore les membres sur des projets concrets et je contribue à la structure du club en tant que trésorière.",
    icon: Briefcase,
    highlights: [
      { title: "Mentorat", subtitle: "Onboarding open source" },
      { title: "Linux", subtitle: "Accompagnement pratique" },
      { title: "Communauté", subtitle: "Ateliers & événements" },
      { title: "Trésorerie", subtitle: "Suivi financier du club" },
    ],
  },
];

export default experiences;
