import React from "react";
import PagesBackground from "../PagesBackground";

const Portfolio = ({color}) => {
  return (
    <div className="cover">
      <PagesBackground text="PORTFOLIO" bgColor="white" />
      <div className="pages_alignment" id="portfolio">
        <div className="head_text">
          <h1>Portfolio <span style={color}></span></h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
