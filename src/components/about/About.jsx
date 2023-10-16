import React from 'react'
import './about.css'
import ME from '../../assets/darwin.png'
import {IoSchoolSharp} from 'react-icons/io5'
import {AiFillFolderOpen} from 'react-icons/ai'
import {IoFootball} from 'react-icons/io5'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <IoSchoolSharp className='about__icon'/>
            <h5>Situation</h5>
            <small>Graduated from Computer Science bachelor degree and pursuing in Master in Software Engineering with work-study program</small>
            </article>
          

          
            <article className="about__card">
              <AiFillFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>Work on different projects during academic courses in different programming languages</small>
            </article>
          

          
            <article className="about__card">
              <IoFootball className='about__icon'/>
            <h5>Football</h5>
            <small>Used to play football in national and regional level</small>
            </article>
            </div>
          

          <p>
            Freshly Graduated, I'm looking for a work-study program 4 days in company and 1 day at school, I keep abreast of new technologies. 
          </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk !</a>
        </div>
      </div>

    </section>
  )
}

export default About