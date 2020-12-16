import React from 'react';

import Row from "./TableRow";

// Rendering all Courses
const renderCourses = (courses) => {

  if (!courses) {
    return (

      <tr>
        <td>
          Loading courses ...
        </td>
      </tr>

    );
  }

  if (courses.length === 0) {
    return (

      <tr>
        <td>
          No Courses yet.
        </td>
      </tr>

    );
  }

  // If courses data exist, render all
  return courses.map((course, key) => (

    <Row key={key} course={course} />

  ))

}

export default function TableBody(props) {

  // Rendering the table head
  return (
    <tbody>
      {renderCourses(props.data)}
    </tbody>
  );

};
