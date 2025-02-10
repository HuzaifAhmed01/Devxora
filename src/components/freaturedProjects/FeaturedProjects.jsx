import React from "react";
import MasonryGrid from "../masnoryGrid/MasnoryGrid";
import { projectVideo } from "../../assets/images";

const FeaturedProjects = () => {
  return (
    <section className="w-full   text-white p-3 py-8 lg:px-15 flex flex-col  gap-10 lg:gap-30">
      <h1 className="text-5xl lg:text-6xl font-bold      ">
        Featured
        <div className=" flex items-center gap-2">
          <div className="w-20 h-12 lg:w-30 lg:h-18 rounded-full overflow-hidden ">
            <video
              className=" w-full h-full object-cover   object "
              src={projectVideo}
              autoPlay
              loop
              muted
            ></video>
          </div>
          Projects
        </div>
      </h1>

      <div className="w-full">
        <MasonryGrid />
      </div>
    </section>
  );
};

export default FeaturedProjects;
