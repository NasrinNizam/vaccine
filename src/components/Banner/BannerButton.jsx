import React from 'react'

export const BannerButton = ({title}) => {
  return (
    <button className='py-[16px] md:py-5 px-[15px] bg-transparent border-[2px] border-[#17C2EC] rounded-[20px] hover:bg-[#17C2EC] text-white text-[14px] md:text-[20px] lg:text-2xl '>{title} </button>
  )
}
