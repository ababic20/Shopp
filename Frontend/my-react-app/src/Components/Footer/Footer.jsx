import React from 'react'
import './Footer.css'
import logo from '../Images/logo_big.png'
import instagram from '../Images/instagram_icon.png'
import pintester from '../Images/pintester_icon.png'
import whatsapp from '../Images/whatsapp_icon.png'


export const Footer = () => {
    return (
      <div className='footer'>
        <div className='footer-logo'>
          <img src={logo} alt="" />
          <p>Bostan</p>
        </div>
        <ul className='footer-links'>
          <li>Tvrtka</li>
          <li>Proizvodi</li>
          <li>Uredi</li>
          <li>O nama</li>
          <li>Kontakt</li>
        </ul>
        <div className="footer-social-icon">
          <div className='footer-icons-container'>
            <img src={instagram} alt="" />
          </div>
          <div className='footer-icons-container'>
            <img src={pintester} alt="" />
          </div>
          <div className='footer-icons-container'>
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className='footer-copyright'>
          <hr/>
          <p>Copyright @ 2024 - All rights reserved</p>
        </div>
      </div>
    );
  };
  