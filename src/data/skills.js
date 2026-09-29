import {
  Cloud,
  Container,
  Database,
  FileTerminal,
  Server,
  ShieldCheck,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const skillGroups = [
  {
    id: "backend",
    icon: Server,
    title: "Développement backend",
    description:
      "Développement d'API backend, logique serveur et architecture de services scalable.",
    chips: [
      "Node.js",
      "Express",
      "PHP",
      "Python",
      "API REST",
      "WebSocket",
      "MySQL/PostgreSQL",
      "Postman API Testing",
    ],
  },
  {
    id: "git-workflows",
    icon: FaGithub,
    title: "Git & GitHub & GitLab",
    description:
      "Workflows Git avancés, GitHub Actions et bonnes pratiques de développement collaboratif.",
    chips: [
      "Git",
      "GitHub Actions",
      "GitLab CI/CD",
      "Politiques de branches",
      "Workflows collaboratifs",
    ],
  },
  {
    id: "code-quality",
    icon: ShieldCheck,
    title: "Tests & qualité de code",
    description:
      "Tests unitaires, linting et analyse automatique pour garder un code fiable et maintenable.",
    chips: ["Jest", "React Testing Library", "ESLint", "SonarCloud"],
  },
  {
    id: "containers",
    icon: Container,
    title: "Docker & conteneurisation",
    description:
      "Orchestration de conteneurs, builds multi-stage et bonnes pratiques de sécurité.",
    chips: ["Docker", "Docker Compose", "Sécurité des conteneurs"],
  },
  {
    id: "automation",
    icon: FileTerminal,
    title: "Automatisation & scripting",
    description:
      "Automatisation d'infrastructure, scripts de déploiement et orchestration de processus.",
    chips: ["Bash/Shell", "Python", "YAML/JSON", "Ansible"],
  },
];

export const interests = [
  {
    id: "backend",
    icon: Server,
    title: "Développement backend",
    description: "Construire des applications serveur scalables et sécurisées.",
  },
  {
    id: "databases",
    icon: Database,
    title: "Gestion de bases de données",
    description: "Concevoir des bases relationnelles et NoSQL bien optimisées.",
  },
  {
    id: "devops",
    icon: Cloud,
    title: "DevOps",
    description: "Déployer et gérer des applications avec des pipelines CI/CD.",
  },
  {
    id: "web-security",
    icon: ShieldCheck,
    title: "Sécurité web",
    description:
      "Bases OWASP, prévention XSS, injections SQL et bonnes pratiques de code sécurisé.",
  },
];
