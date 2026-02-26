import Card from "./Card";
import { Server, Database, Cloud } from "lucide-react";

export default function Skills() {
  return (
    <section className="bg-[#0d1117] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <Card
            icon={<Server />}
            title="Backend Development"
            description="Building scalable and secure server-side applications."
          />

          <Card
            icon={<Database />}
            title="Database Management"
            description="Designing optimized relational and NoSQL databases."
          />

          <Card
            icon={<Cloud />}
            title="DevOps"
            description="Deploying and managing applications with CI/CD pipelines."
          />

        </div>
      </div>
    </section>
  );
}

