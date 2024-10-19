import React from 'react'
import './banner.css'
import { BannerButton } from './BannerButton'
import { FaRegClock } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { SchedulePart } from './SchedulePart';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoShieldOutline } from "react-icons/io5";

export const Banner = () => {
  return (
    <section className='banner'>
      <div className="container">
      <div className="vaccination">
        <div className="main">
          <h2>Get Vaccinated. Boost your Immune System</h2>
          <h1>COVID-19 Vaccination Got Easier With, <span className='text-[#17C2EC]'>Vaccination.ng</span></h1>
          <p>Vaccination.ng will help you find the nearest
          centre for vaccination, in all 36 states in Nigeria.</p>
          <div className="buttons">
            <BannerButton title='Get Vaccine' />
            <BannerButton title='Help Centre' />
          </div>
        </div>
        <div className="image-part">
          <div className="main-image">
            <img className='w-full h-full' src="/images/vaccine.png" alt="vaccine" />
          </div>
          <img className='img1' src="/images/Group17.png" alt="img" />
          <img className='img2' src="/images/Group18.png" alt="img" />
          <div className="specialist">
            <div className="flex w-[108px] md:w-[167px] h-[38px] md:h-[60px] md:mr-5 mr-[10px] ">
              <img className='w-[39px] md:w-[60px] ' src="/images/Rectangle9.png" alt="img" />
              <img className='w-[39px] md:w-[60px] ' src="/images/Rectangle10.png" alt="img" />
              <img className='w-[39px] md:w-[60px] ' src="/images/Rectangle11.png" alt="img" />
            </div>
            <div className="numbers w-[78px] md:w-[134px]">
              <h2 className="number">20+ <span className='text-[#17C2EC] '>Specialists</span></h2>
            </div>
          </div>
        </div>
        </div>
        <div className="schedule">
          <h2><FaRegClock className='icon' /> Schedule your Vaccination</h2>
          <div className="form">
            <SchedulePart icon={ <LuMapPin className='text-[#17C2EC]' />} title='Location' detail='Ikeja Lagos, Nigeria' />
            <SchedulePart icon={ <MdOutlineCalendarMonth className='text-[#17C2EC]' />} title='Date' detail='29 February, 2022' />
            <SchedulePart icon={ <IoShieldOutline className='text-[#17C2EC]' />} title='Vaccine Type' detail='Mordena' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  )
}
