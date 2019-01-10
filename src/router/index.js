import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "../components/home";
import User from "../components/user";
import ErrorPage from "../components/Error";

/**
 * @description Request to the  API to signup a user
 * @return {object} Router component
 */
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/user" component={User}></Route>
      <Route exact path="*" component={ErrorPage}></Route>
    </Switch>
  </Router>
);

export default Routes;