import React from 'react'
import { IoIosHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { MdDesignServices } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import './nav.css'
import { useState } from 'react';

function Nav() {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#top" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoIosHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><MdDesignServices /></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><FiBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav