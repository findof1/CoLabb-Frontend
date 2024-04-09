"use server";
import { cookies } from 'next/headers'

export default async function setData(data, rememberMe) {
    if(rememberMe){
      cookies().set("CoLabbData", JSON.stringify(data))
    }else{
      cookies().set("CoLabbData", JSON.stringify(data), { maxAge: 11600 })
    }
 }