/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-con">
      <div className="about">
        <div
          className="about-img"
          data-aos="fade-top"
          data-aos-duration="800"
        >
          <div >
            <section
              
            ></section>
          </div>
        </div>
        <div className="about-text">
          <br />
          <br />
          <h2>About us</h2>
          <br />
          <h1>The core mission behind all our work</h1>
          <br />
          <p>
            At GUILDERS technology, we’re not just a web agency — we’re your
            digital partners. We’re passionate about using the power of the web
            to help businesses grow, connect, and shine online. With a friendly
            team of developers, designers, and tech consultants, we build smart,
            modern solutions that are custom-tailored to your goals — no
            copy-paste templates here. Whether you’re starting from scratch or
            leveling up, we’re here to make the process easy, exciting, and
            impactful.
          </p>
          <section>
            {/*<div>
              <h1>
                200 <small>+</small>
              </h1>
              <p>Company helped</p>
            </div>
            <div>
              <h1>
                320 <small>+</small>
              </h1>
              <p>Revenue granted</p>
            </div>*/}
          </section>
          <br />
          <a href={"/about"} style={{ textDecoration: "none", color: "black" }}>
            <button className="btn">Learn More</button>
          </a>
        </div>
      </div>
      <img
        src={require("../../public/Rectangle 40.png")}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 5,
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default About;
