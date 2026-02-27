import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Mybutton from "../components/Mybutton";

export default function Home() {
  return (
    <section id="home" className="snap-start min-h-screen scroll-mt-24 bg-[#0d1117]">
      <Navbar />

      <main className="pt-8 md:pt-20">
        <Hero />
        <div className="-mt-10 md:-mt-14">
          <Resume />
        </div>

        <section className="bg-[#0d1117] flex justify-center gap-6 pb-10">
          <Mybutton content={"Let's Connect →"} />
          <Mybutton content={"Download CV"} />
        </section>
      </main>

    </section>
  );
}
