import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../Images/logo.png';
import cart_icon from '../Images/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import arrow2 from '../Images/arrow2.png'

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems }= useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
    
  }
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Bostan</p>
      </div>
      <img className='dropdown'onClick={dropdown_toggle} src={arrow2} alt="" />
      <ul className="nav-menu" ref={menuRef}>
        <li onClick={() => { setMenu("shop") }}><Link to="/" style={{textDecoration:'none'}}>Naslovna</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link to="/mens" style={{textDecoration:'none'}}>Muškarci</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link to="/womens" style={{textDecoration:'none'}}>Žene</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link to="/kids" style={{textDecoration:'none'}}>Djeca</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>
        Odjavi se</button>:<Link to='/login'><button>Prijava</button></Link>}
        
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
