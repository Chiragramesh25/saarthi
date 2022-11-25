import React from 'react'
import logo from "./Images/logo.png"
import { Link } from 'react-router-dom'


const resultA = () => {
  return (
    <div className='result-main'>
        <div className='nav-main'>

        <div className='nav-logo'>
        <Link to='/' spy={true} smooth={true} offset={50} duration={500}> <img src={logo} alt='err'/> </Link>
        </div>

        <div className='nav-links'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Dashboard</a></li>
            </ul>
        </div>
      </div>

      <div className='result-OP'>

      <div className='result-Details'>
          <div className='result-cont'>
            <img className='patient-img' src='https://cdn-icons-png.flaticon.com/512/4228/4228704.png' alt=''></img>
            <div className=''>
              <h3> Patient Name : <span className='info-highlight'>Harsh</span></h3>
              <h3> Phone Number : <span className='info-highlight'> 9874563210 </span></h3>
              <h3> Area of Residence : <span className='info-highlight'> Pratap Vihar </span> </h3>
              <h3> Navigation : <a href='https://www.google.com/maps/dir//Pratap+Vihar,+Ghaziabad,+Uttar+Pradesh/@28.6526992,77.3385249,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cf025538eb031:0xb292631b6d2e2730!2m2!1d77.408566!2d28.6525666'> Click here</a></h3> 
            </div>
          </div>
        </div>

        <div className='result-map'>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Jm5cThaFp47HoVnC5rdb8PHmF7vCKZU&ehbc=2E312F" width="660" height="450"></iframe>        
        </div>


      </div>
    </div>
  )
}

export default resultA