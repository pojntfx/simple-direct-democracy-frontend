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
import { Analytics } from "./Analytics";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/proposals" component={Proposals} />
      <Route
        exact
        path="/analytics"
        render={() => <Redirect to="/analytics/bar-chart" />}
      />
      <Route exact path="/analytics/:type" component={Analytics} />
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/" render={() => <Redirect to="/proposals" />} />
      <Route path="" component={PageNotFound} />
    </Switch>
  </Router>
);
