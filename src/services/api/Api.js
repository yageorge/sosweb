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

    // BELOW TO BE REMOVED: use to handle try catch error for all axios requests
    // console.log('Error Response Data: ', e.response.data)
    //   console.log('Error Response status: ', e.response.status)
    //   console.log('Error Response header: ', e.response.header)
    //   console.log('Error request: ', e.request)
    //   console.log('Error message: ', e.message)
    //   console.log('Error config: ', e.config)

    auth: { ...Auth },

    departments: { ...Departments },

    users: { ...Users },

    categories: { ...Categories },

    courses: { ...Courses },

    lectures: { ...Lectures },

    allocations: { ...Allocations },
}