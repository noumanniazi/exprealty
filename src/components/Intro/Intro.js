import React from "react";

import "./Intro.scss";
import backgimg from "../../assets/backgimg.png";

const Intro = () => {
  return (
    <div className="intro-wrap">
      <div className="intro-img">
        <img className="intro-bg" src={backgimg} />
        <div className="layer"></div>
      </div>
      <div className="intro-content">
        <div className="heading">ARE YOU A REALTOR THAT WOULD </div>
        <div className="heading">LIKE THE OPPORTUNITY TO MAKE MORE MONEY?</div>
        <div className="text">
          Find out why agents everywhere are joining the fastest growing real
          estate brokerage in the North America!
        </div>
        <div className="btn">
          <a href="#exploreus">
            <div className="btn-txt">
              <span>Explore Us</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
