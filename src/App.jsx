import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
  
function  App(){
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Home />
      <About />
      <Skills/>
    </main>
  )
}
export default App;
