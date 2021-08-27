import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./login";
import Home from "./home";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" exact component={Login} />
        <Route path="/account/:id" exact component={Home} />
        <Route path="/account" exact><Redirect to="/account/profile" /></Route>
      </Switch>
    </Router>
  );
}
