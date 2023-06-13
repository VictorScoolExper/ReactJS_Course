import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

// This component has an example of how Context should be used

const Navigation = () => {
  // video 154
  // Another method of consuming ContextAPI
  const ctx = useContext(AuthContext);

  return (
    // Video 153
    // we can consume our context witch surrounds our App.js
    // <AuthContext.Consumer>
    //   {/* we ust pass a function */}
      // {(ctx) => {
      //   return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
