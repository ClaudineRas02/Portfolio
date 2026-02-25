const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen bg-[#0d1117] text-white">
      
      <p className="text-gray-400 mb-2">Hello, I'm</p>
      
      <h1 className="text-5xl md:text-6xl font-bold text-purple-500 mb-4">
        RASAMIMANANA Claudine
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
        DevOps Engineer | Backend Developper
      </h2>

      <div className="flex gap-6">
        <button id="goLinkedin" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
          Let's Connect →
        </button>

      </div>

    </section>
  );
};

export default Hero;