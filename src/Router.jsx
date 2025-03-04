import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CompanyPage from './pages/company/CompanyPage';
import Contact from './components/Contact/ContactUs';
import Projects from './pages/projects/Projects'; // ✅ Added missing import
import Marquee from './components/maquee/Marquee';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import PrivacyPolicy from './components/privacyPolicy/Privacy';

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/let's-talk" element={<Contact />} /> 
      </Routes>
      <Marquee text={'Flawless Dev, Smooth UX'} speed={15} />
      <Footer />   
    </>
  );
};

export default Router;
