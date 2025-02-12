import React, { useState } from "react";
import { motion } from "framer-motion";
import GradientButton from "../gradientButton/GradientButton";
import emailjs from "@emailjs/browser"; 

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = (e) => {
      e.preventDefault();


      
      // Your EmailJS credentials
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.send(serviceID, templateID, formData, publicKey).then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
    };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-16 py-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/your-image.jpg')" }} // Replace with your image path
      ></div>

      <div className="relative w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Left Side - Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center lg:text-left lg:w-1/2"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-wide">
            Let’s create <br />
            <span className="text-[#00FF80]">something epic</span> <br />
            together.
          </h2>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-[#0d0d0d] px-6 sm:px-10 py-8 sm:py-12 w-full max-w-lg border border-gray-800 rounded-2xl shadow-[0px_5px_30px_rgba(0,255,128,0.2)]"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center uppercase">
            Start a Project
          </h3>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-base">
            Share your ideas and let’s build something amazing.
          </p>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-base md:text-lg focus:outline-none focus:border-green-500 transition-all"
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-base md:text-lg focus:outline-none focus:border-green-500 transition-all"
              />
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                rows="4"
                placeholder="Your Message"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-base md:text-lg focus:outline-none focus:border-green-500 transition-all"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <GradientButton
              type="submit"
                text="Let's Connect"
                clasess="text-white text-[15px] border-1 px-10"
              />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
