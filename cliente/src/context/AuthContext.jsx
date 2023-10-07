import { createContext, useState, useContext } from "react";

import { soliRegistro } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = ()=>{
   const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth debe ser usado dentro d eun AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    const signUp = async (user) => {
    const resp = await soliRegistro(user);
    console.log(resp.data);
    setUser(resp.data);
  };

  return (
    <AuthContext.Provider value={{ signUp, user }}>
      {children}
    </AuthContext.Provider>
  );
};
