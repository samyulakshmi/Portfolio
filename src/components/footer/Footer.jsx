import React from 'react'
import './footer.css'


function Footer() {
  return (
    <footer>
      <a href="#logo" className='footer__logo'>SAMYUKTHA VENUGOPALAN</a>
      <ul className='permalinks'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experiences">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__copyright">
          <small>&copy; SamyukthaV. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer