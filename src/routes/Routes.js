import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Introduction } from "../components/introduction/Introduction";
import { PageNotFound } from "./PageNotFound";
import { Proposals } from "./Proposals";
import { Analysis } from "./Analysis";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/proposals" component={Proposals} />
      <Route exact path="/analysis" component={Analysis} />
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/" render={() => <Redirect to="/proposals" />} />
      <Route path="" component={PageNotFound} />
    </Switch>
  </Router>
);
