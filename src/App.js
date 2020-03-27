import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import HospitalRegisteration from "./views/HospitalRegisteration";
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/hospitalRegisteration" component={HospitalRegisteration} />
        {/* add routes here */}
      </Switch>
    </Router>
  );
}

export default App;
