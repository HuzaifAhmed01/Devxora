import React from "react";
import { motion } from "framer-motion";
import { PhilosophyVideo } from "../../assets/images";

const Philosophy = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% is visible
      className="p-3 py-10 lg:px-16 lg:py-14 w-full h-auto text-white flex flex-col gap-8 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl lg:text-8xl font-bold lg:pb-14"
      >
        Our Philosophy
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-10 items-center justify-center"
      >
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden lg:block w-xl h-80 rounded-2xl overflow-hidden"
        >
          <motion.video
            initial={{ scale: 1.2 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={PhilosophyVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="w-2xl lg:w-xl text-[17px] text-justify leading-6"
        >
          In our team, developers work alongside designers, strategists, and
          analysts. DevXora doesn't do cookie-cutter solutions, and we build
          products exactly as they were during the design phase, no shortcuts
          or simplifications.
          <br />
          <br />
          We're driven by user‑centered design that drives productivity and
          increases revenue. Our expertise and ingenuity are remarkable, yet we
          always strive to outdo and outperform our previous achievements.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Philosophy;
