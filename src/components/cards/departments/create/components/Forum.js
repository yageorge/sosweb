import React from 'react';

export default function Forum(props) {

    // Rendering table
    return (
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form id="department_form" >

                {/* Department Name Input */}
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="departmentName"
                    >
                        Name
                      </label>
                    <input
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        type="text"
                        required={true}
                        id="departmentName"
                        name="departmentName"
                        placeholder="Department Name"
                    // onChange={onChange}
                    />
                </div>

                <div className="text-center mt-6">
                    <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        form="login_form"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};