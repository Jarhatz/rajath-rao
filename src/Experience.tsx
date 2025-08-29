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
              <span className="emphasize emphasize2">
                M.S. in Data Science (Thesis)
              </span>{" "}
              • December 2024
            </p>
            <p className="exp-text2">
              Stony Brook University | Stony Brook, NY
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
                AI Research Scientist
              </span>
            </p>
            <p className="exp-text1 exp-text3">
              Inflection AI ·
              <span className="exp-text2"> June 2025 - Present</span>
              <p className="exp-text1" style={{ marginTop: "1rem" }}>
                Model Alignment • Multimodality • Speech Models • Distillation
              </p>
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                Machine Learning Engineer
              </span>
            </p>
            <p className="exp-text1 exp-text3">
              SiMa AI ·
              <span className="exp-text2"> January 2025 - June 2025</span>
              <p className="exp-text1" style={{ marginTop: "1rem" }}>
                Developing and deploying models for inference on edge devices.
                Collaborating with cross-functional teams to integrate AI
                solutions into a system on chip (SoC). Optimizing architectures
                using quantization, graph surgery, and mixed precision
                techniques for high performance and accuracy.
              </p>
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                Graduate Student Researcher
              </span>
            </p>
            <p className="exp-text1 exp-text3">
              HLAB ·<span className="exp-text2"> August 2023 - August 2025</span>
              <p className="exp-text1" style={{ marginTop: "1rem" }}>
                Research thesis with Professor Andrew Schwartz in devising
                multimodal foundation models for downstream tasks. Other works
                include EEG encoder/decoder networks for Brain Computer
                Interface applications.
              </p>
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                HPC AI/ML Engineer Intern
              </span>
            </p>
            <p className="exp-text1 exp-text3">
              Intel · <span className="exp-text2">May 2024 - August 2024</span>
              <p className="exp-text1" style={{ marginTop: "1rem" }}>
                Profiling and optimizing models for greater training/inferencing
                performance on Intel GPUs and hardware accelerators. Developing
                deep learning architectures and enabling HuggingFace
                transformers library on Habana AI Gaudi cards.
              </p>
            </p>
          </div>
          <div className="exp-content">
            <p className="exp-text1">
              <span className="emphasize emphasize2">
                HPC Software Engineer Co-Op
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
