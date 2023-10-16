import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container skills__container">
      <div className="skills__frontend">
        <h3>Frontend Development</h3>
        <div className="skills__content">
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
           <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
           <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

        </div>

      </div>

      <div className="skill__backend">
        <h3>Backend Development</h3>
        <div className="skills__content">
        <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>Java</h4>
            <small className='text-light'>Expercienced</small>
            </div>
          </article>
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
         <div>   
          <h4>Node JS</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
           <div>
           <h4>PHP</h4>
           <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='skills__details'>
            <BsFillPatchCheckFill className='skills__details-icon'/>
        <div>
        <h4>C/C++</h4>
        <small className='text-light'>Intermediate</small>
        </div>
          </article>

        </div>

      </div>
    </div>
    </section>
  )
}

export default Skills