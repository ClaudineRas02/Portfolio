import { ArrowDown, Award, Medal } from "lucide-react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";

const awards = [
  {
    id: "algo-2025",
    year: "2025",
    icon: <Medal size={22} />,
    title: "ENI Fianarantsoa AlgoBattle",
    description:
      "Finaliste du tournoi interne de programmation compétitive de l'ENI (L2+), avec un classement parmi les meilleurs participants sur plus de 20 profils très solides.",
  },

  {
    id: "huawei-2025",
    year: "2025",
    icon: <Award size={22} />,
    title: "Huawei ICT Competition",
    description:
      "Top 10 national dès ma première participation, après plus de 1000 pages d'étude en réseau et systèmes avec des labs pratiques, parmi plus de 100 candidats issus d'universités de Madagascar.",
  },
  {
    id: "emit-stem-hub-algo-2026",
    year: "2026",
    icon: <Medal size={22} />,
    title: "Compétition d'algorithmique (EMIT  & ENI)",
    description:
      "2e place lors d'une compétition d'algorithmique organisée par EMIT STEM HUB(mai) et le club DSA de l' ENI(août), une performance qui montre ma régularité en résolution de problèmes sous contraintes.",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] px-6 pb-16 pt-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal
          as="h2"
          className="about-title-sour-gummy text-center text-5xl text-[#e63946] md:text-6xl"
        >
          Distinctions
        </Reveal>

        <div className="relative mx-auto mt-14 w-full max-w-5xl">
          <div className="absolute bottom-5 left-24 top-0 w-px bg-gray-700 md:left-30" />
          <ArrowDown
            className="absolute bottom-0 left-24 -translate-x-1/2 text-gray-400 md:left-30"
            size={18}
          />

          <div className="space-y-10">
            {awards.map((award, index) => (
              <Reveal
                key={award.id}
                delay={index * 100}
                className="grid grid-cols-[68px_52px_minmax(0,1fr)] items-start gap-x-3 md:grid-cols-[108px_52px_minmax(0,1fr)] md:gap-x-5"
              >
                <div className="pt-3 text-right">
                  <span className="about-title-sour-gummy text-2xl text-[#f8e7cc] sm:text-3xl md:text-4xl">
                    {award.year}
                  </span>
                </div>

                <div className="flex justify-center pt-5">
                  <span className="h-4 w-4 rounded-full border border-gray-400 bg-[#f8e7cc]" />
                </div>

                <Card
                  icon={award.icon}
                  title={award.title}
                  description={award.description}
                  className="w-full max-w-1450 border-gray-700 bg-[#131726]"
                  descriptionClassName="text-gray-200"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
