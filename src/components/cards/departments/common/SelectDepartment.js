import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import Api from "../../../../services/api/Api";
import AlertModal from "../../../../services/alert/AlertModal";

export default function SelectDepartment(props) {

    const [showSelect, setShowSelect] = useState(false)
    const [selectDefaultValue, setSelectDefaultValue] = useState([]);
    const [selectDepartments, setSelectDepartments] = useState([]);


    // Fetching all current company's departments + Loading Select Values
    const getDepartments = async () => {
        try {

            const response = await Api.departments.getDepartments();
            await loadSelectValues(response.data);

        } catch (e) {
            AlertModal('An error has occurred: ' + e.message)
        }
    }

    // Loading departments as Select values
    const loadSelectValues = async (departments) => {
        const options = departments.map(department => ({

            //Adding departmentId as "name" as another Select value, to be accepted by onChange event.target.value syntax in Create.js
            // used department_id to match Laravel's foregin key syntax
            "name": "department_id",
            "value": department.id,
            "label": department.name.toUpperCase()

        }))

        //
        await loadSelectDefaultValue(options)

        // Set Loaded select options data into the Select data selectDepartments
        setSelectDepartments(options)

        // Display Select dropdown once data is loaded
        setShowSelect(true)

    }

    // Loading Select default value
    const loadSelectDefaultValue = async (options) => {

        // No defaultValue => Create mode
        if (!props.defaultValue) {
            // Choose first Select option as default
            setSelectDefaultValue(options[0])

            // Modify default User Department info with onChange call
            props.onChange({ target: options[0] })
        } else {
            // DefaultValue exist => Edit mode

            // Get defaultDepartment value from options
            let defaultOption = options.filter((option) => option.value === props.defaultValue)

            // Set defaultOption as default value in Select
            setSelectDefaultValue(defaultOption)

            // Modify default User Department info with onChange call
            props.onChange({ target: defaultOption })

        }

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

            {/* Dropdown departments select option - Only show when all select data are loaded */}
            {showSelect ?
                <Select
                    className="text-gray-900"
                    options={selectDepartments}
                    defaultValue={selectDefaultValue}
                    // wrapping event with a target object, to be accepted by onChange event.target.value syntax in Create.js
                    onChange={event => props.onChange({ target: event })}
                />
                : null}
        </div>
    );

};