import React, { useState } from "react";
import { HiX } from "react-icons/hi"; // Close Icon
import { FaGripLines } from "react-icons/fa"; // Menu Icon
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "../gradientButton/GradientButton";
import { navLinks } from "../../constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

const handleClick = (title) => {
    navigate(`/${title}`);
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <motion.nav
      className="w-full h-auto bg-[#111] flex justify-between items-center px-6 lg:px-12 py-2 sticky top-0 left-0 z-30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src="logo.png" className="w-32 object-cover" alt="Logo" />
      </motion.div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-10 uppercase text-[13px] font-bold">
        {navLinks.map((item) => (
          <motion.li
            key={item.id}
            onClick={() => {handleClick(item.route);
              window.scrollTo({ top: 0, behavior: "smooth" })}
            }
           
            
            className="text-white hover:text-[#0da34e] transition-all cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {item.id === 3 ? (
              <GradientButton
                text={item.title}
                clasess="lg:text-[13px] bg-[#0DA34E] text-white"
              />
            ) : (
              item.title
            )}
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <motion.div
        className="md:hidden z-50"
        whileTap={{ scale: 0.8 }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <HiX className="text-3xl text-white cursor-pointer" />
        ) : (
          <FaGripLines className="text-3xl text-white cursor-pointer" />
        )}
      </motion.div>

      {/* Mobile Menu (Sliding from Right) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 bg-black flex flex-col items-center justify-center gap-8 uppercase text-[16px] font-bold md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {navLinks.map((item) => (
              <motion.li
                className="text-white text-xl cursor-pointer"
                key={item.id}
                onClick={() => handleClick(item.route)}
                whileHover={{ scale: 1.1, color: "#0da34e" }}
              >
                {item.id === 3 ? (
                  <GradientButton text={item.title} clasess={"border-1 px-5"} />
                ) : (
                  item.title
                )}
              </motion.li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
