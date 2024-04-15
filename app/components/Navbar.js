"use client"
import SignInLink from "./SignInLink/SignInLink";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-[95vw] top-[2vh] left-[3vw] flex flex-row fixed z-10">
      <Link href='/' className="text-[24px] font-bold tracking-[-1px]">CoLabb</Link>
      <SignInLink />
    </div>
  );
};

export default Navbar;
