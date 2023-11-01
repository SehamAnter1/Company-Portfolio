import React from "react";
import Home from "./Components/Home/Home";
import Design from "./Components/Design/Design";
import Branding from "./Components/Branding/Branding";
import Development from "./Components/Development/Development";
import "./assets/styles/main-sass/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/development" element={<Development />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
