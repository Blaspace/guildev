/** @format */

import React from "react";
import logo from "../public/logo.png";
import { useNavigate } from "react-router-dom";

function Nav({ color }) {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div style={{ color: color }}>
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src={logo} alt="guildev" width={30} />
          <p>GUILDEV</p>
        </span>
        <ul>
          <li onClick={() => navigate("../../")}>Home</li>
          <li onClick={() => navigate("../../about")}>About</li>
          <li onClick={() => navigate("../../projects")}>Project</li>
          <li onClick={() => navigate("../../contact")}>Contact</li>
        </ul>
        <button
          style={{
            color: color === "#000000" ? "#ffffff" : "#000000",
            backgroundColor: color,
          }}
          onClick={()=>navigate('../../contact')}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Nav;
