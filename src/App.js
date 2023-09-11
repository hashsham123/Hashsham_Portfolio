// import Navbar from "./components/navbar";
import Intro from "./components/intro/intro";

import { Routes, Route } from "react-router-dom";

import Certifications from "./components/certifications/certificate";
// import Pdf from "../src/assets/HashshamKhan_Resume.pdf"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/certificate" element={<Certifications />}></Route>
      </Routes>
      {/* <embed src={Pdf} width="800px" height="2100px" /> */}
    </>
  );
}

export default App;
