import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Mybutton from "../components/Mybutton";
import ConnectPopup from "../components/ConnectPopup";
import { Download } from "lucide-react";

export default function Home() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <section id="home" className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117]">
      <Navbar />

      <main className="pt-8 md:pt-20">
        <Hero />
        <div className="-mt-10 md:-mt-14">
          <Resume />
        </div>

        <section className="bg-[#0d1117] flex justify-center gap-6 pb-10">
          <Mybutton
            content={"Let's Connect →"}
            onClick={() => setIsConnectOpen(true)}
          />
          <a
            href="cv/CV_Claudine.pdf"
            className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-3 bg-[#e63946] hover:bg-[#e63946] rounded-lg transition"
          >
            <span>Download CV</span>
            <Download size={18} />
          </a>
        </section>
      </main>

      {isConnectOpen ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setIsConnectOpen(false)}
          role="presentation"
        >
          <div onClick={(event) => event.stopPropagation()}>
            <ConnectPopup onClose={() => setIsConnectOpen(false)} />
          </div>
        </div>
      ) : null}

    </section>
  );
}
