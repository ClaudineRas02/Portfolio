import { useEffect, useState } from "react";
import Post from "../components/Post";
import Reveal from "../components/Reveal";
import pythonCert from "../assets/certs/python.webp";
import problemSolvingCert from "../assets/certs/problemSolving.webp";
import devopsCert from "../assets/certs/devops.webp";
import linuxCert from "../assets/certs/linux.webp";
import linuxScore from "../assets/certs/score.webp";

const certificates = [
  {
    id: "Linux Essentials",
    image: linuxCert,
    alt: "Certification Linux Essentials du Linux Professional Institute",
    title: "Fondamentaux Linux",
    description:
      "Certification internationale délivrée par le Linux Professional Institute, qui valide de bonnes bases en systèmes Linux, ligne de commande, gestion de fichiers et sécurité de base.",
    scoreImage: linuxScore,
    scoreAlt: "Relevé de score Linux Essentials",
  },
  {
    id: "DevOps",
    image: devopsCert,
    alt: "Certificat de formation DevOps et CI/CD",
    title: "Fondamentaux DevOps",
    description:
      "Introduction aux concepts clés du DevOps : pipelines CI/CD, gestion de version avec GitLab et déploiement automatisé d'applications, avec un focus sur la coordination en équipe.",
  },
  {
    id: "problem-solving",
    image: problemSolvingCert,
    alt: "Certificat en résolution de problèmes",
    title: (
      <>
        Résolution
        <br />
        de problèmes
      </>
    ),
    description:
      "Couvre les bases de la résolution de problèmes : pensée algorithmique, reconnaissance de patterns et modélisation logique. Axé sur des bases analytiques solides grâce à une pratique structurée et des exercices appliqués.",
  },
  {
    id: "python-development",
    image: pythonCert,
    alt: "Certificat en programmation Python",
    title: "Développement Python",
    description:
      "Valide les bases de Python pour le scripting, l'automatisation et le développement backend. Formation structurée autour d'exercices pratiques pour coder de manière fiable et scalable.",
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section
        id="certifications"
        className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] px-6 pb-12 pt-24 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal
            as="h2"
            className="about-title-sour-gummy mb-10 text-center text-4xl text-[#e63946] md:text-5xl"
          >
            Certifications
          </Reveal>

          <div className="grid justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certificates.map((certificate, index) => (
              <Reveal key={certificate.id} delay={index * 90}>
                <Post
                  {...certificate}
                  onImageClick={() =>
                    setSelectedImage({
                      src: certificate.image,
                      alt: certificate.alt,
                    })
                  }
                >
                  {certificate.scoreImage ? (
                    <button
                      type="button"
                      className="rounded-full border border-[#e63946] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#e63946] transition hover:bg-[#e63946] hover:text-white"
                      onClick={() =>
                        setSelectedImage({
                          src: certificate.scoreImage,
                          alt: certificate.scoreAlt,
                        })
                      }
                    >
                      Voir le score
                    </button>
                  ) : null}
                </Post>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 px-4"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Fermer l'aperçu"
            className="absolute right-5 top-5 rounded-full border border-gray-400 px-3 py-1 text-sm text-white hover:border-[#e63946] hover:text-[#e63946]"
            onClick={() => setSelectedImage(null)}
          >
            Fermer
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            decoding="async"
            className="max-h-[88vh] w-auto max-w-full rounded-xl border border-gray-600 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
