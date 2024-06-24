import React from 'react'
import './skills.css'
import { TbRosetteDiscountCheck } from "react-icons/tb";

function Skills() {
  return (
    <section id='skills'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>DHTMLX</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <TbRosetteDiscountCheck className='skills__details-icon' />
              <div>
                <h4>Hibernate</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills