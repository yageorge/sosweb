import "./assets/styles/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import React from "react"
import Api from "./services/api/Api"
import { useCookies } from "react-cookie"
import AppRouter from "./core/AppRouter"

import { AppContextProvider } from "./services/context/AppContext"


function App() {
  const [cookies, setCookie, removeCookie] = useCookies()

  // initialize APIs
  Api.init(cookies['userToken'] ? cookies['userToken'] : '')

  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

export default App
