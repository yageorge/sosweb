import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Forum from "./components/Form";

export default function Edit() {

  const history = useHistory();
  const [department, setDepartment] = useState({})
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  //Receiving department id param to edit
  const { id } = useParams();

  // Fetching the department to edit
  const getDepartment = async () => {
    try {
      console.log('edit department id ', id)
      const response = await Api.departments.editDepartment(id);
      console.log('response of get 1 department: ', response.data)

      //Able to get department, next: arrange well this here for error + load department values in FORM

    } catch (error) {

    }
  }

  useEffect(() => {
    getDepartment();
  })

  const onChange = (event) => {
    department[event.target.name] = event.target.value
    setDepartment(department)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.push("/admin/departments")
  }

  // Editing Deparment
  const edit = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {

      const response = await Api.departments.updateDepartment(department);

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
          title="Edit Department"
          buttonIcon="fas fa-arrow-circle-left text-green-500 "
          onClick={onClick} />

        <Forum
          action="Edit"
          onChange={onChange}
          submitFunction={edit} />

        {showAlert ? <Alert alert={alert} />
          : null}

      </div>
    </>
  );
}