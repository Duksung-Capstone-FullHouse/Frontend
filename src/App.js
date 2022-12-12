// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './components/landingPage';
import Login from './components/loginPage/login';
import Register from './components/loginPage/register';




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
 
    </BrowserRouter>
  );
}

export default App;
