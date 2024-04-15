"use client"
import React, { createContext, useState } from 'react';

const RegisterCompanyContext = createContext();

const RegisterCompanyProvider = ({ children }) => {
 const [name, setName] = useState("");
 const [password, setPassword] = useState("");


 return (
    <RegisterCompanyContext.Provider value={{ name, password, setName, setPassword}}>
      {children}
    </RegisterCompanyContext.Provider>
 );
};

export { RegisterCompanyContext, RegisterCompanyProvider };
