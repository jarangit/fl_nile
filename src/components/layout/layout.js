import React from 'react'
import NavBar from './navBar'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Layout