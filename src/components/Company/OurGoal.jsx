import React from 'react'
import ourGoal2 from '../../assets/images/company/Goals1.webp'
import ourGoal1 from "../../assets/images/company/Goals2.webp";


const OurGoal = () => {
  return (
    <>
      <section className="relative pt-16 md:pt-24 px-6 md:px-24">
        <div className="absolute inset-0 rounded-3xl"></div>{" "}
        {/* Dark overlay for contrast */}
        <div className="relative z-20 flex flex-col items-center space-y-6">
          {/* Heading Section */}
          <div className="w-full text-center">
            <h1 className="text-3xl md:text-8xl font-extrabold text-white tracking-wide mb-2">
              OUR GOAL
            </h1>
          </div>

          {/* Responsive Paragraph Section */}
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-center md:text-center px-2 sm:px-4 md:px-0">
              Since our inception, we've been dedicated to helping businesses
              thrive with innovative solutions, captivating brands, and
              transformative digital products. With each passing year, our
              expertise deepens, enabling us to craft products that exceed
              expectations and leave a lasting impact.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-full flex  lg:flex-row gap-6 md:gap-10 px-4 md:px-20 py-12 md:py-20 items-center justify-center">
        {/* Left Image */}
        <div className="w-full md:w-1/2 lg:w-1/3 rounded-3xl overflow-hidden shadow-lg">
          <img
            src={ourGoal1}
            alt="Working on tablet"
            className="w-full h-64 md:h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 lg:w-1/3 rounded-3xl overflow-hidden shadow-lg mt-50">
          <img
            src={ourGoal2}
            alt="Team collaboration"
            className="w-full h-64 md:h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
}

export default OurGoal
