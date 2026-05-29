import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section
  className="flex flex-col items-center justify-center text-center pt-32 pb-10 bg-[#0d1117] text-white px-4"
>
  <Reveal as="p" className="text-sm sm:text-base text-gray-400 mb-2">
    Bonjour, je suis
  </Reveal>

  <Reveal
    as="h1"
    delay={120}
    className="about-title-sour-gummy text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#e63946] mb-4 leading-tight"
  >
    RASAMIMANANA Feno Hanitra Claudine
  </Reveal>

  <Reveal as="h2" delay={240} className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
    Ingénieure DevOps | Développeuse Backend
  </Reveal>

</section>
  );
};

export default Hero;
