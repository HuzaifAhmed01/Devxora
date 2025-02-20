import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./src/pages/home/Home";
import Projects from "./src/pages/projects/Projects";
import Privacy from "./src/components/privacyPolicy/Privacy";
import CompanyPage from "./src/pages/company/CompanyPage";
import Contact from "./src/pages/contact/Contact";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/let's-talk" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;
