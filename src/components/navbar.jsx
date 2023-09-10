import React from "react";
import "./navbar/navbar.css";
import logo from "../assets/logo.png";
import {Link} from "react-scroll";
import contactImg from "../assets/contact.png"

function navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to ="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
        <Link activeClass="active" to ="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to ="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Portfolio</Link>
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"});
      }}>
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
}

export default navbar;
