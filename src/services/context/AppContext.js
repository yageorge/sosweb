import React, { createContext, useReducer } from "react"
import { useCookies } from "react-cookie"

let AppContext = createContext({})

// Initial state for variable in state
const initialState = {
    userToken: "",
    userName: "",
    userEmail: "",
}

// Reducer: advanced useState hook
// switch on action => modifying state
let reducer = (state, action) => {

    switch (action.type) {
        case "setUserToken": {
            // userToken (variable in state) : action.userToken (new value)
            return { ...state, userToken: action.userToken }
        }
        case "setUserName": {
            return { ...state, userName: action.userName }
        }
        case "setUserEmail": {
            return { ...state, userEmail: action.userEmail }
        }
    }

    return state;
};

function AppContextProvider(props) {

    // Initializing all state cookies
    const [cookies, setCookie, removeCookie] = useCookies()
    initialState.userToken = cookies["userToken"] ? cookies["userToken"] : ""
    initialState.userName = cookies["userName"] ? cookies["userName"] : ""
    initialState.userEmail = cookies["userEmail"] ? cookies["userEmail"] : ""

    // Initialize all state variables
    const fullInitialState = {
        ...initialState,
    }

    // create dispatcher to handle all states + dispatch when needed
    let [state, dispatch] = useReducer(reducer, fullInitialState)

    // value will contain state + dispatch of all vars
    let value = { state, dispatch }

    return (
        // Passing value as props to all children elements
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }