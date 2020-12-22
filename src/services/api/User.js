import axios from 'axios';

export default {
    getUsers: () =>
        axios.get(`/users/`),

    getUsersCount: () =>
        axios.get(`/users/count`),

    addUser: (user) =>
        axios.post(`/users/`, user),

    editUser: (id) =>
        axios.get(`/users/${id}/edit`),

    updateUser: (user, id) =>
        axios.put(`/users/${id}`, user),

    deleteUser: (id) =>
        axios.delete(`/users/${id}`),
}