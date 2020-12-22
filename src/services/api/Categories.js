import axios from 'axios';

export default {
    getCategories: () =>
        axios.get(`/categories/`),

    addCategory: (category) =>
        axios.post(`/categories/`, category),

    editCategory: (id) =>
        axios.get(`/categories/${id}/edit`),

    updateCategory: (category, id) =>
        axios.put(`/categories/${id}`, category),

    deleteCategory: (id) =>
        axios.delete(`/categories/${id}`),
}