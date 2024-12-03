/** @format */

import React from "react";
import Header from "./Header";
import "./Home.css";
import Services from "./Services";
import About from "./About";
import Process from "./Process";
import Projects from "./Projects";
import Footer from "../../components/Footer"

function Home() {
  return (
    <div>
      <Header />
      <Services/>
      <About/>
      <Process/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default Home;
