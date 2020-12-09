import axios from "axios"

export default {

    login: async (credentials) => {
        return await axios.post('/login', credentials)
    },

    signup: async (credentials) => {
        return await axios.post('/signup', credentials)
    },

    profile: async (id = null) => {
        return await axios.get('/user', id)
    },

    logout: async () => {
        return await axios.get('/logout')
    }
}