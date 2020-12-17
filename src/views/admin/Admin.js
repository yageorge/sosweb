import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../../components/navbars/AdminNavbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footers/Footer";

// views

import Dashboard from "./dashboard/Dashboard";

import IndexCategories from "./categories/IndexCategories"
import CreateCategory from "./categories/CreateCategory"
import EditCategory from "./categories/EditCategory"

import IndexCourses from "./courses/IndexCourses"
import CreateCourse from "./courses/CreateCourse"
import EditCourse from "./courses/EditCourse"

import IndexLectures from "./lectures/IndexLectures"
import CreateLecture from "./lectures/CreateLecture"
import EditLecture from "./lectures/EditLecture"



import IndexDepartments from "./departments/IndexDepartments"
import CreateDepartment from "./departments/CreateDepartment"
import EditDepartment from "./departments/EditDepartment"

import IndexUsers from "./users/IndexUsers"
import CreateUser from "./users/CreateUser"
import EditUser from "./users/EditUser"

export default function Admin() {

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-58 bg-gray-400">

        {/* Admin Navigation Bar Header*/}
        <AdminNavbar />

        <div className="relative bg-blue-600 pt-40 pb-32 pt-12">

          <div className="px-4 mx-auto">

            <Switch>
              <Route exact path="/admin/dashboard" component={Dashboard} />

              {/* Categories Routes */}
              <Route exact path="/admin/categories" component={IndexCategories} />
              <Route exact path="/admin/category/create" component={CreateCategory} />
              <Route exact path="/admin/category/:id/edit" component={EditCategory} />

              {/* Courses Routes */}
              <Route exact path="/admin/courses" component={IndexCourses} />
              <Route exact path="/admin/course/create" component={CreateCourse} />
              <Route exact path="/admin/course/:id/edit" component={EditCourse} />

              {/* Courses / Lectures Routes */}
              <Route exact path="/admin/course/:courseId/lectures" component={IndexLectures} />
              <Route exact path="/admin/course/:courseId/lecture/create" component={CreateLecture} />
              <Route exact path="/admin/course/:courseId/lecture/:lectureId/edit/" component={EditLecture} />

              {/* Departments Routes */}
              <Route exact path="/admin/departments" component={IndexDepartments} />
              <Route exact path="/admin/department/create" component={CreateDepartment} />
              <Route exact path="/admin/department/:id/edit" component={EditDepartment} />

              {/* Users Routes */}
              <Route exact path="/admin/users" component={IndexUsers} />
              <Route exact path="/admin/user/create" component={CreateUser} />
              <Route exact path="/admin/user/:id/edit" component={EditUser} />

              {/* Redirect * to dashboard */}
              <Redirect from="/admin" to="/admin/dashboard" />

            </Switch>

            {/* Common Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
