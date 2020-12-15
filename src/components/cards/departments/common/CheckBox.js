import React, { useEffect, useState } from 'react';

export default function CheckBox(props) {

    const [isAdmin, setIsAdmin] = useState(props.defaultValue);

    const handleIsPaidChange = () => {
        setIsAdmin(isAdmin == 0 ? 1 : 0);
        props.onChange({ target: { name: "isAdmin", value: isAdmin } })
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
                onChange={() => handleIsPaidChange()}
                readOnly
            />

        </div>
    );

};