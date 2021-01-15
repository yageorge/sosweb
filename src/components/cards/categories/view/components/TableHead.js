import React from 'react';

function Header(props) {

    // Rendering header design
    return (
        <th
            className=
            {
                "px-6 text-left border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-700 text-blue-200 border-blue-200 "
                + props.width
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

                <Header width="w-24" />

                <Header title="Name" />

                <Header title="Created" />

                <Header />

                <Header />

            </tr>
        </thead>
    );
};
