import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {MarqueeVid } from "../../assets/images";

const Marquee = ({ text, speed = 10 }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    gsap.to(marqueeElement, {
      x: "-50%",
      ease: "linear",
      duration: speed,
      repeat: -1,
    });
  }, [speed]);

  return (
    <div className=" relative w-full h-70 overflow-hidden py-10 bg-[#111 mt-30">
      {/* Fading Edges */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="flex whitespace-nowrap w-max" ref={marqueeRef}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            <p className="text-white text-9xl font-extrabold uppercase tracking-wide">
              {text}
            </p>
            <div className="w-[30vw] h-[18vw]  lg:w-[15vw] lg:h-[8vw]   rounded-[46px] overflow-hidden shadow-amber-200 bg-red-100 mx-10 ">
                
            <video
              src={MarqueeVid}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            ></video>
            </div>
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
