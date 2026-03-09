import { Briefcase } from "lucide-react";
import Card from "../components/Card";

const experiences = [
  {
    id: "devops-projects",
    role: "DevOps Engineer Projects",
    company: "Personal Lab / Team Projects",
    period: "2025 - Present",
    summary:
      "Building secure CI/CD workflows and repeatable deployment pipelines with Linux-first tooling. Focused on reliability, observability, and automation across environments.",
    icon: <Briefcase size={22} />,
    highlights: [
      { title: "CI/CD", subtitle: "GitHub Actions pipelines" },
      { title: "Security", subtitle: "Hardening & checks" },
      { title: "Observability", subtitle: "Monitoring & alerts" },
      { title: "Collaboration", subtitle: "Team delivery flow" },
    ],
  },
  {
    id: "backend-systems",
    role: "Backend & Systems Internship",
    company: "Youth Computing",
    period: "sep 2025 - dec 2025",
    summary:
      "Designing backend services and infrastructure components with strong foundations in system design and databases. Emphasis on clean architecture and maintainable services.",
    icon: <Briefcase size={22} />,
    highlights: [
      { title: "Backend APIs", subtitle: "Service architecture" },
      { title: "Automation", subtitle: "Scripts & tooling" },
      { title: "Performance", subtitle: "Debugging & tuning" },
      { title: "Teamwork", subtitle: "Peer collaboration" },
    ],
  },
  {
    id: "c3lf-mentor-treasurer",
    role: "Mentor & Treasurer",
    company: "C3LF - Club Linux et Logiciels Libres de Fianarantsoa",
    period: "2025 - Present",
    summary:
      "Supporting students in discovering open source, Linux, and collaborative development practices. I help organize club activities, mentor members on practical projects, and contribute to the club's structure as treasurer.",
    icon: <Briefcase size={22} />,
    highlights: [
      { title: "Mentorship", subtitle: "Open-source onboarding" },
      { title: "Linux", subtitle: "Hands-on guidance" },
      { title: "Community", subtitle: "Workshops & events" },
      { title: "Treasury", subtitle: "Club financial follow-up" },
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
        <h2 className="about-title-sour-gummy text-center text-5xl text-[#e63946] md:text-6xl">
          Experiences
        </h2>

        <div className="mt-12 space-y-8">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
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
                  className="w-full max-w-[240px] rounded-xl border border-gray-700 bg-[#171c2e] px-4 py-3 text-left sm:w-[calc(50%-0.75rem)] sm:max-w-[220px] lg:w-[calc(33.333%-0.9rem)] lg:max-w-[210px]"
                >
                 
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-gray-300">{item.subtitle}</p>
                    </div>
                </div>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
