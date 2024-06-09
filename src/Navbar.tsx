import "./App.css";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-comp">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <p className="navbar-tab">Home</p>
      </Link>
      <Link
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <p className="navbar-tab">Experience</p>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <p className="navbar-tab">Projects</p>
      </Link>
    </div>
  );
}

export default Navbar;
