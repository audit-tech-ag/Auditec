import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
// import "./ConnectSystems.css";

function ConnectSystems() {
  return (
    <div className="container">
      <Header />
      Connect Systems
      <main className="main">
        <div className="SystemstoConnect">Systems Connected:</div>
        <div className="SystemsConnectedContainer">
          <div>ERP</div>
          <div>CRM</div>
        </div>
      </main>
    </div>
  );
}

export default ConnectSystems;
