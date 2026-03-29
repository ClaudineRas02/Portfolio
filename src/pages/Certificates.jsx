import { useEffect, useState } from "react";
import Post from "../components/Post";
import pythonCert from "../assets/certs/python.png";
import problemSolvingCert from "../assets/certs/problemSolving.png";
import devopsCert from "../assets/certs/devops.png";
import linuxCert from '../assets/certs/linux.png'
import linuxScore from '../assets/certs/score.png'

const certificates = [
  {
    id: "Linux Essentials",
    image: linuxCert,
    alt: "Linux Essentials Certification by Linux Professional Institute",
    title: "Linux Fundamentals",
    description:
      "International certification issued by the Linux Professional Institute, demonstrating strong foundations in Linux systems, command-line usage, file management, and basic security.",
    scoreImage: linuxScore,
    scoreAlt: "Linux Essentials score report",
  },
   {
    id: "DevOps",
    image: devopsCert,
    alt: "DevOps and CI/CD Training Certificate",
    title: "DevOps Fundamentals",
    description:
      "Introduces core DevOps concepts including CI/CD pipelines, version control with GitLab, and automated application deployment. Highlighting team coordination challenges."
  },
  {
    id: "problem-solving",
    image: problemSolvingCert,
    alt: "Certificate in problem solving",
    title: (
      <>
        Problem
        <br />
        Solving
      </>
    ),
    description:
      "Covers fundamental problem-solving techniques including algorithmic thinking, pattern recognition, and logical modeling.Focused on building strong analytical foundations through structured practice and applied exercises.",
  } ,
    {
    id: "python-development",
    image: pythonCert,
    alt: "Certificate in Python programming",
    title: "Python Development",
    description:
      "Validates foundational Python skills for scripting, automation, and backend development.Built on practical exercises and structured training to ensure reliable and scalable coding practices.",
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
          <h2 className="about-title-sour-gummy mb-10 text-center text-4xl text-[#e63946] md:text-5xl">
            Certifications
          </h2>

          <div className="grid justify-items-center gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certificates.map((certificate) => (
              <Post
                key={certificate.id}
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
                    See score
                  </button>
                ) : null}
              </Post>
            ))}
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close preview"
            className="absolute right-5 top-5 rounded-full border border-gray-400 px-3 py-1 text-sm text-white hover:border-[#e63946] hover:text-[#e63946]"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[88vh] w-auto max-w-full rounded-xl border border-gray-600 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
