import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeComponent from "../components/home";
import MenuComponent from "../components/user/ViewMenu";
import OrderComponent from "../components/user/ViewOrders";
import ErrorPageComponent from "../components/Error";

/**
 * @description Request to the  API to signup a user
 * @return {object} Router component
 */
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route exact path="/menu" component={MenuComponent}></Route>
      <Route exact path="/orders" component={OrderComponent}></Route>
      <Route exact path="*" component={ErrorPageComponent}></Route>
    </Switch>
  </Router>
);

export default Routes;
