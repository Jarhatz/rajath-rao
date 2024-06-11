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
        <div className="exp-content-comp">
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize3">M.S. in Data Science</span>
              {" • "}
              <span className="exp-text1">December 2024</span>
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
              <span className="emphasize emphasize3">
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
        <div className="exp-content-comp">
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize3">M.S. in Data Science</span>
              {" • "}
              <span className="exp-text1">December 2024</span>
            </p>
            <p className="exp-text2">
              Stony Brook University | Stony Brook, NY
            </p>
            <p className="exp-text1">
              Deep Learning research with Professor Andrew Schwartz in
              multimodal language models. Thesis in Deep Learning for Brain
              Computer Interfaces leveraging NLP/CV paradigms.
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize3">
                B.S. in Computer Science & Engineering
              </span>{" "}
              • March 2023
            </p>
            <p className="exp-text2">
              University of California, Irvine | Irvine, CA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
