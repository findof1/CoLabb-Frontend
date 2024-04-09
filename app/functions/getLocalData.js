"use server";
import { cookies } from 'next/headers'

export default async function getLocalData() {

     const userData = cookies().get("CoLabbData")
     return userData;
  
 }
