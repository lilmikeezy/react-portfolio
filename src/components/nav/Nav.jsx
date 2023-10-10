import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {LiaToolsSolid} from 'react-icons/lia'
import {FaUserGraduate} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'
import {IoIosContact} from 'react-icons/io'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiHomeHeart/></a>
      <a href="#about"><SiAboutdotme/></a>
      <a href="#experience"><LiaToolsSolid/></a>
      <a href="#education"><FaUserGraduate/></a>
      <a href="#portfolio"><BsBriefcaseFill/></a>
      <a href="#contact"><IoIosContact/></a>
    </nav>
  )
}

export default Nav