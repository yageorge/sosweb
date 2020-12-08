import React, { useEffect, useState } from 'react';

import Landing from "../views/landing/Landing";

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

function AppRouter(props) {

    // return router design
    return (
        <Router>
            <Switch>
                {/* public routes */}
                <Route path="/landing" exact component={Landing} />
                <Route path="/" exact component={Landing} />
            </Switch>
        </Router>
    );
}

export default AppRouter;