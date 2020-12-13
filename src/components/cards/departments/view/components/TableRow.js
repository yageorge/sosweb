import React from 'react';
import moment from "moment";

import AlertDialog from '../../../../../services/alert/AlertDialog';
import AlertModal from '../../../../../services/alert/AlertModal';

import Api from "../../../../../services/api/Api";


const deleteDepartment = async (departmentId) => {
    try {


        const response = await Api.departments.deleteDepartment(departmentId);
        console.log('delete response', response)
        if (!response.data['error']) {


        } else {

        }

    } catch (e) {

    }
}

// Rendering 1 department row
export default function Row(props) {

    const department = props.department

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
            <td>
                <button>
                    <i className="far fa-edit text-green-500 text-md"></i>
                </button>
            </td>



            {/* Delete button */}
            <td>
                <button
                    onClick={() =>
                        AlertDialog(() =>
                            deleteDepartment(department.id), department.name)}>

                    <i className="fas fa-trash text-red-500 text-md"></i>
                </button>
            </td>

        </tr>
    </>
    );

};