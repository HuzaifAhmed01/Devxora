import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1.2,
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
