/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  return (
    <div className="about-con">
      <div className="about">
        <div className="about-img">
          <div>
            <section></section>
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
            At GUILDEV, we're passionate about leveraging the power of the web
            to help businesses thrive in the digital age. With a team of skilled
            developers, designers, and consultants, we specialize in crafting
            innovative solutions tailored to meet the unique needs of each
            client.
          </p>
          <section>
            <div>
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
            </div>
          </section>
          <br />
          <a href={'/about'} style={{textDecoration:'none', color:"black"}}><button className="btn" >Learn More</button></a>
        </div>
      </div>
    </div>
  );
}

export default About;
