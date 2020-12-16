import React, { useState } from "react"
import { useHistory } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Create() {

  const history = useHistory();
  const [course, setCourse] = useState({})
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  // Saving Course input in course state
  const onChange = (event) => {
    course[event.target.name] = event.target.value
    setCourse(course)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.push("/admin/courses")
  }

  // Creating new Course
  const create = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()
    try {

      const response = await Api.courses.addCourse(course);

      if (!response.data['error']) {
        // If no errors updating, return to courses
        history.push('/admin/courses');

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      console.log('catch error create course: ', e)
      // setAlert(e)
      // setShowAlert(true)
    }
  }

  return (

    <div
      className=
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blue-900 text-white">

      {/* Creating Table header including a back button */}
      <TableHeader
        title="Create New Course"
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