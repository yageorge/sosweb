import React, { createContext, useReducer } from "react";
import { useCookies } from "react-cookie";

let AppContext = createContext({});

const initialState = {
    cookie: '',
}

let reducer = (state, action) => {

    switch (action.type) {
        case "setCookie": {
            return { ...state, cookie: action.cookie }
        }
    }

    return state;
};

function AppContextProvider(props) {

    const [cookies] = useCookies(["userToken"]);
    console.log('cookies in AppContext.js:', cookies);
    initialState.cookie = Object.keys(cookies).length ? cookies['userToken'] : '';

    const fullInitialState = {
        ...initialState,
    }

    let [state, dispatch] = useReducer(reducer, fullInitialState);
    let value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };