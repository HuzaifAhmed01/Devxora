import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Company from './src/components/Company/Company'
import Home from './src/pages/home/Home';
import Navbar from './src/components/navbar/Navbar';

const Router = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
}

export default Router
