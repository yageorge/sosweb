import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Api from '../../../../services/api/Api'
import { cloudImageUpload } from '../../../../services/CloudImage'
import Alert from '../../../../services/alert/Alert'
import TableHeader from '../../common/TableHeader'
import Form from './components/Form'

export default function Create() {

  const history = useHistory()
  const [course, setCourse] = useState({})
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [imageFile, setImageFile] = useState({})

  // Saving Course input in course state
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
    history.goBack()
  }

  // Creating new Course
  const create = async (event) => {
    //Avoid form submission / refresh
    event.preventDefault()
    try {
      // upload image to Cloud Storage + get downloadURL
      const downloadURL = await cloudImageUpload('images/courses/', imageFile)
      // Include image url in course
      course['urlImage'] = downloadURL

      // Api create course
      const response = await Api.courses.addCourse(course)

      if (!response.data['error']) {
        // If no errors updating, return to courses
        history.push('/admin/courses')

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
      'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-800 text-white'>

      {/* Creating Table header including a back button */}
      <TableHeader
        title='Create New Course'
        buttonIcon='fas fa-arrow-circle-left text-teal-600 hover:text-amber-600 transform hover:scale-125 transition-all ease-in-out duration-700 '
        onClick={onClick}
      />

      {/* Rendering form */}
      <Form
        action='Create'
        onChange={onChange}
        onFilePick={onImagePick}
        submitFunction={create}
      />

      {/* Rendering conditional Alert Message */}
      {showAlert ?
        <Alert alert={alert}
        />
        : null}

    </div>
  )
}