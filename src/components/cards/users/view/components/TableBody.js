import React from 'react';

import Row from "./TableRow";

// Rendering all Users
const renderUsers = (users) => {

  if (!users) {
    return (

      <tr>
        <td>
          Loading users ...
        </td>
      </tr>

    );
  }

  if (users.length === 0) {
    return (

      <tr>
        <td>
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
