import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Primite jedinstvene ponude na Vaš mail</h1>
        <p>Pretplatite se na naš newsletter i ostanite informirani</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Pretplati se</button>
        </div>
    </div>
  )
}
