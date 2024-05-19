import "./Home.css";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaCheck } from "react-icons/fa";
import { MdCopyAll } from "react-icons/md";

function Home() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rajath.rao@stonybrook.edu");
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  return (
    <div className="home-comp">
      <div className="profile">
        <div className="title">
          <div className="my-name">
            <span>Rajath Rao</span>
          </div>
          <p className="profile-text">
            I am a Computer Scientist + Data Scientist currently working at{" "}
            <span className="emphasize2">Intel</span> on model optimization for
            faster training and inferencing on hardware accelartors in HPC
            infrastructure.
          </p>
          <div className="contacts">
            <a href="mailto:rajathrao1001@gmail.com">
              <div className="contact-comp">
                <MdEmail style={{ fontSize: "2rem" }} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rajath-rao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-comp">
                <FaLinkedin style={{ fontSize: "2rem" }} />
              </div>
            </a>
            <a
              href="https://github.com/Jarhatz?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-comp">
                <FaGithub style={{ fontSize: "2rem" }} />
              </div>
            </a>
          </div>
        </div>
        <img className="profile-pic" src={"src/assets/grad_photo.jpg"} />
      </div>

      <div className="home-card">
        <p className="home-text">
          I am an inquisitive mind who is a strong believer of being a lifelong
          learner.
        </p>
        <p className="quote-text">
          “The only true wisdom is in knowing you know nothing.” - Socrates
        </p>
        <p className="home-text">
          I love researching and developing deep learning frameworks in the
          realm of <span className="emphasize1">Brain Computer Interfaces</span>
          ,<span className="emphasize1"> Computer Vision</span>, and{" "}
          <span className="emphasize1">Natural Language Processing</span>. My
          passion for Computer Science and AI/ML 🤖 stems from my personal
          quality of being a lifelong learner. The inner-child in me wants to
          make the sci-fi movies 🍿 I watched growing up a reality...
        </p>
        <p className="home-text">
          I am constantly trying out new ideas💡and hunting more problems to
          solve. When I am not coding or reading, some of my other interests
          include playing basketball🏀, working out💪, and making music🎶. Don't
          be shy to contact me at
          <span className="emphasize1">
            {" "}
            rajath.rao[AT]stonybrook[DOT]edu
          </span>{" "}
          <button className="copy-button" onClick={copyEmail}>
            {isEmailCopied ? <FaCheck /> : <MdCopyAll />}
          </button>{" "}
          if you are looking to collaborate or ask any questions.
        </p>
      </div>
    </div>
  );
}

export default Home;
