import React from "react";
import LinkedIn from "../../assets/linkedIn.png"
import InstagramIcon from "../../assets/instagram.png"
import Gihub from "../../assets/Github.png"
import "../contact/contact.css"
function contact() {
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form to discuss any work opportunity.
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
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

export default contact;
