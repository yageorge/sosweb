import { useHistory } from "react-router-dom";

import TableHeader from "../../common/TableHeader"
import Table from "./components/Table"

export default function Users(props) {

  const history = useHistory();

  // Redirect to Create new User
  const onClick = (e) => {
    e.preventDefault()
    history.push("/admin/user/create")
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white">

        {/* Table header + Create User button */}
        <TableHeader
          title="Users"
          titleClassName="text-amber-600"
          buttonIcon="fas fa-plus-circle text-teal-600 hover:text-amber-600 transform hover:scale-125 transition-all ease-in-out duration-700 "
          onClick={onClick} />

        {/* Render Table with all users */}
        <div className="block w-full overflow-x-auto pb-4 px-4">
          <Table data={props.users} />
        </div>

      </div>
    </>
  );
}