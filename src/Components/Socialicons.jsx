import React from "react";
import * as FaIcons from "react-icons/fa";

const Socialicons = () => {
  return (
    <div className="Socialicons">
      <FaIcons.FaGithub className="icons github" size="lg"/>
      <FaIcons.FaFacebook className="icons f-book" size="lg"/>
      <FaIcons.FaInstagram className="icons ig" size="lg"/>
      <FaIcons.FaTwitter className="icons twitter" size="lg"/>
    </div>
  );
};

export default Socialicons;
