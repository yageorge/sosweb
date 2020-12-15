import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Edit() {

  const history = useHistory();
  const [department, setDepartment] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  //Receiving department id param to edit
  const { id } = useParams();

  // Get department to edit
  const getDepartment = async () => {
    try {

      const response = await Api.departments.editDepartment(id);

      if (!response.data['error']) {
        setDepartment(response.data)
        setShowForm(true)
      } else {
        setShowForm(false)
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      setShowForm(false)
      setAlert(e)
      setShowAlert(true)
    }
  }

  useEffect(() => {
    getDepartment();
  }, [])

  // Capturing user input - Deparment data
  const onChange = (event) => {
    department[event.target.name] = event.target.value
    setDepartment(department)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.push("/admin/departments")
  }

  // Update Deparment
  const update = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {

      const response = await Api.departments.updateDepartment(department, department.id);

      if (!response.data['error']) {

        // If no errors updating, return to departments
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

    <div
      className=
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

      {/* Creating Table header including a back button */}
      <TableHeader
        title="Edit Department"
        buttonIcon="fas fa-arrow-circle-left text-green-500 "
        onClick={onClick} />

      {/* Only show Edit form when getDepartment is complete */}
      {showForm ?
        <Form
          action="Edit"
          onChange={onChange}
          submitFunction={update}
          department={department} />
        : null}

      {/* Alert handling */}
      {showAlert ?
        <Alert alert={alert} />
        : null}

    </div>

  );
}