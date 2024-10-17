import React from 'react'
import { Navbar } from '../components/navbars/navOne/Navbar'
import { ResNav } from '../components/navbars/navTwo/ResNav'
import { Outlet } from 'react-router-dom'

export const LayoutOne = () => {
  return (
    <div>
      <Navbar />
      <ResNav />
      <Outlet />
    </div>
  )
}
