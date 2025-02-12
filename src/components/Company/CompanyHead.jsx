import React from 'react'
import company1 from '../../assets/images/company/company1.jpg'
import { motion } from "framer-motion";

const CompanyHead = () => {
  return (
    <>
      <section className="relative z-10 pt-12 pr-4  md:pt-20 md:pr-4">
        <motion.div className="flex flex-col grid-cols-3 justify-center px-4 md:px-20"
        initial={{opacity:0 , y: -20}}
        animate={{opacity:2 , y: 0}}
        transition={{duration:0.5, ease: "easeOut"}}
        >
          <h1 className="text-5xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            <span className="block  text-white ">Creativity</span>
            <span className="mt-4 text-gray-300"> meets </span>
            <span className="  text-white ">
              technology
            </span>
          </h1>
        </motion.div>
      </section>

      <section className="cb-screenshot py-10 md:py-20  ">
        <div className="cb-screenshot-preview mx-auto shadow-lg rounded-lg overflow-hidden">
          <div className="cb-screenshot-preview-media transform transition-transform duration-500 hover:scale-105">
            <picture>
              <img
                src={company1}
                alt="Company Screenshot"
                className="w-full h-96 object-cover"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyHead;
