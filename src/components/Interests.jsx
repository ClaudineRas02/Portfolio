import Card from "./Card";
import Reveal from "./Reveal";
import { Server, Database, Cloud, ShieldCheck } from "lucide-react";

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
          
          <Reveal delay={80}>
            <Card
              icon={<Server />}
              title="Développement backend"
              description="Construire des applications serveur scalables et sécurisées."
            />
          </Reveal>

          <Reveal delay={160}>
            <Card
              icon={<Database />}
              title="Gestion de bases de données"
              description="Concevoir des bases relationnelles et NoSQL bien optimisées."
            />
          </Reveal>

          <Reveal delay={240}>
            <Card
              icon={<Cloud />}
              title="DevOps"
              description="Déployer et gérer des applications avec des pipelines CI/CD."
            />
          </Reveal>

          <Reveal delay={320}>
            <Card
              icon={<ShieldCheck />}
              title="Sécurité web"
              description="Bases OWASP, prévention XSS, injections SQL et bonnes pratiques de code sécurisé."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
