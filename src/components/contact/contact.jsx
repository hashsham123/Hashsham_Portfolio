import React, { useRef } from "react";
import LinkedIn from "../../assets/linkedIn.png"
import InstagramIcon from "../../assets/instagram.png"
import Gihub from "../../assets/Github.png"
import "../contact/contact.css"
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gdk82h3', 'template_6iw9fi8', form.current, 'A4WsIm07SLl3wFrMh')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent, thanks for your response!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form to discuss any work opportunity.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="to_name"/>
        <input type="email" className="email" placeholder="Your Email" name="from_name"/>
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send"className="submitBtn">
          Submit
        </button>
        <div className="links">
          <a href="https://www.linkedin.com/in/hashsham123" target="_blank">

          <img src={LinkedIn} alt="Linked" className="Linked" />
          </a>

          <a href="https://www.instagram.com/k.hashsham/" target="_blank">

          <img src={InstagramIcon} alt="link" className="link" />
          </a>

          <a href="https://github.com/hashsham123" target="_blank">
          <img src={Gihub} alt="link" className="link" />
          </a>
         
          
        </div>
      </form>
    </div>
  );
}

export default Contact;
