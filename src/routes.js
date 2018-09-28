import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/items" component={Items} />
  </Switch>
);
