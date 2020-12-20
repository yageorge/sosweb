/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import Tab from "./elements/Tab"

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>

      {/* md for medium regular screens */}
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-58 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">

          {/* Drawer Button To appear on small screens */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Link to Home + Name / on md size */}
          <Link
            className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
            to="/admin"
          >
            Skill Optimizer Home
          </Link>

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >

            {/* Collapse header on small screens */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Skill Optimizer
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Unordered List */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              {/* Dashboard Tab */}
              <Tab
                title="Dashboard"
                path="/admin/dashboard"
                icon="fas fa-tv"
              />

              {/* Line break */}
              <hr className="my-4 md:min-w-full" />

              {/* Categories Tab */}
              <Tab
                title="Categories"
                path="/admin/categories"
                icon="fas fa-layer-group"
              />

              {/* Courses/trainings Tab */}
              <Tab
                title="Courses/Trainings"
                path="/admin/courses"
                icon="fas fa-graduation-cap"
              />

              {/* Allocations Tab */}
              <Tab
                title="Allocations"
                path="/admin/allocations"
                icon="fab fa-connectdevelop"
              />

              <hr className="my-4 md:min-w-full" />

              {/* Departments Tab */}
              <Tab
                title="Departments"
                path="/admin/departments"
                icon="fas fa-building"
              />

              {/* Users */}
              <Tab
                title="Users"
                path="/admin/users"
                icon="fas fa-user-tie"
              />

              {/* Settings Tab */}
              <Tab
                title="Settings"
                path="/admin/settings"
                icon="fas fa-tools"
              />

              {/* Line break */}
              <hr className="my-4 md:min-w-full" />

              {/* User Logout */}
              <Tab
                title="Logout"
                path="/auth/logout"
                icon="fas fa-sign-out-alt"
              />

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
