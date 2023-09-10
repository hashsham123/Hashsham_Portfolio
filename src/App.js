import Navbar from "./components/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer";
// import Pdf from "../src/assets/HashshamKhan_Resume.pdf"
function App() {
  return (
    <> 
    
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Contact/>
    <Footer/>
   
    {/* <embed src={Pdf} width="800px" height="2100px" /> */}
    
    
    </>
  );
}

export default App;
