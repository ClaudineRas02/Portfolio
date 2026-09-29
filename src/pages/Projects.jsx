import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

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
            Projets
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
                      Détails
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
                  Voir le repo
                </a>

                <button
                  type="button"
                  aria-label="Fermer les détails du projet"
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
                    Le défi
                  </h4>
                  <p className="mt-3 leading-8 text-gray-100">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="about-title-sour-gummy text-2xl text-[#f8e7cc]">
                    Ma contribution
                  </h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-100">
                    {selectedProject.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="about-title-sour-gummy text-2xl text-[#f8e7cc]">
                    Résultats & impact
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
