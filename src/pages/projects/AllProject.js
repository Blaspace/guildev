/** @format */

import React, { useContext } from "react";
import ProjectContext from "../../context/ProjectContext";

function AllProject() {
  const { project } = useContext(ProjectContext);
  return (
    <div className="projects-con">
      <div className="projects">
        <div>
          {project.map((value, i) => {
            return (
              <section key={i}>
                <img src={value.img} alt="project" />
                <p>
                  <b>{value.name}</b>
                </p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProject;
