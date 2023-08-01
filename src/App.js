import Home from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div >
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Projects /> 
     <Contact />
    </div>
  );
}

export default App;
