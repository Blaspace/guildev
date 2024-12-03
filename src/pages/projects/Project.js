/** @format */

import React from "react";
import "./Project.css";
import Nav from "../../components/Nav";
import ProjectHeader from "./ProjectHeader";
import CallToAction from "../../components/CallToAction";
import AllProject from "./AllProject";
import Footer from "../../components/Footer";

function Project() {
  return (
    <div>
      <Nav color={"#000000"} />
      <ProjectHeader />
      <AllProject />
      <CallToAction />
      <Footer/>
    </div>
  );
}

export default Project;
