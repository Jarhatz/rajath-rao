import "./Home.css";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineOpenInNew, MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaCheck, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdCopyAll } from "react-icons/md";

function Home() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rajathrao1001@gmail.com");
    setIsEmailCopied(true);
    setTimeout(() => {
      setIsEmailCopied(false);
    }, 2000);
  };

  return (
    <div id="home" className="home-wrapper">
      <div className="profile">
        <div className="title">
          <div className="my-name">
            <span>Rajath Rao</span>
          </div>
          <img
            className="mobile-profile-pic"
            src={"/rajath-rao/images/grad_photo.jpg"}
          />
          <p className="profile-text">
            I am an{" "}
            <span className="emphasize emphasize1">
              AI / Machine Learning Engineer
            </span>{" "}
            currently working at{" "}
            <a
              href="https://sima.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="emphasize emphasize1">SiMa.ai</span>
            </a>
          </p>
          <div className="contacts">
            <a href="mailto:rajathrao1001@gmail.com">
              <div className="contact-comp">
                <MdEmail style={{ fontSize: "2rem" }} />
              </div>
            </a>
            <a href="tel:4083004564">
              <div className="contact-comp">
                <FaPhoneAlt style={{ fontSize: "1.6rem" }} />
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
            <a
              href="https://scholar.google.com/citations?hl=en&user=zhO5WMAAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-comp">
                <FaGoogleScholar style={{ fontSize: "2rem" }} />
              </div>
            </a>
          </div>
          <div className="email-comp">
            <span className="emphasize"> rajathrao1001[AT]gmail[DOT]com</span>{" "}
            <button className="copy-button" onClick={copyEmail}>
              {isEmailCopied ? <FaCheck /> : <MdCopyAll />}
            </button>{" "}
          </div>
          <div
            className="resume-link"
            onClick={() =>
              window.open("/rajath-rao/files/Resume - Rajath Rao.pdf", "_blank")
            }
          >
            <p className="resume-text">RESUME</p>
            <MdOutlineOpenInNew color="white" />
          </div>
        </div>
        <img
          className="profile-pic"
          src={"/rajath-rao/images/grad_photo.jpg"}
        />
      </div>
      <div className="home-card">
        <p className="quote-text">
          <Typewriter
            words={[
              '"The only true wisdom is in knowing you know nothing." - Socrates',
              '"The measure of intelligence is the ability to change." - Einstein',
              '“The sign of intelligence is that you are constantly wondering." - Sadhguru',
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={25}
            delaySpeed={4000}
          />
        </p>
        <p className="home-text">
          I love researching and developing projects in the realm of{" "}
          <span className="emphasize">Representation Learning</span>,{" "}
          <span className="emphasize">Brain Computer Interfaces</span>, and{" "}
          <span className="emphasize">Multimodal Reinforcement Learning</span>.
          My passion for Computer Science and AI/ML 🤖 stems from my personal
          quality of being a lifelong learner. The inner-child in me wants to
          make the sci-fi movies 🍿 I watched growing up a reality...
        </p>
        <p className="home-text">
          I am constantly trying out new ideas💡and hunting problems to solve.
          When I am not coding or reading, some of my other interests include
          playing basketball🏀, working out💪, making music🎹, and some casual
          gaming🎮. Please do not hesitate to contact me if you are looking
          to collaborate or simply asking questions.
        </p>
      </div>
    </div>
  );
}

export default Home;
