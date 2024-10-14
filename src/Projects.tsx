import "./Projects.css";
import { FaCode } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

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
            className="project-pic"
            src={"/rajath-rao/images/BrainDiffusion.gif"}
          />
          <div className="project-title">
            <p className="project-title-text">Generate Images with Your Mind</p>
          </div>
          <p className="project-text">
            BrainDiffusion is a research project on generating photorealistic
            images from non-invasive, light-weight, neural activity
            measurements. Leveraging Masked Autoencoders, Latent Diffusion
            Models, and CLIP Embeddings, EEG signals can be decoded into images
            perceived by a subject.
          </p>
          <div
            className="project-info"
            onClick={() =>
              window.open(
                "/rajath-rao/files/BrainDiffusion___Generate_Images_With_Your_Mind.pdf",
                "_blank"
              )
            }
          >
            <p className="project-info-text">MORE INFO</p>
            <HiOutlineDocumentText color="white" />
          </div>
          <a
            href="https://github.com/Jarhatz/brain_diffusion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-info">
              <p className="project-info-text">SEE CODE</p>
              <FaCode color="white" />
            </div>
          </a>
        </div>
        <div className="project-card">
          <img
            className="project-pic"
            src={"/rajath-rao/images/thought2text-cover.jpg"}
          />
          <div className="project-title">
            <p className="project-title-text">Thought to Text</p>
          </div>
          <p className="project-text">
            Generating cohesive, sensible text from neural activity is,
            unsurprisingly, a difficult feat. This project presents a framework
            leveraging causal language modeling with GPT2 to decode semantic
            language from fMRI BOLD responses.
          </p>
          <div
            className="project-info"
            onClick={() =>
              window.open(
                "/rajath-rao/files/Thought2Text___Research_Project_Report.pdf",
                "_blank"
              )
            }
          >
            <p className="project-info-text">MORE INFO</p>
            <HiOutlineDocumentText color="white" />
          </div>
          <a
            href="https://github.com/pranavchitale/Thought2Text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-info">
              <p className="project-info-text">SEE CODE</p>
              <FaCode color="white" />
            </div>
          </a>
        </div>
        <div className="project-card">
          <img
            className="project-pic"
            src={"/rajath-rao/images/rtls-project-cover.png"}
          />
          <div className="project-title">
            <p className="project-title-text">
              Real-Time Location Services via BLE
            </p>
          </div>
          <p className="project-text">
            An RTLS application for monitoring and tracking the locations of
            patients/residents in hospitals/senior care centers. This is a
            cost-effective yet efficient IoT solution using trilateration
            techniques on the Cloud.
          </p>
          <a
            href="https://devpost.com/software/real-time-location-services-via-low-energy-bluetooth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-info">
              <p className="project-info-text">MORE INFO</p>
              <HiOutlineDocumentText color="white" />
            </div>
          </a>
          <a
            href="https://github.com/Jarhatz/RTLS-Client-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-info">
              <p className="project-info-text">SEE CODE</p>
              <FaCode color="white" />
            </div>
          </a>
        </div>
        <div className="project-card">
          <img
            className="project-pic"
            src={"/rajath-rao/images/rad-cart-cover.jpg"}
          />
          <div className="project-title">
            <p className="project-title-text">Autonomous Shopping Cart</p>
          </div>
          <p className="project-text">
            RAD Shopping Cart is an autonomous shopping cart with four primary
            features of "user-following," "lane-correction,"
            "collision-detection," and "item-lookup."
          </p>
          <a
            href="https://github.com/Jarhatz/RAD-Shopping-Cart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-info">
              <p className="project-info-text">MORE INFO</p>
              <HiOutlineDocumentText color="white" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
