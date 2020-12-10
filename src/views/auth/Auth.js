import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import background from "../../assets/img/register_bg.png";
import Navbar from "../../components/navbars/AuthNavbar.js";
import Footer from "../../components/footers/Footer";

import Login from "./login/Login";
import SignUp from "./signup/SignUp";

//TODO move common functions / like states etc etc to this file and pass them in props / check group project

export default function Auth() {
    return (
        <>
            <Navbar transparent />
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div
                        className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
                        style={{
                            backgroundImage: `url(${background})`,
                        }}
                    ></div>
                    <Switch>
                        <Route exact path="/auth/login" component={Login} />
                        <Route exact path="/auth/signup" component={SignUp} />
                        <Redirect from="/auth" to="/auth/login" />
                    </Switch>
                    <Footer />
                </section>
            </main>
        </>
    );
}
