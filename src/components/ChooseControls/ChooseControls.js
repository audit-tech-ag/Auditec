import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";

// import "./ChooseControls.css";

function ChooseControls() {
  return (
    <div>
      <Header to={"/connectSystems"}/>
      Choose Controls
      <main>ERP CRM ...</main>
      <Progress percent={66} />
      <button>save</button>
      <Link to="/assignControlsOwners" style={{ textDecoration: "none" }}>
        <button>continue</button>
      </Link>
    </div>
  );
}

export default ChooseControls;
