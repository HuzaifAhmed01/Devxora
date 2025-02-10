import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FooterActions } from "../../constants";
import GradientButton from "../gradientButton/GradientButton";
import { RiArrowRightUpLine } from "react-icons/ri";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black text-white  py-32 overflow-hidden flex flex-col items-center"
    >
      {/* Social Media Section */}
      <div className="w-full flex flex-col gap-4">
        {FooterActions.map((item) => (
          <a
            key={item.id}
            href={item.action}
            className="flex items-center justify-between w-full py-6 px-12  border-b-[1px] text-3xl font-bold uppercase transition duration-300"
          >
            {item.name}
            <span className="text-4xl">{<RiArrowRightUpLine strokeWidth={1.1} />}</span>
          </a>
        ))}
      </div>

      {/* Idea Section */}
      <div className="w-full flex flex-col justify-center items-center gap-10 text-center mt-24">
        <h3 className="text-5xl font-bold uppercase">Have an Idea?</h3>
        <GradientButton text={"tell us"} clasess={'px-8 py-3 text-[30px] border-1'}/>

    
      </div>

      {/* Main Footer Section */}
      <div className="relative flex justify-center items-center w-full mt-24">
        <h2 className="text-7xl lg:text-9xl font-extrabold uppercase tracking-tight hover:scale-105 transition-transform duration-300">
          DevXora
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 text-gray-400 text-lg px-4">
        <GradientButton text={`© ${new Date().getFullYear()} DevXora. All Rights Reserved.`} clasess={'text-[15px] border-1'}/>
        <GradientButton text={`contact@devxora.com`} clasess={' text-[15px] border-1'}/>
      </div>
    </footer>
  );
};

export default Footer;
