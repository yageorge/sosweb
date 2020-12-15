import axios from "axios";
import Auth from "./Auth";
import Departments from "./Departments";
import Users from "./User";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
axios.defaults.withCredentials = true

//Adding Token to Header
const setToken = (token = null) => {
    axios.defaults.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
}

export default {

    // Initialize APIs axios
    init: (token) => {
        setToken(token)
    },

    auth: { ...Auth },

    departments: { ...Departments },

    users: { ...Users },
}