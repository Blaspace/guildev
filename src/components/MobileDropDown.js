import React from "react";
import { IoIosClose } from "react-icons/io";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";

function MobileDropDown({drop, setDrop}) {
  return (
    <div className="mobile-dropdown" style={{width: drop ? "90%" : 0, }}>
      <div>
        <span onClick={()=>setDrop(false)}>
          <IoIosClose size={35} color="#ffffff" />
        </span>
        <a href="/"><li>Home</li></a>
        <a href="/about"><li>About</li></a>
        <a href="/projects"><li>Project</li></a>
        <a href="/contact"><li style={{ borderBottom: "1px solid grey" }}>Contact</li></a>
        <div className="socials" style={{flexDirection: "row", justifyContent: "flex-start", gap:"15px"}}>
          <a href="https://instagram.com/guilderstechnology" target="_blank" style={{width:"auto"}}><IoLogoInstagram size={30} color="#ffffff" /></a>
          <a href="https://wa.me/2348166533430" target="_blank"  style={{width:"auto"}}><IoLogoWhatsapp size={30} color="#ffffff" /></a>
        </div>
      </div>
    </div>
  );
}

export default MobileDropDown;
