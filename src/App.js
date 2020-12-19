import React from "react"
import Api from "./services/api/Api"
import { useCookies } from "react-cookie"
import AppRouter from "./core/AppRouter"

import { AppContextProvider } from "./services/context/AppContext"
import "./assets/styles/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

function App() {
  const [cookies, ,] = useCookies()

  // initialize APIs
  Api.init(cookies['userToken'])

  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
}

export default App
