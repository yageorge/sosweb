import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import firebase from 'firebase';
import 'firebase/auth';

import { AppContext } from "../../../services/context/AppContext"
import Api from "../../../services/api/Api"
import Alert from "../../../services/alert/Alert"
import LoadingSpinner from "../../../components/spinner/LoadingSpinner"

import UserInput from "../../../components/cards/common/UserInput"


export default function Login() {

  const history = useHistory()

  const { dispatch } = useContext(AppContext)
  const [credentials, setCredentials] = useState({})
  const [cookies, setCookie, removeCookie] = useCookies()

  const [isRememberMe, setIsRememberMe] = useState(0)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Set the new value + update credentials State
  const onChange = (event) => {
    setShowAlert(false)
    credentials[event.target.name] = event.target.value
    setCredentials(credentials)
  }

  const logIn = async (event) => {
    // //Avoid form submission / refresh
    event.preventDefault()
    setIsLoading(true)

    try {

      // Firebase Login with Email Password
      const UserCredentials = await firebase.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)

      const firebaseToken = await UserCredentials.user.getIdToken()

      // Laravel Login with FireBase only Token
      const response = await Api.auth.login(firebaseToken)

      const token = response.data.token
      const userName = response.data.userName

      //Saving token in a cookie + in apis header
      setCookie("userToken", token, { path: '/' })
      Api.init(token)

      //Saving token in App Context
      dispatch({
        type: 'setUserToken',
        userToken: token
      })

      //Saving UserName in Cookies + App Context
      setCookie("userName", userName, { path: '/' })
      dispatch({
        type: 'setUserName',
        userEmail: userName
      })

      //Saving UserEmail in Cookies + App Context
      setCookie("userEmail", credentials["email"], { path: '/' })
      dispatch({
        type: 'setUserEmail',
        userEmail: credentials["email"]
      })

      //Redirecting to /admin
      history.push('/admin');


    } catch (e) {
      setAlert("Login failed! The email or password you've entered doesn't match any account.")
      setIsLoading(false)
      setShowAlert(true)
    }
  }

  const toggleRememberMe = () => {
    const newIsRememberMe = isRememberMe === 0 ? 1 : 0
    setIsRememberMe(newIsRememberMe)
    onChange({ target: { name: "rememberMe", value: newIsRememberMe } })
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white opacity-60 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-800 text-md font-bold">
                    Sign in
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>

              {/* Sign In Form */}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form id="login_form" onSubmit={logIn}>

                  {/* Email Input */}
                  <UserInput
                    inputId="email"
                    inputName="Email"
                    inputType="email"
                    maxLength="64"
                    onChange={onChange}
                  />

                  {/* Password Input */}
                  <UserInput
                    inputId="password"
                    inputName="Password"
                    inputType="password"
                    minLength="8"
                    maxLength="64"
                    onChange={onChange}
                  />

                  {/* Remember me checkbox */}
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        className="ml-1 w-5 h-5"
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={isRememberMe}
                        onChange={() => toggleRememberMe()}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-800">
                        Remember me
                      </span>
                    </label>
                  </div>

                  {/* Sign in button */}
                  {isLoading ?
                    <div className="flex m-2">
                      <LoadingSpinner />
                    </div>
                    :
                    <div className="text-center mt-6">
                      <button
                        className="bg-teal-900 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg focus:outline-none mr-1 mb-1 w-full transition ease-linear transition-all duration-200 hover:bg-teal-700"
                        type="submit"
                        form="login_form" >
                        Sign In
                    </button>
                    </div>
                  }

                </form>
              </div>
            </div>

            {/* Rendering conditional Alert Message */}
            {showAlert ?
              <Alert alert={alert} />
              : null}

            {/* Forgot Password + Create New Account */}
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2 transform hover:scale-105 transition-all ease-in-out duration-400">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>TODO: Forgot password?</small>
                </a>
              </div>

              {/* New Account link */}
              <div className="w-1/2 text-right transform hover:scale-105 transition-all ease-in-out duration-400">
                <Link to="/auth/signup" className="text-gray-300">
                  <small>Create new account</small>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
