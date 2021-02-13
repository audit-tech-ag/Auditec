import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import RunAudit from "./components/RunAuditPage/RunAuditPage";
import ConnectSystems from "./components/ConnectSystemsPage/ConnectSystemsPage";
import ChooseControls from "./components/ChooseControlsPage/ChooseControlsPage";
import AssignControlsOwners from "./components/AssignControlsOwnersPage/AssignControlsOwnersPage";
import Review from "./components/ReviewPage/ReviewPage";

import "./App.css";

function App() {
  const [connectedSystems, setConnectedSystems] = useState([]);

  function onPageSubmitChange(systemsAndSubSystems) {
    console.log(systemsAndSubSystems)
    // setConnectedSystems((prevState) => [...prevState, systemsAndSubSystems]);
  }

  // console.log(connectedSystems);

  return (
    <div>
      <Router>
        <Route path="/" exact render={() => <LandingPage />} />
        <Route path="/runAudit" exact render={() => <RunAudit />} />
        <Route
          path="/connectSystems"
          exact
          render={() => (
            <ConnectSystems onPageSubmitChange={onPageSubmitChange} />
          )}
        />
        <Route
          path="/chooseControls"
          exact
          render={() => <ChooseControls connectedSystems={connectedSystems} />}
        />
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
