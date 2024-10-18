import React, { useState } from 'react'
import logo from '../../../assets/logo.png'
import './resNav.css'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from 'react-router-dom';
export const ResNav = () => {
  // ===== react states =====
  const [show , setShow] = useState(false)
  return (
    <nav className='res-menu'>
      <div className="container ">
        <div className="main-menu">
        <div className="resMenuLogo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-bar">
          <HiOutlineMenuAlt3 onClick={()=>setShow(!show)} className='icon' />
        </div>
        {
          show&&
          <div className="side-bar">
          <MdCancelPresentation onClick={()=>setShow(!show)} className='cancel' />
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/'}>Services</Link></li>
            <li><Link to={'/'}>Schedule</Link></li>
            <li><Link to={'/'}>Contact us</Link></li>
          </ul>
        </div>
        }
        </div>
      </div>
    </nav>
  )
}
