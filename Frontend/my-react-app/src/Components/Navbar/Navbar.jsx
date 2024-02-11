import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'



export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shoop</p>
        </div>
        <ul className="nav-menu">
            <li>Shop <hr></hr></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>

        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon}></img>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}
