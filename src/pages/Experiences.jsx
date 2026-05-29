import { Briefcase } from "lucide-react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";

const experiences = [
  {
    id: "devops-projects",
    role: "Projets d'ingénierie DevOps",
    company: "Lab personnel / Projets d'équipe",
    period: "2025 - aujourd'hui",
    summary:
      "Construction de workflows CI/CD sécurisés et de pipelines de déploiement reproductibles avec des outils orientés Linux. Focus sur la fiabilité, l'observabilité et l'automatisation entre environnements.",
    icon: <Briefcase size={22} />,
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
    icon: <Briefcase size={22} />,
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
    icon: <Briefcase size={22} />,
    highlights: [
      { title: "Mentorat", subtitle: "Onboarding open source" },
      { title: "Linux", subtitle: "Accompagnement pratique" },
      { title: "Communauté", subtitle: "Ateliers & événements" },
      { title: "Trésorerie", subtitle: "Suivi financier du club" },
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] px-6 pb-16 pt-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal
          as="h2"
          className="about-title-sour-gummy text-center text-5xl text-[#e63946] md:text-6xl"
        >
          Expériences
        </Reveal>

        <div className="mt-12 space-y-8">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id} delay={index * 100}>
              <Card
                icon={experience.icon}
                title={experience.role}
                description={experience.summary}
                className="mx-auto w-full max-w-4xl border-gray-700 bg-[#131726] p-8"
                descriptionClassName="mt-1 text-lg leading-9 text-gray-200"
              >
                <div className="w-full">
                  <p className="text-base font-semibold text-[#e63946]">{experience.company}</p>
                  <p className="text-sm text-gray-300">{experience.period}</p>
                </div>

                {experience.highlights.map((item) => (
                  <div
                    key={`${experience.id}-${item.title}`}
                    className="w-full max-w-60 rounded-xl border border-gray-700 bg-[#171c2e] px-4 py-3 text-left sm:w-[calc(50%-0.75rem)] sm:max-w-55 lg:w-[calc(33.333%-0.9rem)] lg:max-w-52.5"
                  >
                 
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-gray-300">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
