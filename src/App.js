import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Home} />
        {/* add routes here */}
      </Switch>
    </Router>
  );
}

export default App;
