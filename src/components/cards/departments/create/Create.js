import TableHeader from "../../common/TableHeader"
import Forum from "./components/Forum";

export default function Create(props) {

  // Saving new Deparment
  const onClick = (e) => {
    // e.preventDefault()
    // history.push("/admin/department/create")
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        <TableHeader
          title="Create New Department"
          buttonIcon="fas fa-save text-green-500 "
          onClick={onClick} />

        <Forum />

      </div>
    </>
  );
}