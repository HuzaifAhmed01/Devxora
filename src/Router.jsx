import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/Footer/Footer';
import Projects from './pages/projects/Projects';
import Privacy from './components/privacyPolicy/Privacy';
import Marquee from './components/maquee/Marquee';
import CompanyPage from './pages/company/CompanyPage';
import Contact from './pages/contact/Contact';
import Navbar from './components/Navbar/Navbar';

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/lets-talk" element={<Contact />} /> {/* Fixed route path */}
      </Routes>
      <Marquee text={'Flawless Dev, Smooth UX'} speed={15} />
      <Footer />
    </>
  );
};

export default Router;
