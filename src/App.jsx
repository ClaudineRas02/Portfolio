import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
import Awards from "./pages/Awards";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
  
function  App(){
  return (
    <main className="h-screen overflow-y-auto snap-none md:snap-y md:snap-proximity">
      <Home />
      <About />
      <Skills/>
      <Certificates />
      <Awards />
      <Experience />
      <Footer />
    </main>
  )
}
export default App;
