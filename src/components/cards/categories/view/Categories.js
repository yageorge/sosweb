import { useHistory } from "react-router-dom";

import TableHeader from "../../common/TableHeader"
import Table from "./components/Table"

export default function Categories(props) {

  const history = useHistory();

  // Redirect to Create new Category
  const onClick = (e) => {
    e.preventDefault()
    history.push("/admin/category/create")
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        {/* Table header + Create category button */}
        <TableHeader
          title="Categories"
          buttonIcon="fas fa-plus-circle text-amber-500"
          onClick={onClick} />

        {/* Render Table with all categories */}
        <div className="block w-full overflow-x-auto">
          <Table data={props.categories} />
        </div>

      </div>
    </>
  );
}