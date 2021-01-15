import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";

import Api from "../../../../services/api/Api";
import { cloudImageUpload } from '../../../../services/CloudImage'
import Alert from "../../../../services/alert/Alert";
import TableHeader from "../../common/TableHeader"
import Form from "./components/Form";

export default function Edit() {

  const history = useHistory();
  const [course, setCourse] = useState({})
  const [showForm, setShowForm] = useState(false)
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [imageFile, setImageFile] = useState({})

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
      setAlert(e.message)
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

  // Saving Image file input in imageFile state
  const onImagePick = (imageFile) => {
    setImageFile(imageFile)
    setShowAlert(false)
  }

  // Back Button onClick
  const onClick = () => {
    history.goBack();
  }

  // Update Course
  const update = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()

    try {
      // upload image to Cloud Storage + get downloadURL
      const downloadURL = await cloudImageUpload('images/courses/', imageFile)
      // Include image url in course
      course['urlImage'] = downloadURL

      const response = await Api.courses.updateCourse(course, course.id);

      if (!response.data['error']) {

        // If no errors updating, return to courses
        history.push('/admin/courses');

      } else {
        setAlert(response.data['error'])
        setShowAlert(true)
      }

    } catch (e) {
      setAlert(e.message)
      setShowAlert(true)
    }
  }

  return (

    <div
      className=
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white">

      {/* Creating Table header including a back button */}
      <TableHeader
        title="Edit Course"
        buttonIcon="fas fa-arrow-circle-left text-teal-600 hover:text-amber-600 transform hover:scale-125 transition-all ease-in-out duration-700 "
        onClick={onClick} />

      {/* Only show Edit form when getCourse is complete */}
      {showForm ?
        <Form
          action="Edit"
          onChange={onChange}
          onFilePick={onImagePick}
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