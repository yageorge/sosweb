import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import Api from "../../../services/api/Api";
import { AppContext } from "../../../services/context/AppContext"

export default function SignUp() {

  const history = useHistory();

  const { state, dispatch } = useContext(AppContext);
  const [credentials, setCredentials] = useState({})
  const [, setCookie,] = useCookies(["userToken"]);

  // Set the new value + update credentials State
  const onChange = (event) => {
    credentials[event.target.name] = event.target.value;
    setCredentials(credentials)
  }

  const signUp = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    // setShowError(false)
    try {
      const response = await Api.auth.signup(credentials);
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
      console.log('SignUp error: ', e)
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-md font-bold">
                    Signing Up
                    </h6>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>

              {/* Sign Up Form */}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form id="signup_form" onSubmit={signUp}>

                  {/* First Name Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                      </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="text"
                      required={true}
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      onChange={onChange}
                    />
                  </div>

                  {/* Last Name Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                      </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="text"
                      required={true}
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={onChange}
                    />
                  </div>

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

                  {/* Password Confirmation Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="passwordConfirmation"
                    >
                      Confirm Password
                      </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="password"
                      required={true}
                      id="passwordConfirmation"
                      name="passwordConfirmation"
                      placeholder="Confirm Password"
                      onChange={onChange}
                    />
                  </div>

                  {/* Company Name Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="companyName"
                    >
                      Company Name
                      </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="text"
                      required={true}
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      onChange={onChange}
                    />
                  </div>

                  {/* Department Name Input */}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="departmentName"
                    >
                      Department Name
                      </label>
                    <input
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      type="text"
                      required={true}
                      id="departmentName"
                      name="departmentName"
                      placeholder="Department Name"
                      onChange={onChange}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      form="signup_form"
                    >
                      Create Admin Account
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
