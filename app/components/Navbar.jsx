import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleClicked = () => {
    setNav(!nav);
  };

return (
  <>
    <motion.div
      className="w-full flex items-center  md:flex py-4 px-[10vw] bg-[#131110] text-white  justify-between"
    >
      
        <Image src="./real-estate-logo.png" width={100} height={100} />
      

      <div className="hidden  lg:flex gap-[40px] items-center">
        <a href="#redidenci">Residencies</a>
        <a href="#OurValue">Our Value</a>
        <a href="#ContactUS">Contact Us</a>
        <a href={"links"}>Get Started</a>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 cursor-pointer rounded-[4px]"
        >
          Contact
        </motion.div>
      </div>
      <button className=" block lg:hidden " onClick={handleClicked}>
        <GiHamburgerMenu />
      </button>
    </motion.div>
    {nav ? (
      <div className=" flex flex-col lg:hidden gap-[20px] items-center  bg-[#131110] text-white">
        <a href="#redidenci">Residencies</a>
        <a href="#OurValue">Our Value</a>
        <a href="#ContactUS">Contact Us</a>
        <a href="#GetStart">Get Started</a>
        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-[4px]">
          Contact
        </button>
      </div>
    ) : (
      ""
    )}
  </>
);
};

export default Navbar;
