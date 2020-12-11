import React from 'react';

function Row(props) {

    // Rendering header design
    return (
        <tr>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
                <span
                    className=
                    "ml-3 font-bold text-white">
                    1
                  </span>
            </th>

            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                Administration
                </td>

            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                11/12/2020
                </td>

            {/* Delete button */}
            <td>
                <button>
                    <i className="fas fa-trash text-red-500 mr-2 text-md"></i>
                </button>
            </td>

        </tr>
    );
};


export default function TableBody(props) {

    // Rendering the table head
    return (
        <tbody>
            <Row />
        </tbody>
    );
};
