import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import Resume from "../../assets/HashshamKhan_Resume.pdf";
function intro() {
  return (
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

          <a href="#">
          <button className="btn">
            <img src={btnImg} alt="button" className="btnImg" />
            Hire Me
          </button>
          </a>
          
        

        <a href={Resume} download="Resume">
          <button className="btn">
            <img src={btnImg} alt="botton" className="btnImg" />
            Resume
          </button>
        </a>
      </div>
      <img className="bg" src={bg} alt="Profile" />
    </section>
  );
}

export default intro;
