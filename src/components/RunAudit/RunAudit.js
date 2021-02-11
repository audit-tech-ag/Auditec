import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
// import "./RunAudit.css";

function RunAudit() {
  return (
    <div className="container">
      <Header />
      Run Audit
      <main className="main">
        <Link  to="/connectSystems" style={{ textDecoration: 'none' }}>
          <button>Create New Audit</button>
        </Link>
        <button>Update Current Audit</button>
      </main>
    </div>
  );
}

export default RunAudit;
