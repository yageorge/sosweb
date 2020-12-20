import { useHistory } from "react-router-dom";

import TableHeader from "../../common/TableHeader"
import Table from "./components/Table"

export default function Departments(props) {

  const history = useHistory();

  // Redirect to Create new Department
  const onClick = (e) => {
    e.preventDefault()
    history.push("/admin/department/create")
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white">

        {/* Table header + Create department button */}
        <TableHeader
          title="Departments"
          buttonIcon="fas fa-plus-circle text-purple-600 hover:text-purple-800 transform hover:scale-125 transition-all ease-in-out duration-700 "
          onClick={onClick} />

        {/* Render Table with all departments */}
        <div className="block w-full overflow-x-auto pb-4 px-4">
          <Table data={props.departments} />
        </div>

      </div>
    </>
  );
}