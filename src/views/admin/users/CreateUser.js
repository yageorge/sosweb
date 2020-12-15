import React from "react";

import Create from "../../../components/cards/users/form/Create";

export default function CreateUser() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Create />
        </div>
      </div>
    </>
  );
}
