
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
         <Carousul_card    name='Serene Haven Estates' image='https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80' />
         <Carousul_card    name='Ivywood Residences' image='https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80' />
         <Carousul_card   name='Harmony Heights' image='https://images.unsplash.com/photo-1557434440-27ba0f1654e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'/>
         <Carousul_card   name='Maple Ridge Retreats' image='https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80' />
         <Carousul_card   name='Ocean Breeze Manor' image='https://images.unsplash.com/photo-1521574873411-508db8dbe55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' />
         <Carousul_card   name='Sunset Pines Estates' image='https://images.unsplash.com/photo-1520608421741-68228b76b6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' />
         <Carousul_card   name='Serene Haven Estates' image='https://images.unsplash.com/photo-1552903023-dc7b4c9fa5bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' />
      </Carousel>

      </div>
    
  );
};

export default Residencies;
