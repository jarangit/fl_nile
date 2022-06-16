import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">
          page1
        </Link>
      </li>
      <li>
        <Link to="/page2">
          page2
        </Link>
      </li>
      <li>
        <Link to="/page3">
          page3
        </Link>
      </li>
    </ul>
  )
}

export default NavBar