import axios from 'axios';

export default {
    getDepartments: () =>
        axios.get(`/departments/`),

    addDepartment: (department) =>
        axios.post(`/departments/`, department),

    editDepartment: (id) =>
        axios.get(`/departments/${id}/edit`),

    updateDepartment: (department, id) =>
        axios.put(`/departments/${id}`, department),

    deleteDepartment: (id) =>
        axios.delete(`/departments/${id}`),
}