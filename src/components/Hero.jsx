const Hero = () => {
  return (
    <section
  id="home"
  className="flex flex-col items-center justify-center text-center min-h-screen bg-[#0d1117] text-white px-4"
>

  <p className="text-sm sm:text-base text-gray-400 mb-2">
    Hello, I'm
  </p>

  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-500 mb-4 leading-tight">
    RASAMIMANANA Claudine
  </h1>

  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
    DevOps Engineer | Backend Developer
  </h2>

  <div className="flex gap-6">
    <button
      id="goLinkedin"
      className="px-5 py-2 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
    >
      Let's Connect →
    </button>
  </div>

</section>
  );
};

export default Hero;