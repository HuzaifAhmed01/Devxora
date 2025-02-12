import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../gradientButton/GradientButton";
import { useNavigate } from "react-router-dom";

const EnhancedWebComp = () => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/${title}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full h-auto py-10 lg:h-screen flex flex-col text-white items-center justify-center gap-8 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl lg:text-6xl capitalize font-extrabold w-full lg:w-[60%] lg:leading-[4rem]"
      >
        Enhanced Web Applications
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-3 text-[17px] md:text-sm lg:text-sm capitalize text-justify lg:w-[60%] lg:text-center leading-6"
      >
        DevXora is a dynamic software company committed to delivering innovative
        and high-performance web solutions. We craft seamless digital
        experiences that enhance business growth, efficiency, and user
        engagement. With a focus on innovation and excellence, DevXora
        transforms ideas into powerful digital solutions tailored to your needs.
      </motion.p>

      <motion.h4
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-bold"
      >
        Want to know about us?
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleClick("company");
          }}
          className="cursor-pointer"
        >
          <GradientButton 
            text={"About Us"}
            clasess={"bg-[#0DA34E] px-7 lg:text-2xl py-4"}
          />
        </span>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedWebComp;
