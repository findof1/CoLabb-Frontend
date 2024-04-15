"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Content = ({userData}) => {
  const [data, setData] = useState(null);
 
  useEffect(() => {
     userData.then((user)=>{
      setData(user)
     })
  }, [userData]);
 
  return (
    <div className="ml-auto mr-5 mt-1">
      {data ? (
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
  )
}

export default Content