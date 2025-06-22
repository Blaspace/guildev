/** @format */

import React, { useState } from "react";
import logo from "../public/guiderslogo.png";
import { useNavigate } from "react-router-dom";
import MobileDropDown from "./MobileDropDown";
import { RxHamburgerMenu } from "react-icons/rx";

function Nav({ color }) {
  const navigate = useNavigate();
  const [drop, setDrop] = useState()

  return (
    <div className="nav">
      <div style={{ color: color }}>
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src={logo} alt="guildev" width={40} />
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
        <span className="hamburger" onClick={()=>setDrop(true)}><RxHamburgerMenu size={30}/></span>
      </div>
      <MobileDropDown drop={drop} setDrop={setDrop}/>
    </div>
  );
}

export default Nav;
