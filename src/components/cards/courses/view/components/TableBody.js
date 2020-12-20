import React from 'react';

import LoadingSpinner from "../../../../spinner/LoadingSpinner"
import Row from "./TableRow";

// Rendering all Courses
const renderCourses = (courses) => {

  if (!courses) {
    return (

      <tr>
        <td className="p-8">
          <LoadingSpinner />
        </td>
      </tr>

    );
  }

  if (courses.length === 0) {
    return (

      <tr>
        <td className="p-8">
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
