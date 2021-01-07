import React from 'react';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";

import AlertConfirmation from '../../../../../services/alert/AlertConfirmation';
import AlertModal from '../../../../../services/alert/AlertModal';

import Api from "../../../../../services/api/Api";


// Rendering 1 course row
export default function Row(props) {

  const history = useHistory();
  const course = props.course

  // Manage Lectures Button
  const manageLectures = async (courseId) => {
    history.push({
      pathname: `/admin/course/${courseId}/lectures`,
      state: {
        courseTitle: course.title, //passing course title in state params
      },
    })
  }

  // On delete press - Show Alert:
  const onDelete = () => {
    AlertConfirmation(
      "Are you sure?",
      "Do you want to delete:",
      course.title,
      () => deleteCourse(course.id)
    )
  }

  // Deleting Course
  const deleteCourse = async (id) => {
    try {

      const response = await Api.courses.deleteCourse(id);

      // If no error occurred:
      if (!response.data['error']) {
        // Refreshing the screen
        window.location.reload();
      } else {

        // Inform course of an error
        const errorMsg = response.data['error']
        AlertModal(
          "An error has occured: " + errorMsg
        )
      }

    } catch (e) {
      AlertModal('An error has occurred: ' + e.message)
    }
  }

  // Render 1 cell
  function Cell(props) {

    return (
      <td
        className="border-t-0 px-4 text-center border-l-0 border-r-0 uppercase text-xs whitespace-no-wrap p-4"
      >
        {props.value}
      </td>
    );

  };


  return (
    <>

      <tr className="font-bold transform hover:bg-gray-700">

        {/* Manage Lectures button */}
        <td>

          {/* Link to Lectures */}
          <button
            className="hover:bg-teal-900 transform hover:scale-110 text-white hover:text-white font-bold text-xs px-2 py-2 ml-2 mt-2 rounded transition-all duration-50 ease-in-out duration-700 ring-2 ring-teal-600"
            type="button"
            onClick={() => manageLectures(course.id)}
          >
            Lectures
          </button>

        </td>

        <Cell value={course.title} />

        <Cell value={course.description} />

        <Cell value={course.totalLectures} />

        <Cell value={course.totalMinutes} />

        <Cell value={course.points} />

        <Cell value={course.categoryName} />

        <Cell value={moment(course.created_at).format("DD MMM YYYY")} />

        <Cell value={moment(course.updated_at).format("DD MMM YYYY")} />

        {/* Edit button */}
        <td>
          <Link to={`/admin/course/${course.id}/edit`}>
            <i className="far fa-edit text-amber-700 text-md hover:text-amber-500 transform hover:scale-150 transition-all ease-in-out duration-700"></i>
          </Link>
        </td>

        {/* Delete button */}
        <td>
          <button
            onClick={onDelete}>
            <i className="fas fa-trash text-red-500 text-md hover:text-red-700 transform hover:scale-150 transition-all ease-in-out duration-700"></i>
          </button>
        </td>

      </tr>

    </>
  );

};