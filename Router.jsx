import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/home/Home';
import Footer from './src/components/Footer/Footer';
import Navbar from './src/components/Navbar/Navbar';

const Router = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyHead/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default Router
