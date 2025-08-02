/** @format */

import React, { useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { project } = useContext(ProjectContext);
  const navigate = useNavigate();
  return (
    <div className="project-con">
      <h1>Our casestudy</h1>
      <br />
      <br />
      <div className="project">
        <div>
          {project.slice(0, 2).map((value, i) => {
            return (
                <section key={i} data-aos="fade-up"
                data-aos-duration={i + 1000}
                onClick={()=>navigate(`/project/${value.name}`)}
                >
                  <img src={value.img} alt="project" />
                  <p>
                    <b>{value.name}</b>
                  </p>
                </section>
            );
          })}
        </div>
        <div>
          <a
            href={"/projects"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: "#0c0c0c",
                color: "#ffffff",
                width: "120px",
                alignSelf: "flex-end",
              }}
            >
              More Portfolio
            </button>
          </a>

          {project.slice(2, 4).map((value, i) => {
            return (
              <section
                key={i}
                data-aos="fade-up"
                data-aos-duration={i + 1 + 1000}
                onClick={()=>navigate(`/project/${value.name}`)}
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

export default Projects;
