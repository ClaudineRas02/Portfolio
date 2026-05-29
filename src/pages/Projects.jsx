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
