import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../components/pages/Login";
import Dashboard from "../../components/pages/Dashboard";
import DataJiwaAnggotaKolom from "../../components/pages/DataJiwaAnggotaKolom";
import AddDataAnggota from "../../components/pages/AddDataAnggota";
import UpdateDataAnggota from "../../components/pages/UpdateDataAnggota";
import SignUp from "../../components/pages/SignUp";
import PelsusPage from "../../components/pages/PelsusPage";
import Jemaat from "../../components/pages/Jemaat";
import About from "../../components/pages/About";

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
        <Route exact path="/adddataanggota">
          <AddDataAnggota />
        </Route>
        <Route exact path="/updatedataanggota">
          <UpdateDataAnggota />
        </Route>
        <Route exact path="/pelsuspage">
          <PelsusPage />
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/jemaat">
          <Jemaat/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
