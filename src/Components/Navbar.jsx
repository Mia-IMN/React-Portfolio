import React from "react";
import Image1 from "./Images/user-pic.png";
import Socialicons from "./Socialicons";

const Navigation = () => {
  return (
    <div className="navbar">
      <img src={Image1} className="user-pic" />
      <p className="Username"> Mia Ikechukwu</p>
      <a href="#home" className="Home">Home</a>
      <a href="#about">About Me</a>
      <a href="#skills"> Skills</a>
      <a href="#portfolio"> Portfolio </a>
      <a href="#contact"> Contact </a>
      <Socialicons />
    </div>
  );
};

export default Navigation;
