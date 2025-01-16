import ParticlesComponent from "./components/ParticlesComponent";
import Navbar from "./Navbar";
import Home from "./Home";
import Experience from "./Experience";
import Papers from "./Papers";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesComponent />
      <Navbar />
      <Home />
      <Experience />
      <Papers />
      <Projects />
    </div>
  );
}

export default App;
