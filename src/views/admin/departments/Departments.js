import React from "react";

import CardDepartments from "../../../components/cards/cardDepartments/CardDepartments";

export default function Departments() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardDepartments />
        </div>
      </div>
    </>
  );
}
