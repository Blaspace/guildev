/** @format */

import React from "react";
import Header from "./Header";
import "./Home.css";
import Services from "./Services";
import About from "./About";
import Process from "./Process";
import Projects from "./Projects";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ContactLink from "../../components/ContactLink";

function Home() {
  return (
    <div>
      <Nav color={"#ffffff"} />
      <Header />
      <Services />
      <About />
      <Process />
      <Projects />
      <ContactLink/>
      <Footer />
    </div>
  );
}

export default Home;
