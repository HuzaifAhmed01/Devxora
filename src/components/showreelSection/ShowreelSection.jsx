import React, { useRef } from "react";
import { HomeReel } from "../../assets/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SeconderyHome = () => {

let videoRef = useRef(null);

useGSAP(()=>{
  gsap.from(videoRef.current,{
    scale:0,
    duration:1.5,

  })
},[])

  return (
    <section className="w-full  lg:h-screen p-2 lg:px-15">
      <div ref={videoRef}  className=" w-full  lg:h-[100vh] overflow-hidden  rounded-3xl ">
        <video src={HomeReel} autoPlay loop muted className="w-full h-full object-cover back relative"></video>
      </div>
    </section>
  );
};

export default SeconderyHome;
