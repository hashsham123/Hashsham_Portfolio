import React from "react";
import TwitterIcon from "../../assets/twitter.png"
import YoutubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"
import FacebookIcon from "../../assets/facebook-icon.png"
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
          <img src={TwitterIcon} alt="link" className="link" />
          <img src={YoutubeIcon} alt="link" className="link" />
          <img src={InstagramIcon} alt="link" className="link" />
          <img src={FacebookIcon} alt="link" className="link" />
          
        </div>
      </form>
    </div>
  );
}

export default contact;
