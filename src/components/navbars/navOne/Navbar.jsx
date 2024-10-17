import React from 'react'
import './navbar.css'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='main-nav'>
        <div className="container">
            <div className="menu-row">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                  <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/'}>Services</Link></li>
                    <li><Link to={'/'}>Schedule</Link></li>
                    <li><Link to={'/'}>Contact us</Link></li>
                  </ul>
                </div>
                <div className="menu-button">
                  <Link to={'/'}>Check Status</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
