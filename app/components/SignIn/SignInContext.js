"use client"
import React, { createContext, useState } from 'react';

const SignInContext = createContext();

const SignInProvider = ({ children }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [rememberMe, setRememberMe] = useState(false);


 return (
    <SignInContext.Provider value={{ email, password, rememberMe, setEmail, setPassword, setRememberMe }}>
      {children}
    </SignInContext.Provider>
 );
};

export { SignInContext, SignInProvider };
