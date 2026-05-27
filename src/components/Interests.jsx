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
          Interests & Knowledges
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <Reveal delay={80}>
            <Card
              icon={<Server />}
              title="Backend Development"
              description="Building scalable and secure server-side applications."
            />
          </Reveal>

          <Reveal delay={160}>
            <Card
              icon={<Database />}
              title="Database Management"
              description="Designing optimized relational and NoSQL databases."
            />
          </Reveal>

          <Reveal delay={240}>
            <Card
              icon={<Cloud />}
              title="DevOps"
              description="Deploying and managing applications with CI/CD pipelines."
            />
          </Reveal>

          <Reveal delay={320}>
            <Card
              icon={<ShieldCheck />}
              title="Web Security"
              description="OWASP basics, XSS prevention, SQL injection prevention, and secure coding practices."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
