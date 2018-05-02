import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Prinicples } from "../components/introduction/Prinicples";
import { Rights } from "../components/introduction/Rights";
import { Duties } from "../components/introduction/Duties";
import { PageNotFound } from "./PageNotFound";
import { Proposals } from "./Proposals";
import { Analytics } from "./Analytics";
import { Tutorial } from "../components/introduction/Tutorial";
import { SetupComplete } from "../components/introduction/SetupComplete";

let Authentication = ({ children }) =>
  localStorage.getItem("hasFinishedIntroduction") === "true" ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Redirect to="/principles" />
  );

export const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/proposals"
        render={() => (
          <Authentication>
            <Proposals />
          </Authentication>
        )}
      />
      <Route
        exact
        path="/analytics"
        render={() => <Redirect to="/analytics/bar-chart" />}
      />
      <Route
        exact
        path="/analytics/:type"
        render={props => (
          <Authentication>
            <Analytics {...props} />
          </Authentication>
        )}
      />
      <Route exact path="/principles" component={Prinicples} />
      <Route exact path="/rights" component={Rights} />
      <Route exact path="/duties" component={Duties} />
      <Route exact path="/tutorial/:istutorial" component={Tutorial} />
      <Route exact path="/setup-complete" component={SetupComplete} />
      <Route exact path="/" render={() => <Redirect to="/proposals" />} />
      <Route path="" component={PageNotFound} />
    </Switch>
  </Router>
);
