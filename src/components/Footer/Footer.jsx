import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FooterActions, footerLinks } from "../../constants";
import GradientButton from "../gradientButton/GradientButton";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/${title}`);
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <motion.footer
      ref={footerRef}
      className="relative w-full  bg-[#111]  text-white py-32 overflow-hidden flex flex-col items-center"
    >
      {/* Social Media Section */}
      <motion.div
        className="w-full flex flex-col gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {FooterActions.map((item) => (
          <motion.a
            key={item.id}
            href={item.action}
            className="flex items-center justify-between w-full py-6 px-12 border-b-[1px] text-3xl font-bold uppercase transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {item.name}
            <motion.span className="text-4xl" whileHover={{ rotate: 45 }}>
              <RiArrowRightUpLine strokeWidth={1.1} />
            </motion.span>
          </motion.a>
        ))}
      </motion.div>

      {/* Idea Section */}
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-10 text-center mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-5xl font-bold uppercase">Have an Idea?</h3>
        <GradientButton
          text={"tell us"}
          clasess={"px-8 py-3 text-[30px] border-1"}
        />
      </motion.div>

      {/* Main Footer Heading (Big "DevXora" Text) */}
      <motion.div
        className="relative flex justify-center items-center w-full mt-24"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-7xl lg:text-9xl font-extrabold uppercase tracking-wider">
          DevXora
        </h2>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="w-full flex flex-col md:flex-row justify-between items-center mt-16 text-gray-400 text-lg px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* <GradientButton text={`© ${new Date().getFullYear()} DevXora. All Rights Reserved.`} clasess={"text-[15px] border-1"} />
        <GradientButton  text={`PrivacyPolicy`} clasess={"text-[15px] border-1"}  />
        <GradientButton text={`contact@devxora.com`} clasess={"text-[15px] border-1"} /> */}

        {footerLinks.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              if (item.route === "privacy-policy") {
                window.scrollTo({ top: 0 });
                handleClick(item.route);
              }
            }}
            className="cursor-pointer"
          >
            <GradientButton text={item.text} clasess={item.className} />
          </span>
        ))}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
