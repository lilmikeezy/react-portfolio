import React from 'react'
import './education.css'
import {IoSchool} from 'react-icons/io5'
import {BsPencilSquare} from 'react-icons/bs'
import {FaUserGraduate} from 'react-icons/fa'


const Education = () => {
  return (
    <section id ="education">Education
    <h5>What I Study</h5>
    <h2>Education</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Software Engineering</h3>

          </div>
          <ul className="education_list">
            <li>
            <BsPencilSquare className='education__list-icon'/>
            <IoSchool className='education__list-icon'/>
              <p>ISCOD Master Degree</p>
            </li>
            <li>
            <FaUserGraduate className='education__list-icon'/>
              <p>UX/UI Design</p>
            </li>
            <li>
            <FaUserGraduate className='education__list-icon'/>
              <p></p>
            </li>
          </ul>
        </article>

          <article className="education">
          <div className="education__head">
            <h3>Computer Science</h3>

          </div>
          <ul className="education_list">
            <li>
              <FaUserGraduate className='education__list-icon'/>
              <p>Nantes University Bachelor Degree</p>
            </li>
            <li>
            <FaUserGraduate className='education__list-icon'/>
              <p>Nantes University Bachelor Degree</p>
            </li>
            <li>
            <FaUserGraduate className='education__list-icon'/>
              <p>High school Baccalaureat Degree</p>
            </li>
          </ul>
        </article>

        <article className="education">
          <div className="education__head">
            <h3>Science</h3>

          </div>
          <ul className="education_list">
            <li>
              <FaUserGraduate className='education__list-icon'/>
              <p>High School Baccalaureat Degree</p>
            </li>
            <li>
            <FaUserGraduate className='education__list-icon'/>
              <p>Nantes University Bachelor Degree</p>
            </li>
            <li>
            <FaUserGraduate className='education__list-icon'/>
              <p>High school Baccalaureat Degree</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}


export default Education