
import React from "react";
import Carousul_card from "./Carsaul_card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Residencies = () => {
     
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="redidenci" className="w-full  px-[20px] py-[20px] xl:px-[10vw] xl:py-[3rem]">
      <div className="top relative font-poppins font-bold">
        <span className=" text-orange-400 text-[24px] ">Best Choices</span>
        <h1 className="text-[32px] text-[#1f3e72]">Popular Residencies</h1>
      </div>

      <Carousel  className='cursor-pointer ' responsive={responsive}  draggable={true}  removeArrowOnDeviceType={[ "mobile"]} showDots={true}  >
         <Carousul_card    name='Serene Haven Estates' image='https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
         <Carousul_card    name='Ivywood Residences' image='https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80'/>
         <Carousul_card   name='Harmony Heights' image='https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
         <Carousul_card   name='Maple Ridge Retreats' image='https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'/>
         <Carousul_card   name='Ocean Breeze Manor' image='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80'/>
         <Carousul_card   name='Sunset Pines Estates' image='https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'/>
         <Carousul_card   name='Serene Haven Estates' image='https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'/>
      </Carousel>

      </div>
    
  );
};

export default Residencies;
