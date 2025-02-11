import React from "react";
import FeaturedProjects from "../../components/freaturedProjects/FeaturedProjects";
import Marquee from "../../components/maquee/Marquee";

const Projects = () => {
  return (
    <div>
      <FeaturedProjects />
      <Marquee text={'Flawless Dev, Smooth UX '} speed={15}/>

    </div>
  );
};

export default Projects;
