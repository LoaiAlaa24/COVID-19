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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import HospitalDashboard from './views/HospitalDashboard';


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Cairo',
  }
});


const hist = createBrowserHistory();
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/hospitalRegisteration" component={HospitalRegisteration} />
        <Route path="/login" component={HospitalLogin} />
        <Route path="/helpRequest" component={HelpRequest} />
        <Route path="/ICU" component={ICU} />
        <Route path="/controlRoom" component={ControlRoom} />
        <Route path="/ReviseEq" component={ReviseEq} />
        <Route path="/hospitalDashboard" component={HospitalDashboard} />
        {/* add routes here */}
      </Switch>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
