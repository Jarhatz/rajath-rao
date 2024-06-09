import "./App.css";
import "./Navbar.css";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

function Navbar({ scrollToSection }: NavbarProps) {
  return (
    <div className="navbar-comp">
      {/* <p
        className="navbar-tab"
        onClick={() =>
          window.scrollTo({
            behavior: "smooth",
            top: 0,
          })
        }
      >
        Home
      </p>
      <p className="navbar-tab">Experience</p>
      <p className="navbar-tab">Projects</p> */}

      <a href="#home">
        <p className="navbar-tab" onClick={() => scrollToSection("home")}>
          Home
        </p>
      </a>
      <a href="#experience">
        <p className="navbar-tab" onClick={() => scrollToSection("experience")}>
          Experience
        </p>
      </a>
      <a href="#projects">
        <p className="navbar-tab" onClick={() => scrollToSection("projects")}>
          Projects
        </p>
      </a>
    </div>
  );
}

export default Navbar;
