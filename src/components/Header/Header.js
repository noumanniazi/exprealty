import React from "react";

import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="nav-bar">
      <img className="logo-img" src={logo} />
      <ul className="nav-items">
          <li className="nav-item"><a href="https://www.exprealtyretirementplan.com/">HOME</a></li>
      </ul>
    </div>
  );
};

export default Header;
