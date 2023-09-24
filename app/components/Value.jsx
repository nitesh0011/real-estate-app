import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import {ImCross} from "react-icons/im"
import {BsFileBarGraphFill} from "react-icons/bs"
import Image from "next/image";
const Value = () => {
  return (
    <div id="OurValue" className="flex flex-col items-center gap-5 md:justify-between lg:flex-row px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem] ">
      <div className="left">
        <div className="right h-[15rem] w-[13rem]   lg:h-[35rem] lg:w-[30rem] bg-slate-400 rounded-t-full overflow-hidden border-[5px] border-[#565555] ">
          <Image
          alt="image"
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width={300}
            height={200}
            className="h-full w-full object-cover "
          />
        </div>
      </div>
      <div className="right w-full lg:w-2/4 flex flex-col justify-between">
        <div className="top_box flex flex-col justify-between">
          <span className=" text-orange-400 text-[24px] font-bold font-poppins ">
            Our Value
          </span>
          <h1 className="text-[32px] text-[#1f3e72] font-bold font-poppins">
            Value We Give to You
          </h1>
          <span className=" w-full lg:w-[30rem]">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
        </div>

        <details open={true} className="shadow-md p-[20px] rounded-lg">
          <summary className="flex justify-between ">
            <div className="p-[10px] rounded-md md:bg-blue-100  text-blue-600">
              <BsShieldFillCheck />
            </div>
            <h1 className=" text-sm md:text-[17.6px] text-[#1f3e72] font-bold font-poppins">
              Best interest rates on the market
            </h1>
            <div className="p-[10px] rounded-md  md:bg-blue-100  text-blue-600">
              <IoMdArrowDropdown />
            </div>
          </summary>
          <p className="pt-[30px]">
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim.
          </p>
        </details>

        <details className="shadow-md p-[20px] rounded-md">
          <summary className="flex justify-between ">
            <div className="p-[10px] rounded-md md:bg-blue-100  text-blue-600">
              <ImCross />
            </div>
            <h1 className="text-sm md:text-[17.6px] text-[#1f3e72] font-bold font-poppins">
              Best interest rates on the market
            </h1>
            <div className="p-[10px] rounded-md  md:bg-blue-100  text-blue-600">
              <IoMdArrowDropdown />
            </div>
          </summary>
          <p className="pt-[30px]">
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim.
          </p>
        </details>

        <details className="shadow-md p-[20px] rounded-md">
          <summary className="flex justify-between ">
            <div className="p-[10px] rounded-md md:bg-blue-100  text-blue-600">
              <BsFileBarGraphFill />
            </div>
            <h1 className="text-sm md:text-[17.6px] text-[#1f3e72] font-bold font-poppins">
              Best interest rates on the market
            </h1>
            <div className="p-[10px] rounded-md  md:bg-blue-100  text-blue-600">
              <IoMdArrowDropdown />
            </div>
          </summary>
          <p className="pt-[30px]">
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Value;
