import React from 'react'
import { Outlet } from 'react-router-dom'

import { Nav } from '../Components'

const RootLayout = () => {
  return ( 
    <div>
        <Nav/>
        <Outlet />
    </div>
  )
}

export default RootLayout