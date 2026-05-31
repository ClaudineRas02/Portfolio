import Card from "./Card";
import { Container, FileTerminal, Server, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";

const tools = [
  {
    icon: <FaGithub />,
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
    icon: <Server />,
    title: "Développement backend",
    description:
      "Développement d'API backend, logique serveur et architecture de services scalable.",
    chips: ["Node.js", "PHP", "Python"],
  },

  {
    icon: <ShieldCheck />,
    title: "Tests & qualité de code",
    description:
      "Tests unitaires, linting et analyse automatique pour garder un code fiable et maintenable.",
    chips: ["Jest", "React Testing Library", "ESLint", "SonarCloud"],
  },
  {
    icon: <Container />,
    title: "Docker & conteneurisation",
    description:
      "Orchestration de conteneurs, builds multi-stage et bonnes pratiques de sécurité.",
    chips: ["Docker", "Docker Compose", "Sécurité des conteneurs"],
  },

  {
    icon: <FileTerminal />,
    title: "Automatisation & scripting",
    description:
      "Automatisation d'infrastructure, scripts de déploiement et orchestration de processus.",
    chips: ["Bash/Shell", "Python", "YAML/JSON"],
  },
];

export default function Tools() {
  return (
    <section className="bg-[#0d1117] text-white pt-0 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal
          as="h2"
          className="about-title-sour-gummy text-3xl md:text-4xl text-[#e63946] text-center mb-12"
        >
          Outils & technologies
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {tools.map((tool, index) => (
            <Reveal key={tool.title} delay={index * 90}>
              <Card
                icon={tool.icon}
                title={
                  <span className="about-title-sour-gummy text-white">
                    {tool.title}
                  </span>
                }
                description={tool.description}
                descriptionClassName="text-gray-300"
              >
                {tool.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs text-gray-300 bg-[#1f2937] border border-gray-700 px-3 py-1 rounded-lg transition-colors duration-200 hover:border-[#e63946]/40 hover:text-white"
                  >
                    {chip}
                  </span>
                ))}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
