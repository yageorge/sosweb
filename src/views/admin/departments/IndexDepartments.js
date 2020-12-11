import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";
import Departments from "../../../components/cards/departments/view/Departments";

export default function IndexDepartments() {

  const [departments, setDepartments] = useState(null);

  const getDepartments = async () => {
    try {

      const response = await Api.departments.getDepartments();
      setDepartments(response.data);

    } catch (e) {
      alert('Failed to get Departments: ', e);
    }
  }

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Departments departments={departments} />
        </div>
      </div>
    </>
  );
}
