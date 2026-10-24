import { ArrowDown } from "lucide-react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { awards } from "../data/awards";

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
            {awards.map(({ icon: Icon, ...award }, index) => (
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
                  icon={<Icon size={22} />}
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
