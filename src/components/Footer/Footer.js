import React from "react";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-us">
        <span className="heading">CONTACT US</span>
        <p>For any queries feel free to contact us at 623-300-5074</p>
      </div>
      <div className="email-us">
        <div className="email-us-wrap">
          <span className="heading">EMAIL US</span>
          <p>You can email us your queries at </p>
          <p>
            <a
              className="email-link"
              href="mailto:raymond.kerege@exprealty.com"
            >
              raymond.kerege@exprealty.com
            </a>
          </p>
        </div>
      </div>
      <div className="follow-us">
        <span className="heading">FOLLOW US</span>
        <p>Let us be social</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/HomesinAnthemArizona/"><img className="social-icon" src={facebook} alt="Facebook" /></a>
          <a href="https://twitter.com/raymond_kerege"><img className="social-icon" src={twitter} alt="Twitter" /></a>
          <a href="https://www.linkedin.com/in/RaymondKerege/"><img className="social-icon" src={linkedin} alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
