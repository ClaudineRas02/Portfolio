import { useEffect, useState } from "react";
import { ExternalLink, Info, Lock, X } from "lucide-react";
import ProjectCover from "../components/ProjectCover";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPrivacyNote, setShowPrivacyNote] = useState(false);

  const openProject = (project) => {
    setShowPrivacyNote(false);
    setSelectedProject(project);
  };

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
        <div className="mx-auto max-w-7xl">
          <Reveal
            as="h2"
            className="about-title-sour-gummy mb-10 text-center text-4xl text-[#e63946] md:text-5xl"
          >
            Projets
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 90} className="h-full">
                <article className="group flex h-full w-full flex-col overflow-hidden rounded-[1.6rem] border border-gray-700 bg-transparent text-white">
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[1.28] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <ProjectCover
                        project={project}
                        className="aspect-[1.28] w-full transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    )}

                    <button
                      type="button"
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#e63946] bg-[#0d1117]/90 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-[#e63946] backdrop-blur transition hover:bg-[#e63946] hover:text-white"
                      onClick={() => openProject(project)}
                    >
                      Détails
                      <ExternalLink size={13} />
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5 text-left">
                    <h3 className="about-title-sour-gummy text-2xl leading-tight text-white md:text-3xl">
                      {project.title}
                    </h3>

                    {project.company ? (
                      <p className="text-sm text-gray-400">
                        {project.company} · {project.period}
                      </p>
                    ) : null}

                    {project.isPrivate ? (
                      <p className="inline-flex items-center gap-1.5 text-xs text-[#f8e7cc]">
                        <Lock size={13} />
                        Projet privé — Réalisé en entreprise
                      </p>
                    ) : null}

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
              <div>
                <h3 className="about-title-sour-gummy text-3xl text-[#f8e7cc] md:text-4xl">
                  {selectedProject.title}
                </h3>
                {selectedProject.company ? (
                  <p className="mt-1 text-sm text-gray-400">
                    {selectedProject.category} · {selectedProject.company} ·{" "}
                    {selectedProject.period}
                  </p>
                ) : null}
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-[#f8e7cc] px-5 py-2 text-sm font-semibold text-[#f8e7cc] transition hover:bg-[#f8e7cc] hover:text-[#171729]"
                  >
                    Voir le repo
                  </a>
                ) : null}

                {selectedProject.isPrivate ? (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-[#f8e7cc]">
                      <Lock size={15} />
                      Projet privé — Réalisé en entreprise
                    </span>
                    <button
                      type="button"
                      aria-expanded={showPrivacyNote}
                      aria-controls="privacy-note"
                      className="inline-flex items-center gap-1 text-gray-300 underline underline-offset-4 transition hover:text-[#e63946]"
                      onClick={() => setShowPrivacyNote((open) => !open)}
                    >
                      <Info size={15} />
                      Pourquoi aucun lien ?
                    </button>
                  </div>
                ) : null}

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

            {selectedProject.isPrivate && showPrivacyNote ? (
              <p
                id="privacy-note"
                role="note"
                className="mt-5 rounded-2xl border border-gray-700 bg-[#131726] px-5 py-4 leading-7 text-gray-200"
              >
                Pour des raisons de confidentialité professionnelle, le code
                source et les liens de démonstration de ce projet ne sont pas
                publics. Je reste toutefois disponible pour présenter et
                expliquer personnellement l&apos;architecture, les choix
                techniques et les mécanismes DevOps mis en œuvre lors d&apos;un
                échange.
              </p>
            ) : null}

            <div className="grid gap-8 pt-7 md:grid-cols-[0.8fr_1.2fr]">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  decoding="async"
                  className="max-h-[31rem] w-full rounded-2xl object-cover"
                />
              ) : (
                <ProjectCover
                  project={selectedProject}
                  className="min-h-64 w-full rounded-2xl md:max-h-[31rem]"
                />
              )}

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

                {selectedProject.inProgress ? (
                  <div>
                    <h4 className="about-title-sour-gummy text-2xl text-[#f8e7cc]">
                      En cours
                    </h4>
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-gray-300">
                      {selectedProject.inProgress.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

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
