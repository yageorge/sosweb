import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import background from "../../assets/img/auth_bg.png";
import Navbar from "../../components/navbars/AuthNavbar.js";
import Footer from "../../components/footers/Footer";
import Alert from "../../services/alert/Alert";

import Login from "./login/Login";
import SignUp from "./signup/SignUp";

//TODO move common functions / like states etc etc to this file and pass them in props / check group project

export default function Auth() {
  return (
    <>
      <Navbar transparent />

      {/* Common layout design for auth screen */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>

          {/* Rendering Login or Signup UI */}
          <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={SignUp} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>

          {/* Common Footer */}
          <Footer absolute />

        </section>
      </main>
    </>
  );
}
