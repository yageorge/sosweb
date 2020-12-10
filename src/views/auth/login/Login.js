import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import Api from "../../../services/api/Api";


export default function Login() {

  const [state, setState] = useState(false)
  // Credentials that will be used by api
  const [credentials, setCredentials] = useState({})
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);


  // Set the new value + update credentials State
  const onChange = (event) => {
    credentials[event.target.name] = event.target.value;
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

      //setState will lead to window reload()
      setState(true)
    } catch (e) {
      console.log('Login Error: ', e)
    }
  }

  useEffect(() => {
    if (state) {
      // refresh the page
      window.location.reload()
    }
  }, [state])

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

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      form="login_form"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Forgot Password + Create New Account */}
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/signup" className="text-gray-300">
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
