import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxImage = ({ src, alt = "Parallax Image", speed = -20, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect: Move image upward on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ParallaxImage;
