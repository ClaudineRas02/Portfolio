import { ArrowDown, Award, Medal } from "lucide-react";
import Card from "../components/Card";

const awards = [

  {
    id: "algo-2024",
    year: "2024",
    icon: <Medal size={22} />,
    title: "ENI intern AlgoBattle",
    description:
    "Finalist in the ENI Internal Competitive Programming Tournament (L2+), ranking among the top performers in a competition of 20+ highly skilled participants."
  },

   {
    id: "huawei-2025",
    year: "2025",
    icon: <Award size={22} />,
    title: "Huawei ICT Competition",
    description:
        "Top 10 nationwide on my first attempt, after completing 1000+ pages of networking and systems study with practical labs, among 100+ competitors from universities across Madagascar."
},
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117] px-6 pb-16 pt-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="about-title-sour-gummy text-center text-5xl text-[#e63946] md:text-6xl">
          Awards
        </h2>

        <div className="relative mx-auto mt-14 w-full max-w-5xl">
          <div className="absolute bottom-5 left-[96px] top-0 w-px bg-gray-700 md:left-[120px]" />
          <ArrowDown
            className="absolute bottom-0 left-[96px] -translate-x-1/2 text-gray-400 md:left-[120px]"
            size={18}
          />

          <div className="space-y-10">
            {awards.map((award) => (
              <div
                key={award.id}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
