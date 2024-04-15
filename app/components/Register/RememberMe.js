"use client"
import React, { useContext } from "react";
import { RegisterContext } from "./RegisterContext";

const RememberMe = () => {
  const {setRememberMe} = useContext(RegisterContext);
  return (
    <div className="flex flex-row mt-[5%] w-[20vw]">
      <input
        className="bg-[#D9D9D9] border-[#C2C2C2] w-[1.5vw] h-[1.5vw] hover:bg-[#eeeeee] hover:border-[#dedede] after:bg-[#D9D9D9] after:border-[#C2C2C2]"
        type="checkbox"
        onClick={()=>{setRememberMe(prev=>!prev)}}
      ></input>
      <label className="ml-1 text-[#C9C9C9]">Remember me?</label>
    </div>
  );
};

export default RememberMe;
