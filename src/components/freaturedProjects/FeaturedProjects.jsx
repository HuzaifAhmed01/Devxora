import React from "react";
import { motion } from "framer-motion";
import MasonryGrid from "../masnoryGrid/MasnoryGrid";
import { projectVideo } from "../../assets/images";

const FeaturedProjects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start off-screen
      whileInView={{ opacity: 1, y: 0 }} // Animate into view
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% is in view
      className="w-full text-white p-3 py-8 lg:px-15 flex flex-col gap-10 lg:gap-30"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl lg:text-6xl font-bold"
      >
        Featured
        <div className="flex items-center gap-2">
          {/* Animated Video Wrapper */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-20 h-12 lg:w-30 lg:h-18 rounded-full overflow-hidden"
          >
            <video className="w-full h-full object-cover" src={projectVideo} autoPlay loop muted></video>
          </motion.div>
          Projects
        </div>
      </motion.h1>

      {/* Masonry Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <MasonryGrid />
      </motion.div>
    </motion.section>
  );
};

export default FeaturedProjects;
