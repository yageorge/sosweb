import React, { useState } from "react"

import LoadingSpinner from "../../../../../spinner/LoadingSpinner"
import SearchBar from "../../../../../searchbar/SearchBar"


export default function CoursesCard(props) {

  const loading = props.loading
  const courses = props.courses
  const [openTab, setOpenTab] = useState(0)
  const [searchInput, setSearchInput] = useState('')

  const onButtonClick = async (event, courseId) => {
    event.preventDefault();

    // Setting courseId as current selected Tab
    setOpenTab(courseId);

    // Function run to Allocate or Remove Allocation
    props.onClick(courseId)

    // Clearing user search input
    setSearchInput('')

  }

  // On user search event
  const onSearch = (event) => {
    setSearchInput(event.target.value)
  }

  const renderCourses = () => {

    return (

      <ul
        className="grid grid-cols-2 gap-4 pb-6"
        role="tablist"
      >

        {courses.filter(
          // Filter courses by user Search Input
          course => course.title.toLowerCase().includes(searchInput.toLowerCase()))

          .map((course) => (

            <li className="text-center">

              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded-xl border-2 border-purple-500 block leading-normal transform hover:scale-105 hover:bg-purple-100 text-purple-900 bg-white"
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

    <div className="flex flex-col w-2/4">

      <p className="rounded-t-lg bg-gray-700 mx-4 p-4 text-center text-md font-bold text-purple-100">
        {props.title}
      </p>


      <div className="rounded-b-lg bg-gray-700 mx-4 mb-4 px-4">

        { // If not loading show courses
          !loading ?
            // If Courses available, render courses
            courses ?
              <div>

                {/* User input search bar */}
                <div className="mb-6">
                  <SearchBar
                    className="flex flex-row relative"
                    onChange={onSearch}
                  />
                </div>


                {/* Departments data rendering */}
                {renderCourses()}

              </div>
              :
              // If Courses not available
              <div className="text-center text-sm text-white m-6">
                No courses
            </div>
            // If loading show LoadingSpinner
            : <LoadingSpinner />
        }
      </div>
    </div>

  );
};
