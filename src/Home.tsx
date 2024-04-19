import "./Home.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Home() {
  return (
    <div className="home-comp">
      <div className='my-name'>
        <span>Rajath Rao</span>
      </div>
      <div className='contacts'>
        <a href="mailto:rajathrao1001@gmail.com">
          <div className='contact-comp'>
            <MdEmail style={{ fontSize: '2rem' }} />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rajath-rao/" target="_blank" rel="noopener noreferrer">
          <div className='contact-comp'>
            <FaLinkedin style={{ fontSize: '2rem' }} />
          </div>
        </a>
        <a href="https://github.com/Jarhatz?tab=repositories" target="_blank" rel="noopener noreferrer">
          <div className='contact-comp'>
            <FaGithub style={{ fontSize: '2rem' }} />
          </div>
        </a>
      </div>
      <div className='card'>
        <p className="text1">
          Hi! I am researching deep learning frameworks in the realm of <span className="emphasize">Brain Computer Interfaces</span>, 
          <span className="emphasize"> Computer Vision</span>, and <span className="emphasize">Natural Language Processing</span>. My passion for Computer Science and 
          AI/ML stems from my personal quality of being a lifelong learner. The inner-child in me 
          wants to make the sci-fi🤖 movies🍿I watched growing up a reality.
        </p>
      </div>
    </div>
  );
}

export default Home;
