import React from 'react';

function Header(props) {

    // Rendering header design
    return (
        <th
            className=
            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-blue-800 text-blue-300 border-blue-700">
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

                <Header title="Lectures TTL" />

                <Header title="Minutes TTL" />

                <Header title="Category" />

                <Header title="Added" />

                <Header title="Updated" />

                {/* Edit Button */}
                <Header title="" />

                {/* Delete Button */}
                <Header title="" />

            </tr>
        </thead>
    );
};
