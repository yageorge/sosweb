import React from 'react';

import Row from "./TableRow";

// Rendering all Departments
const renderDepartments = (departments) => {

  if (departments.length === 0) {
    return (

      <tr>
        <td className="p-8">
          No Departments yet.
        </td>
      </tr>

    );
  }

  // If departments data exist, render all
  return departments.map((department, key) => (

    <Row key={key} department={department} />

  ))

}

export default function TableBody(props) {

  // Rendering the table head
  return (
    <tbody>
      {renderDepartments(props.data)}
    </tbody>
  );

};
