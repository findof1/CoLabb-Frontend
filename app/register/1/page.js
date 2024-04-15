import React from 'react'
import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <Navbar/>
      <div className="w-[100vw] h-screen bg-[#1F1223] absolute top-0 left-0">
        <div className='w-[70vw] h-[80vh] bg-[#150B17] absolute top-[10vh] left-[15vw] rounded-[42px] drop-shadow-xl'>
          <div className='flex flex-col w-[60%] items-center h-[95%] ml-[20%]'>
              <h1 className='underline text-4xl mt-[5%]'>Select Your Company role</h1>
              <div className='flex flex-row w-full mt-[20%] items-center justify-between'>
                <Button route='/register/2?type=manager' style='none' extraStyles='rounded-lg bg-[#82287F] border-4 border-[#DD39A5] text-white text-2xl p-3 pl-16 pr-16 hover:bg-[#82288F] hover:border-[#DD39AF] hover:scale-105'>Manager</Button>
                <Button route='/register/2?type=employee' style='none' extraStyles='rounded-lg bg-[#572BA0] border-4 border-[#7023F3] text-white text-2xl p-3 pl-16 pr-16 hover:bg-[#572BA0] hover:border-[#7023F3] hover:scale-105'>Employee</Button>
              </div>
              <p className='text-xs text-[#C9C9C9] mt-auto mb-3'>Already Have An Account? <Link href='/signIn' className='underline'>Sign In</Link></p>
          </div>
          <div className='flex flex-row relative top-99'>
            <div className='ml-[3%] w-[30%] h-3 rounded-xl bg-[#126616] border-[1px] border-[#143915]'/>
            <div className='ml-[2%] w-[30%] h-3 rounded-xl bg-[#333733] border-[1px] border-[#1A1C1A]'/>
            <div className='ml-[2%] w-[30%] h-3 rounded-xl bg-[#333733] border-[1px] border-[#1A1C1A]'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default page