import React from 'react';

import Row from "./TableRow";

// Rendering all Categories
const renderCategories = (categories) => {

  if (!categories) {
    return (

      <tr>
        <td>
          Loading categories ...
        </td>
      </tr>

    );
  }

  if (categories.length === 0) {
    return (

      <tr>
        <td>
          No Categories yet.
        </td>
      </tr>

    );
  }

  // If categories data exist, render all
  return categories.map((Category, key) => (

    <Row key={key} category={Category} />

  ))

}

export default function TableBody(props) {

  // Rendering the table head
  return (
    <tbody>
      {renderCategories(props.data)}
    </tbody>
  );

};
