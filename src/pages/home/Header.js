/** @format */

import React from "react";
import Nav from "../../components/Nav";
import OIP from "../../public/Ellipse 10.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            paddingTop: "8%",
            height: "100%",
            maxWidth: "1050px",
          }}
        >
          <div></div>
          <span
            style={{
              height: "350px",
              width: "350px",
              background: "#f4f4f4",
              borderRadius: "50%",
            }}
            data-aos="zoom-out"
            data-aos-duration="2000"
          ></span>
        </div>
      </div>
      <div className="header-con">
        <Nav color={"#ffffff"} />
        <div className="header-head">
          <div className="header-text">
            <h1>
              Your Partner for
              <br />
              <span style={{ color: "#64ccc5" }}>Future-Proof</span> <br />
              Web Development
            </h1>
            <br />
            <br />
            <p>
              Guildev leverages modern frameworks and industry best practices to
              build robust, interactive, and user-friendly web applications from
              concept to launch.
            </p>
            <br />
            <br />
            <button className="btn" onClick={() => navigate("/contact")}>
              Get in touch
            </button>
            <div></div>
          </div>
          <div className="header-img">
            <div>
              <section>
                <img src={OIP} alt="" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
