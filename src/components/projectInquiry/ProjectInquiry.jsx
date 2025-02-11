import { InquiryBg } from "../../assets/images/index";
import ParallaxImage from "../../utils/ParallaxImage";
import GradientButton from "../gradientButton/GradientButton";

const ProjectInquiry = () => {


  return (
    <section
      id="project-inquiry"
      className="relative min-h-screen flex items-center px-8 sm:px-16 lg:px-32 py-20 overflow-hidden"
    >
      <img 
        src={InquiryBg}
        alt="Project Inquiry Background"
        className="absolute inset-0 w-full h-full object-cover object-right"
      />
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black lg:bg-black/70"></div>

      {/* Content */}
      <div
        className="relative z-10 w-full lg:w-1/2 text-left text-white"
      >
        <h2 className="text-6xl lg:text-8xl uppercase font-extrabold leading-tight">
          Have a project in mind?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Let's build something amazing together. Share your ideas, and we'll bring them to life.
        </p>
        <GradientButton text={"let's talk"} clasess={'bg-[#0DA34E] lg:text-2xl px-7 py-4 mt-10'}/>

      </div>
    </section>
  );
};

export default ProjectInquiry;
