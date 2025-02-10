import React from 'react'
import code from '../../assets/images/company/code.webp'

const OurGoal = () => {
  return (
    <>
      <section className="relative z-10 pt-12 md:pt-20 px-4 md:px-20">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <h2 className="text-sm font-semibold text-white mb-4 md:mb-0">
            OUR GOAL
          </h2>
          <p className="text-lg md:text-xl text-white md:w-2/3 leading-relaxed">
            From the moment our company was founded, we have helped our clients
            find exceptional solutions for their businesses, creating memorable
            brands and digital products. Our expertise grows with each year, and
            our accumulated experience empowers us to develop products exactly
            as they should be.
          </p>
        </div>
      </section>

        <div className="w-full h-full flex flex-col lg:flex-row gap-10  px-4 py-20 items-center justify-center">
          {/* Left Image (Positioned Slightly Higher) */}
          <div className="md:w-xl rounded-3xl overflow-hidden shadow-lg">
            <img
              src={code}
              alt="Working on tablet"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Right Image (Slightly Lower) */}
          <div className="w-xl  rounded-3xl overflow-hidden shadow-lg lg:mt-29">
            <img
              src={code}
              alt="Team collaboration"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
    </>
  );
}

export default OurGoal
