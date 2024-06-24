import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

function Portfolio() {
  const data =[
    {
      id : 1,
      image : IMG1,
      title : 'Network intrusion detecting using DNN',
      content : 'Developed a network intrusion detection system using Python to monitor and analyze network traffic for detecting malicious activities.'
    },
    {
      id : 2,
      image : IMG2,
      title : 'Android app for Alzheimer’s Diagnosis',
      content : 'Participated in a hackathon to develop an Android app for Alzheimer diagnosis, leveraging AWS services to enhance diagnostic capabilities and support patient management'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
       {
        data.map(({id,image,title,content}) => {
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}></img>
            </div>
             <h2>{title}</h2>
             <p>{content}</p>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio  