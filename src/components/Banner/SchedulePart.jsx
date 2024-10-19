import React from 'react'
import { LuMapPin } from "react-icons/lu";


export const SchedulePart = ({icon , title ,detail}) => {
  return (
    <>
    <div className="flex items-center gap-[10px] md:gap-5 ">
    <div className="p-1 bg-[#C4C4C4] bg-opacity-10 rounded-lg w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex justify-center items-center text-lg md:text-2xl">{icon}</div>
    <div className="two">
      <h3 className='text-[14px] md:text-[20px] text-[#ffffff] opacity-50 font-Montserrat font-semibold'>{title} </h3>
      <h4 className='text-[14px] md:text-[20px] lg:text-2xl text-[#ffffff] font-Montserrat font-bold'>{detail} </h4>
    </div>
  </div>
  </>
  )
}
