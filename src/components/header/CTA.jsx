import React from 'react'
import Resume from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={Resume} download = "Samyuktha_Venugopalan.pdf" className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA