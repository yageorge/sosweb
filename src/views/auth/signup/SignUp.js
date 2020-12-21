import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { AppContext } from "../../../services/context/AppContext"
import Api from "../../../services/api/Api";
import Alert from "../../../services/alert/Alert";

import UserInput from "../../../components/cards/common/UserInput"


export default function SignUp() {

  const history = useHistory();

  const { dispatch } = useContext(AppContext);
  const [credentials, setCredentials] = useState({})
  const [cookies, setCookie, removeCookie] = useCookies();

  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  // Set the new value + update credentials State
  const onChange = (event) => {
    setShowAlert(false)
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
      const userName = response.data.userName

      //Saving token in a cookie + in apis header
      setCookie("userToken", token, { path: '/' });
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
      console.log('Signup Error: ', e)
      setAlert("SignUp failed! Please check the console log for more details :D")
      setShowAlert(true)
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

                  {/* Company Name Input */}
                  <UserInput
                    inputId="companyName"
                    inputName="New Company Name"
                    inputType="text"
                    onChange={onChange}
                  />

                  {/* Department Name Input */}
                  <UserInput
                    inputId="departmentName"
                    inputName="Department Name"
                    inputType="text"
                    onChange={onChange}
                  />

                  {/* First Name Input */}
                  <UserInput
                    inputId="firstName"
                    inputName="First Name"
                    inputType="text"
                    maxLength="64"
                    onChange={onChange}
                  />

                  {/* Last Name Input */}
                  <UserInput
                    inputId="lastName"
                    inputName="Last Name"
                    inputType="text"
                    maxLength="64"
                    onChange={onChange}
                  />

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

                  {/* Password Confirmation Input */}
                  <UserInput
                    inputId="passwordConfirmation"
                    inputName="Confirm Password"
                    inputType="password"
                    minLength="8"
                    maxLength="64"
                    onChange={onChange}
                  />

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full transition ease-linear transition-all duration-200 hover:bg-gray-700"
                      type="submit"
                      form="signup_form"
                    >
                      Create Admin Account
                      </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Rendering conditional Alert Message */}
            {showAlert ?
              <Alert alert={alert} />
              : null}

          </div>
        </div>
      </div>
    </>
  );
}
