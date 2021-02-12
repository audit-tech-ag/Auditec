import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
import SaveContinue from "../SaveContinue/SaveContinue";
// import "./ChooseControls.css";

function ChooseControls() {
  return (
    <div>
      <Header to={"/connectSystems"} />
      <h1>Choose Controls</h1>
      <main>ERP CRM ...</main>
      <Progress percent={66} />
      <SaveContinue to={"/assignControlsOwners"}/>
    </div>
  );
}

export default ChooseControls;
