import React from "react";
import { Redirect, Route } from "react-router-dom";

import { checkToken } from "../checkToken";
import { MainLayout } from "../../components";

export default function PrivateRouter({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return checkToken() ? (
            <MainLayout>
              <Component {...props} />
            </MainLayout>
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }}
      />
    </div>
  );
}
