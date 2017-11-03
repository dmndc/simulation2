import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from './components/Login/Login';

export default (
  <Switch>
    <Route component={ Login } path="/" exact />
  </Switch>
)