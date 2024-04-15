"use client"
import React from "react";
import Navbar from "../../components/Navbar";
import Button from "@/app/components/Button";
import { useSearchParams } from "next/navigation";


const page = () => {
  const search = useSearchParams()
  return (
    <>
      <Navbar />
      <div className="absolute top-[50%] left-[50%]">placeholder for plan payment page</div>
      <Button extraStyles="absolute top-[60%] left-[50%]" route={`/register/6?plan=${search.get("plan")}`}>Next Page</Button>
    </>
  );
};

export default page;
