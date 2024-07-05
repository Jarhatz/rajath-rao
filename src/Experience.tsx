import "./Home.css";
import "./Experience.css";

function Experience() {
  return (
    <div id="experience" className="exp-wrapper">
      <div className="exp-title">
        <span>Experience</span>
      </div>
      <div className="exp-container">
        <div className="exp-header-container">
          <p className="exp-header">Education</p>
        </div>
        <p className="exp-header-mobile">Education</p>
        <div className="exp-content-comp">
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">M.S. in Data Science</span>{" "}
              • December 2024
            </p>
            <p className="exp-text2">
              Stony Brook University | Stony Brook, NY
            </p>
            <p className="exp-text1" style={{ marginBottom: "2em" }}>
              Deep Learning research with Professor Andrew Schwartz in
              multimodal language models. Thesis in Deep Learning for Brain
              Computer Interfaces leveraging NLP/CV paradigms.
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                B.S. in Computer Science & Engineering
              </span>{" "}
              • March 2023
            </p>
            <p className="exp-text2">
              University of California, Irvine | Irvine, CA
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="exp-header-container">
          <p className="exp-header">Work</p>
        </div>
        <p className="exp-header-mobile">Work</p>
        <div className="exp-content-comp">
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                AI/DL Engineer Intern
              </span>
            </p>
            <p className="exp-text1 exp-text3">
              Intel · <span className="exp-text2">May 2024 - Present</span>
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">Graduate Researcher</span>
            </p>
            <p className="exp-text1 exp-text3">
              Stony Brook University HLAB ·
              <span className="exp-text2"> August 2023 - Present</span>
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                HPC Software Engineer Co-Op Intern
              </span>
            </p>
            <p className="exp-text1 exp-text3" style={{ marginBottom: "0" }}>
              Intel · <span className="exp-text2">Jun 2021 - April 2023</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
