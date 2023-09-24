import React from "react";
import { motion } from "framer-motion";
const Carousul_card = ({image,name}) => {
  return (
    <motion.div 
    className="card p-3 flex items-center flex-col gap-3 ">
      <div className="image-box w-[15rem] h-[15rem]  rounded-xl object-cover overflow-hidden">
        <img src={image}></img>
      </div>
      <span className="flex font-poppins font-bold">
        <span className="text-orange-400">$</span>
        <span className="text-gray-500">47,043</span>
      </span>
      <span className="text-[#1f3e72]  text-[25px] font-Poppins font-poppins font-bold">
        {name}
      </span>
      <span className="text-[.7rem] w-[15rem] text-[#8c8b8b]">
        Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI
        Jakarta
      </span>
    </motion.div>
  );
};

export default Carousul_card;
