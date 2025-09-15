import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Project";

import "aos/dist/aos.css";
import Pre from "./components/Pre";

export default function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(true), 2000); // 2 sec loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {!load ? (
        <Pre /> // Loader Screen
      ) : (
        <>
          {/* Navbar always visible */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}
