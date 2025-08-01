/** @format */

import React from "react";

function OurTeam() {
  const team = [
    {
      name: "Grace John",
      role: "Founder CEO",
      img: require("../../public/Rectangle 30.png"),
    },
    {
      name: "Grace John",
      role: "Founder CEO",
      img: require("../../public/Rectangle 31.png"),
    },
    {
      name: "Grace John",
      role: "Founder CEO",
      img: require("../../public/Rectangle29.png"),
    },
  ];
  return (
    <div className="ourteam-con">
      <h1>Our team</h1>
      <br/>
      <br/>
      <div className="ourteam">
        {team.map((value) => {
          return (
            <div>
              <img src={value.img} alt={value.role} />
              <p>
                <b>{value.name}</b>
              </p>
              <p><small>{value.role}</small></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
