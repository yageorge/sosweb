import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import Api from "../../../../services/api/Api";
import AlertModal from "../../../../services/alert/AlertModal";

export default function SelectDepartment(props) {

    const [selectDepartments, setSelectDepartments] = useState([]);

    // Fetching all current company's departments + Loading Select Values
    const getDepartments = async () => {
        try {

            const response = await Api.departments.getDepartments();
            loadSelectValues(response.data);

        } catch (e) {
            AlertModal(
                "An error has occured: " + e
            )
        }
    }

    // Loading departments as Select values
    const loadSelectValues = async (departments) => {
        const options = departments.map(department => ({

            //Adding departmentId as "name" as another Select value, to be accepted by onChange event.target.value syntax in Create.js
            "name": "departmentId",
            "value": department.id,
            "label": department.name.toUpperCase()
        }))
        setSelectDepartments(options)
    }

    useEffect(() => {
        // Fetching Departments
        getDepartments()
    }, []);


    return (
        <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-500 text-xs font-bold mb-2"
            >
                Departments
            </label>

            {/* Dropdown departments select option */}
            <Select
                className="text-gray-900"
                options={selectDepartments}

                // wrapping event with a target object, to be accepted by onChange event.target.value syntax in Create.js
                onChange={event => props.onChange({ target: event })}
            />
        </div>
    );

};