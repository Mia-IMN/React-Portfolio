import React from "react";
import PagesBackground from "../PagesBackground";
import Button from "../Button";
import StaticCounter from "../StaticCounter";

const AboutMe = ({ color }) => {
  return (
    <div className="cover">
      <PagesBackground text="ABOUT ME" bgColor="white" />
      <div className="pages_alignment" id="about">
        <div className="head_text">
          <h1>
            Know Me More <span style={color}></span>
          </h1>
        </div>
        <div className="grid_2">
          <div className="left_side">
            <h2>
              I'm <span style={{ color: "skyblue" }}> Mia Ikechukwu,</span> a
              Web Developer
            </h2>
            <p>
              {" "}
              I help you build brands for your business at an affordable price.
              With several completed projects making my portfolio the result of
              happy clients. As a freelancer, I find strenght in solo projects
              and respect deadlines and client satisfaction.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ab
              molestiae perferendis consequatur. Officiis ad commodi, laboriosam
              accusantium deleniti voluptate maxime nulla, quasi ea id, sequi
              minus error totam labore!
            </p>
          </div>
          <div className="right_side">
            <p>
              <b>Name:</b> Mia Ikechukwu
            </p>
            <p>
              <b>Email:</b> mira.ikechukwu15@gmail.com
            </p>
            <p>
              <b>Age:</b> 24
            </p>
            <p>
              <b>From:</b> Enugu State, Nigeria
            </p>
            <Button text="Download CV" color="skyblue" />
          </div>
        </div>
          <StaticCounter />
      </div>
    </div>
  );
};

export default AboutMe;
