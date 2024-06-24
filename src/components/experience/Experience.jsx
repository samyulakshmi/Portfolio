import React from 'react'
import './experience.css'
import { FaCheck } from "react-icons/fa6";

function Experience() {
  return (
    <section id='experiences'>
      <h5>My Journey</h5>
      <h2>Services</h2>
      <div className="container experiences__container">
        <article className="experience">
           <div className="experience__head">
            <h3>Software Developer Trainee</h3>
           </div>
           <ul className="experience__list">
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Developed a messaging system using Kafka to notify alarms in the NMS UI,
                 enhancing real-time monitoring and response capabilities.</p>
            </li>
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Created an API to generate bulk reports for network elements,
                 improving data accessibility and operational efficiency.</p>
            </li>
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>These projects allowed me to gain hands-on experience with key technologies and 
                contribute to the optimization of network management systems.</p>
            </li>   
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Shadowed team members to learn new tasks and how to appropriately handle technical issues. </p>
            </li>       
           </ul>
        </article>
        <article className="experience">
           <div className="experience__head">
            <h3>Software Engineer</h3>
           </div>
           <ul className="experience__list">
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Developed and implemented APIs to enhance system functionality and integration.</p>
            </li>
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Managed features from resource collection to delivery, ensuring seamless and timely deployment.</p>
            </li>
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Took ownership of configuration management, maintaining system integrity and reliability..</p>
            </li>
            <li>
              <FaCheck className='experience__list-icon'/>
              <p>Collaborated closely with the node team to integrate network elements and protocols,
                 including SNMP, into the NMS.</p>
            </li>
           </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience