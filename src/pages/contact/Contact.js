import React from "react";
import Nav from "../../components/Nav";
import ContactForm from "./ContactForm";
import Map from "./Map";
import "./contact.css";
import Footer from "../../components/Footer";
import Helmets from "./Helmet";

function Contact() {
  /*navigator.geolocation.getCurrentPosition(
    (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("lat:" + lat, lon);
    },
    (err) => {
      console.log(err);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );*/

  return (
    <div>
      <Helmets/>
      <Nav color={"#000000"} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
