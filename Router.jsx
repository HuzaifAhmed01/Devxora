import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/pages/home/Home';
import Footer from './src/components/Footer/Footer';
import Navbar from './src/components/Navbar/Navbar';
import Projects from './src/pages/projects/Projects';
import Contact from './src/pages/contact/Contact';
import Privacy from './src/components/privacyPolicy/Privacy';

const Router = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="projects" element={<Projects/>}/>
        <Route path='/privacy-policy' element={<Privacy/>}/>
        <Route path="/let's-talk" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default Router
