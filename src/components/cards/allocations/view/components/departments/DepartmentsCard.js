import React, { useState } from "react"

import SearchBar from "../../../../../searchbar/SearchBar"

export default function DepartmentsCard(props) {

  const [openTab, setOpenTab] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const departments = props.departments


  // Fetching 1 depatment's courses
  const onButtonClick = async (event, departmentId) => {
    event.preventDefault();

    // Setting departmentId as current selected Tab
    setOpenTab(departmentId);

    // Function run to get allocations of selected Department
    props.getAllocations(departmentId)

  }

  // On user search event
  const onSearch = (event) => {
    setSearchInput(event.target.value)
  }


  const renderDepartments = () => {

    return (
      <ul
        role="tablist"
      >
        {
          departments.filter(
            // Filter departments by user Search Input
            department => department.name.toLowerCase().includes(searchInput.toLowerCase()))

            .map((department) => (

              <li className="mb-2 mt-2 text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transform hover:scale-105 transition-all ease-in-out duration-700 " +
                    (openTab === department.id
                      ? "text-white bg-teal-900"
                      : "text-teal-900 bg-white")
                  }
                  onClick={event => {
                    onButtonClick(event, department.id)
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {department.name}
                </a>
              </li>

            ))}

      </ul>
    )
  }

  return (

    <div className="flex flex-col w-1/4 divide-y divide-teal-900">

      {/* Title */}
      <p className="rounded-t-lg bg-gray-700 mx-4 p-4 text-center text-md font-bold text-amber-400">
        Departments
      </p>

      {/* User input search bar */}
      <SearchBar
        className="flex flex-row relative mx-4"
        onChange={onSearch}
      />

      {/* Departments data rendering */}
      <div className="rounded-b-lg bg-gray-700 mx-4 mb-4 p-4">
        {renderDepartments()}
      </div>

    </div>

  );
};
