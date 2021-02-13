import React from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
import SaveContinue from "../SaveContinue/SaveContinue";
// import "./ChooseControls.css";

function ChooseControls(props) {
  console.log(props.connectedSystems);
  
  return (
    <div>
      <Header to={"/connectSystems"} />
      <h1>Choose Controls</h1>
      {/* {props.connectedSystems.map((system) => {
        return <div key={system}>{system}</div>;
      })} */}

      <Progress percent={66} />
      <SaveContinue to={"/assignControlsOwners"} />
    </div>
  );
}

export default ChooseControls;
