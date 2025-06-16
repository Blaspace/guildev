/** @format */

import React from "react";

function ContactForm() {
  return (
    <div className="contact-con">
      <div className="contact">
        <div>
          <h1>Let's talk</h1>
          <br />
          <p>Identify and define the problem or opportunity for improvement. Identify and define the problem or opportunity for improvement.Identify and define the problem or opportunity for improvement.</p>
          <br />
          <hr />
          <br />
          <ul>
            <li>
              <label>
                <span></span>
                <p>
                  <b>Our Email:</b>
                  <br />
                  info@guilders.com
                </p>
              </label>
            </li>
            <br />
            <li>
              <label>
                <span></span>{" "}
                <p>
                  {" "}
                  <b>Our Phone Number:</b>
                  <br />
                  +234 816 653 3430
                </p>
              </label>
            </li>
          </ul>
          <br />
          <hr />
        </div>
        <form>
          <label>Your Full Name:</label>
          <br />
          <input type="text" />
          <br />
          <br />
          <label>Your Phone Number:</label>
          <br />
          <input type="tel" />
          <br />
          <br />
          <label>Your Email:</label>
          <br />
          <input type="email" />
          <br />
          <br />
          <label>Message</label>
          <br />
          <textarea />
          <br />
          <br />
          <button
            className="btn"
            style={{ background: "#000000", color: "#ffffff" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
