import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";
import Users from "../../../components/cards/users/view/Users";

export default function IndexUsers() {

  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {

      const response = await Api.users.getUsers();
      setUsers(response.data);

    } catch (e) {
      alert('Failed to get Users: ', e);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Users users={users} />
        </div>
      </div>
    </>
  );
}
