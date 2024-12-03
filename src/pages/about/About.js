/** @format */

import React from "react";
import Header from "./Header";
import "./about.css";
import Nav from "../../components/Nav";
import Services from "./Services";
import OurTeam from "./OurTeam";
import CallToAction from "../../components/CallToAction";
import Mission from "./Mission";
import Footer from "../../components/Footer";

function About() {
  return (
    <div>
      <Nav color={"#000000"} />
      <Header />
      <Services />
      <Mission/>
      <OurTeam/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default About;
