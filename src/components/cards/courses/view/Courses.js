import { useHistory } from "react-router-dom";

import TableHeader from "../../common/TableHeader"
import Table from "./components/Table"

export default function Courses(props) {

  const history = useHistory();

  // Redirect to Create new Course
  const onClick = (e) => {
    e.preventDefault()
    history.push("/admin/course/create")
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        {/* Table header + Create Course button */}
        <TableHeader
          title="Courses"
          buttonIcon="fas fa-plus-circle text-amber-500 "
          onClick={onClick} />

        {/* Render Table with all courses */}
        <div className="block w-full overflow-x-auto">
          <Table data={props.courses} />
        </div>

      </div>
    </>
  );
}