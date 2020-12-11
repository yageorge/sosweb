import React from "react";

import TableHeader from "../common/TableHeader"
import Table from "./components/Table"

export default function CardDepartments() {
  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        <TableHeader title='Departments' />

        <div className="block w-full overflow-x-auto">
          <Table />
        </div>

      </div>
    </>
  );
}