import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import RunAudit from "./components/RunAudit/RunAudit";
import ConnectSystems from "./components/ConnectSystems/ConnectSystems";
import ChooseControls from "./components/ChooseControls/ChooseControls";
import AssignControlsOwners from "./components/AssignControlsOwners/AssignControlsOwners";
import Review from "./components/Review/Review";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/runAudit" exact render={() => <RunAudit />} />
        <Route path="/connectSystems" exact render={() => <ConnectSystems />} />
        <Route path="/chooseControls" exact render={() => <ChooseControls />} />
        <Route
          path="/assignControlsOwners"
          exact
          render={() => <AssignControlsOwners />}
        />
        <Route path="/review" exact render={() => <Review />} />
      </Router>
    </div>
  );
}

export default App;
