import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Explore from "../source/explore";
import Sigin from "../auth/signin";

export default class DashboardRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={Sigin} />
          <Route path="/" component={Explore} />
        </Switch>
      </BrowserRouter>
    );
  }
}
