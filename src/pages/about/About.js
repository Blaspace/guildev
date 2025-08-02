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
import ContactLink from "../../components/ContactLink";
import Helmet from "./Helmet";

function About() {
  return (
    <>
      <Helmet/>
      <Nav color={"#000000"} />
      <Header />
      <Services />
      <Mission />
      <CallToAction />
      <ContactLink/>
      <Footer />
    </>
  );
}

export default About;
