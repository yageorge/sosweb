import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import { AppContext } from "../../../services/context/AppContext"
import Api from "../../../services/api/Api";


export default function Logout() {

  const history = useHistory();

  const { dispatch } = useContext(AppContext);
  const [cookies, setCookie, removeCookie] = useCookies(["userToken"]);

  const logUserOut = async () => {

    try {
      await Api.auth.logout();
      console.log('    removeCookie("userToken");')
      // Deleting userToken cookie
      removeCookie("userToken");

      //Removing token from AppContext
      dispatch({
        type: 'setCookie',
        cookie: ''
      })

      //Redirecting to Landing Page
      history.push('/');

    } catch (e) {
      console.log('logout catch error: ', typeof e)
    }
  }

  useEffect(() => {
    logUserOut()
  }, [])

  // Can show a page saying: you are logged out! or loggin out plz wait .. then direct
  return null

}
