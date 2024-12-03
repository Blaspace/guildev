
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
