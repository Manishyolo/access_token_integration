import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
        <div>
            navbar
        </div>
        <Outlet/>
    </>

  )
}

export default MainLayout