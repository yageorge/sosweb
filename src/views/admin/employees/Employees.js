import React from "react";

import CardEmployees from "../../../components/cards/CardEmployees";

export default function Employees() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardEmployees />
        </div>
      </div>
    </>
  );
}
