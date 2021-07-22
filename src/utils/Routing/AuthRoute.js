import React from "react";
import { Redirect, Route } from "react-router-dom";

import { checkToken } from "../checkToken";

export default function AuthRouter({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return !checkToken() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }}
      />
    </div>
  );
}
