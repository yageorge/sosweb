import React from "react";

export default function CardCourses() {
  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="flex flex-row relative w-full px-4 max-w-full flex-grow flex-1">

              <h3
                className=
                "font-semibold text-lg text-white flex-grow" >
                Courses / Trainings
              </h3>

              <button className="content-end">
                <i className="fas fa-plus-circle mr-2 text-4xl"></i>
              </button>

            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">

          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Id
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Title
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Description
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Total Lectures
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Total Minutes
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Category
                </th>
                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                  Date Added
                </th>

                <th
                  className=
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
                </th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <span
                    className=
                    "ml-3 font-bold text-white">
                    1
                  </span>
                </th>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Tasks Management
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Learn how to manage...
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  26
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  78 min
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Business Management
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  09/12/2020
                </td>

                {/* Delete button */}
                <td>
                  <button>
                    <i className="fas fa-trash text-red-500 mr-2 text-md"></i>
                  </button>
                </td>

              </tr>

              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                  <span
                    className=
                    "ml-3 font-bold text-white">
                    1
                  </span>
                </th>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Learn React-JS
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Complete course...
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  109
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  9 hours 02 min
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Web Development
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  12/06/2020
                </td>

                {/* Delete button */}
                <td>
                  <button>
                    <i className="fas fa-trash text-red-500 mr-2 text-md"></i>
                  </button>
                </td>

              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}