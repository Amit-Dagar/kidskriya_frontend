import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Explore from "../source/explore";

export default class DashboardRouter extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Explore} />
        </Switch>
      </BrowserRouter>
    );
  }
}
