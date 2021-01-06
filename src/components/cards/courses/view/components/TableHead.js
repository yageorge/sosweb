import React from 'react';

function Header(props) {

    // Rendering header design
    return (
        <th
            className=
            "px-6 text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-700 text-blue-200 border-blue-200">
            {props.title}
        </th>
    );
};


export default function TableBody() {

    // Rendering the table head
    return (
        <thead>
            <tr>

                {/* Manage Lectures Button */}
                <Header title="" />

                <Header title="Title" />

                <Header title="Description" />

                <Header title="Lectures" />

                <Header title="Minutes" />

                <Header title="Points" />

                <Header title="Category" />

                <Header title="Created" />

                <Header title="Updated" />

                {/* Edit Button */}
                <Header title="" />

                {/* Delete Button */}
                <Header title="" />

            </tr>
        </thead>
    );
};
