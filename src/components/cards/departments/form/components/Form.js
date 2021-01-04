import React from 'react';

import UserInput from "../../../common/UserInput"

export default function Forum(props) {

  const department = props.department

  // Rendering table
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="department_form" onSubmit={props.submitFunction}>

        {/* Department Name Input */}
        <UserInput
          inputId="name"
          inputName="Name"
          inputType="text"
          defaultValue={department ? department.name : ""}
          maxLength="64"
          required={true}
          onChange={props.onChange}
        />

        {/* Submit form Button */}
        <div className="text-center mt-6">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
            form="department_form"
          >
            {props.action}
          </button>

        </div>
      </form>
    </div>
  );
};