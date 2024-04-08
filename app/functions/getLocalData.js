"use client";
export default function getLocalData() {
  if (typeof window !== 'undefined') {
     const userData = localStorage.getItem("CoLabbData");
     const userData2 = sessionStorage.getItem("CoLabbData");
     return userData || userData2;
  }
  return null;
 }
