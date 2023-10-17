import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5sjnmco', 'template_nhkt4ea', form.current, 'FyRL6ehElcxcGEb38')
    e.target.reset()
  };
  
  
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2> Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>souksanane.lithavong@outlook.fr</h5>
            <a href="mailto:souksanane.lithavong@outlook.fr" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Souksanane Lithavong</h5>
            <a href="https://www.linkedin.com/in/souksanane-lithavong" target="_blank">Hit me up on Linkedin</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Please enter your full name' required/>
          <input type="email" name='Email' placeholder='Please enter your Email' required/>
          <textarea name="message" rows="7" placeholder='Please enter your message' required></textarea>
          <button type='submit'className='btn btn-primary' > Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact