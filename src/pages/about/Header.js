/** @format */

import React from "react";

function Header() {
  return (
    <div className="about-header-con">
      <section className="about-header">
        <div className="about-header-text">
          <h1>
            Ready to take
            <br />
            <span>your business</span>
            <br />
            to the next level?
          </h1>
          <br />
          <p>
            With a commitment to quality, agility, and cutting-edge technology,
            Guilders technology ensures that every project is executed with precision.
            Whether you're a startup or an established business, we work closely
            with you to understand your goals, turning ideas into impactful
            digital products that make a difference.
          </p>
        </div>
        <div className="abouts-img">
          <img src={require("../../public/poster.png")} alt="about" data-aos="fade-up"
            data-aos-duration="600" />
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
      </section>
    </div>
  );
}

export default Header;
