import React, { useState } from "react"
import { useHistory, useParams, useLocation } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Create() {

  const history = useHistory();
  const location = useLocation();

  const [lecture, setLecture] = useState({})
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  //Receiving course id param
  const { courseId } = useParams();

  // Retreiving courseTitle from history.push / state
  const courseTitle = location.state.courseTitle

  // Saving Lecture input in lecture state
  const onChange = (event) => {
    lecture[event.target.name] = event.target.value
    setLecture(lecture)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.goBack();
  }

  // Creating new Lecture
  const create = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()
    try {
      // Adding course_id in params
      lecture["course_id"] = courseId

      const response = await Api.lectures.addLecture(lecture);

      if (!response.data['error']) {
        // If no errors , return back to lectures
        history.goBack();

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      console.log('catch error create lecture: ', e)
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
        title={courseTitle.toUpperCase() + ": New Lecture"}
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