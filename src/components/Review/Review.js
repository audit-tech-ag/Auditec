import React from "react";
// import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";

// import "./Review.css";

function Review() {
  return (
    <div>
      <Header to={"/assignControlsOwners"}/>
      <h>Screen for review the entire wizard</h>
      <Progress percent={100} />
    </div>
  );
}

export default Review;
