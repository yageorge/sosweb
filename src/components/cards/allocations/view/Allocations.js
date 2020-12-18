import { useHistory } from "react-router-dom";

import TableHeader from "../../common/TableHeader"
import DepartmentsCard from "./components/departments/DepartmentsCard"
import CoursesCard from "./components/courses/CoursesCard"

import LoadingSpinner from "../../../spinner/LoadingSpinner"


export default function Allocations(props) {

  return (

    <div
      className=
      "relative min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

      {/* Table header*/}
      <TableHeader
        title="Allocate Courses to Departments"
      />

      {/* Body content: Departments + Courses */}
      {props.departments && props.courses ?
        <div className="flex flex-row bg-blue-900">

          <DepartmentsCard departments={props.departments} />

          <CoursesCard courses={props.courses} />

        </div>
        : <LoadingSpinner />
      }
    </div>

  );
}