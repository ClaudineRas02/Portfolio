import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates";
  
function  App(){
  return (
    <main className="h-screen overflow-y-auto snap-y snap-proximity md:snap-mandatory">
      <Home />
      <About />
      <Skills/>
      <Certificates />
    </main>
  )
}
export default App;
