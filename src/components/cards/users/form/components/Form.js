import React from 'react';

export default function Forum(props) {

  const user = props.user

  // Rendering table
  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form id="user_form" onSubmit={props.submitFunction}>

        {/* User First Name Input */}
        <div className="relative w-full mb-3">

          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="firstName">
            First Name
          </label>

          <input
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            type="text"
            required={true}
            id="firstName"
            name="firstName"
            placeholder="First Name"
            defaultValue={user ? user.firstName : ""}
            maxLength="64"
            onChange={props.onChange}
          />
        </div>

        {/* User Last Name Input */}
        <div className="relative w-full mb-3">

          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="lastName">
            Last Name
          </label>

          <input
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            type="text"
            required={true}
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            defaultValue={user ? user.lastName : ""}
            maxLength="64"
            onChange={props.onChange}
          />
        </div>

        {/* User Email Input */}
        <div className="relative w-full mb-3">

          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="email">
            Email
          </label>

          <input
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            type="email"
            required={true}
            id="email"
            name="email"
            placeholder="Email"
            defaultValue={user ? user.email : ""}
            maxLength="64"
            onChange={props.onChange}
          />
        </div>

        {/* User Department Input */}
        <div className="relative w-full mb-3">

          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="departmentId">
            Department
          </label>

          <input
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            type="text"
            required={true}
            id="departmentId"
            name="departmentId"
            placeholder="Department SELECT add"
            defaultValue={user ? user.department_id : ""}
            onChange={props.onChange}
          />
        </div>

        {/* User is Admin Input */}
        <div className="relative w-full mb-3">

          <label
            className="block uppercase text-gray-700 text-xs font-bold mb-2"
            htmlFor="isAdmin">
            Admin
          </label>

          <input
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            type="text"
            required={true}
            id="isAdmin"
            name="isAdmin"
            placeholder="is Admin Boolean/radio add"
            defaultValue={user ? user.isAdmin : ""}
            onChange={props.onChange}
          />
        </div>

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