import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import Resume from "../../assets/HashshamKhan_Resume.pdf";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Skills from "../skills/skills";
import Works from "../works/works";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
function intro() {
  return (
    <>
      <Navbar />
      <section id="intro" className="introSection">
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I am
            <span className="introName"> Hashsham</span>
            <br />
            Website Designer
          </span>
          <p className="introPara">
            {" "}
            I am a skilled web designer with experience in creating
            <br /> visually apealing and user friendly websites.{" "}
          </p>

          {/* <Link to="/certificate"> */}
          <Link to="/certificate">
            <button className="btn">
              <img src={btnImg} alt="button" className="btnImg" />
              Credits
            </button>
          </Link>

          {/* </Link> */}

          <a href={Resume} download="Resume">
            <button className="btn">
              <img src={btnImg} alt="botton" className="btnImg" />
              Resume
            </button>
          </a>
        </div>
        <img className="bg" src={bg} alt="Profile" />
      </section>
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default intro;
