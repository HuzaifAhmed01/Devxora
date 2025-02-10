import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/home/Home';
import Navbar from './src/components/navbar/Navbar';
import CompanyPage from './src/pages/company/CompanyPage';

const Router = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
    </>
  );
}

export default Router
