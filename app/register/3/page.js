import React from 'react'
import Navbar from '../../components/Navbar'
import AddCompany from '@/app/components/AddCompany'

const page = () => {
  return (
    <>
      <Navbar/>
      <div className="w-[100vw] h-screen bg-[#1F1223] absolute top-0 left-0">
        <div className='w-[70vw] h-[80vh] bg-[#150B17] absolute top-[10vh] left-[15vw] rounded-[42px] drop-shadow-xl'>
          <div className='flex flex-col w-[60%] items-center h-[95%] ml-[20%]'>
              <h1 className='underline text-4xl mt-[5%]'>Enter Your Company's Code</h1>
              <AddCompany/>
          </div>
          <div className='flex flex-row relative top-99'>
            <div className='ml-[2%] w-[30%] h-3 rounded-xl bg-[#333733] border-[1px] border-[#1A1C1A]'/>
            <div className='ml-[2%] w-[30%] h-3 rounded-xl bg-[#333733] border-[1px] border-[#1A1C1A]'/>
            <div className='ml-[3%] w-[30%] h-3 rounded-xl bg-[#126616] border-[1px] border-[#143915]'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default page