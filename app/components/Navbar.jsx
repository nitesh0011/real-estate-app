import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="w-screen flex items-center  md:flex py-4 px-[10vw] bg-[#131110] text-white  justify-between">
      <Link href={"logo"}>
        <Image src="/real-estate-logo.png" width={100} height={100} />
      </Link>

      <div className="hidden  md:flex gap-[40px] items-center">
        <Link href={"links"}>Residencies</Link>
        <Link href={"links"}>Our Value</Link>
        <Link href={"links"}>Contact Us</Link>
        <Link href={"links"}>Get Started</Link>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-[4px]">
          Contact
        </button>
      </div>
      <div className=" block md:hidden ">
      <GiHamburgerMenu/>
      </div>
    </div>
  );
};

export default Navbar;
