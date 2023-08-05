import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import ChatBody from "./component/ChatBody";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/chat" component={ChatBody} />
    </Switch>
  </main>
);

export default Main;