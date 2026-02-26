import { UserRound } from "lucide-react";
import Card from "../components/Card";
import mePic from "../assets/mePic.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-24 bg-[#0d1117] text-white px-6 pt-24 md:pt-28 pb-6"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-stretch h-[calc(100vh-7.5rem)] md:h-[calc(100vh-9rem)]">
        <div className="h-full overflow-hidden flex items-center justify-center">
          <img
            src={mePic}
            alt="Claudine portrait"
            className="h-[80%] w-auto max-w-full object-contain"
          />
        </div>

        <div className="h-full flex flex-col pt-2 md:pt-4">
          <h2 className="about-title-sour-gummy mb-4 md:mb-5 text-4xl md:text-5xl text-[#e63946]">
            About Me
          </h2>
          <Card
            className="h-full flex-1"
            icon={<UserRound />}
            title="Who Am I"
            description=""
            />
        </div>
      </div>
    </section>
  );
}
