import axios from 'axios';

export default {
    getLectures: (course_id) =>
        axios.get(`/lectures`, { params: { "course_id": course_id } }),

    addLecture: (lecture) =>
        axios.post(`/lectures/`, lecture),

    editLecture: (id) =>
        axios.get(`/lectures/${id}/edit`),

    updateLecture: (lecture, id) =>
        axios.put(`/lectures/${id}`, lecture),

    deleteLecture: (id) =>
        axios.delete(`/lectures/${id}`),
}