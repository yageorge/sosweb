import React from "react";

import CardCourses from "../../../components/cards/CardCourses";

export default function Courses() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCourses />
        </div>
      </div>
    </>
  );
}
