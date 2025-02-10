import React from "react";
import { HomeReel } from "../../assets/images";

const SeconderyHome = () => {
  return (
    <section className="w-full  lg:h-screen p-2 lg:px-15">
      <div className=" w-full  lg:h-[100vh] overflow-hidden  rounded-3xl ">
        <video src={HomeReel} autoPlay loop muted className="w-full h-full object-cover back relative"></video>
      </div>
    </section>
  );
};

export default SeconderyHome;
