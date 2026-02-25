import Card from "./Card";
import { Brain, HeartPulse } from "lucide-react";

export default function Resume() {
  return (
    <section className="bg-[#0d1117] text-white pt-6 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* My interests in tech and my passion to teach and mentor*/}
          <Card
            icon={<Brain />}
            title="Curiosity"
            description="I love exploring how systems work behind the scenes — from backend architecture and
                         databases to infrastructure and CI/CD — and figuring out how everything connects and scales."
          />

          <Card
            icon={<HeartPulse />}
            title="Sharing & Growth"
            description="I enjoy mentoring, joining tech clubs, attending talks, 
                        and competing in programming challenges to learn, grow, and share knowledge with others."
          />
    
        </div>
      </div>
    </section>
  );
}
