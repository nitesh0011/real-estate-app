import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Residencies = () => {
  return (
    <div className='w-full  px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem]'>
      <div className='top relative font-poppins font-bold'>
        <span className=' text-orange-400 text-[24px] '>Best Choices</span>
        <h1 className='text-[32px] text-[#1f3e72]'>Popular Residencies</h1>
        <div className='carasul-btn flex gap-4 absolute right-5 bottom-1'>
            <button  className='shadow-lg p-3'><IoIosArrowBack/></button>
            <button className='shadow-lg p-3'><IoIosArrowForward/></button>
        </div>
      </div>
      <div className='down'>
        <div className='card p-3 flex flex-col gap-2 '>
            <div className='image-box w-[15rem] h-[12rem]  rounded-xl object-cover overflow-hidden'>
                <img src='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'></img>
            </div>
            <span className='flex font-poppins font-bold'>
                <span className='text-orange-400'>$</span>
                <span className='text-gray-500'>47,043</span>
            </span>
            <span className='text-[#1f3e72] text-[25px] font-Poppins font-poppins font-bold'>Aliva Priva Jardin</span>
            <span className='text-[.7rem] w-[15rem] text-[#8c8b8b]'>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</span>

        </div>
      </div>
    </div>
  )
}

export default Residencies
