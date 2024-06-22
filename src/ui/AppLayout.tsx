import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import UpcomingEvent from '../components/UpcomingEvent'
import Brand from '../components/Brand'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet/>
    <Footer />
    </>
  )
}

export default AppLayout