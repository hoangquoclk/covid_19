import React from "react";
import {
  Login,
  SignUp,
  Home,
  Detail,
  News,
  NewsDetail,
  NotFound,
} from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AuthRouter from "./utils/Routing/AuthRoute";
import PrivateRouter from "./utils/Routing/PrivateRoute";
import { checkToken } from "./utils/checkToken";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return checkToken() ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/news" />
            );
          }}
        />
        <PrivateRouter exact path="/home" component={Home} />
        <PrivateRouter exact path="/detail/:detailId" component={Detail} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/:newsId/detail" component={NewsDetail} />
        <AuthRouter exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
