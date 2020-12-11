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
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        <TableHeader
          title="Departments"
          buttonIcon="fas fa-plus-circle text-amber-500 "
          onClick={onClick} />

        <div className="block w-full overflow-x-auto">
          <Table data={props.departments} />
        </div>

      </div>
    </>
  );
}