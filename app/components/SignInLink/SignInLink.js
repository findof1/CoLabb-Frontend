import React from "react";
import getLocalData from "../../functions/getLocalData";
import Content from "./Content";

const SignInLink = () => {
  const userData = getLocalData()

  return (
    <Content userData={userData}/>
  );
};

export default SignInLink;
