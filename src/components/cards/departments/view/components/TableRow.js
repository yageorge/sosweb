import React from 'react';
import { useHistory, Link } from "react-router-dom";
import moment from "moment";

import AlertConfirmation from '../../../../../services/alert/AlertConfirmation';
import AlertModal from '../../../../../services/alert/AlertModal';

import Api from "../../../../../services/api/Api";


// Rendering 1 department row
export default function Row(props) {

    const history = useHistory();
    const department = props.department

    const deleteDepartment = async (departmentId, departmentName) => {
        try {

            const response = await Api.departments.deleteDepartment(departmentId);

            if (!response.data['error']) {

                //refreshing the screen
                window.location.reload();

            } else {

                //Inform user of an error
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
            <Cell value={department.name} />

            <Cell value={moment(department.created_at).format("DD MMM YYYY - hh:mm a")} />

            {/* Edit button */}

            <Link to={`/admin/department/${department.id}/edit`}>
                <i className="far fa-edit text-green-500 text-md"></i>
            </Link>

            {/* <td>
                <button
                    onClick={() => history.push("/admin/department/edit")}
                >
                    <i className="far fa-edit text-green-500 text-md"></i>
                </button>
            </td> */}



            {/* Delete button */}
            <td>
                <button
                    onClick={() =>
                        AlertConfirmation(
                            "Are you sure?",
                            "Do you want to delete:",
                            department.name,
                            () => deleteDepartment(department.id, department.name)
                        )}>

                    <i className="fas fa-trash text-red-500 text-md"></i>
                </button>
            </td>

        </tr>
    </>
    );

};