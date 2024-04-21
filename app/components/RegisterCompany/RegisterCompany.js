"use client";
import React, { useContext, useEffect, useState } from "react";
import PasswordInput from "./PasswordInput";
import { RegisterCompanyContext } from "./RegisterCompanyContext";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button";
import NameInput from "./NameInput";
import ADD_COMPANY from "@/app/functions/GraphQl/mutations/AddCompany";
import getLocalData from "@/app/functions/getLocalData";


const RegisterCompany = () => {
  const { name, password } = useContext(RegisterCompanyContext)
  const [userdata, setUserdata] = useState(undefined); 
  const router = useRouter()
  const search = useSearchParams()
  const [errMsg, setErrMsg] = useState("")


  useEffect(() => {
    const fetchData = async () => {
       const data = await getLocalData();
       setUserdata(data);
    };
    fetchData();
   }, []);


  const RegisterCompanyAndValidation = () => {
    setErrMsg("")
    if(!name || ![password]){
      setErrMsg("Please fill out all fields")
      return;
    }
    if(!userdata._id){
      setErrMsg("Userdata is corrupted, please try and sign in again, or create a new account.")
    }
    if(!password.includes('!') && !password.includes('@') && !password.includes('#') && !password.includes('$') && !password.includes('%') && !password.includes('^') && !password.includes('&') && !password.includes('*') && !password.includes('(') && !password.includes(')') && !password.includes('-') && !password.includes('_') && !password.includes('=') && !password.includes('+')){
      setErrMsg("Password doesn't include a special character.");
      return;
    }
    if(search.get("plan") !== "basic" || search.get("plan") !== "standard" || search.get("plan") !== "premium")
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ADD_COMPANY(name, password, search.get("plan"), userdata._id) }),
    }) 
      .then((res) => res.json())
      .then(async (data) => { 
        if(data.error){
          console.error(data.errors)
          return;
        }
        router.push("/dashboard")
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
