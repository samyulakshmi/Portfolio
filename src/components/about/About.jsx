import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa6";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
          I am a passionate software developer working in the Network Management System (NMS) team,
           specializing in the LTE project. My role in the NMS team has equipped me with a robust understanding of
            telecommunications and network management, allowing me to contribute effectively to the optimization and enhancement 
            of network systems.I am dedicated to writing clean, efficient, and maintainable code. I have a keen eye for detail and a strong commitment to best practices, 
            which ensures the delivery of high-quality software solutions.
             My ability to think critically and solve complex problems has been instrumental in overcoming various technical challenges
              in the projects I have worked on.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About