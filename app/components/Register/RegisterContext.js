"use client"
import React, { createContext, useState } from 'react';

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [rememberMe, setRememberMe] = useState(false);


 return (
    <RegisterContext.Provider value={{ email, password, rememberMe, setEmail, setPassword, setRememberMe }}>
      {children}
    </RegisterContext.Provider>
 );
};

export { RegisterContext, RegisterProvider };
