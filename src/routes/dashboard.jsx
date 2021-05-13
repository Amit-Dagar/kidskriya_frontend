import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Explore from "../source/explore";
import Signin from "../auth/signin";
import Forgot from "../auth/forgot";
import ResetPassword from "../auth/reset";

export default class DashboardRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={Forgot} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Explore} />
        </Switch>
      </BrowserRouter>
    );
  }
}
