import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#111] text-white px-6 sm:px-12 lg:px-40 py-20">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/privacy-bg.jpg')" }}
      ></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-extrabold uppercase text-left leading-tight"
        >
          Privacy <span className="text-white">Policy</span>
        </motion.h1>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-lg md:text-2xl max-w-3xl mt-8 leading-relaxed"
        >
          We respect your privacy. Below is a clear and transparent outline of
          how we handle your data.
        </motion.p>

        {/* Content */}
        <div className="mt-20 space-y-16">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">Information We Collect</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              We collect data such as your name, email, browsing behavior, and
              device information. This helps us improve our services and
              enhance security.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">How We Use Your Data</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              Your information is used to enhance your experience, improve
              security, and analyze website traffic. We do not sell your data.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">Cookies & Tracking</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              We use cookies to improve site performance and analytics. You can
              manage your cookie preferences in your browser settings.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">Data Security</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              We apply advanced security measures, including encryption and
              monitoring, to keep your data safe.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">Your Rights</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              You can request access, modification, or deletion of your data at
              any time.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">Policy Updates</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              We update our policy as needed. Stay informed by checking this
              page regularly.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="border-l-4 border-white pl-6"
          >
            <h2 className="text-4xl font-semibold">Contact Us</h2>
            <p className="text-white mt-4 text-lg leading-relaxed">
              Have any privacy concerns? Contact us at{" "}
              <span className="underline">privacy@yourcompany.com</span>.
            </p>
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-left mt-20"
        >
          <p className="text-gray-400 text-lg">
            Last Updated: <span className="text-white">February 2025</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
