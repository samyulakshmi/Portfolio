import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css';
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Samyuktha Venugopalan</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA/ >
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img className="me_img"src={ME} alt="me"></img>
        </div>
        <a href="#contact" className='scroll__down'>SCROLL DOWN </a>
      </div>
    </header>
  )
}

export default Header