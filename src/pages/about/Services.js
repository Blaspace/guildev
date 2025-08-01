/** @format */

import React from "react";

function Services() {
  const services = [
    {
      header2: "Personalized Attention",
      text: "We treat every project like it’s our own. No generic solutions — we take the time to understand your goals and craft something that truly fits.",
    },
    {
      header2: " Ongoing Support",
      text: "The launch is just the beginning. Whether it's updates, improvements, or tech advice, we’re here when you need us.",
    },
    {
      header2: "Real People, Real Passion",
      text: "We're a small, passionate team — not a faceless agency. You’ll always talk to someone who actually cares about your success.",
    },
  ];
  return (
    <div className="about-service-con">
      <h1>What Makes Us<br/> Different</h1>
      <br />
      <br />
      <div className="about-service">
        {services.map((value) => {
          return (
            <div>
              <h3>{value.header2}</h3>
              <p>{value.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
