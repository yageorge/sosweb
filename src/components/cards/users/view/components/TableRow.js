import React from 'react';
import { Link } from "react-router-dom";
import moment from "moment";
import firebase from 'firebase';
import 'firebase/auth';


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
            user.firstName,
            () => deleteUser(user.id)
        )
    }

    // Deleting User
    const deleteUser = async (id) => {
        try {
            // Firebase user deletion
            // Need Admin SDK or cloud functions to delete a user by uid (instead of current user)
            // const user = firebase.auth().deleteUser('CLlrWvpSYoUMtNqOr3TNbjtNU8w2')

            // Laravel user deletion
            const response = await Api.users.deleteUser(id);
            console.log('response', response)

            // If no error occurred:
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
            <td className="border-t-0 px-6 text-center border-l-0 border-r-0 uppercase text-xs whitespace-no-wrap p-4">
                {props.value}
            </td>
        );

    };


    return (<>

        <tr className="transform hover:bg-gray-700 font-bold">
            <Cell value={user.firstName} />

            <Cell value={user.lastName} />

            <Cell value={user.email} />

            <Cell value={user.pointsTarget} />

            <Cell value={user.departmentName} />

            <Cell value={user.isAdmin ? "Admin" : ""} />

            <Cell value={moment(user.created_at).format("DD MMM YYYY")} />

            {/* Edit button */}
            <td>
                <Link to={`/admin/user/${user.id}/edit`}>
                    <i className="far fa-edit text-amber-700 text-md hover:text-amber-500 transform hover:scale-150 transition-all ease-in-out duration-700"></i>
                </Link>
            </td>

            {/* Delete button */}
            {/* Disabled, need Firebase Admin SDK or cloud functions to delete a firebase user by uid */}
            {/* <td>
                <button
                    onClick={onDelete}>
                    <i className="fas fa-trash text-red-500 text-md hover:text-red-700 transform hover:scale-150 transition-all ease-in-out duration-700"></i>
                </button>
            </td> */}

        </tr>
    </>
    );

};