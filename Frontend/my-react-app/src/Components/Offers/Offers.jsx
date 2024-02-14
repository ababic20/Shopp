import React from 'react'
import './Offers.css'
import exclusive_image from '../Images/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Vrhunske</h1>
            <h1>Ponude za Vas</h1>
            <p>Samo od najbolje kvalitete</p>
            <button>Provjeri odma</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
