import React, { useState } from "react";

import Api from "../../../../services/api/Api";
import AlertModal from "../../../../services/alert/AlertModal";
import LoadingSpinner from "../../../spinner/LoadingSpinner"

import TableHeader from "../../common/TableHeader"
import DepartmentsCard from "./components/departments/DepartmentsCard"
import CoursesCard from "./components/courses/CoursesCard"



export default function Allocations(props) {

  const [loading, setLoading] = useState(false);
  const [allocations, setAllocations] = useState(null);
  const [unAllocatedCourses, setUnAllocatedCourses] = useState(null);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('');


  // Fetching 1 department's allocated + Un-Allocated courses
  const getDepartmentCourses = async (departmentId) => {
    setLoading(true)

    //Saving departmentId in the state (to be used when allocation or removing allocations)
    setSelectedDepartmentId(departmentId)

    await getAllocations(departmentId)
    await getUnAllocatedCourses(departmentId)

    setLoading(false)
  }

  // Fetching 1 depatment's allocated courses
  const getAllocations = async (departmentId) => {
    try {

      const response = await Api.allocations.getAllocations(departmentId);
      console.log("setAllocations(response.data): ", response.data)
      if (response.data && response.data.length !== 0) {
        setAllocations(response.data)

      }
      else {
        setAllocations(null)
      }

    } catch (e) {
      alert('Failed to get Allocations: ', e.request.response);
    }
  }

  // Fetching 1 depatment's UN-Allocated courses
  const getUnAllocatedCourses = async (departmentId) => {
    try {

      const response = await Api.allocations.getUnAllocated(departmentId);
      const unAllocatedCourses = response.data

      if (unAllocatedCourses && unAllocatedCourses.length !== 0) {
        setUnAllocatedCourses(unAllocatedCourses)
      }
      else {
        setUnAllocatedCourses(null)
      }

    } catch (e) {
      alert('Failed to get Allocations: ', e.request.response);
    }
  }

  // Allocate a course to a department
  const addAllocation = async (courseId) => {
    try {
      setLoading(true)
      const allocation = { department_id: selectedDepartmentId, course_id: courseId }
      await Api.allocations.addAllocation(allocation);

      // Refresh - get Allocations
      await getDepartmentCourses(selectedDepartmentId)
      setLoading(false)

    } catch (e) {

      // Checking for error 1062 indicating a duplicate entry
      const responseMsg = e.request.response
      if (responseMsg.includes("1062")) {
        AlertModal('Course already added')
      } else {
        console.log('Error request::: ', e.request.response)
      }

      setLoading(false)
    }
  }

  // Delete Allocation
  const deleteAllocation = async (courseId) => {
    try {
      setLoading(true)
      const allocation = { department_id: selectedDepartmentId, course_id: courseId }
      await Api.allocations.deleteAllocation(allocation);

      // Refresh - get Allocations
      await getDepartmentCourses(selectedDepartmentId)
      setLoading(false)

    } catch (e) {
      console.log('Error request::: ', e.request.response)
      setLoading(false)
    }
  }

  return (

    <div
      className=
      "relative min-w-0 break-words w-full mb-6 px-6 py-2 shadow-lg rounded bg-gray-800 text-white">

      {/* Table header*/}
      <TableHeader
        title="Allocations"
      />

      {/* Body content: Departments + Courses + Allocations*/}
      {props.departments ?
        <div className="flex flex-row bg-gray-800">

          {/* Listing all departments */}
          <DepartmentsCard
            departments={props.departments}
            getAllocations={getDepartmentCourses}
          />

          {/* Allocations: selected department courses */}
          <CoursesCard
            title="Allocated Courses"
            courses={allocations}
            loading={loading}
            onClick={deleteAllocation}
          />

          {/* Listing all Un-Allocated courses */}
          <CoursesCard
            title="Un Allocated Courses"
            courses={unAllocatedCourses}
            loading={loading}
            onClick={addAllocation}
          />

        </div>
        : <LoadingSpinner />
      }
    </div>

  );
}