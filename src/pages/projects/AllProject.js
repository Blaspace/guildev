/** @format */

import React, { useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import { useNavigate } from "react-router-dom";

function AllProject() {
  const { project } = useContext(ProjectContext);
  const navigate = useNavigate();
  return (
   <div className="projects-con">
      <div className="projects">
        <div>
          {project.map((value, i) => {
            return (

<a href={`/project/${value.name}`} style={{color: "black" textDecoration: "none"}}>
              <section
                key={i}
              >
                <img src={value.img} alt="project" />
                <p>
                  <b>{value.name}</b>
                </p>
              </section>
</a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProject;
