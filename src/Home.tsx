import "./Home.css";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineOpenInNew, MdEmail } from "react-icons/md";
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
            I am a{" "}
            <span className="emphasize emphasize1">
              Computer Scientist + Data Scientist
            </span>{" "}
            currently working at Intel on profiling and optimizing models for
            faster training/inferencing on Intel GPUs and hardware accelerators.
          </p>
          <div className="contacts">
            <a href="mailto:rajath-rao1001@gmail.com">
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
          <div
            className="resume-link"
            onClick={() =>
              window.open(
                "/rajath-rao/files/Resume - Rajath Rao 2024.pdf",
                "_blank"
              )
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
          {/* “The only true wisdom is in knowing you know nothing.”{" "}
          <span className="emphasize"> - Socrates</span> */}
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
          I love researching and developing deep learning frameworks in the
          realm of <span className="emphasize">Brain Computer Interfaces</span>,
          <span className="emphasize"> Computer Vision</span>, and{" "}
          <span className="emphasize">Natural Language Processing</span>. My
          passion for Computer Science and AI/ML 🤖 stems from my personal
          quality of being a lifelong learner. The inner-child in me wants to
          make the sci-fi movies 🍿 I watched growing up a reality...
        </p>
        <p className="home-text">
          I am constantly trying out new ideas💡and hunting problems to solve.
          When I am not coding or reading, some of my other interests include
          playing basketball🏀, working out💪, making music🎹, and casual
          gaming🎮. Please do not hesitate to contact me at
          <span className="emphasize">
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
