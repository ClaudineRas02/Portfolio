import Card from "./Card";
import { Github, Container, FileTerminal, Server } from "lucide-react";

const tools = [
      {
    icon: <Github />,
    title: "Git & Github",
    description:
      "Advanced Git workflows, GitHub Actions, and collaborative development practices.",
    chips: [
      "Git",
      "GitHub Actions",
      "Branch Policies",
      "Collaborative Workflows",
    ],
  },

  {
    icon: <FileTerminal />,
    title: "Automation & Scripting",
    description:
      "Infrastructure automation, deployment scripts, and process orchestration.",
    chips: [
        "Bash/Shell",
        "Python",
        "YAML/JSON"
    ],
  },
  {
    icon: <Server />,
    title: "Backend Development",
    description:
      "Backend API development, server-side logic, and scalable service architecture.",
    chips: ["Node.js", "PHP", "Python"],
  },
  {
    icon: <Container />,
    title: "Docker & Containerization",
    description:
      "Container orchestration, multi-stage builds, and security best practices.",
    chips: [
    "Docker",
    "Docker Compose",
    "Docker compose"
    ],
  },
];

export default function Tools() {
  return (
    <section className="bg-[#0d1117] text-white pt-0 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="about-title-sour-gummy text-3xl md:text-4xl text-[#e63946] text-center mb-12">
          Tools & Technologies
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {tools.map((tool) => (
            <Card
              key={tool.title}
              icon={tool.icon}
              title={<span className="about-title-sour-gummy text-white">{tool.title}</span>}
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
          ))}
        </div>
      </div>
    </section>
  );
}
