/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import { soliRegistro } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth() debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [errores, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const resp = await soliRegistro(user);
      console.log(resp.data);
      setUser(resp.data);
      setisAuthenticated(true);
    } catch (error) {
      setErrors(error.response.data);
      // console.log(error.response.data)
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, user, isAuthenticated, errores }}>
      {children}
    </AuthContext.Provider>
  );
};
