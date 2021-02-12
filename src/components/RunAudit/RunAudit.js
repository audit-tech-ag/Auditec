import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
// import "./RunAudit.css";

function RunAudit() {
  
  return (
    <div>
      <Header to={"/"} />
      Run Audit
      <main>
        <Link to="/connectSystems" style={{ textDecoration: "none" }}>
          <button>Create New Audit</button>
        </Link>
        <button>Update Current Audit</button>
        <Progress percent={0} />
      </main>
    </div>
  );
}

export default RunAudit;
