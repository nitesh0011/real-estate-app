import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full bg-[#131110] text-white flex lg:flex-row flex-col-reverse justify-between items-center px-[20px] py-[20px] xl:px-[15vw] xl:py-[3rem] ">
      <div className="left flex flex-col gap-[50px]">
        <motion.h1 
        initial={{ y: 30 }} animate={{ y: 0 }} transition={{duration: 2 }}
        className=" relative  text-[3.8rem] leading-[4rem] mt-[30px] lg:mt-0 font-poppins font-semibold">
          <span className="relative">
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}} 
            className="absolute  h-16 w-16 right-[-32px] top-[-10px] bg-[#fb923c] rounded-full z-10"></motion.p>
            <span className="relative z-20">
              Discover
            </span>
          </span>
          <br />
          <span >
            Most Suitable
          </span>
          <br />
          <span >
            Property
          </span>
        </motion.h1>

        <div className="para flex flex-col font-sans text-[#8c8b8b] ">
          <span>Find a variety of properties that suit you very easilty</span>
          <span>Forget all difficulties in finding a residence for you</span>
        </div>

        <div className="search_bar flex items-center justify-between w-full md:flex md:flex-wrap md:items-center md:justify-between px-[10px] py-[10px] bg-white rounded-lg">
          <FaLocationDot className="text-blue-700 text-[20px]" />
          <input
            type="text"
            placeholder="enter your location"
            className="focus:outline-none text-black focus:border-transparent w-[120px] md:w-2/3 "
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white cursor-pointer px-6 py-2 rounded-[4px] mt-2 md:mt-0 md:ml-2"
          >
            Search
          </motion.div>
        </div>

        <div className="stats flex flex-col md:flex-row  justify-between w-full">
          <div className="flex flex-col items-center w-full">
            <span className="flex  justify-center w-full gap-[10px]">
              <span className="text-[2rem] font-sans font-normal">
                <CountUp start={8000} end={9000} duration={3} />
              </span>
              <span className="text-[2rem] font-sans text-orange-400">+</span>
            </span>
            <span className="font-sans text-[#8c8b8b]">Premium Product</span>
          </div>

          <div className="flex flex-col items-center w-full">
            <span className="flex  justify-center w-full gap-[10px]">
              <span className="text-[2rem] font-sans  font-normal">
                <CountUp start={1000} end={2000} duration={3} />
              </span>
              <span className="text-[2rem] font-sans text-orange-400">+</span>
            </span>
            <span className="font-sans text-[#8c8b8b]">Happy Customer</span>
          </div>

          <div className="flex flex-col items-center w-full ">
            <span className="flex  justify-center w-full gap-[10px]">
              <span className="text-[2rem] font-sans font-normal ">
                <CountUp start={0} end={28} duration={3} />
              </span>
              <span className="text-[2rem] font-sans text-orange-400">+</span>
            </span>
            <span className="font-sans text-[#8c8b8b]">Awards Winning</span>
          </div>
        </div>
      </div>

      <motion.div 
      initial={{x:40}}
      animate={{x:0}}
      transition={{duration:1.5}}
      className="right h-[15rem] w-[13rem]   lg:h-[35rem] lg:w-[30rem] bg-slate-400 rounded-t-full overflow-hidden border-[5px] border-[#565555] ">
        <Image
        alt="image"
          src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width={300}
          height={200}
          className="h-full w-full object-cover "
        />
      </motion.div>
    </div>
  );
};

export default Hero;
