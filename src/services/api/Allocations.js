import axios from 'axios';

export default {

    // Get all courses Allocated to department ID
    getAllocations: (departmentId) =>
        axios.get(`/allocations/${departmentId}`),

    // Get all courses Un-Allocated to department ID
    getUnAllocated: (departmentId) =>
        axios.get(`/allocations/${departmentId}/unallocated`),

    addAllocation: (allocation) =>
        axios.post(`/allocations/`, allocation),

    deleteAllocation: (allocation) =>
        axios.delete(`/allocations/`, { data: allocation })

}