import React, { useState } from 'react';
import logo from "../logo.png";
import img from "../Details.png";
import Services from './Services';
import Booking from './Booking';
import {Link} from "react-router-dom"
import {collection, getDocs, addDoc} from "firebase/firestore"


const HomePage = () => {

  // document.querySelectorAll('a[href^=""#]').forEach(anchor =>{
  //   anchor.addEventListner("click",function(e){
  //     e.preventDefault()
  //     Document.querySelectorAll(this.getAttribute("href").scrollIntoView)({
  //       behaviour:"smooth"
  //     })
  //   })
  // })

  // document.readyState(function(){
  //   (".sidebar-form .call-action").click(function(){
  //     this.parents(".sidebar-form").toggleClass("")
  //   })
  // })


  return (

    <>
    <div className='homepage-main'>
        <div className='nav-main'>
        <div className='nav-logo'>
        <Link to='/' spy={true} smooth={true} offset={50} duration={500}> <img src={logo} alt='err'/> </Link>
          
        </div>
        <div className='nav-links'>
          <ul>
            <li><Link to='/' spy={true} smooth={true} offset={50} duration={500}> Home </Link></li>
            <li><a href='#feature'> Features </a> </li>
            <li><Link to='/contact' spy={true} smooth={true} offset={50} duration={500}> Contact Us </Link></li>

          </ul>
        </div>`    `

        <div>
        <Link to='/login'><button className='nav-btn'>Ambulance Owners</button></Link>
          
        </div>
      </div>


        <div className='hp-main'>
          <div className='hp-cont'>
            <img className='hp-img' src={img} alt='err'></img>
            <div className='homepage-cont'>
                <div className='homepage-head'>
                  <h1> Book an <span className='highlight'> Ambulance <br/></span> in just 2 clicks </h1>
                </div>
                <div className='homepage-text'>
                  <p>Booking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly connect with your Ambulance Driver</p>
                </div>
                <a href='#Book'> <button className='btn-home'> Book Now</button> </a>
          </div>
          </div>
          
        </div>
      </div>

    <section id='feature'>
      <Services/>
    </section>

      
    <section id='Book'>
      <Booking/>
    </section>  
    </>

    
  )
}

export default HomePage