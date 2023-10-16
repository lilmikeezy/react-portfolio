import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Education/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App