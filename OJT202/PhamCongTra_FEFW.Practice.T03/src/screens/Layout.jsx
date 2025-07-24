import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default Layout