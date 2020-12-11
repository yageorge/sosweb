import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";
import TableHeader from "../common/TableHeader"
import Table from "./components/Table"

export default function CardDepartments() {

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
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        <TableHeader title='Departments' />

        <div className="block w-full overflow-x-auto">
          <Table data={departments} />
        </div>

      </div>
    </>
  );
}