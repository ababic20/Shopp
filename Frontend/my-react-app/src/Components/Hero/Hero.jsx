import React from 'react'
import './Hero.css'
import hand_icon from '../Images/hand_icon.png'
import arrow_icon from '../Images/arrow.png'
import hero_image from '../Images/hero_image.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Moderna izdanja</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Nove</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Kolekcije</p>
                <p>Za sve</p>
            </div>
            <div className="hero-latest-btn">
                <div>Najnovije izdanje</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    <div className="hero-right">
        <img src={hero_image} alt="" />
    </div>
    </div>
        )
}

