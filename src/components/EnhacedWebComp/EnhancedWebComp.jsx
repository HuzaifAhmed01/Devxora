import React from 'react'
import GradientButton from '../gradientButton/GradientButton'

const EnhancedWebComp = () => {
  return (
    <div className='w-full h-auto py-10 lg:h-screen flex flex-col text-white items-center justify-center gap-8 text-center'>

        <h1 className='text-4xl  lg:text-6xl capitalize font-extrabold w-[100%] lg:w-[60%] lg:leading-24'>Enhanced Web Applications</h1>
<h5 className='text-[17px] lg:text-[16px] md:text-sm lg:text-sm capitalize w-[80%] text-justify lg:text-center '>DevXora is a dynamic software company committed to delivering innovative and high-performance web solutions. We craft seamless digital experiences that enhance business growth, efficiency, and user engagement. With a focus on innovation and excellence, DevXora transforms ideas into powerful digital solutions tailored to your needs.</h5>
      <h4>Want to know about us?</h4>
      <GradientButton text={'About Us'}/>
    </div>
  )
}

export default EnhancedWebComp;
