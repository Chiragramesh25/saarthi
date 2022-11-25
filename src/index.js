import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './Components/HomePage';
import Ambulance from './Components/Ambulance';
import Booking from './Components/Booking';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Components/Login';
import Register from './Components/Register';
import ResultA from './Components/resultA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/ambulance' element={<Ambulance/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/result-Harsh' element={<ResultA/>}/>
    </Routes>
  </BrowserRouter>
);
