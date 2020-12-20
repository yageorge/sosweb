import React from 'react';

import LoadingSpinner from "../../../../spinner/LoadingSpinner"
import Row from "./TableRow";


// Rendering all Categories
const renderCategories = (categories) => {

  if (!categories) {
    return (

      <tr>
        <td className="p-8">
          <LoadingSpinner />
        </td>
      </tr>

    );
  }

  if (categories.length === 0) {
    return (

      <tr>
        <td className="p-8">
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
