import React from 'react';

import moment from "moment";

// Render 1 single cell
function Cell(props) {

  return (
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
      {props.value}
    </td>
  );

};


// Rendering 1 department row
function Row(props) {
  const department = props.department

  return (
    <tr>
      <Cell value={department.name} />

      <Cell value={moment(department.created_at).format("DD MMM YYYY - hh:mm a")} />

      {/* Delete button */}
      <td>
        <button>
          <i className="fas fa-trash text-red-500 mr-2 text-md"></i>
        </button>
      </td>

    </tr>
  );
};


// Rendering all Departments
const renderDepartments = (departments) => {

  if (!departments) {
    return (

      <tr>
        <td>
          Loading departments ...
        </td>
      </tr>

    );
  }

  if (departments.length === 0) {
    return (

      <tr>
        <td>
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
