import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    const update = (time) => {
      lenis.raf(time);
      ScrollTrigger.update(); // 👈 Sync GSAP ScrollTrigger with Lenis
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    // Tell GSAP to use Lenis' scroll position
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value, { immediate: true }) : window.scrollY;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
