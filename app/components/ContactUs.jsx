import React from 'react'
import {IoIosCall} from "react-icons/io"
import {BsChatDotsFill} from "react-icons/bs"
import {BsPersonVideo} from "react-icons/bs"
import {BiSolidMessageSquareDetail} from "react-icons/bi"
import Image from 'next/image'
const ContactUs = () => {
  return (
    <div id="ContactUS" className=' flex  flex-col-reverse gap-5 items-center lg:flex-row justify-between px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem]'>
      <div className='left flex flex-col gap-10'>
      <div className="top_box flex flex-col gap-3 justify-between">
          <span className=" text-orange-400 text-[24px] font-bold font-poppins ">
          Our Contact Us
          </span>
          <h1 className="text-[32px] text-[#1f3e72] font-bold font-poppins">
          Easy to contact us
          </h1>
          <span className=" w-full lg:w-[35rem] text-gray-400 font-sans">
          We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better
          </span>
        </div>
        <div className='bottom_box grid grid-cols-1 lg:grid-cols-2 gap-4 '>
              <div className='flex flex-col gap-5 p-5 border'>
                <div className='flex items-center gap-8'>
                 <IoIosCall className='text-[50px] p-3  bg-blue-100 text-blue-600 rounded-md'/>
                  <span className='flex flex-col'>
                  <span className='text-[#1f3e72] font-semibold font-poppins'>Call</span>
                  <span className='text-gray-500'>021 123 145 14</span>
                  </span>
                </div>
                <button className=' text-blue-600  bg-blue-100 py-2 rounded-md font-semibold font-poppins'>Call now</button>
              </div>
              
              <div className='flex flex-col gap-5 p-5 border'>
                <div className='flex items-center gap-8'>
                 <BsChatDotsFill className='text-[50px] p-3  bg-blue-100 text-blue-600 rounded-md'/>
                  <span className='flex flex-col'>
                  <span className='text-[#1f3e72] font-semibold font-poppins'>Chat</span>
                  <span className='text-gray-500'>021 123 145 14</span>
                  </span>
                </div>
                <button className=' text-blue-600  bg-blue-100 py-2 rounded-md font-semibold font-poppins'>Call now</button>
              </div>

              <div className='flex flex-col gap-5 p-5 border'>
                <div className='flex items-center gap-8'>
                 <BsPersonVideo className='text-[50px] p-3  bg-blue-100 text-blue-600 rounded-md'/>
                  <span className='flex flex-col'>
                  <span className='text-[#1f3e72] font-semibold font-poppins'>Vidio Call</span>
                  <span className='text-gray-500'>021 123 145 14</span>
                  </span>
                </div>
                <button className=' text-blue-600  bg-blue-100 py-2 rounded-md font-semibold font-poppins'>Call now</button>
              </div>

              <div className='flex flex-col gap-5 p-5 border'>
                <div className='flex items-center gap-8'>
                 <BiSolidMessageSquareDetail className='text-[50px] p-3  bg-blue-100 text-blue-600 rounded-md'/>
                  <span className='flex flex-col'>
                  <span className='text-[#1f3e72] font-semibold font-poppins'>Message</span>
                  <span className='text-gray-500'>021 123 145 14</span>
                  </span>
                </div>
                <button className=' text-blue-600  bg-blue-100 py-2 rounded-md font-semibold font-poppins'>Call now</button>
              </div>
              
        </div>
      </div>
      <div className="right h-[15rem] w-[13rem]   lg:h-[35rem] lg:w-[30rem] bg-slate-400 rounded-t-full overflow-hidden border-[5px] border-[#565555] ">
          <Image
          alt='image'
          src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            width={500}
            height={200}
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    
  )
}

export default ContactUs
