/** @format */

import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import img1 from "../../public/Rectangle 32.png";
import img2 from "../../public/Rectangle 34.png";

function Mission() {
  return (
    <div className="mission-con">
      <div className="mission">
        <div>
          <h3 style={{ color: "#64ccc5", fontSize: "25px" }}>Our Mission</h3>
          <br />
          <h1>
            Boost your with
            <br />
            your business
          </h1>
          <br />
          <p>
            At Guildev, our mission is to empower businesses with dynamic web
            solutions that inspire growth and innovation. We are committed to
          </p>
          <br />
          <section>
            <ul>
              <li>
                <IoCheckmarkCircle color="#64ccc5" size={50} /> Delivering web
                platforms that are not only visually captivating but also
                aligned with each client’s unique goals.
              </li>
              <li>
                <IoCheckmarkCircle color="#64ccc5" size={50} /> Staying ahead of
                trends by leveraging the latest tools, frameworks, and best
                practices in Full-Stack development.
              </li>
              
            </ul>
            <ul>
            <li>
                <IoCheckmarkCircle color="#64ccc5" size={50} /> Building lasting
                relationships by providing reliable support, seamless
                communication, and agile project management.
              </li>
              <li>
                <IoCheckmarkCircle color="#64ccc5" size={50} /> Turning ideas
                into practical digital solutions that enhance operational
                efficiency, customer engagement, and brand value.
              </li>
            </ul>
          </section>
        </div>
        <div>
          <section>
            <div>
              <div style={{ position: "relative" }}>
                <img src={img1} alt="just image" width={"100%"} />
              </div>
              <div className="mission-num">
                <span
                  style={{ borderRight: "1px solid #f4f4f4", height: "100px" }}
                >
                  <h2>10k</h2>
                  <small>elements must have an alt prop, either</small>
                </span>
                <span>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>95+</h2>
                  <small>elements must have an alt prop, either</small>
                </span>
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <img src={img2} alt="just image" width={"100%"} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Mission;
