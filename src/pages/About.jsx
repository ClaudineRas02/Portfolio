import { UserRound } from "lucide-react";
import Card from "../components/Card";
import Icons from "../components/Icons";
import Reveal from "../components/Reveal";
import mePic from "../assets/mePic.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";

export default function About() {
  {
    /*icon list for icon components */
  }
  const socialIcons = [
    { src: github, alt: "GitHub", href: "https://github.com/ClaudineRas02" },
    {
      src: linkedinIcon,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/claudine-rasamimanana-a205a5379/",
    },
  ];

  return (
    <section
      id="about"
      className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] text-white px-6 pt-24 md:pt-28 pb-6"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <Reveal className="flex flex-col items-center justify-end gap-3 py-2">
          <div className="flex w-full max-w-sm items-end justify-center overflow-visible bg-transparent sm:max-w-md md:max-w-lg">
            <img
              src={mePic}
              alt="Portrait de Claudine"
              loading="lazy"
              decoding="async"
              className="h-auto w-auto max-w-full max-h-[36rem] object-contain sm:max-h-[42rem] md:max-h-[47rem] lg:max-h-[50rem]"
            />
          </div>

          <Icons icons={socialIcons} />
        </Reveal>

        <div className="flex flex-col pt-2 md:pt-4">
          <Reveal
            as="h2"
            className="about-title-sour-gummy mb-4 md:mb-5 text-4xl md:text-5xl text-[#e63946]"
          >
            À propos de moi
          </Reveal>
          <Reveal delay={120}>
            <Card
              descriptionClassName="text-base md:text-lg leading-8 text-gray-300"
              icon={<UserRound />}
              title="Qui suis-je ?"
              description={
                <>
                  Je suis étudiante en{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    troisième année
                  </span>{" "}
                  d&apos;informatique à l&apos;ENI Fianarantsoa, avec un vrai
                  intérêt pour l&apos;architecture système, le développement
                  backend et{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    l&apos;ingénierie d&apos;infrastructure
                  </span>
                  . J&apos;aime comprendre comment les applications tournent en
                  coulisses, depuis les{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    systèmes Linux
                  </span>
                  , le réseau et les bases de données jusqu&apos;à la logique
                  backend et{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    l&apos;automatisation
                  </span>
                  .
                  <br />
                  <br />
                  Lors de ma première participation à la Huawei ICT Competition
                  au niveau national, je me suis classée dans le{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    Top 10 national
                  </span>{" "}
                  . Cette expérience a renforcé ma discipline, ma résilience et
                  ma capacité à rester performante sous pression.
                  <br />
                  En mai 2026, j&apos;ai obtenu la{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    2e place en algorithmique
                  </span>{" "}
                  lors d&apos;une compétition organisée par EMIT STEM HUB.
                  <br />
                  Et fin Juillet 2026 j&apos;ai obtenue la{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    2e place en algorithmique
                  </span>{" "}
                  lors d&apos;une compétition organisée par le DSA Club de l'ENI
                  Fianarantsoa, une belle confirmation de ma capacité à résoudre
                  des problèmes complexes avec un temps limité.
                  <br />
                  <br />
                  Aujourd&apos;hui, je continue à renforcer mes compétences
                  pratiques en Linux, backend et DevOps. <br />
                </>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
