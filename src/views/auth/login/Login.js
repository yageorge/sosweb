import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { AppContext } from "../../../services/context/AppContext"
import Api from "../../../services/api/Api";
import Alert from "../../../services/alert/Alert";


export default function Login() {

  const history = useHistory();

  const { dispatch } = useContext(AppContext);
  const [credentials, setCredentials] = useState({})
  const [, setCookie,] = useCookies(["userToken"]);

  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  // Set the new value + update credentials State
  const onChange = (event) => {
    setShowAlert(false)
    credentials[event.target.name] = event.target.value
    setCredentials(credentials)
  }

  const logIn = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    // setShowError(false)
    try {
      const response = await Api.auth.login(credentials);
      const token = response.data.token;

      //Saving token in a cookie + in apis header
      setCookie("userToken", token, { path: '/' });
      Api.init(token)

      //Saving token in AppContext
      dispatch({
        type: 'setCookie',
        cookie: token
      })

      //Redirecting to /admin
      history.push('/admin');

    } catch (e) {
      setAlert("Login failed! The email or password you've entered doesn't match any account.")
      setShowAlert(true)
    }
  }


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-md font-bold">
                    Sign in
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>

              {/* Sign In Form */}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form id="login_form" onSubmit={logIn}>

                  {/* Email Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="email"
                      required={true}
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={onChange}
                    />
                  </div>

                  {/* Password Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="password"
                      required={true}
                      id="password"
                      name="password"
                      placeholder="Password"
                      minLength="8"
                      onChange={onChange}
                    />
                  </div>

                  {/* Remember me checkbox */}
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        Remember me
                      </span>
                    </label>
                  </div>

                  {/* Sign in button */}
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      form="login_form" >
                      Sign In
                    </button>
                  </div>

                </form>
              </div>
            </div>

            {/* Rendering conditional Alert Message */}
            {showAlert ?
              <Alert alert={alert} />
              : null}

            {/* Forgot Password + Create New Account */}
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>TODO: Forgot password?</small>
                </a>
              </div>

              {/* New Account link */}
              <div className="w-1/2 text-right">
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
