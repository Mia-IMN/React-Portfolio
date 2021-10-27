import React, { useState } from "react";
import Socialicons from "./Socialicons";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [toggle_menu, settoggle_menu] = useState(false);

  const showSidebar = () => settoggle_menu(!toggle_menu);

  return (
    <div className="sidedrawer">
      <p className="Username">Mia Ikechukwu</p>
      <Socialicons />
      <div className="toggled_menu">
        <Link to="#">
          <FaIcons.FaBars
            size="1.5rem"
            style={{ marginBottom: ".7rem" }}
            onClick={showSidebar}
          />
        </Link>
        <div
          className={toggle_menu ? "toggle_menu active" : "toggle_menu"}
          onClick={showSidebar}
        >
          <a href="#home" className="Home menu-bars">
            Home
          </a>
          <a href="#about">About Me</a>
          <a href="#skills"> Skills</a>
          <a href="#portfolio"> Portfolio </a>
          <a href="#contact"> Contact </a>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
