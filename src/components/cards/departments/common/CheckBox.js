import React, { useEffect, useState } from 'react';

export default function CheckBox(props) {

    const [isAdmin, setIsAdmin] = useState();

    // Loading default checkbox Admin value
    const loadDefaultValue = () => {
        // No defaultValue => Create mode
        if (!props.defaultValue) {

            // Choose false for isAdmin
            setIsAdmin(0)

            // Modify default User Department info with onChange call
            props.onChange({ target: { name: "isAdmin", value: 0 } })

        } else {

            // DefaultValue exist => Edit mode
            setIsAdmin(props.defaultValue)
            // Modify default User Department info with onChange call
            props.onChange({ target: { name: "isAdmin", value: props.defaultValue } })

        }

    }

    useEffect(() => {
        // 
        loadDefaultValue()
    }, []);


    const toggleIsPaid = () => {
        const newIsAdmin = isAdmin === 0 ? 1 : 0
        setIsAdmin(newIsAdmin)
        props.onChange({ target: { name: "isAdmin", value: newIsAdmin } })
    }

    return (
        <div className="flex flex-row relative w-full mb-3">
            <label
                className="block uppercase text-gray-500 text-xs font-bold mr-2"
            >
                Admin User
            </label>

            {/* Is Admin Toggle switch */}

            <input
                type='checkbox'
                className=''
                id='isAdminSwitch'
                checked={isAdmin}
                onChange={() => toggleIsPaid()}
                readOnly
            />

        </div>
    );

};