import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Patient from "./Patient"
import {auth, db} from "./firebase-config";
import {signOut,onAuthStateChanged, deleteUser} from "firebase/auth";
import { useState, useEffect } from 'react';
import { async } from '@firebase/util';
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore"
import logo from "./Images/logo.png"

function Ambulance() {


    const[users,setusers]=useState([]); 
    const userCollectionRef = collection(db, "users");
    
    useEffect(()=> {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);;
            setusers(data.docs.map((doc) => ({...doc.data(),id:doc.id })))
        };
        getUsers();
    }, [])

    const deleteUser = async(id) => {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      console.log(alert(" Booking Deleted Succesfully. Please Reload"))

    }

    const logout = async() => {
        await signOut(auth)
        console.log(alert("Logged Out Succesfully "))
      }
    
    const [user, setuser]=useState({});
      onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
    })

return (

    <div className='homepage-main'>
      <div className='dash-nav'>
        <div>
          <Link to='/' spy={true} smooth={true} offset={50} duration={500}> <h1 className='ambu-head'>Saarthi</h1> </Link>
          
        </div>
        
        <div className='dash-nav-links'>
          <Link to='/' className='dash-nav-links-a' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          <Link to='/Services' className='dash-nav-links-a' spy={true} smooth={true} offset={50} duration={500}> Services </Link>
          <Link to='/' className='dash-nav-links-a' spy={true} smooth={true} offset={50} duration={500}> Contact Us </Link>

        </div>

        <div className='dash-nav-btn'>
          <h3 className='user-ab'> User Name: {user?.email} </h3>
          <button className='sinout-btn' onClick={()=>logout()}>Sign Out</button>
        </div>
      </div>
    

    
        {/* <div className='Driver-Profile'>

            <div className='vehicle-info'>
              <h3> Total Bookings <br/> 23 </h3>
            </div>
        </div> */}


        <div>
          <h1 className='live'> Live Bookings </h1>
            <div className='op-head'>
                    <h3> Name </h3>
                    <h3> Phone Number </h3>
                    <h3> Address </h3>
            </div>

                {users.map((user) => {
                    return (
                    <div className='calls'>
                        <p className='user-name'> {user.name}</p>
                        <p className='user-name'> {user.phone}</p>
                        <p className='user-name'> {user.address}</p> 
                        <button onClick={()=> {deleteUser(user.id)}} className='delete-btn'> Delete </button>
                        <Link to='/result-Harsh'> <button className='accept-btn'> Accept</button> </Link>
                    </div>
                )
                })
            }
            </div>
      </div>
      
  )
}


        
export default Ambulance;