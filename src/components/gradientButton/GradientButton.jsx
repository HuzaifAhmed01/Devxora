import React from "react";
import "./GradientButton.css";
import { RiArrowRightUpLine } from "react-icons/ri";

const GradientButton = ({ text }) => {
  return (
    <button className="font-bold lg:text-[13px] sm:text-3xl sm:p-4 flex items-center justify-center gap-2">
      {text}
      {text === "let's talk" ? <RiArrowRightUpLine strokeWidth={1.1} /> : ""}
    </button>
  );
};

export default GradientButton;
