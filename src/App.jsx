import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Career from "./pages/Career";
import Careerdetails from "./pages/Careerdetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/About" element={<About />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/Careerdetails" element={<Careerdetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;