import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Edit() {

  const history = useHistory();
  const [course, setCourse] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  //Receiving course id param to edit
  const { id } = useParams();

  // Get course to edit
  const getCourse = async () => {
    try {

      const response = await Api.courses.editCourse(id);

      if (!response.data['error']) {
        setCourse(response.data)
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
    getCourse();
  }, [])

  // Capturing course input - Course data
  const onChange = (event) => {
    course[event.target.name] = event.target.value
    setCourse(course)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.push("/admin/courses")
  }

  // Update Course
  const update = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {
      console.log('course: ', course)
      const response = await Api.courses.updateCourse(course, course.id);

      if (!response.data['error']) {

        // If no errors updating, return to courses
        history.push('/admin/courses');

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      console.log('Catch error courses/ Edit: ', e)
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
        title="Edit Course"
        buttonIcon="fas fa-arrow-circle-left text-green-500 "
        onClick={onClick} />

      {/* Only show Edit form when getCourse is complete */}
      {showForm ?
        <Form
          action="Edit"
          onChange={onChange}
          submitFunction={update}
          course={course} />
        : null}

      {/* Alert handling */}
      {showAlert ?
        <Alert alert={alert} />
        : null}

    </div>

  );
}