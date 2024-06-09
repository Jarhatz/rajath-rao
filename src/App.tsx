import ParticlesComponent from "./components/ParticlesComponent";
import Navbar from "./Navbar";
import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import "./App.css";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  return (
    <div className="app-wrapper">
      <ParticlesComponent />
      <Navbar scrollToSection={scrollToSection} />
      <Home />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
