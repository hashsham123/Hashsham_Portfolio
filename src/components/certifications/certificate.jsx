import React from "react";
import ScreenShot1 from "../../assets/photo1.png";
import ScreenShot2 from "../../assets/photo2.png";
import ScreenShot3 from "../../assets/photo3.png";
import ScreenShot4 from "../../assets/photo4.png";
import ScreenShot5 from "../../assets/photo5.png";
import ScreenShot6 from "../../assets/photo6.png";
import ScreenShot7 from "../../assets/photo7.png";
import ScreenShot8 from "../../assets/photo8.png";
import ScreenShot9 from "../../assets/photo9.png";
import ScreenShot10 from "../../assets/photo10.png";
import ScreenShot11 from "../../assets/photo11.png";
import "../certifications/certificate.css"
import { Link } from "react-router-dom";
function certificate() {
  return (
    <>
   <Link to="/">
    <nav className="BackBtn"><button className="Btn">GO BACK</button></nav>
    </Link>
    <section className="certificates">
      

      <div className="certificate">
        <img src={ScreenShot1} alt="" className="certificateImg" />
      </div>

      <div>  
        <img src={ScreenShot2} alt="" className="certificateImg"/>
      </div>

      <div>
        <img src={ScreenShot3} alt="" className="certificateImg"/>
      </div>

      <div>
        <img src={ScreenShot4} alt="" className="certificateImg"/>
      </div>
      <div>
     
        <img src={ScreenShot5} alt="" className="certificateImg"/>
      </div>
      <div>
       
        <img src={ScreenShot6} alt="" className="certificateImg"/>
      </div>
      <div>
      
        <img src={ScreenShot7} alt="" className="certificateImg"/>
      </div>

      <div>
        
        <img src={ScreenShot8} alt="" className="certificateImg"/>
      </div>
      <div>
       
        <img src={ScreenShot9} alt="" className="certificateImg"/>
      </div>
      <div>
       
        <img src={ScreenShot10} alt="" className="certificateImg"/>
      </div>
      <div>
       
        <img src={ScreenShot11} alt="" className="certificateImg"/>
      </div>
    </section>
    </>
  );
}

export default certificate;
