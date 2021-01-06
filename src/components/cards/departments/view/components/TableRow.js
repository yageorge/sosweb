import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";

import AlertConfirmation from '../../../../../services/alert/AlertConfirmation';
import AlertModal from '../../../../../services/alert/AlertModal';

import Api from "../../../../../services/api/Api";


// Rendering 1 department row
export default function Row(props) {

    const department = props.department

    // On delete press - Show Alert:
    const onDelete = () => {
        AlertConfirmation(
            "Are you sure?",
            "Do you want to delete:",
            department.name,
            () => deleteDepartment(department.id)
        )
    }

    // Deleting Department
    const deleteDepartment = async (id) => {
        try {
            const response = await Api.departments.deleteDepartment(id);

            // If no error occurred
            if (!response.data['error']) {
                // Refreshing the screen
                window.location.reload();
            } else {

                // Inform user of an error
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
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 uppercase text-xs whitespace-no-wrap p-4">
                {props.value}
            </td>
        );

    };


    return (<>

        <tr className="transform hover:bg-gray-700 font-bold">

            {/* Manage Courses button */}
            <td>
                <button
                    className="hover:bg-teal-900 transform hover:scale-110 text-white hover:text-white font-bold text-xs px-2 py-2 ml-2 mt-2 rounded transition-all duration-50 ease-in-out duration-700 ring-2 ring-teal-600"
                    type="button"
                // onClick={() => manageLectures(course.id)}
                >
                    TO REMOVE - Courses
                </button>
            </td>


            <Cell value={department.name} />

            <Cell value={moment(department.created_at).format("DD MMM YYYY")} />

            {/* Edit button */}
            <td>
                <Link to={`/admin/department/${department.id}/edit`}>
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