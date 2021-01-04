import React from 'react';

import UserInput from "../../../common/UserInput"

export default function Forum(props) {

  const category = props.category

  // Rendering table
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="category_form" onSubmit={props.submitFunction}>

        {/* Category Name Input */}
        <UserInput
          inputId="name"
          inputName="Name"
          inputType="text"
          defaultValue={category ? category.name : ""}
          maxLength="64"
          required={true}
          onChange={props.onChange}
        />

        {/* Submit form Button */}
        <div className="text-center mt-6">
          <button
            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            type="submit"
            form="category_form"
          >
            {props.action}
          </button>

        </div>
      </form>
    </div>
  );
};