import React from 'react'
import './Hero.css'
import hand_icon from '../Images/hand_icon.png'
import arrow_icon from '../Images/arrow.png'
import hero_image from '../Images/hero_image.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New arrivals only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Colletion</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    <div className="hero-right">
        <img src={hero_image} alt="" />
    </div>
    </div>
        )
}

