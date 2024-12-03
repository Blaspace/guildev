/** @format */

import React from "react";

function Services() {
  const services = [
    {
      header1: "200+",
      header2: "we are family",
      text: "developers, designers, and consultants, we specialize in crafting innovative solutions tailored to meet the unique needs of each client.",
    },
    {
      header1: "99%",
      header2: "Graphic design",
      text: "developers, designers, and consultants, we specialize in crafting innovative solutions tailored to meet the unique needs of each client.",
    },
    {
      header1: "1.5m",
      header2: "Digital maketing",
      text: "developers, designers, and consultants, we specialize in crafting innovative solutions tailored to meet the unique needs of each client.",
    },
  ];
  return (
    <div className="about-service-con">
      <div className="about-service">
        {services.map((value) => {
          return (
            <div>
              <h1>{value.header1}</h1>
              <h2>{value.header2}</h2>
              <p>{value.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
