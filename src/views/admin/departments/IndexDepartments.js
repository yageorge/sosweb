import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";
import AlertModal from "../../../services/alert/AlertModal"

import Departments from "../../../components/cards/departments/view/Departments";

export default function IndexDepartments() {

  const [departments, setDepartments] = useState(null);

  const getDepartments = async () => {
    try {

      const response = await Api.departments.getDepartments();
      setDepartments(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <Departments departments={departments} />
        </div>
      </div>
    </>
  );
}
