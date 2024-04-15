"use client";
import React, { useContext, useState } from "react";
import PasswordInput from "./PasswordInput";
import { RegisterCompanyContext } from "./RegisterCompanyContext";
import ADD_USER from "@/app/functions/GraphQl/mutations/AddUser";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button";
import NameInput from "./NameInput";


const RegisterCompany = () => {
  const { name, password } = useContext(RegisterCompanyContext)
    useContext(RegisterCompanyContext);
  const router = useRouter()
  const search = useSearchParams()
  const [errMsg, setErrMsg] = useState("")
  console.log()
  const RegisterCompanyAndValidation = () => {
    setErrMsg("")
    if(!name || ![password]){
      setErrMsg("Please fill out all fields")
      return;
    }
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ADD_USER() }),
    }) 
      .then((res) => res.json())
      .then(async (data) => { 
        if(data.error){
          console.error(data.errors)
          return;
        }
      })
      .catch((err) => {
        setErrMsg("An unknown error occured, please try again.")
        console.log(err);
      });
  };

  return (
    <>
    <NameInput/>
    <PasswordInput/>
      <Button
        onClick={RegisterCompanyAndValidation}
        style = 'none' 
        extraStyles={`w-[40vw] h-[8vh] mt-[12%] text-2xl rounded-lg bg-[#6f2ba0] border-2 border-[#983ba0]`}
      >
        Register Company
      </Button>
      <p className="text-[rgb(200,0,0)] tezt-sm mt-[2%]">{errMsg}</p>
    </>
  );
};

export default RegisterCompany;
