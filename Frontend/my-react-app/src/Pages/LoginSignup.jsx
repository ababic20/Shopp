import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'

export const LoginSignup = () => {

  const[state,setState] = useState("Prijavi se");
  const[formData,setformdata,] = useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (e)=>{
    setformdata({...formData,[e.target.name]:e.target.value})

  }

  const login = async()=>{
    console.log("Login funkcija izvršena", formData);
    let responsedata;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=> res.json()).then((data)=>responsedata=data)

    if(responsedata.success){
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/")
    }
    else{
      alert(responsedata.errors)
    }
  }

  const signup = async()=>{
    console.log("Register funkcija izvršena", formData);
    let responsedata;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((res)=> res.json()).then((data)=>responsedata=data)

    if(responsedata.success){
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/")
    }
    else{
      alert(responsedata.errors)
    }
    }
 

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state==="Registriraj se"?<input type="text" placeholder='Vaše ime' name='username' value={formData.username} onChange={changeHandler}/>:<></>}
            <input type="email" placeholder='Email adresa' name='email' value={formData.email} onChange={changeHandler} />
            <input type="password" placeholder='Lozinka' name='password' value={formData.password} onChange={changeHandler} />
          </div>
          <button onClick={()=>{state==="Prijavi se"?login():signup()}}>Nastavi</button>
          {state==="Registriraj se"?<p className='loginsignup-login'>Već imate račun? <span onClick={()=>{setState("Prijavi se")}}>Prijavi se ovdje!</span></p>:<></>}
          {state==="Prijavi se"?<p className='loginsignup-login'>Napravi svoj račun?<span onClick={()=>{setState("Registriraj se")}}>Klikni ovdje!</span></p>:<></>}
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>Prijavom prihvaćam uvjete korištenja i politika privatnosti</p>
          </div>
      </div>
    </div>
  )
}
