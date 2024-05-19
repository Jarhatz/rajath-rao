import ParticlesComponent from "./components/ParticlesComponent";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <ParticlesComponent />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
