import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/home/Home';
import Footer from './src/components/Footer/Footer';
import Navbar from './src/components/Navbar/Navbar';
import CompanyHead from './src/components/Company/CompanyHead';
import Projects from './src/pages/projects/Projects';
import Privacy from './src/components/privacyPolicy/Privacy';
import Marquee from './src/components/maquee/Marquee';
import CompanyPage from './src/pages/company/CompanyPage';
import Contact from './src/pages/contact/Contact';

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/company" element={<CompanyPage/>} />
        <Route path="/let's-talk" element={<Contact/>}/>
      </Routes>
      <Marquee text={'Flawless Dev, Smooth UX '} speed={15}/>

      <Footer/>
    </>
  );
}

export default Router
