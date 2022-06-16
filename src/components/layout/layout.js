import React from 'react'
import NavBar from './navBar'

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout