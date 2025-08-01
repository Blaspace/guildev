import React, { useContext, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "./Header";
import ProjectContext from "../../context/ProjectContext";
import { useParams } from "react-router-dom";
import ContactLink from "../../components/ContactLink";
import Footer from "../../components/Footer";

function SingleProject() {
  const { project } = useContext(ProjectContext);
  const [singleProject, setSingleProject] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const proj = project.filter((value) => value.name === name);
    setSingleProject(proj);
  }, [name]);

  return (
    <div>
      <Nav color={"#000000"} />
      <Header project={singleProject} />
      <ContactLink />
      <Footer />
    </div>
  );
}

export default SingleProject;
