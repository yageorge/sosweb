import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";

import Landing from "../views/landing/Landing";
import Auth from "../views/auth/Auth"
import Admin from "../views/admin/Admin";


import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

function AppRouter() {

    const [auth, setAuth] = useState(false)

    const [cookies, setCookies] = useCookies()

    const checkAuth = () => {
        const bool = cookies['userToken'] !== undefined;
        console.log('bool for cookie: ', bool)
        setAuth(bool)
    }

    useEffect(() => {
        checkAuth()
    })

    // return router design
    return (
        <BrowserRouter>
            <Switch>

                {/* public routes */}
                <Route path="/" exact component={Landing} />
                <Route path="/auth" component={Auth} />
                <Route path="/admin" component={Admin} />
                {/* authorized user routes */}
                {/* <ProtectedRoute redirectTo="/auth"
                    renderCondition={auth}
                    exact path="/"
                    component={Project} /> */}

                {/* redirect to root page */}
                <Redirect from="*" to="/" />

            </Switch>
        </BrowserRouter>
    );
}

const ProtectedRoute = ({
    renderCondition,
    redirectTo,
    component: Component,
    ...rest
}) => {
    // return the a Route tag if the condition [renderCondition] is true,
    // otherwise return redirect to [redirectTo]
    return (
        <Route
            {...rest}
            render={() => renderCondition ?
                (<Component />) : (<Redirect to={redirectTo} />)
            } />)
}

export default AppRouter;