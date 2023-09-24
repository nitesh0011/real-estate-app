import React from "react";
import { motion } from "framer-motion";

const Getstarted = () => {
  return (
    <div id="GetStart" className="   px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem]">
          <div className="md:h-60 bg-gradient-to-r flex flex-col items-center gap-[20px] md:gap-0 md:justify-evenly text-center from-blue-600 to-blue-700 text-white px-6 py-6 rounded-xl mt-2 md:mt-0 md:ml-2">
          <h1 className="text-[32px] font-poppins font-semibold">Get started with Homyz</h1>
          <span className="md:w-2/6 text-gray-300">Subscribe and find super attractive price quotes from us.
                Find your residence soon</span>
          <motion.div whileHover={{ scale: 1.1 }} className="bg-gradient-to-r from-blue-400 to-blue-600 text-white border-2 w-2/7 px-6 py-2 cursor-pointer rounded-lg mt-2 md:mt-0 md:ml-2">
            Get Started
          </motion.div>
          </div>
    </div>
  );
};

export default Getstarted;
