import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "./firebase-config"

const Register = () => {

  const [regemail, setregemail] = useState("")
  const [regpassword, setregpassword] = useState("")

  const register = async() => {
    try{
      const user = await createUserWithEmailAndPassword(auth, regemail, regpassword)
      console.log(alert(" Succesfully Registered !! "))
      console.log(user)
    } catch (error) {
      console.log(error.message);
      console.log(alert("Some Error Occured "))
    }
  }


  return (
    <>
    <div className='login-main'>

    <div className='login-logo'>
            <img className='signup-img' src='https://cdn-icons-png.flaticon.com/512/3456/3456426.png' alt='err'/>
          </div>

      
      
      <div className='login-page'>
          

          <div className='login-1'>
            <h1>Register Now</h1>
              <input className='log-inp' type="email" placeholder="User Name" onChange={(event) => { setregemail(event.target.value) } } />
              <input className='log-inp' type="password" placeholder="Password" onChange={(event) => { setregpassword(event.target.value) } } />
              <input className='log-inp' type="password" placeholder=" Confirm Password"/>

              <button onClick={register} className='login-bt'> Register </button>
              {/* <button className='dashboard-btn'><Link to='/ambulance'> Go to Ambulance Owners Dashboard </Link></button> */}
              
              <div>
               <p className='login-text'> Already Registered ?? <Link to='/login'> Login </Link>  </p>
              </div>
          </div>

          
          
      </div>

      <div>
        
      </div>

    </div>
    </>
    
  )
}

export default Register