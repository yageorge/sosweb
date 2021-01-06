import axios from "axios";
import Auth from "./Auth";
import Departments from "./Departments";
import Users from "./User";
import Categories from "./Categories";
import Courses from "./Courses";
import Lectures from "./Lectures";
import Allocations from "./Allocations";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
axios.defaults.withCredentials = true

//Adding Token to Header
const setToken = (token = null) => {
    console.log('token in api.js:', token)
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

    categories: { ...Categories },

    courses: { ...Courses },

    lectures: { ...Lectures },

    allocations: { ...Allocations },
}