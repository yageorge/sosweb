import React from 'react';

import Row from "./TableRow";

// Rendering all Users
const renderUsers = (users) => {

  if (!users) {
    return (

      <tr>
        <td className="p-8">
          Loading users ...
        </td>
      </tr>

    );
  }

  if (users.length === 0) {
    return (

      <tr>
        <td className="p-8">
          No Users yet.
        </td>
      </tr>

    );
  }

  // If users data exist, render all
  return users.map((user, key) => (

    <Row key={key} user={user} />

  ))

}

export default function TableBody(props) {

  // Rendering the table head
  return (
    <tbody>
      {renderUsers(props.data)}
    </tbody>
  );

};
