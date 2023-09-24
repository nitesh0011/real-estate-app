import React from "react";
import Image from "next/image";
const Company_img = () => {
  return (
    <div>
      <div className=" flex flex-col items-center md:flex-row justify-between px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem]  ">
      <Image src='./prologis.png' width={112} height={96} alt="camapany_card"/>
      <Image src='./tower.png' width={122} height={106} alt="camapany_card"/>
      <Image src='./realty.png' width={142} height={96} alt="camapany_card"/>
      <Image src='./equinix.png' width={142} height={96} alt="camapany_card"/>
        
      </div>
    </div>
  );
};

export default Company_img;
