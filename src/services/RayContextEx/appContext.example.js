// import React, { createContext, useReducer } from "react";

// let AppContext = createContext({});

// const initialState = {
//     user: JSON.parse(localStorage.getItem('user') || '{}'),
// }

// let reducer = (state: any, action: any) => {

//     switch (action.type) {

//         case "setUser": {
//             return { ...state, user: action.user }
//         }
//     }

//     return state;
// };

// function AppContextProvider(props: any) {

//     const fullInitialState = {
//         ...initialState,
//     }

//     let [state, dispatch] = useReducer(reducer, fullInitialState);
//     let value = { state, dispatch };

//     return (
//         <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//     );
// }

// let AppContextConsumer = AppContext.Consumer;

// export { AppContext, AppContextProvider, AppContextConsumer };