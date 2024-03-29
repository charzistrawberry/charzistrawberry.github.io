import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { BsLinkedin } from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form=useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bcqq8jj', 'template_v5sz17d', form.current, 'S0lUftoswGxXCLtbs')
    e.target.rest();
  };

  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className= "container contact__container">
      <div className="contact__options">
        <article className="contact__option">
            <MdOutlineMail className = "contact__option-icon"/>
            <h4>Email</h4>
            <h5>sharonguan2003@gmail.com</h5>
            <a href="mailto:sharonguan2003@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className="contact__option">
            <BsLinkedin className = "contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>sharon-guan-2575b8226/</h5>
            <a href="https://www.linkedin.com/in/sharon-guan-2575b8226/" target="_blank">LinkedIn</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>

        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="text" name="email" placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact