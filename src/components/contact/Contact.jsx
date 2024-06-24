import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const serviceId = "service_y8ulvf4";
  const templateId = "template_82ka67e";
  const publicId = "fNgChITH_U5Z2Le8d";
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
           <div className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>samyukthavenugopalan@gmail.com</h5>
            <a href="mailto:samyukthavenugopalan@gmail.com" target='_blank'>Send a Message</a>
           </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact