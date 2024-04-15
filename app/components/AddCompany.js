"use client";
import React, { useEffect, useState } from "react";
import ADD_USER from "@/app/functions/GraphQl/mutations/AddUser";
import { useRouter } from "next/navigation";
import Button from "./Button";
import JOIN_COMPANY from "../functions/GraphQl/mutations/JoinCompany";
import getLocalData from "../functions/getLocalData";

const AddCompany = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const [userdata, setUserdata] = useState()
  
  useEffect(()=>{
    const fetchData = async ()=>{
    setUserdata(await getLocalData())
    }
    fetchData()
  },[])
  
  const AddCompanyToUser = () => {
    if (!code) {
      setErrMsg("Please fill out all fields.");
      return;
    }
    console.log(userdata)
    if(!userdata || !userdata._id){
      setErrMsg("Something went wrong. Try and sign in, and then enter your company's code from the dashboard.")
      return;
    }
    setErrMsg("");
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: JOIN_COMPANY(code, userdata._id) }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.errors) {
          console.error(data.errors);
          return;
        }
        router.push('/dashboard')
      })
      .catch((err) => {
        setErrMsg("An unknown error occured, please try again.");
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col mt-[15%]">
        <p className="font-medium text-[#C9C9C9]">Code</p>
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          className="bg-[#542762] border-[1px] border-[#C50AFF] rounded-md text-xl p-2 pl-5 w-[30vw]"
        ></input>
      </div>
      <Button
        onClick={AddCompanyToUser}
        style="none"
        extraStyles={`w-[40vw] h-[8vh] mt-auto ${errMsg ? "" : "mb-[3.5%]"} text-2xl rounded-lg bg-[#6f2ba0] border-2 border-[#983ba0]`}
      >
        Finish
      </Button>
      <p className="text-[rgb(200,0,0)] tezt-sm mt-[2%] mb-[10%]">{errMsg}</p>
    </>
  );
};

export default AddCompany;
