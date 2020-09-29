import React, { Component } from "react";
import Header from "./header";
import { Switch, Route, withRouter } from "react-router-dom";
import HomeComponent from "./home";
import Login from "./login";
import Signup from "./signup";
import Competition from './competition'

class MainComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch >
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/competition" component={Competition} />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>{"no match"}</Route>
        </Switch>
      </React.Fragment>
    );
  }
}
export default withRouter(MainComponent);
