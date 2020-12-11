import React from 'react';

import TableHead from "./TableHead"
import TableBody from "./TableBody"

export default function Table(props) {

    // Rendering table
    return (
        <table className="items-center w-full bg-transparent border-collapse">
            <TableHead />
            <TableBody data={props.data} />
        </table>
    );
};
