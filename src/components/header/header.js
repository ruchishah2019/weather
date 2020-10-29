import React from "react";
import "./header.css";
const Header = ({logo}) => {
  return (
    <div className="header-container">
      <div className="left-align">
        <h2>{logo}</h2>
      </div>
    </div>
  );
};

export default Header;
