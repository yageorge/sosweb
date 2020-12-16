import React from 'react';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";

import AlertConfirmation from '../../../../../services/alert/AlertConfirmation';
import AlertModal from '../../../../../services/alert/AlertModal';

import Api from "../../../../../services/api/Api";


// Rendering 1 lecture row
export default function Row(props) {

    const history = useHistory();
    const lecture = props.lecture

    // On delete press - Show Alert:
    const onDelete = () => {
        AlertConfirmation(
            "Are you sure?",
            "Do you want to delete:",
            lecture.firstName,
            () => deleteLecture(lecture.id)
        )
    }

    // Deleting Lecture
    const deleteLecture = async (id) => {
        try {

            const response = await Api.lectures.deleteLecture(id);

            // If no error occurred:
            if (!response.data['error']) {
                // Refreshing the screen
                window.location.reload();
            } else {

                // Inform lecture of an error
                const errorMsg = response.data['error']
                AlertModal(
                    "An error has occured: " + errorMsg
                )
            }

        } catch (e) {
            AlertModal(
                "An exception has occured: " + e
            )
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

        <tr>

            {/* Manage Lectures button */}
            <td>
                <button
                    className="bg-teal-500 text-white font-bold uppercase text-xs px-2 py-2 ml-2 mt-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => { history.push(`/admin/lecture/${lecture.id}/lectures`) }}
                >
                    Lectures
                </button>
            </td>

            <Cell value={lecture.title} />

            <Cell value={lecture.description} />

            <Cell value={lecture.totalLectures} />

            <Cell value={lecture.totalMinutes} />

            <Cell value={lecture.points} />

            <Cell value={lecture.categoryName} />

            <Cell value={moment(lecture.created_at).format("DD MMM YYYY - hh:mm a")} />

            <Cell value={moment(lecture.updated_at).format("DD MMM YYYY - hh:mm a")} />

            {/* Edit button */}
            <td>
                <Link to={`/admin/lecture/${lecture.id}/edit`}>
                    <i className="far fa-edit text-green-500 text-md"></i>
                </Link>
            </td>

            {/* Delete button */}
            <td>
                <button
                    onClick={onDelete}>
                    <i className="fas fa-trash text-red-500 text-md"></i>
                </button>
            </td>

        </tr>
    </>
    );

};