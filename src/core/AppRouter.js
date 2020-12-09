import React from 'react';

import Landing from "../views/landing/Landing";
import SignUp from "../views/auth/signup/SignUp"
import Login from "../views/auth/login/Login"


import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

function AppRouter() {

    // return router design
    return (
        <BrowserRouter>
            <Switch>
                {/* public routes */}
                <Route path="/" exact component={Landing} />

                {/* routes without layouts */}
                <Route path="/landing" exact component={Landing} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/login" exact component={Login} />

                {/* routes with layouts */}


                {/* redirect to root page */}
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter;