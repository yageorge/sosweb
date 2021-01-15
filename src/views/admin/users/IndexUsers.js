import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";
import AlertModal from "../../../services/alert/AlertModal"

import Users from "../../../components/cards/users/view/Users";

export default function IndexUsers() {

  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {

      const response = await Api.users.getUsers();
      setUsers(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <Users users={users} />
        </div>
      </div>
    </>
  );
}
