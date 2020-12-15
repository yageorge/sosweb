import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../../components/navbars/AdminNavbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HeaderStats from "../../components/headers/HeaderStats";
import Footer from "../../components/footers/Footer";

// views

import Dashboard from "./dashboard/Dashboard";
import Courses from "./courses/Courses"
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
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">

          <Switch>
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/courses" component={Courses} />

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
    </>
  );
}
