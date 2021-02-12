import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";

// import "./ConnectSystems.css";

function ConnectSystems() {
  return (
    <div>
      <Header to={"/runAudit"}/>
      Connect Systems
      <main>
        <div className="SystemstoConnect">Systems Connected:</div>
        <div className="SystemsConnectedContainer">
          <div>ERP</div>
          <div>CRM</div>
        </div>
        <Progress percent={33} />
        <button>save</button>
        <Link to="/chooseControls" style={{ textDecoration: "none" }}>
          <button>continue</button>
        </Link>
      </main>
    </div>
  );
}

export default ConnectSystems;
