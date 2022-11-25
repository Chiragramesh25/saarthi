import React from 'react'
import img from './Images/hospital.png'
import {useState,useEffect} from 'react'
import { async } from '@firebase/util'
import { addDoc } from 'firebase/firestore'
import {db} from "./firebase-config";
import {collection, getDocs} from "firebase/firestore"



const Booking = () => {

    const [newName, setnewName] = useState("")
    const [newPhone, setnewPhone] = useState("")
    const [newAddress, setnewAddress] = useState("")
    const userCollectionRef = collection(db, "users");
    const [users,setusers]=useState([]);

    useEffect(()=> {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);;
            setusers(data.docs.map((doc) => ({...doc.data(),id:doc.id })))
        };
        getUsers();
    }, [])


    const createUser = async() => {
        await addDoc(userCollectionRef, {name:newName, phone:newPhone, address:newAddress})
        console.log(alert("Booking Request Sent"))
    }


    return (

    <>
    <div className='booking-main'>
        <div>
            <img className='book-logo' src={img} alt='err'></img>
        </div>
        <div className='booking-cont'>
            <div className='book-inputs'>
                <h2>Book Ambulance Now</h2>
                <input 
                    name='name'
                    className='log-inp' 
                    type='text' 
                    onClick={(event) => {
                        setnewName(event.target.value);
                    }}
                    placeholder='Enter Name'/>

                <input 
                    name='phone'
                    className='log-inp' 
                    type='number' 
                    onClick={(event) => {
                        setnewPhone(event.target.value);
                    }}
                    placeholder='Enter Phone Number'/>

                <input 
                    name='address'
                    className='log-inp' 
                    type='text'
                    onClick={(event) => {
                        setnewAddress(event.target.value);
                    }}

                    placeholder='Enter Address'/>

                    <button className='book-bt' onClick={createUser}>Submit</button>
            </div>
            
        </div>  
    </div>
    </>
  )
}

export default Booking