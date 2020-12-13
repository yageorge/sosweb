import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Edit() {

  const history = useHistory();
  const [user, setUser] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  //Receiving user id param to edit
  const { id } = useParams();

  // Get user to edit
  const getUser = async () => {
    try {

      const response = await Api.users.editUser(id);

      if (!response.data['error']) {
        setUser(response.data)
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
    getUser();
  }, [])

  // Capturing user input - User data
  const onChange = (event) => {
    user[event.target.name] = event.target.value
    setUser(user)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.push("/admin/users")
  }

  // Update User
  const update = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {

      const response = await Api.users.updateUser(user, user.id);

      if (!response.data['error']) {

        // If no errors updating, return to users
        history.push('/admin/users');

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
        title="Edit User"
        buttonIcon="fas fa-arrow-circle-left text-green-500 "
        onClick={onClick} />

      {/* Only show Edit form when getUser is complete */}
      {showForm ?
        <Form
          action="Edit"
          onChange={onChange}
          submitFunction={update}
          user={user} />
        : null}

      {/* Alert handling */}
      {showAlert ?
        <Alert alert={alert} />
        : null}

    </div>

  );
}