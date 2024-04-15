import React from "react";
import Navbar from "../../components/Navbar";
import { IoMdCheckmark } from "react-icons/io";
import { LuArrowLeft } from "react-icons/lu";
import Button from "@/app/components/Button";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-screen bg-[#1F1223] absolute top-0 left-0">
        <div className="w-[70vw] h-[80vh] bg-[#150B17] absolute top-[10vh] left-[15vw] rounded-[42px] drop-shadow-xl">
          <div className="flex flex-col w-[60%] items-center h-[95%] ml-[20%]">
            <h1 className="underline text-4xl mt-[5%]">
              Choose Your Company's Plan
            </h1>
            <div className="w-[70vw] h-full left-0">
              <div className="w-full flex flex-row items-center justify-center mt-[10vh] h-[50vh]">
                <div className="w-[17vw] h-[45vh] rounded-xl mr-[2vw] bg-[#3C2343] flex flex-col items-center">
                  <h1 className="mt-[5%] text-xl">Basic</h1>
                  <div className="flex flex-row items-baseline mt-[10%]">
                    <h1 className="text-5xl font-medium">$40</h1>
                    <p className="text-[#786A8F] font-medium">/month</p>
                  </div>
                  <div className="flex flex-col font-medium mt-[2%] text-sm gap-2">
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">Up to 10 employees</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">Video Calling</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">Employee Assignments</p>
                    </div>
                  </div>
                  <Button
                    style="none"
                    route="/register/5?plan=basic"
                    extraStyles="bg-[#A257A8] mt-auto mb-[5%] w-[90%] rounded-md p-1"
                  >
                    Buy now
                  </Button>
                </div>
                <div className="w-[22vw] h-[55vh] rounded-xl bg-[#A257A8] flex flex-col items-center">
                  <h1 className="text-black mt-[5%] font-semibold text-2xl">
                    Standard
                  </h1>
                  <div className="flex flex-row items-baseline mt-[10%]">
                    <h1 className="text-6xl font-semibold text-black">$80</h1>
                    <p className="text-[#4B4B4B] font-semibold">/month</p>
                  </div>
                  <div className="flex flex-col text-black font-semibold mt-[5%] text-xl gap-4">
                    <div className="flex flex-row items-center">
                      <LuArrowLeft className="text-[#3E0E4C]" />
                      <p className="ml-3">Everything In Basic</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#5C1A70]" />
                      <p className="ml-3">Up to 25 employees</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#5C1A70]" />
                      <p className="ml-3">Screen Sharing</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#5C1A70]" />
                      <p className="ml-3">Analytics Charts</p>
                    </div>
                  </div>
                  <Button
                    style="none"
                    route="/register/5?plan=standard"
                    extraStyles="bg-[#5B3766] mt-auto mb-[5%] w-[80%] rounded-md p-2"
                  >
                    Buy now
                  </Button>
                </div>
                <div className="w-[17vw] h-[45vh] rounded-xl ml-[2vw] bg-[#3C2343] flex flex-col items-center">
                  <h1 className="mt-[5%] text-xl">Premium</h1>
                  <div className="flex flex-row items-baseline mt-[10%]">
                    <h1 className="text-5xl font-medium">$120</h1>
                    <p className="text-[#786A8F] font-medium">/month</p>
                  </div>
                  <div className="flex flex-col font-medium mt-[2%] text-xs gap-4 ml-[8%]">
                    <div className="flex flex-row items-center">
                      <LuArrowLeft className="text-[#B344D7]" />
                      <p className="ml-3">Everything In Standard</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">Unlimited employees</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">Interactive Whiteboards</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">File uploading and sharing</p>
                    </div>
                    <div className="flex flex-row items-center">
                      <IoMdCheckmark className="text-[#BF9ACB]" />
                      <p className="ml-3">Realtime Interactive Diagrams</p>
                    </div>
                  </div>
                  <Button
                    style="none"
                    route="/register/5?plan=premuim"
                    extraStyles="bg-[#A257A8] mt-auto mb-[5%] w-[90%] rounded-md p-1"
                  >
                    Buy now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row relative top-99">
            <div className="ml-[2%] w-[30%] h-3 rounded-xl bg-[#333733] border-[1px] border-[#1A1C1A]" />
            <div className="ml-[2%] w-[30%] h-3 rounded-xl bg-[#333733] border-[1px] border-[#1A1C1A]" />
            <div className="ml-[3%] w-[30%] h-3 rounded-xl bg-[#126616] border-[1px] border-[#143915]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
