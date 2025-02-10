import React from "react";
import { projects } from "../../constants";

const   MasonryGrid = () => {
  return (
    <section className="w-full flex flex-wrap items-center justify-center lg:justify-center  lg:flex-row gap-6 ">
      <div className="flex flex-col  gap-6">
        {projects
          .filter((item) => item.id < 3)
          .map((item) => (
            <div key={item.id} className="w-[300px] sm:w-[360px]">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-4">
                <img className="w-full h-full object-fill" src={item.image} alt={item.name} />
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <h4 className="text-sm opacity-50">{item.country}</h4>
            </div>
          ))}
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-6 ">
        {projects
          .filter((item) => item.id >=3 && item.id <= 4)
          .map((item) => (
            <div key={item.id} className="w-[300px] sm:w-[360px]">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-4">
                <img className="w-full h-full object-fill" src={item.image} alt={item.name} />
              </div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <h4 className="text-sm opacity-50">{item.country}</h4>
            </div>
          ))}
      </div>


    </section>
  );
};

export default MasonryGrid;
