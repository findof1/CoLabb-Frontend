import React from 'react'
import Navbar from '../components/Navbar'
import { SignInProvider } from '../components/SignIn/SignInContext'
import SignIn from '../components/SignIn/SignIn'

const page = () => {
  return (
    <>
      <Navbar/>
      <div className="w-[100vw] h-screen bg-[#1F1223] absolute top-0 left-0">
        <div className='w-[70vw] h-[80vh] bg-[#150B17] absolute top-[10vh] left-[15vw] rounded-[42px] drop-shadow-xl'>
          <div className='flex flex-col w-full items-center'>
              <h1 className='underline text-4xl mt-[5%]'>Sign In</h1>
              <SignInProvider>
                <SignIn />
              </SignInProvider>
          </div>
        </div>
      </div>
    </>
  )
}

export default page