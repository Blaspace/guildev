/** @format */

import React from "react";
import logo from "../public/logo.png";

function Footer() {
  return (
    <footer className="footer-con">
      <div className="footer">
        <div className="footer-top">
          <div>
            <h3>
              <img src={logo} /> GUILDEV
            </h3>
            <br />
            <p>
              At Guildev, we are passionate about transforming businesses
              through innovative web solutions. As a Full-Stack web development
              agency, we specialize in building end-to-end digital platforms
              that are visually stunning, functionally robust, and scalable for
              future growth.
            </p>
          </div>
          <ul>
            <p>
              <b>Our Services</b>
            </p>
            <br />
            <li>Web Development</li>
            <li>Debugging and Troubleshooting</li>
            <li>Consulting</li>
            <li>Cloud Services and Hosting Solutions</li>
            <li>E-commerce Solutions</li>
            <li>Website Maintenance and Support</li>
          </ul>
          <ul>
            <p>
              <b>Quick Link</b>
            </p>
            <br />
            <a href={'/'} style={{textDecoration:'none', color:"#ffffff"}}><li>Home</li></a>
            <a href={'/about'} style={{textDecoration:'none', color:"#ffffff"}}><li>About</li></a>
            <a href={'/contact'} style={{textDecoration:'none', color:"#ffffff"}}><li>Contact</li></a>
            <a href={'/projects'} style={{textDecoration:'none', color:"#ffffff"}}><li>Portfolio</li></a>
          </ul>
          <div>
            <ul>
              <p>
                <b>Subscribe</b>
              </p>
              <br />
              <section>
                <input type="text" placeholder="Enter you email" />
                <button
                  className="btn"
                  style={{
                    background: "#000000",
                    color: "#ffffff",
                    border: " none",
                  }}
                >
                  Subscribe
                </button>
              </section>
            </ul>
          </div>
        </div>
        <div className="footer-buttom"></div>
      </div>
    </footer>
  );
}

export default Footer;
