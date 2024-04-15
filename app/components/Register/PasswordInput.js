"use client";
import React, { useState, useContext } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { RegisterContext } from "./RegisterContext";

const PasswordInput = () => {
  const [visible, setVisible] = useState(false);
  const {password, setPassword} = useContext(RegisterContext);
  return (
    <div className="flex flex-col mt-[7%]">
      <p className="font-medium text-[#C9C9C9]">Password</p>
      <div className="w-[20vw] relative">
        <input
          type={visible ? "text" : "password"}
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className="bg-[#542762] border-[1px] border-[#C50AFF] rounded-md text-md p-1 pl-2 w-[20vw] pr-8"
        ></input>
        <button
          className="absolute right-1 top-[6px]"
          onClick={() => {
            setVisible((prev) => !prev);
          }}
        >
          {visible ? (
            <FaRegEye className="w-[1.5vw] h-[1.5vw] text-white" />
          ) : (
            <FaRegEyeSlash className="w-[1.5vw] h-[1.5vw] text-white" />
          )}
        </button>
        <p className="font-medium text-[#C9C9C9] text-xs">Must be 8 or more characters long</p>
      </div>
    </div>
  );
};

export default PasswordInput;
