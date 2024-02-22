import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Registriraj se</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Vaše ime'/>
            <input type="email" placeholder='Email adresa' />
            <input type="password" placeholder='Lozinka' />
          </div>
          <button>Nastavi</button>
          <p className='loginsignup-login'>Već imate račun? <span>Prijavi se ovdje!</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Prijavom prihvaćam uvjete korištenja i politika privatnosti</p>
          </div>
      </div>
    </div>
  )
}
