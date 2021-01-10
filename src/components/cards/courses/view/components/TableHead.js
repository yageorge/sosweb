import React from 'react';

function Header(props) {

    // Rendering header design
    return (
        <th
            className=
            {"text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-700 text-blue-200 border-blue-200 "
                + props.padding
            }>
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

                <Header title="Title" padding="px-6" />

                <Header title="Description" padding="px-6" />

                <Header title="Lectures" padding="px-2" />

                <Header title="Minutes" padding="px-2" />

                <Header title="Points" padding="px-2" />

                <Header title="Category" padding="px-6" />

                <Header title="Created" padding="px-6" />

                <Header title="Updated" padding="px-6" />

                {/* Edit Button */}
                <Header title="" padding="px-6" />

                {/* Delete Button */}
                <Header title="" padding="px-6" />

            </tr>
        </thead>
    );
};
