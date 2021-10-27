import React from "react";
import Address from "../Address";
import Messageform from "../Messageform";
import PagesBackground from "../PagesBackground";

const Contact = ({color}) => {
  return (
    <div className="cover">
      <PagesBackground text="CONTACT" bgColor="rgb(245, 248, 248)"/>
      <div className="pages_alignment" id="contact">
        <div className="head_text">
          <h1>
            Get In Touch <span style={color}></span>
          </h1>
        </div>
        <div className="grid">
          <Address />
          <Messageform />
        </div>
      </div>
    </div>
  );
};

export default Contact;
