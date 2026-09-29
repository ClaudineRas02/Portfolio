import { useEffect, useState } from "react";
import Post from "../components/Post";
import Reveal from "../components/Reveal";
import certificates from "../data/certificates";

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
