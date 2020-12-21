import React, { useEffect, useState } from "react"

import Api from "../../../services/api/Api"
import AlertModal from "../../../services/alert/AlertModal";

import Courses from "../../../components/cards/courses/view/Courses"

export default function IndexCourses() {

  const [courses, setCourses] = useState(null);

  const getCourses = async () => {
    try {

      const response = await Api.courses.getCourses()
      setCourses(response.data);

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <Courses courses={courses} />
        </div>
      </div>
    </>
  );
}
