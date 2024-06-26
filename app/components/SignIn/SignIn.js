"use client";
import React, { useContext, useState } from "react";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import RememberMe from "./RememberMe";
import { SignInContext } from "./SignInContext";
import GET_USER from "@/app/functions/GraphQl/queries/GetUser";
import setData from "@/app/functions/setData";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Link from "next/link";


const SignIn = () => {
  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } =
    useContext(SignInContext);
  const router = useRouter()
  const [errMsg, setErrMsg] = useState("")

  const SignInAndValidation = () => {
    if(!email || !password) {
      setErrMsg("Please fill out all fields.")
      return;
    }
    setErrMsg("")
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_USER(password, email) }),
    }) 
      .then((res) => res.json())
      .then(async (data) => { 
        if(data.error){
          console.error(data.error)
          return;
        }
        const userData = data.data.getUser
        if(userData){
          await setData(userData,rememberMe).then(()=>{
            router.push('/dashboard')
          })

        }else{
          setErrMsg("Inncorrect Email or Password.")
        }
      })
      .catch((err) => {
        setErrMsg("An unknown error occured, please try again.")
        console.log(err);
      });
  };

  return (
    <>
      <EmailInput />
      <PasswordInput />
      <RememberMe />
      
      <Button
        onClick={SignInAndValidation}
        style = 'none' 
        extraStyles={`w-[40vw] h-[8vh] mt-[2%] text-2xl rounded-lg bg-[#6f2ba0] border-2 border-[#983ba0]`}
      >
        Sign In
      </Button>
      <p className="text-[rgb(200,0,0)] tezt-sm">{errMsg}</p>
      <p className="text-[#C9C9C9] text-xs mt-5">Don't Have An Account? <Link href='/register/1' className="underline">Resgister</Link></p>
    </>
  );
};

export default SignIn;
