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
              alt="Claudine portrait"
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
            About Me
          </Reveal>
          <Reveal delay={120}>
            <Card
              descriptionClassName="text-base md:text-lg leading-8 text-gray-300"
              icon={<UserRound />}
              title="Who Am I"
              description={
                <>
                  I am a{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    third-year
                  </span>{" "}
                  Computer Science student at ENI Fianarantsoa with a strong
                  interest in systems architecture, backend development, and{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    infrastructure engineering
                  </span>
                  . I enjoy understanding how applications work behind the
                  scenes, from{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    Linux systems
                  </span>
                  , networking, and databases to backend logic and{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    automation
                  </span>
                  .
                  <br />
                  <br />I ranked in the{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    Top 10 nationwide
                  </span>{" "}
                  in the Huawei ICT Competition (National Level) on my first
                  attempt. This experience sharpened my discipline, resilience,
                  and ability to perform under pressure.
                  <br />
                  <br />I am also a finalist in our school&apos;s 2025{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    competitive programming
                  </span>{" "}
                  tournaments, which strengthened my problem-solving and
                  analytical thinking.
                  <br />
                  And in may 2026, I earned{" "}
                  <span className="about-title-sour-gummy font-bold text-[#e63946]">
                    2nd place in algorithmics
                  </span>{" "}
                  in a competition organized by EMIT STEM HUB, reinforcing my
                  ability to solve complex problems under time pressure.
                  <br />
                  <br />
                  Currently, I am developing practical skills in Linux, backend,
                  and DevOps practices. <br />
                </>
              }
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
