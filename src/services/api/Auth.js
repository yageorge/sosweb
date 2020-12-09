import axios from "axios"

export default {

    login: async (credentials) => {
        return await axios.post('/login', credentials).then(response => response.data)
    },

    signup: async (credentials) => {
        return await axios.post('/signup', credentials).then(response => response.data)
    },

    profile: async (id = null) => {
        return await axios.get('/user', id)
    },

    logout: async () => {
        return await axios.get('/logout')
    }
}