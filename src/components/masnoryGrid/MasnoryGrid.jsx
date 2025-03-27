import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import { Link } from "react-router-dom";

const MasonryGrid = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} // Animates once when 20% is in view
      className="w-full flex flex-wrap items-center justify-center lg:justify-center lg:flex-row gap-6"
    >
      {/* First Column */}
      <div className="flex flex-col gap-6">
        {projects
          .filter((item) => item.id < 3)
          .map((item) => (
            <Link to={item.link}   key={item.id}>
            <motion.div
            
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-[300px] sm:w-[360px]"
            >
              <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-4">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full h-full object-fill"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <h4 className="text-sm opacity-50">{item.country}</h4>
            </motion.div>
            </Link>
          ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-6">
        {projects
          .filter((item) => item.id >= 3 && item.id <= 4)
          .map((item) => (
            <Link to={item.link}   key={item.id}>
            <motion.div
          
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="w-[300px] sm:w-[360px] cursor-pointer"
            >
              <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-4">
                <motion.img
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="w-full h-full object-fill"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <h4 className="text-sm opacity-50">{item.country}</h4>
            </motion.div>
            </Link>
          ))}
      </div>
    </motion.section>
  );
};

export default MasonryGrid;
