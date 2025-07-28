import "./Papers.css";

function Papers() {
  return (
    <div id="papers" className="papers-wrapper">
      <div className="projects-title">
        <span>Papers</span>
      </div>
      <div className="papers-stack">
        <span className="paper-text1">
          <span className="emphasize">[1]</span> Rao, R., Ganesan, A., Kjell,
          O., Luby, J., Raghavan, A., Feltman, S., Ringwald, W., Boyd R., Luft,
          B., Ruggero, C., Ryant, N., Kotov, R., & Schwartz, H. (2025). WhiSPA:
          Semantically and Psychologically Aligned Whisper with Self-Supervised
          Contrastive and Student-Teacher Learning. Under Review at ACL 2025.{" "}
          <a
            href="https://aclanthology.org/2025.acl-long.1098/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="emphasize">[Paper]</span>
          </a>{" "}
          <a
            href="https://github.com/humanlab/WhiSPA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="emphasize">[Code]</span>
          </a>
        </span>
        <span className="paper-text1">
          <span className="emphasize">[2]</span> Varadarajan, V., Lahnala, A.,
          Ganesan, A., Dey, G., Mangalik, S., Bucur, A.M., Soni, N., Rao, R.,
          Lanning, K., Vallejo, I., Flek, L., Schwartz, H., Welch, C., & Boyd,
          R. (2024). Archetypes and Entropy: Theory-Driven Extraction of
          Evidence for Suicide Risk. In Proceedings of the 9th Workshop on
          Computational Linguistics and Clinical Psychology (CLPsych 2024) (pp.
          278–291). Published at ACL 2024.{" "}
          <a
            href="https://aclanthology.org/2024.clpsych-1.28/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="emphasize">[Paper]</span>
          </a>
        </span>
        <span className="paper-text1">
          <span className="emphasize">[3]</span> Rao, R., Zhou, L., Samaras, D.
          (2024). BrainDiffusion: Reconstructing Visual Semantics from
          Non-Invasive Neural Activity Readings. Unpublished.{" "}
          <span
            className="emphasize paper-hyplink"
            onClick={() =>
              window.open(
                "/rajath-rao/files/BrainDiffusion___Research_Study.pdf",
                "_blank"
              )
            }
          >
            [Paper]
          </span>{" "}
          <a
            href="https://github.com/Jarhatz/brain_diffusion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="emphasize">[Code]</span>
          </a>
        </span>
        <span className="paper-text1">
          <span className="emphasize">[4]</span> Rao, R., Chitale, P., Tiwari,
          A. (2024). Thought2Text: Semantic Language Generation from
          Non-Invasive Neural Activity Readings. Unpublished.{" "}
          <span
            className="emphasize paper-hyplink"
            onClick={() =>
              window.open(
                "/rajath-rao/files/Thought2Text___Research_Project_Report.pdf",
                "_blank"
              )
            }
          >
            [Paper]
          </span>{" "}
          <a
            href="https://github.com/pranavchitale/Thought2Text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="emphasize">[Code]</span>
          </a>
        </span>
      </div>
      <div className="divider" />
    </div>
  );
}

export default Papers;
