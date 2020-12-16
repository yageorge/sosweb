import React from 'react';

import Row from "./TableRow";

// Rendering all Lectures
const renderLectures = (lectures) => {

  if (!lectures) {
    return (

      <tr>
        <td>
          Loading lectures ...
        </td>
      </tr>

    );
  }

  if (lectures.length === 0) {
    return (

      <tr>
        <td>
          No Lectures yet.
        </td>
      </tr>

    );
  }

  // If lectures data exist, render all
  return lectures.map((lecture, key) => (

    <Row key={key} lecture={lecture} />

  ))

}

export default function TableBody(props) {

  // Rendering the table head
  return (
    <tbody>
      {renderLectures(props.data)}
    </tbody>
  );

};
