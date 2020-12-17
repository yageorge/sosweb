import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Edit() {

  //Receiving course + lecture id param
  const { courseId } = useParams();
  const { lectureId } = useParams();

  const history = useHistory();
  const [lecture, setLecture] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)



  // Get lecture to edit
  const getLecture = async () => {
    try {

      const response = await Api.lectures.editLecture(lectureId);

      if (!response.data['error']) {
        setLecture(response.data)
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
    getLecture();
  }, [])

  // Capturing lecture input - Lecture data
  const onChange = (event) => {
    lecture[event.target.name] = event.target.value
    setLecture(lecture)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.goBack();
  }

  // Update Lecture
  const update = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {
      const response = await Api.lectures.updateLecture(lecture, lecture.id);

      if (!response.data['error']) {

        // If no errors updating, return to lectures
        history.goBack();

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      console.log('Catch error lectures/ Edit: ', e)
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
        title="Edit Lecture"
        buttonIcon="fas fa-arrow-circle-left text-green-500 "
        onClick={onClick} />

      {/* Only show Edit form when getLecture is complete */}
      {showForm ?
        <Form
          action="Edit"
          onChange={onChange}
          submitFunction={update}
          lecture={lecture} />
        : null}

      {/* Alert handling */}
      {showAlert ?
        <Alert alert={alert} />
        : null}

    </div>

  );
}