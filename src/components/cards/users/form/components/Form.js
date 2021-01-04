import React from 'react';

import UserInput from "../../../common/UserInput"
import SelectDepartment from "../../../departments/common/SelectDepartment"
import CheckBox from "../../../departments/common/CheckBox"

export default function Forum(props) {

  const user = props.user

  // Rendering Create elements (Email + passwords)
  const renderCreateElements = () => {

    return <>

      {/* User Email Input */}
      <UserInput
        inputId="email"
        inputName="Email"
        inputType="email"
        defaultValue={user ? user.email : ""}
        maxLength="64"
        required={true}
        onChange={props.onChange}
      />

      {/* Password Input */}
      <UserInput
        inputId="password"
        inputName="Password"
        inputType="password"
        defaultValue={user ? user.email : ""}
        minLength="8"
        maxLength="64"
        required={true}
        onChange={props.onChange}
      />

      {/* Password Confirmation Input */}
      <UserInput
        inputId="passwordConfirmation"
        inputName="Confirm Password"
        inputType="password"
        defaultValue={user ? user.email : ""}
        minLength="8"
        maxLength="64"
        required={true}
        onChange={props.onChange}
      />

    </>

  }


  // Rendering table
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="user_form" onSubmit={props.submitFunction}>

        {/* First Name Input */}
        <UserInput
          inputId="firstName"
          inputName="First Name"
          inputType="text"
          defaultValue={user ? user.firstName : ""}
          maxLength="64"
          required={true}
          onChange={props.onChange}
        />

        {/* User Last Name Input */}
        <UserInput
          inputId="lastName"
          inputName="Last Name"
          inputType="text"
          defaultValue={user ? user.lastName : ""}
          maxLength="64"
          required={true}
          onChange={props.onChange}
        />

        {/* Points Target Input */}
        <UserInput
          inputId="pointsTarget"
          inputName="Target Points"
          inputType="number"
          defaultValue={user ? user.pointsTarget : ""}
          max="999"
          required={true}
          onChange={props.onChange}
        />

        {/*
          Only show on Create : Email + Passwords
          If user is not available in props 
          */}
        {!user ?
          renderCreateElements()
          : null
        }

        {/* User Select Department */}
        <SelectDepartment
          defaultValue={user ? user.department_id : ""}
          onChange={props.onChange}
        />

        {/* User is Admin Checkbox */}
        <CheckBox
          defaultValue={user ? user.isAdmin : 0}
          onChange={props.onChange}
        />

        {/* Submit form Button */}
        <div className="text-center mt-6">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
            form="user_form"
          >
            {props.action}
          </button>
        </div>

      </form>
    </div>
  );
};