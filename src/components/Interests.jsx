import Card from "./Card";
import Reveal from "./Reveal";
import { interests } from "../data/skills";

export default function Interests() {
  return (
    <section className="bg-[#0d1117] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <Reveal
          as="h2"
          className="about-title-sour-gummy text-3xl md:text-4xl text-[#e63946] text-center mb-12"
        >
          Centres d'intérêt & savoir-faire
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <Reveal key={interest.id} delay={(index + 1) * 80}>
              <Card
                icon={<interest.icon />}
                title={interest.title}
                description={interest.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
