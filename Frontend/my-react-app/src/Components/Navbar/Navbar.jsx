import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems }= useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Bostan</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to="/" style={{textDecoration:'none'}}>Naslovna</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to="/mens" style={{textDecoration:'none'}}>Muškarci</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to="/womens" style={{textDecoration:'none'}}>Žene</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to="/kids" style={{textDecoration:'none'}}>Djeca</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Prijava</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
