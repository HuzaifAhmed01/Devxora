import { motion } from "framer-motion";
import { InquiryBg } from "../../assets/images/index";
import GradientButton from "../gradientButton/GradientButton";
import { useNavigate } from "react-router-dom";

const ProjectInquiry = () => {

  const navigate = useNavigate();

const handleClick = (title) => {
    navigate(`/${title}`);
    // setMenuOpen(false); 
  };



  return (
    <motion.section
      id="project-inquiry"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-screen flex items-center px-8 sm:px-16 lg:px-32 py-20 overflow-hidden"
    >
      {/* Background Image */}
      <motion.img
        src={InquiryBg}
        alt="Project Inquiry Background"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full object-cover object-right"
      />

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-[#111] lg:bg-[#111]/80"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full lg:w-1/2 text-left text-white">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl uppercase font-extrabold leading-tight"
        >
          Have a project in mind?
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-lg sm:text-xl text-gray-300"
        >
          Let's build something amazing together. Share your ideas, and we'll
          bring them to life.
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true }}
        >
          <span
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleClick("let's-talk");
            }}
          >
            <GradientButton
              text={"Let's Talk"}
              clasess={"bg-[#0DA34E] lg:text-2xl px-7 py-4 mt-10"}
            />
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectInquiry;
