import './App.css';
import logo from "../src/logo.png";

function Navbar() {
  return (
    <><Navbar />
    <div className='nav-main'>
      <div className='nav-logo'>
        <img src={logo} alt='err'></img>
      </div>
      <div className='nav-links'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <button className='nav-btn'>Login</button>
      </div>
    </div></>
  );
}

export default Navbar;
