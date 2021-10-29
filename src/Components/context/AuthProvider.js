import React, { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = () => {
  return <AuthContext.Povider></AuthContext.Povider>;
};

export default AuthProvider;
