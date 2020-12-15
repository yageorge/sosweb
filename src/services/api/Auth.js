import axios from "axios"

export default {

    login: (credentials) =>
        axios.post('/login', credentials).then(response => response.data),

    signup: (credentials) =>
        axios.post('/signup', credentials).then(response => response.data),

    profile: (id = null) =>
        axios.get('/user', id),

    logout: () =>
        axios.get('/logout')

}