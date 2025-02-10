import React from 'react'

const BenefitSection = () => {
  return (
    <>
      <section className="cb-summary  text-white py-20" id="benefits">
        <div className="cb-summary-fill  h-2 w-full"></div>
        <div className="cb-summary-content container mx-auto px-4">
          <div className="cb-summary-container max-w-4xl mx-auto">
            <div className="cb-summary-header text mb-10">
              <h1 className="text-8xl font-bold">
                <em className="italic">Benefits</em> of working with us
              </h1>
            </div>
            <div className="cb-summary-divider flex justify-center mb-10">
              <div className="cb-divider w-600 h-0.5 bg-gray-400"></div>
            </div>
            <div className="cb-summary-grid grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="cb-summary-grid-col flex justify-center items-center">
                <div className="cb-summary-icon animate-spin-slow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 80 80"
                    className="w-20 h-20 text-white"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="4"
                      d="M22.72 71.22a9 9 0 0 0 8.36 3.33l27.32-3.97A9 9 0 0 0 65.46 65l10.22-25.64a9 9 0 0 0-1.3-8.9L57.29 8.77a9 9 0 0 0-8.36-3.33L21.6 9.42a9 9 0 0 0-7.06 5.57L4.32 40.64a9 9 0 0 0 1.3 8.9l17.1 21.68Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="4"
                      d="m27.21 23.61 5.13 35.6L60.56 36.9 27.2 23.6Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="4.08"
                      d="m26.97 72.69 6.11-15.62"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="4.08"
                      d="m59.39 37.31 15.59-2.92"
                    />
                    <path
                      stroke="currentColor"
                      strokeWidth="4.08"
                      d="m18.46 11.87 9.67 12.62"
                    />
                  </svg>
                </div>
              </div>
              <div className="cb-summary-grid-col">
                <div className="cb-summary-info">
                  <div className="cb-summary-caption mb-6">
                    <h3 className="text-3xl font-bold">
                      Time zones ain’t no thing
                    </h3>
                  </div>
                  <div className="cb-summary-text">
                    <p className="text-lg">
                      Wherever you are in the world, you’ll feel like we’re
                      right around the corner. With 12 years of experience, our
                      business processes are seamless and time differences don’t
                      matter.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default BenefitSection
