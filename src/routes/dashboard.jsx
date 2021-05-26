import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Explore from "../source/explore";
import Signin from "../auth/signin";
import Forgot from "../auth/forgot";
import ResetPassword from "../auth/reset";
import Settings from "../source/settings";
import Admin from "../auth/adminLogin";
import adminDashboard from "../source/adminDashboard";
import createSchool from "../components/createSchool";
import createProduct from "../components/createProduct";
import createClasses from "../components/createClasses";
import viewOrders from "../components/viewOrders";
import updateProduct from "../components/updateProduct";
import School from "../auth/schoolLogin";
import manageUsers from "../components/manageUsers";

export default class DashboardRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/adminLogin" component={Admin} />
          <Route path="/adminDashboard" component={adminDashboard} />
          <Route path="/schoolLogin" component={School} />
          <Route path="/createSchool" component={createSchool} />
          <Route path="/createClasses" component={createClasses} />
          <Route path="/orders" component={viewOrders} />
          <Route path="/createProduct" component={createProduct} />
          <Route path="/updateProduct" component={updateProduct} />
          <Route path="/manageUsers" component={manageUsers} />
          <Route path="/settings" component={Settings} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={Forgot} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Explore} />
        </Switch>
      </BrowserRouter>
    );
  }
}
