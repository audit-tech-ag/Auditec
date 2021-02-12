import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
import SaveContinue from "../SaveContinue/SaveContinue";

// import "./AssignControlsOwners.css";

function AssignControlsOwners() {
  return (
    <div>
      <Header to={"/chooseControls"} />
      <h1>Assign Controls Owners</h1>
      <main>Table</main>
      <Progress percent={99} />
      <SaveContinue to={"/review"} />
    </div>
  );
}

export default AssignControlsOwners;
