import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";

// import "./AssignControlsOwners.css";

function AssignControlsOwners() {
  return (
    <div>
      <Header to={"/chooseControls"}/>
      Assign Controls Owners
      <main>Table</main>
      <Progress percent={99} />
      <button>save</button>
      <Link to="/review" style={{ textDecoration: "none" }}>
        <button>continue</button>
      </Link>
    </div>
  );
}

export default AssignControlsOwners;
