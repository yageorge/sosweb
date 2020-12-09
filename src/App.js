import React from "react";
import Api from "./services/api/Api";
import { useCookies } from "react-cookie";
import AppRouter from "./core/AppRouter";

import "./assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [cookies, setCookies, removeCookies] = useCookies()

  // initialize APIs
  Api.init(cookies['userToken'])

  return (
    <AppRouter />
  );
}

export default App;
