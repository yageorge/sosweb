import React, { useState } from "react"
import { useHistory } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Forum from "./components/Forum";

export default function Create(props) {

  const history = useHistory();
  const [department, setDepartment] = useState({})
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const onChange = (event) => {
    department[event.target.name] = event.target.value
    setDepartment(department)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = (e) => {
    history.push("/admin/departments")
  }

  // Creating new Deparment
  const create = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {

      const response = await Api.departments.addDepartment(department);

      if (!response.data['error']) {

        setShowAlert(false)
        //Redirecting to departments
        history.push('/admin/departments');

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      setAlert(e)
      setShowAlert(true)
    }
  }

  return (
    <>
      <div
        className=
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

        {/* Creating Table header including a back button */}
        <TableHeader
          title="Create New Department"
          buttonIcon="fas fa-arrow-circle-left text-green-500 "
          onClick={onClick} />

        <Forum onChange={onChange} create={create} />

        {showAlert ? <Alert alert={alert} />
          : null}

      </div>
    </>
  );
}