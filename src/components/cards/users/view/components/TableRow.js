import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";

import AlertConfirmation from '../../../../../services/alert/AlertConfirmation';
import AlertModal from '../../../../../services/alert/AlertModal';

import Api from "../../../../../services/api/Api";


// Rendering 1 user row
export default function Row(props) {

    const user = props.user

    // On delete press - Show Alert:
    const onDelete = () => {
        AlertConfirmation(
            "Are you sure?",
            "Do you want to delete:",
            user.name,
            () => deleteUser(user.id, user.name)
        )
    }

    // Deleting User
    const deleteUser = async (id) => {
        try {
            const response = await Api.users.deleteUser(id);

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
            AlertModal(
                "An error has occured: " + e
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
            <Cell value={user.firstName} />

            <Cell value={user.lastName} />

            <Cell value={user.email} />

            <Cell value={user.department_id} />

            <Cell value={user.isAdmin} />

            <Cell value={moment(user.created_at).format("DD MMM YYYY - hh:mm a")} />

            {/* Edit button */}
            <td>
                <Link to={`/admin/user/${user.id}/edit`}>
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