import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {LiaToolsSolid} from 'react-icons/lia'
import {FaUserGraduate} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() =>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><LiaToolsSolid/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaUserGraduate/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#porfolio' ? 'active' : ''}><BsBriefcaseFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoIosContact/></a>
    </nav>
  )
}

export default Nav