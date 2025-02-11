import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/home/Home';
import Navbar from './src/components/navbar/Navbar';
import Footer from './src/components/Footer/Footer';
import CompanyPage from './src/pages/company/CompanyPage';

const Router = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default Router
