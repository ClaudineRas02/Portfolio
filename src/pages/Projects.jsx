import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import Reveal from "../components/Reveal";
import portfolioImage from "../assets/projects/portfolio.png";
import certManagerImage from "../assets/projects/certmanager_mobile.png";
import numicampImage from "../assets/projects/numicamp.png";

const projects = [
  {
    id: "devops-portfolio",
    image: portfolioImage,
    alt: "Personal portfolio with DevOps and full-stack projects",
    title: "Personal Portfolio",
    challenge:
      "Build a personal portfolio that feels polished, fast, and clear while presenting development, DevOps, and security skills in one place.",
    contribution: [
      "Built a responsive React and Vite interface with reusable sections, animated reveals, and optimized visual assets.",
      "Added automated quality checks with GitHub Actions, tests, linting, and SonarCloud-oriented project structure.",
      "Organized skills, certifications, awards, and projects into a clean portfolio flow with smooth section navigation.",
    ],
    impact: [
      "Delivered a portfolio that can evolve as new projects and certifications are added.",
      "Improved performance through lazy-loaded sections.",
    ],
    githubUrl: "https://github.com/ClaudineRas02/Portfolio",
    chips: ["React", "TailwindCSS", "GitHub Actions", "SonarCloud", "Vercel"],
  },
  {
    id: "numicamp-platform",
    image: numicampImage,
    alt: "NumiCamp digital orientation platform dashboard",
    title: "NumiCamp Platform",
    challenge:
      "Build a scalable backend platform helping young people discover digital careers, organizations, and learning opportunities through a centralized and community-driven system.",
    contribution: [
      "Designed and developed backend features using Node.js, Express, and PostgreSQL with a layered architecture (routes, services, models, middleware).",
      "Implemented APIs for authentication, publications, organizations, comments, feedback systems, RSS feeds, and profile management.",
      "Improved backend reliability with ESLint standards, Jest unit tests, error handling practices, and SonarCloud static analysis.",
      "Built CI/CD pipelines with GitLab CI for linting, testing, quality analysis, and Docker image generation.",
      "Worked on deployment-oriented infrastructure using Docker containers and HAProxy load balancing in a Linux network lab environment.",
    ],
    impact: [
      "Delivered a more maintainable and production-oriented backend architecture for the platform.",
      "Automated quality checks and container build workflows to improve development consistency and deployment readiness.",
      "Strengthened understanding of backend scalability, DevOps workflows, and infrastructure integration.",
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
      "Load Balancing",
      "Https",
    ],
  },
  {
    id: "certmanager-mobile",
    image: certManagerImage,
    alt: "Mobile SSL/TLS certificate management application",
    title: "SSL/TLS Certificate Manager",
    challenge:
      "Certificate workflows can become difficult to follow when generation, expiration, revocation, and CA hierarchy are managed manually.",
    contribution: [
      "Designed a mobile-first certificate management experience for Root CA, Intermediate CA, and SSL/TLS certificate workflows.",
      "Integrated certificate lifecycle concepts including generation, expiration monitoring, revocation, and secure PKI organization.",
      "Structured the project around practical security needs and clear mobile navigation.",
    ],
    impact: [
      "Made certificate management concepts easier to understand and interact with from a mobile interface.",
      "Created a foundation for future improvements around alerts, secure storage, and certificate inventory tracking.",
    ],
    githubUrl: "https://github.com/ClaudineRas02/pki-backend",
    chips: ["React Native", "Node.js", "Express", "PostgreSQL", "OpenSSL"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section
        id="projects"
        className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] px-6 pb-12 pt-24 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal
            as="h2"
            className="about-title-sour-gummy mb-10 text-center text-4xl text-[#e63946] md:text-5xl"
          >
            Projects
          </Reveal>

          <div className="grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 90}>
                <article className="group flex h-full w-full max-w-3xl flex-col bg-transparent text-white md:max-w-[340px]">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[1.28] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />

                    <button
                      type="button"
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#e63946] bg-[#0d1117]/90 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-[#e63946] backdrop-blur transition hover:bg-[#e63946] hover:text-white"
                      onClick={() => setSelectedProject(project)}
                    >
                      Full details
                      <ExternalLink size={13} />
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 pt-4 text-left">
                    <h3 className="about-title-sour-gummy text-2xl leading-tight text-white md:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-auto flex flex-wrap gap-2 pt-1">
                      {project.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-[#e63946] px-3 py-1 text-xs text-gray-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-[#f8e7cc] bg-[#171729] px-5 py-8 text-white shadow-2xl shadow-black/60 sm:px-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-4 border-b border-[#f8e7cc] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="about-title-sour-gummy text-3xl text-[#f8e7cc] md:text-4xl">
                {selectedProject.title}
              </h3>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#f8e7cc] px-5 py-2 text-sm font-semibold text-[#f8e7cc] transition hover:bg-[#f8e7cc] hover:text-[#171729]"
                >
                  View repo
                </a>

                <button
                  type="button"
                  aria-label="Close project details"
                  className="text-[#f8e7cc] transition hover:text-[#e63946]"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={30} />
                </button>
              </div>
            </div>

            <div className="grid gap-8 pt-7 md:grid-cols-[0.8fr_1.2fr]">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt}
                decoding="async"
                className="max-h-[31rem] w-full rounded-2xl object-cover"
              />

              <div className="space-y-6 border-[#f8e7cc] md:border-r md:pr-8">
                <div>
                  <h4 className="about-title-sour-gummy text-2xl text-[#f8e7cc]">
                    The Challenge
                  </h4>
                  <p className="mt-3 leading-8 text-gray-100">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="about-title-sour-gummy text-2xl text-[#f8e7cc]">
                    My Contribution
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-100">
                    {selectedProject.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="about-title-sour-gummy text-2xl text-[#f8e7cc]">
                    Results & Impact
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-100">
                    {selectedProject.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
