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
              <section
                key={i}
                onClick={() => navigate(`/project/${value.name}`)}
              >
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
