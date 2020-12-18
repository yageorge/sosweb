import React, { useEffect, useState } from "react";

import Api from "../../../services/api/Api";

import Allocations from "../../../components/cards/allocations/view/Allocations";

export default function IndexAllocations() {

    const [departments, setDepartments] = useState(null);

    const getDepartments = async () => {
        try {

            const response = await Api.departments.getDepartments();
            setDepartments(response.data);

        } catch (e) {
            alert('Failed to get Departments: ', e);
        }
    }

    const getData = async () => {
        await getDepartments()
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <Allocations departments={departments} />
                </div>
            </div>
        </>
    );
}
