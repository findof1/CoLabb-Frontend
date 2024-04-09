"use client"
import React, { useContext } from 'react';
import { SignInContext } from "./SignInContext";

const EmailInput = () => {
  const {email, setEmail} = useContext(SignInContext);
  return (
    <div className="flex flex-col mt-[7%]">
      <p className="font-medium text-[#C9C9C9]">Email</p>
      <input
        type="email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        className="bg-[#542762] border-[1px] border-[#C50AFF] rounded-md text-md p-1 pl-2 w-[20vw]"
      ></input>
    </div>
  );
};

export default EmailInput;
