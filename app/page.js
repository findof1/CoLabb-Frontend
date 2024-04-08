import SignIn from "./components/SignIn";
import Image from "next/image";
import { PiHandshakeFill } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { IoStopwatch } from "react-icons/io5";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { LuArrowLeft } from "react-icons/lu";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="w-[95vw] top-[2vh] left-[3vw] flex flex-row fixed z-10">
        <p className="text-[24px] font-bold tracking-[-1px]">CoLabb</p>
        <SignIn></SignIn>
      </div>
      <div className="w-[99vw] h-screen bg-[#1F1223] absolute top-0 left-0">
        <div className="absolute sm:right-0 md:right-0 lg:right-0 w-full sm:w-[70%] md:w-[70%] lg:w-[70%] h-full overflow-hidden">
          <Image
            src="/images/man.png"
            layout="fill"
            objectFit="cover"
            objectPosition="10 0"
          />
        </div>

        <h1 className="absolute left-[6vw] top-[20vh] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Effortless Collaboration for Your
        </h1>
        <h1 className="absolute left-[6vw] top-[28vh] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Team's Projects and Task's
        </h1>
        <p className="absolute left-[6vw] top-[38vh]">
          Empower Your Team's Creativity and Efficiency with
        </p>
        <p className="absolute left-[6vw] top-[42vh]">
          Our Collaborative Workspace Solution
        </p>
        <Button
          style="none"
          route="/register"
          extraStyles="absolute left-[6vw] top-[62vh] w-[14vw] h-[7vh] bg-[#A257A8] text-xl font-bold rounded-[10px]"
        >
          Get Started
        </Button>
        <Button
          style="none"
          extraStyles="absolute left-[22vw] top-[62vh] w-[14vw] h-[7vh] text-[#BD6DC4] text-xl font-bold rounded-[10px]"
        >
          Learn More
        </Button>
      </div>
      <div className="w-[99vw] h-screen bg-[#1F1223] absolute top-[100vh] left-0">
        <p className="relative top-[15vh] left-[5vw] w-[40vw] text-4xl font-extrabold">
          Effortless collaboration for your team's projects and tasks
        </p>
        <p className="relative top-[4.5vh] left-[55vw] w-[40vw] text-xl">
          With our innovative solution, you can maximize your employees
          productivity and you get access to a ton of different services all in
          one place. We have a lot of premium features that are accesible to
          companies of all sizes.
        </p>
        <div className="grid grid-cols-4 gap-5 grid-rows-2 relative top-[10.5vh] left-[5vw] w-[89vw] h-[50vh]">
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 4H6C4.89543 4 4 4.89543 4 6V13M20 15V18C20 19.1046 19.1046 20 18 20H11M4 13V18C4 19.1046 4.89543 20 6 20H11M4 13H11V20M20 4L13.5 10.5M20 4H16M20 4V8"
                  stroke="#A257A8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Scalable
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                Our services are avaliable, and work seamlessly with companies
                of all sizes.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M21 3L14 9L10 5L3 11M4.5 21C3.67157 21 3 20.3284 3 19.5V17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5V19.5C6 20.3284 5.32843 21 4.5 21ZM11.5 21C10.6716 21 10 20.3284 10 19.5V14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5V19.5C13 20.3284 12.3284 21 11.5 21ZM18.5 21C17.6716 21 17 20.3284 17 19.5V16.5C17 15.6716 17.6716 15 18.5 15C19.3284 15 20 15.6716 20 16.5V19.5C20 20.3284 19.3284 21 18.5 21Z"
                    stroke="#A257A8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Analytics and Insights
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                See how well your employees work and how long they work for.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <FaChartPie className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]" />
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Chart Visualization
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                View company data, or employee statistics in our
                easy-to-understand charts.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <PiHandshakeFill className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]" />
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Enhanced Collaboration
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                Seamless collaboration among team members, regardless of their
                location.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <IoStopwatch className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]" />
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Real-time Updates
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                Keep everyone in the loop with real-time updates with any
                announcements.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <FaPersonArrowUpFromLine className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]" />
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                User-friendly Interface
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                We offer an intuitive and user-friendly interface that is easy
                to navigate.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <FaTasks className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]" />
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Managing Tasks
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                Assign tasks to your employees with due dates and view their
                progress.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-row">
            <div className="self-center w-[60%] h-[55%] rounded-md bg-[#3C2343] flex">
              <MdWorkspacePremium className="w-[60%] h-auto text-[#A257A8] self-center justify-self-center ml-[20%]" />
            </div>
            <div>
              <h1 className="text-xl text-[#A257A8] font-medium w-full mt-10 ml-4">
                Flexible Workspace
              </h1>
              <p className="text-sm ml-4 w-[80%]">
                Adapt to work preferences with customizable layouts and
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[99vw] h-screen bg-[#1F1223] absolute top-[200vh] left-0">
        <div className="w-full flex flex-row justify-center mt-[10vh]">
          <h1 className="text-5xl self-center text-[#C9C9C9]">Pricing</h1>
        </div>
        <div className="w-full flex flex-row items-center justify-center mt-[10vh] h-[70vh]">
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
              route="/register?plan=basic"
              extraStyles="bg-[#A257A8] mt-auto mb-[5%] w-[90%] rounded-md p-1"
            >
              Buy now
            </Button>
          </div>
          <div className="w-[22vw] h-[65vh] rounded-xl bg-[#A257A8] flex flex-col items-center">
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
              route="/register?plan=standard"
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
              route="/register?plan=premuim"
              extraStyles="bg-[#A257A8] mt-auto mb-[5%] w-[90%] rounded-md p-1"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
