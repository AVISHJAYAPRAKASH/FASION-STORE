import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
            <h1 align='center' color='red'>WELCOME TO HOMEPAGE</h1>
            <nav>
                <li>
                  <Link to="/signup">SIGN_UP</Link>

                </li>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
            </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Home


