import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Privacy = () => {

  return (
    <section className="relative w-full min-h-screen bg-[#0d0d0d] text-white px-6 md:px-12 lg:px-24 py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/privacy-bg.jpg')" }}></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-10"
        >
          Privacy <span className="text-[#00FF80]">Policy</span>
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-gray-300 text-lg text-center mb-10"
        >
          Your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information.
        </motion.p>

        {/* Sections */}
        {[
          {
            title: "1. Information We Collect",
            content:
              "We collect various types of information, including personal details (name, email, phone number), browsing activity, and device data. This data helps us improve our services and personalize your experience.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "Your data is used for account management, service improvement, security enhancements, and personalized marketing. We do not sell your data to third parties.",
          },
          {
            title: "3. Cookies and Tracking Technologies",
            content:
              "We use cookies to improve user experience, analyze traffic, and provide targeted advertising. You can manage your cookie preferences in your browser settings.",
          },
          {
            title: "4. Data Security",
            content:
              "We implement advanced security measures, including encryption and access controls, to protect your data from unauthorized access and breaches.",
          },
          {
            title: "5. Your Rights",
            content:
              "You have the right to access, update, or delete your data. You can also opt out of marketing communications at any time by contacting us.",
          },
          {
            title: "6. Third-Party Services",
            content:
              "We may share your data with trusted third-party services for analytics, payment processing, and customer support. We ensure these partners comply with strict data protection standards.",
          },
          {
            title: "7. Changes to This Policy",
            content:
              "We may update this Privacy Policy periodically. We encourage you to review it regularly to stay informed about how we protect your information.",
          },
          {
            title: "8. Contact Us",
            content:
              "If you have any questions regarding our Privacy Policy, please reach out to our support team at privacy@yourcompany.com.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#00FF80]">{section.title}</h2>
            <p className="text-gray-300 mt-3">{section.content}</p>
          </motion.div>
        ))}

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm">
            Last Updated: <span className="text-white">February 2025</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
