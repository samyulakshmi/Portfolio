import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
   <Header></Header>
   <Nav></Nav>
   <About></About>   
   <Skills></Skills>
   <Experience></Experience>
   <Portfolio></Portfolio>
   <Contact></Contact>
   <Footer></Footer>
   </>
  )
}

export default App