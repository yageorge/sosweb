import axios from 'axios';

export default {
    getCourses: () =>
        axios.get(`/courses/`),

    getCoursesCount: () =>
        axios.get(`/courses/count`),

    getEnrollments: () =>
        axios.get(`/enrollments/count`),

    addCourse: (course) =>
        axios.post(`/courses/`, course),

    editCourse: (id) =>
        axios.get(`/courses/${id}/edit`),

    updateCourse: (course, id) =>
        axios.put(`/courses/${id}`, course),

    deleteCourse: (id) =>
        axios.delete(`/courses/${id}`),
}