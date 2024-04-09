"use client";
import React from "react";
import getLocalData from "../functions/getLocalData";
import Link from 'next/link'

const SignInLink = () => {
  const userData = getLocalData();
  return (
    <div className="ml-auto mr-5 mt-1">
      {userData ? (
        <Link
          href="/dashboard"
          className="text-[20px] font-bold tracking-[-1px]"
        >
          Dashboard
        </Link>
      ) : (
        <Link
          href="/signIn"
          className="text-[20px] font-bold tracking-[-1px]"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default SignInLink;
