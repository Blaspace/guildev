/** @format */

import React, { useRef } from "react";
import { MdEmail, MdPhonelinkRing } from "react-icons/md";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    e.target.disabled = true; // Disable the button to prevent multiple submissions
    e.target.style.backgroundColor = "#ccc"; // Change button color to indicate it's disabled
    e.target.innerText = "Sending..."; // Change button text to indicate sending
    emailjs
      .sendForm(
        "service_f1tbxth",
        "template_odlqabn",
        form.current,
        "GEi36uwZ_eoX1wdbF"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          // Optionally, you can reset the form after successful submission
          document.getElementById("myForm").reset();
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.log("FAILED...", error);
        }
      )
      .finally(() => {
        e.target.disabled = false; // Disable the button to prevent multiple submissions
        e.target.style.backgroundColor = "#000"; // Change button color to indicate it's disabled
        e.target.innerText = "Send";
      });
  };
  return (
    <div className="contact-con">
      <div className="contact">
        <div>
          <h1>Let's talk</h1>
          <br />
          <p>We would love to hear from you</p>
          <br />
          <div className="socials">
            <span>
              <a
                href="https://instagram.com/guilderstechnology"
                target="_blank"
              >
                <IoLogoInstagram size={20} color="#ffffff" />
              </a>
            </span>
            <span>
              <a href="https://wa.me/2348166533430" target="_blank">
                <IoLogoWhatsapp size={20} color="#ffffff" />
              </a>
            </span>
          </div>
          <br />
          <hr />
          <br />
          <ul>
            <li>
              <label>
                <span>
                  <MdEmail color="#64ccc5" size={20} />
                </span>
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
                <span>
                  <MdPhonelinkRing color="#64ccc5" size={20} />
                </span>{" "}
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
        <form ref={form}>
          <label>Your Full Name:</label>
          <br />
          <input type="text" name="from_name" />
          <br />
          <br />
          <label>Your Phone Number:</label>
          <br />
          <input type="tel" name="from_tel" />
          <br />
          <br />
          <label>Your Email:</label>
          <br />
          <input type="email" name="from_email" />
          <br />
          <br />
          <label>Message</label>
          <br />
          <textarea name="message" />
          <br />
          <br />
          <button
            className="btn"
            style={{ background: "#000000", color: "#ffffff" }}
            onClick={(e) => handleSend(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
