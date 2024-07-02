import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

export const AuthProvider = ( { children }) => {

  const initial = () => {
    
    const user = JSON.parse(localStorage.getItem("user"))

    return {
      logged : !!user,
      user: user,
    }
    
  };

  const [authState, dispatch] = useReducer( authReducer , {} , initial )


  const onLogin = ( name ) => {
    
    const user = {
      id: "abc",
      userName : name
    }

    dispatch({
      type : types.login,
      payload : user
    })

    localStorage.setItem("user", JSON.stringify(user))
  };


  const onLogout = () => {
    
    dispatch({
      type: types.logout
    })
    localStorage.removeItem("user")
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      authState,
      login : onLogin,
      logout : onLogout,
    }}>
      { children }
    </AuthContext.Provider>
  )
}
