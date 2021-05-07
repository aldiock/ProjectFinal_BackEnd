import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import DataJiwaAnggotaKolom from "../components/pages/DataJiwaAnggotaKolom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/datajiwaanggotakolom">
          <DataJiwaAnggotaKolom />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
