import React from "react";
import { motion } from "framer-motion";
import { services, strategies } from "../../constants";
import GradientButton from "../gradientButton/GradientButton";

const ModernAgencyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="font-sans text-black bg-white"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center py-24 px-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Building High-Quality Digital Products
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          We craft seamless digital experiences with cutting-edge technology, ensuring performance, design, and user experience at the highest level.
        </p>
        <div className="w-full flex justify-center py-8 items-center">
          <GradientButton text={"Get Started"} clasess={"bg-[#000] text-white border lg:text-2xl px-7 py-4"} />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-6"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">Our Expertise</h2>
        <p className="text-gray-600 text-lg text-center mt-4">
          We provide world-class digital solutions tailored to your needs.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold">Our Process</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Our structured approach ensures that every product we develop is innovative, scalable, and user-centric.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-3"
        >
          {strategies.map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition w-full sm:w-64">
              <span className="text-4xl font-bold text-gray-300">{item.step}</span>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default ModernAgencyComponent;
