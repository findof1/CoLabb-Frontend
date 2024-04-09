"use client";
import React, { useContext } from "react";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import RememberMe from "./RememberMe";
import { SignInContext } from "./SignInContext";
import GET_USER from "@/app/functions/GraphQl/queries/GetUser";
import setData from "@/app/functions/setData";
import { useRouter } from "next/navigation";


const SignIn = () => {
  const { email, password, rememberMe, setEmail, setPassword, setRememberMe } =
    useContext(SignInContext);
  const router = useRouter()

  const SignInAndValidation = () => {
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

        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <EmailInput />
      <PasswordInput />
      <RememberMe />
      <button
        onClick={SignInAndValidation}
        className="w-[40vw] h-[8vh] mt-[3%] text-2xl rounded-lg bg-[#6f2ba0] border-2 border-[#983ba0]"
      >
        Sign In
      </button>
    </>
  );
};

export default SignIn;
