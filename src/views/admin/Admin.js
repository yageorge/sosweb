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
import Departments from "./departments/Departments"
import Employees from "./employees/Employees"

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
            <Route exact path="/admin/departments" component={Departments} />
            <Route exact path="/admin/employees" component={Employees} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>

          {/* Common Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
