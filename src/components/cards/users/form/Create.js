import React, { useState } from "react"
import { useHistory } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Create() {

  const history = useHistory();
  const [user, setUser] = useState({})
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  // Saving User input in user state
  const onChange = (event) => {
    user[event.target.name] = event.target.value
    setUser(user)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.goBack();
  }

  // Creating new User
  const create = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()
    try {

      const response = await Api.users.addUser(user);

      if (!response.data['error']) {
        // If no errors updating, return to users
        history.push('/admin/users');

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      console.log('catch error create user: ', e)
      // setAlert(e)
      // setShowAlert(true)
    }
  }

  return (

    <div
      className=
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white">

      {/* Creating Table header including a back button */}
      <TableHeader
        title="Create New User"
        buttonIcon="fas fa-arrow-circle-left text-green-500 "
        onClick={onClick} />

      {/* Rendering form */}
      <Form
        action="Create"
        onChange={onChange}
        submitFunction={create} />

      {/* Rendering conditional Alert Message */}
      {showAlert ?
        <Alert alert={alert} />
        : null}

    </div>
  );
}