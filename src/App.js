import React from 'react';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import HospitalRegisteration from "./views/HospitalRegisteration";
import HospitalLogin from './views/HospitalLogin';
import HelpRequest from './views/HelpRequest';
import ICU from './views/ICU';
import ControlRoom from './views/ControlRoom';
import ReviseEq from './views/ReviseEq';

const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/hospitalRegisteration" component={HospitalRegisteration} />
        <Route path="/login" component={HospitalLogin} />
        <Route path="/helpRequest" component={HelpRequest} />
        <Route path="/ICU" component={ICU} />
        <Route path="/controlRoom" component={ControlRoom} />
        <Route path="/ReviseEq" component={ReviseEq} />
        {/* add routes here */}
      </Switch>
    </Router>
  );
}

export default App;
