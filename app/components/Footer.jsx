import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className=" px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex gap-[20px] md:gap-0 justify-around md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex flex-col gap-3  flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src="/logo2.png" width={150} height={150} alt="logo"/>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Our vision is to make all people the best place to live for them.
            </p>
          </div>
          <div class=" text-center md:text-left lg:w-2/4 md:w-2/3 w-full px-4">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav class=" flex flex-col gap-[20px] md:flex-row md:gap-4 md:flex list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
