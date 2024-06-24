import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiGeeksforgeeks } from "react-icons/si";

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sam5472/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/samyulakshmi" target="_blank" rel="noreferrer"><IoLogoGithub/></a>
        <a href="https://www.geeksforgeeks.org/user/samyulakshmi123/" target="_blank" rel="noreferrer"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials