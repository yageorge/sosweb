import React, { useEffect, useState, useContext } from 'react';
import { useCookies } from "react-cookie";

import Landing from "../views/landing/Landing";
import Auth from "../views/auth/Auth"
import Admin from "../views/admin/Admin";

import { AppContext } from "../services/context/AppContext"

import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from "react-router-dom";

function AppRouter() {
    const { state } = useContext(AppContext);
    console.log("state: ", state);
    const [auth, setAuth] = useState(state.cookie ? true : false)

    // const checkAuth = () => {
    //     const bool = cookies['userToken'] !== undefined;
    //     console.log('bool for cookie: ', bool)
    //     setAuth(bool)
    // }

    useEffect(() => {

        // checkAuth()

        setAuth(state.cookie ? true : false);
        console.log('cookie has changed: ', state.cookie);
        console.log('useEffect RAAAAAAAAAAAAAAN')
    }, [state.cookie])

    // return router design
    return (
        <BrowserRouter>
            <Switch>

                {/* public routes */}
                {/* <Route path="/" exact component={Landing} /> */}
                {/* <Route path="/auth" component={Auth} /> */}
                {/* <Route path="/admin" component={Admin} /> */}

                {/* <ProtectedRoute
                    exact path="/"
                    renderCondition={true}
                    component={Landing}
                    redirectTo="/" /> */}

                <ProtectedRoute
                    exact path="/"
                    renderCondition={true}
                    component={Auth}
                    redirectTo="/auth" />

                <ProtectedRoute
                    path="/auth"
                    renderCondition={true}
                    component={Auth}
                    redirectTo="/auth" />

                {/* authorized user routes */}
                <ProtectedRoute
                    path="/admin"
                    renderCondition={auth}
                    component={Admin}
                    redirectTo="/" />

                {/* redirect to root page */}
                {/* <Redirect from="*" to="/" /> */}

            </Switch>
        </BrowserRouter>
    );
}

const ProtectedRoute = ({
    redirectTo,
    renderCondition,
    component: Component,
    path,
    ...rest
}) => {
    console.log('redirecting redirectTo: ', redirectTo)
    console.log('redirecting renderCondition: ', renderCondition)
    console.log('redirecting Component: ', Component)
    console.log('redirecting path: ', path)
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