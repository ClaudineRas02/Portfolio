import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Projects = lazy(() => import("./pages/Projects"));
const Awards = lazy(() => import("./pages/Awards"));
const Experience = lazy(() => import("./pages/Experiences"));

function App() {
  return (
    <main className="h-screen overflow-y-auto snap-none md:snap-y md:snap-proximity">
      <Home />
      <Suspense fallback={<div className="min-h-screen bg-[#0d1117]" />}>
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Awards />
        <Experience />
      </Suspense>
      <Footer />
    </main>
  );
}
export default App;
