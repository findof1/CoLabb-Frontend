"use client";
import React, { useContext, useState } from "react";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import RememberMe from "./RememberMe";
import { RegisterContext } from "./RegisterContext";
import ADD_USER from "@/app/functions/GraphQl/mutations/AddUser";
import setData from "@/app/functions/setData";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../Button";
import Link from "next/link";


const Register = () => {
  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } =
    useContext(RegisterContext);
  const router = useRouter()
  const search = useSearchParams()
  const [errMsg, setErrMsg] = useState("")
  console.log()
  const RegisterAndValidation = () => {
    if(!email || !password) {
      setErrMsg("Please fill out all fields.")
      return;
    }
    setErrMsg("")
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: ADD_USER(password, email) }),
    }) 
      .then((res) => res.json())
      .then(async (data) => { 
        if(data.error){
          console.error(data.errors)
          return;
        }
        const userData = data.data.addUser
        if(userData){
          await setData(userData,rememberMe).then(()=>{
          })
        if(search.get("type") == 'employee'){
          router.push('/register/3')
        }else{
          if(search.get("plan")){
            router.push(`/register/5?plan=${search.get("plan")}`)
          }else{
            router.push('/register/4')
          }
        }
        }else{
          setErrMsg("A User with that email already exists, try logging in.")
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
        onClick={RegisterAndValidation}
        style = 'none' 
        extraStyles={`w-[40vw] h-[8vh] mt-[6%] text-2xl rounded-lg bg-[#6f2ba0] border-2 border-[#983ba0]`}
      >
        Register
      </Button>
      <p className="text-[rgb(200,0,0)] tezt-sm">{errMsg}</p>
      <p className='text-xs text-[#C9C9C9] mt-auto mb-3'>Already Have An Account? <Link href='/signIn' className='underline'>Sign In</Link></p>
    </>
  );
};

export default Register;
