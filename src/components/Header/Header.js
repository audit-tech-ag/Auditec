import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header(props) {
  return (
    // <div className="container">
    <header>
      <img src="headerLogo.JPG" />
      <Link to={props.to}>
        <button>back</button>
      </Link>
    </header>
    // </div>
  );
}

export default Header;
