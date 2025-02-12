import React from "react";
import { motion } from "framer-motion";
import company1 from "../../assets/images/company/company-web.webp";

const CompanyHead = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative z-10 pt-12 lg:mb-10 md:pt-24 px-6 md:px-20 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
        >
          <span className="block text-white">Creativity</span>
          <span className="mt-4 block text-gray-400">meets</span>
          <span className="block text-white">Technology</span>
        </motion.h1>
      </section>

      {/* Image Showcase */}
      <section className="relative w-full px-2 lg:px-14 py-16 md:py-28 bg-[#0d0d0d]">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-[#ffffff20] blur-[150px] opacity-20"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Image Wrapper with Dynamic Hover Effect */}
          <div className="group relative overflow-hidden rounded-3xl">
            <motion.img
              src={company1}
              alt="Company Screenshot"
              className="w-full lg:h-screen object-cover rounded-3xl transition-transform duration-700"
            />

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000a0] via-transparent to-[#000000] opacity-100"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CompanyHead;
