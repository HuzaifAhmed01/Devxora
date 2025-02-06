import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi"; // Menu & Close Icons
import GradientButton from "../gradientButton/GradientButton";
import { navLinks } from "../../constants";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (title)=>{
   navigate(`/${title}`)
  }

  return (
    <nav className="w-full h-auto bg-[#111111] flex justify-between items-center px-6 md:px-16 py-4 relative">
      {/* Logo */}
      <div className="z-50">
        <img src="logo.png" className="w-32 object-cover" alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-10 uppercase text-[13px] font-bold">
        {navLinks.map((item) => (
          <li
            key={item.id}
            onClick={()=>handleClick(item.route)}
            className="text-white hover:text-[#0da34e] transition-all cursor-pointer"
          >
            {item.id === 3 ? <GradientButton text={item.title} /> : item.title}{" "}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <HiX
            className="text-3xl text-white cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <HiMenuAlt4
            className="text-3xl text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu (Sliding from Right) */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-black flex flex-col items-center justify-center gap-8 uppercase text-[16px] font-bold transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {navLinks.map((item) => {
          return (
            <li
              className=" text-white text-xl"
              onClick={() => setMenuOpen(false)}
            >
              {item.id === 3 ? (
                <GradientButton text={item.title} />
              ) : (
                item.title
              )}
            </li>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
