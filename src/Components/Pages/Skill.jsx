import React from "react";
import PagesBackground from "../PagesBackground";

const Skill = ({ color }) => {
  return (
    <div className="cover">
      <PagesBackground text="SKILLS" bgColor="rgb(245, 248, 248)" />
      <div className="pages_alignment" id="skills">
        <div className="head_text">
          <h1>
            Skill <span style={color}></span>
          </h1>
        </div>
        <div className="flex_2">
          <div className="html">
            <label>HTML <span>90%</span></label>
            <div className="cont">
            <p className="htm"></p>
            </div>
          </div>
          <div className="css">
            <label>CSS <span>80%</span></label>
            <div className="cont">
            <p className="cs"></p>
            </div>
          </div>
          <div className="javascript">
            <label>JAVASCRIPT <span>50%</span></label>

            <div className="cont">
            <p className="java"></p>
            </div>
          </div>
          <div className="react">
            <label>REACT <span>60%</span></label>

            <div className="cont">
            <p className="react_"></p>
            </div>
          </div>
          <div className="nodejs">
            <label>NODEJS <span>40%</span></label>

            <div className="cont">
              <p className="node"></p>
            </div>
          </div>
          <div className="typescript">
            <label>TYPESCRIPT <span>10%</span></label>

            <div className="cont">
            <p className="typeS"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
