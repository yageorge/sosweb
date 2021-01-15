import React, { useEffect, useState, useContext } from "react"
import firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from '../services/FireBaseConfig'

import Landing from "../views/landing/Landing"
import Auth from "../views/auth/Auth"
import Admin from "../views/admin/Admin"
import Logout from "../views/auth/logout/Logout"

// To Delete
import Test from "../views/admin/Test"

import { AppContext } from "../services/context/AppContext"

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom"

function AppRouter() {

  //Initialiaze Firebase Auth - if not already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  else {
    firebase.app(); // if already initialized
  }

  //Loading AppContext to get cookie state
  const { state } = useContext(AppContext);

  //Setting auth bool init if cookie exist
  const [auth, setAuth] = useState(state.userToken ? true : false)
  console.log('user token:', state.userToken)

  useEffect(() => {
    //Listener to reset auth bool when cookie state is modified
    setAuth(state.userToken ? true : false);
  }, [state.userToken])

  // return router design
  return (
    <BrowserRouter>
      <Switch>

        {/* When accessing root, always go to landing page */}
        <ProtectedRoute
          exact path="/"
          renderCondition={true}
          component={Landing}
        />


        {/* Load Loagout when authorized, redirect to / otherwise */}
        <ProtectedRoute
          path="/auth/logout"
          renderCondition={auth}
          component={Logout}
          redirectTo="/"
        />

        {/* Load Auth when not authorized, redirect to /admin otherwise */}
        <ProtectedRoute
          path="/auth"
          renderCondition={!auth}
          component={Auth}
          redirectTo="/admin"
        />

        {/* Load Admin when authorized, redirect to /auth otherwise */}
        <ProtectedRoute
          path="/admin"
          renderCondition={auth}
          component={Admin}
          redirectTo="/auth"
        />


        {/* Test Page to Delete */}
        <Route exact path="/test" component={Test} />

      </Switch>
    </BrowserRouter>
  );
}


const ProtectedRoute = ({
  redirectTo,
  renderCondition,
  component: Component,
  ...rest
}) => {

  // if renderCondition true => render Component, otherwise redirect to redirectTo
  return (
    <Route
      // Load any other props
      {...rest}
      render={() => renderCondition ?
        (<Component />) : (<Redirect to={redirectTo} />)
      } />)
}

export default AppRouter;