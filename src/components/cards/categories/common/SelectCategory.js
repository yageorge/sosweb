import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import Api from "../../../../services/api/Api";
import AlertModal from "../../../../services/alert/AlertModal";

export default function SelectCategory(props) {

    const [showSelect, setShowSelect] = useState(false)
    const [selectDefaultValue, setSelectDefaultValue] = useState([]);
    const [selectCategories, setSelectCategories] = useState([]);


    // Fetching all current company's categories + Loading Select Values
    const getCategories = async () => {
        try {

            const response = await Api.categories.getCategories();
            await loadSelectValues(response.data);

        } catch (e) {
            AlertModal('An error has occurred: ' + e.message)
        }
    }

    // Loading categories as Select values
    const loadSelectValues = async (categories) => {
        const options = categories.map(category => ({

            //Adding categoryId as "name" as another Select value, to be accepted by onChange event.target.value syntax in Create.js
            // used category_id to match Laravel's foregin key syntax
            "name": "category_id",
            "value": category.id,
            "label": category.name.toUpperCase()

        }))

        //
        await loadSelectDefaultValue(options)

        // Set Loaded select options data into the Select data selectCategories
        setSelectCategories(options)

        // Display Select dropdown once data is loaded
        setShowSelect(true)

    }

    // Loading Select default value
    const loadSelectDefaultValue = async (options) => {

        // No defaultValue => Create mode
        if (!props.defaultValue) {
            // Choose first Select option as default
            setSelectDefaultValue(options[0])

            // Modify default User Category info with onChange call
            props.onChange({ target: options[0] })
        } else {
            // DefaultValue exist => Edit mode

            // Get defaultCategory value from options
            let defaultOption = options.filter((option) => option.value === props.defaultValue)

            // Set defaultOption as default value in Select
            setSelectDefaultValue(defaultOption)

            // Modify default User Category info with onChange call
            props.onChange({ target: defaultOption })

        }

    }

    useEffect(() => {
        // Fetching Categories
        getCategories()
    }, []);


    return (
        <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-500 text-xs font-bold mb-2"
            >
                Categories
            </label>

            {/* Dropdown categories select option - Only show when all select data are loaded */}
            {showSelect ?
                <Select
                    className="text-gray-900"
                    options={selectCategories}
                    defaultValue={selectDefaultValue}
                    // wrapping event with a target object, to be accepted by onChange event.target.value syntax in Create.js
                    onChange={event => props.onChange({ target: event })}
                />
                : null}
        </div>
    );

};