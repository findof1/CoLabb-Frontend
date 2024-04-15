"use client"
import React, { useContext } from 'react';
import { RegisterCompanyContext } from "./RegisterCompanyContext";

const NameInput = () => {
  const {name, setName} = useContext(RegisterCompanyContext);
  return (
    <div className="flex flex-col mt-[12%]">
      <p className="font-medium text-[#C9C9C9]">Company Name</p>
      <input
        type="email"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        className="bg-[#542762] border-[1px] border-[#C50AFF] rounded-md text-md p-1 pl-2 w-[20vw]"
      ></input>
    </div>
  );
};

export default NameInput;
