import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav-bar'>
        <div className="logo">
            <img src="https://picsum.photos/40/40" alt="logo" />
        </div>
        <div className="menu">
            <ul>

               <li><NavLink to="" className="">Home</NavLink></li>
               <li><NavLink to="/contact" className="">Contact</NavLink></li>
               <li><NavLink to="/apicall" className="">CallApi</NavLink></li>
            </ul>

        </div>
        <div className="login">
            <Link>Login</Link>
            <Link>Register</Link>
        </div>
    </div>
  )
}

export default Header