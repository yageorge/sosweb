import React from 'react';

import LoadingSpinner from "../../../../../spinner/LoadingSpinner"


export default function CoursesCard(props) {

  const loading = props.loading
  const courses = props.courses
  const [openTab, setOpenTab] = React.useState(0);

  const onButtonClick = async (event, courseId) => {
    event.preventDefault();

    // Setting courseId as current selected Tab
    setOpenTab(courseId);

    // Function run to Allocate or Remove Allocation
    props.onClick(courseId)

  }

  const renderCourses = () => {

    return (

      <ul
        className="grid grid-cols-2 gap-4"
        role="tablist"
      >

        {courses.map((course) => (
          <li className="mb-2 text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-blue-600 bg-white"
              }
              onClick={event => {
                onButtonClick(event, course.id)
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              {course.title}
            </a>
          </li>
        ))}

      </ul>
    )
  }

  // Rendering table
  return (

    <div className="flex flex-col w-2/4 divide-y divide-blue-500">

      <p className="rounded-t-lg bg-blue-200 mx-4 p-4 text-center text-md font-bold text-blue-600">
        {props.title}
      </p>

      <hr className="mx-4" />

      <div className="rounded-b-lg bg-blue-200 mx-4 mb-4 p-4">

        { // If loading show LoadingSpinner
          !loading ?
            // If Courses available, render courses
            courses ?
              renderCourses()
              :
              // If Courses not available
              <div className="text-center text-md text-red-600">
                No courses
            </div>
            : <LoadingSpinner />
        }
      </div>
    </div>

  );
};
