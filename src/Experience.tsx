import "./Home.css";
import "./Experience.css";

function Experience() {
  return (
    <div id="experience" className="exp-wrapper">
      <div className="exp-title">
        <span>Experience</span>
      </div>
      <div className="exp-comp1">
        <div className="exp-comp2a">
          <p className="exp-header">Education</p>
          <div className="exp-content-comp">
            <div className="exp-content">
              <p className="exp-text1">
                <span className="emphasize emphasize3">
                  M.S. in Data Science
                </span>
                {" • "}
                <span className="exp-text1">December 2024</span>
              </p>
              <p className="exp-text2">
                Stony Brook University | Stony Brook, NY
              </p>
              <p className="exp-text1">
                Deep Learning research with Professor Andrew Schwartz in
                multimodal models and Brain Computer Interfaces leveraging
                NLP/CV deep learning paradigms.
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
        <div className="exp-comp2a exp-comp2b">
          <p className="exp-header">Work</p>
          <div className="exp-content-comp">
            <div className="exp-content">
              <p className="exp-text1">
                <span className="emphasize emphasize3">
                  M.S. in Data Science
                </span>{" "}
                • December 2024
              </p>
              <p className="exp-text2">
                Stony Brook University | Stony Brook, NY
              </p>
              <p className="exp-text1">
                Deep Learning research with Professor Andrew Schwartz in
                multimodal models and Brain Computer Interfaces leveraging
                NLP/CV deep learning paradigms.
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
    </div>
  );
}

export default Experience;
