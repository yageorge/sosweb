import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Edit() {

  const history = useHistory();
  const [category, setCategory] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  //Receiving category id param to edit
  const { id } = useParams();

  // Get category to edit
  const getCategory = async () => {
    try {

      const response = await Api.categories.editCategory(id);

      if (!response.data['error']) {
        setCategory(response.data)
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
    getCategory();
  }, [])

  // Capturing user input - Deparment data
  const onChange = (event) => {
    category[event.target.name] = event.target.value
    setCategory(category)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.goBack();
  }

  // Update Deparment
  const update = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {

      const response = await Api.categories.updateCategory(category, category.id);

      if (!response.data['error']) {

        // If no errors updating, return to categories
        history.push('/admin/categories');

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
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white">

      {/* Creating Table header including a back button */}
      <TableHeader
        title="Edit Category"
        buttonIcon="fas fa-arrow-circle-left text-green-500 "
        onClick={onClick} />

      {/* Only show Edit form when getCategory is complete */}
      {showForm ?
        <Form
          action="Edit"
          onChange={onChange}
          submitFunction={update}
          category={category} />
        : null}

      {/* Alert handling */}
      {showAlert ?
        <Alert alert={alert} />
        : null}

    </div>

  );
}