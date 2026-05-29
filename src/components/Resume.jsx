import Card from "./Card";
import Reveal from "./Reveal";
import { Brain, HeartPulse } from "lucide-react";

export default function Resume() {
  return (
    <section className="bg-[#0d1117] text-white pt-6 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* My interests in tech and my passion to teach and mentor*/}
          <Reveal delay={360}>
            <Card
              icon={<Brain />}
              title="Curiosité"
              description="J'aime comprendre comment les systèmes fonctionnent en coulisses, de l'architecture backend
                         et des bases de données jusqu'à l'infrastructure et la CI/CD, pour voir comment tout se connecte et passe à l'échelle."
            />
          </Reveal>

          <Reveal delay={480}>
            <Card
              icon={<HeartPulse />}
              title="Partage & progression"
              description="J'aime mentorer, participer à des clubs tech, suivre des talks
                        et relever des défis de programmation pour apprendre, progresser et partager avec les autres."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
