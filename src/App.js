import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import RunAudit from "./components/RunAudit/RunAudit";
import ConnectSystems from "./components/ConnectSystems/ConnectSystems";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/runAudit" exact render={() => <RunAudit />} />
        <Route path="/connectSystems" exact render={() => <ConnectSystems />} />
        {/* <Route path="/ChooseControls" exact render={() => <ChooseControls />} /> */}
        {/* <Route */}
        {/* path="/AssignControlsOwners" */}
        {/* exact */}
        {/* render={() => <AssignControlsOwners />} */}
        {/* /> */}
      </Router>
    </div>
  );
}

export default App;
