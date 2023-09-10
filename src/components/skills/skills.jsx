import React from 'react'
import "./skills.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"
function skills() {
  return (
  <section id='skills'>
     <span className='skillTitle'>What I Do</span>
     <span className="skillDesc">I am a skilled and experienced MERN Stack developer</span>
     <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Front End Delopment</h2>
            <p>Front-end development using React empowers developers to build dynamic and responsive user interfaces with ease.</p>
        </div>
     </div>
     <div className="skillBar">
        <img src={WebDesign} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Back End Delopment</h2>
            <p>Back-end development using Node.js enables scalable and efficient server-side applications with JavaScript.</p>
        </div>
     </div>
     <div className="skillBar">
        <img src={AppDesign} alt="" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Managing Databases</h2>
            <p>Database management in SQL offers structured data storage with strong data consistency, while NoSQL provides flexible, schema-less storage for unstructured.</p>
        </div>
     </div>
  </section>
  )
}

export default skills