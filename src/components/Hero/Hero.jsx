import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {

    gsap.from(heroRef.current.children,
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, 
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%", // Triggers when 80% of the section is in view
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-auto bg-[#111111] text-white">
      <div
        ref={heroRef}
        className="w-full flex flex-col items-center justify-center gap-4 text-center pt-17 pb-8 px-2 lg:px-0"
      >
        {/* First heading */}
        <h5 className="text-[12px] md:text-sm lg:text-sm uppercase">
          AI + Design + DEVELOPMENT: Creating the Future, Today.
        </h5>

        {/* Main heading */}
        <h1 className="text-4xl lg:text-7xl capitalize font-extrabold w-[100%] lg:w-[60%] lg:leading-24">
          Transforming Ideas into Intelligent Products with AI.
        </h1>

        {/* Subheading */}
        <h5 className="text-[12px] md:text-sm lg:text-sm uppercase">
          Empowering businesses with{" "}
          <span className="text-[#0da34e]">AI-driven</span> design and
          cutting-edge{" "}
          <span className="text-[#0da34e]">software development</span>.
        </h5>
      </div>
    </section>
  );
};

export default Hero;
