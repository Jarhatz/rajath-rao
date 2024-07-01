import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects-wrapper">
      <div className="projects-title">
        <span>Projects</span>
      </div>
      <p className="home-text">
        Below are some of my works and research from personal interests,
        industry, and academia.
      </p>
      <div className="projects-grid">
        <div className="project-card">
          <img
            className="braindiff-gif"
            src={"src/assets/BrainDiffusion.gif"}
          />
          <p>Text</p>
        </div>
        <div className="project-card">
          <img
            className="project-pic"
            src={"src/assets/thought2text-cover.jpg"}
          />
          <p>Text</p>
        </div>
        <div className="project-card">
          <img
            className="project-pic"
            src={"src/assets/rtls-project-cover.png"}
          />
          <p>Text</p>
        </div>
        <div className="project-card">
          <img className="project-pic" src={"src/assets/rad-cart-cover.jpg"} />
          <p>Text</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
