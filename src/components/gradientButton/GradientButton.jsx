import React from "react";
import "./GradientButton.css";
import { RiArrowRightUpLine } from "react-icons/ri";

const GradientButton = ({ text ,clasess }) => {
  return (
    <button  id="btn" className={`font-bold ${clasess} text-xl p-3 lg:px-8 flex items-center justify-center gap-2`}>
      {text}
      {text === "let's talk" ? <RiArrowRightUpLine strokeWidth={1.1} /> : ""}
    </button>
  );
};

export default GradientButton;
