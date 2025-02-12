import React from 'react'
import { Benefits } from '../../constants/index';
import './BenifitsSection.css'
const BenefitSection = () => {

  
  return (
    <>
      <section
        className="cb-summary bg-white text-black py-10 sm:py-14 md:py-20"
        id="benefits"
      >
       

        <div className="cb-summary-content container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cb-summary-container max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="cb-summary-header text-center mb-8 sm:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-tight">
                Benefits of working with us
              </h1>
            </div>

            {/* Divider */}
            <div className="cb-summary-divider flex justify-center mb-8 sm:mb-10">
              <div className="cb-divider w-1/2 md:w-2/3 h-0.5 bg-gray-900"></div>
            </div>

            {/* Benefits Grid */}
            {Benefits.map((items, index) => {
              let Icon = items.svg;
              return (
                <div
                  key={index}
                  className="cb-summary-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-9 border-b-2 pb-6"
                >
                  {/* Icon Section */}
                  <div className="cb-summary-grid-col flex justify-center items-center">
                    <div className="cb-summary-icon text-5xl sm:text-6xl md:text-7xl ">
                      <Icon className="IconSpin" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="cb-summary-grid-col">
                    <div className="cb-summary-info text-center md:text-left">
                      <div className="cb-summary-caption mb-4 sm:mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold">
                          {items.h3}
                        </h3>
                      </div>
                      <div className="cb-summary-text">
                        <p className="text-base sm:text-lg leading-relaxed">
                          {items.paragraph}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default BenefitSection
