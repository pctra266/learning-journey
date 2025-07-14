import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header></Header>
    <div className='bg-neutral-200'>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Layout