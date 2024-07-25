import React from 'react';
import './about.css'
import ME from '../../assests/me.png'
import { FaUser } from 'react-icons/fa'
import { FiAward } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container  about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="img" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>



            <article className='about_card'>
              <FaUser className='about_icon' />
              <h5>Live Projects</h5>
              <small>3+ worldwide</small>
            </article>



            <article className='about_card'>
              <AiFillFolderOpen className='about_icon' />
              <h5>Project</h5>
              <small>10+ Project</small>
            </article>
          </div>

          <p>As a Web Developer with around 1 year of hands-on experience, I am proficient in Javascript, WordPress, HTML, and CSS to create visually appealing and responsive web interfaces. I specialize in React.js, utilizing its component-based architecture to build dynamic user interfaces. My expertise extends to Node.js, enabling me to work on server-side logic and API development. I am well-versed in integrating APIs and connecting to NoSQL databases like MongoDB to manage and retrieve data efficiently. My passion for clean code and dedication to staying updated with industry trends make me a valuable asset to web development projects.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About