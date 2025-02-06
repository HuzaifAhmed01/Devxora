import React from 'react'

const Hero = () => {
  return (
    <section className='  w-full h-screen lg:h-auto bg-[#111111] text-white  '>
<div className=" w-full flex flex-col  items-center justify-center gap-4 text-center pt-17 px-2 lg:px-0 ">


        {/* first heading  */}
        <h5 className="text-[12px] md:text-sm lg:text-sm  uppercase">AI + Design + DEVELOPMENT: Creating the Future, Today.</h5>

{/* for main heading */}
<h1 className="text-4xl  lg:text-7xl capitalize font-extrabold w-[100%] lg:w-[60%] lg:leading-24">Transforming Ideas into
Intelligent Products 
with AI.</h1>

{/* for subheading */}
<h5 className="text-[12px] md:text-sm lg:text-sm uppercase">Empowering businesses with AI-driven design and cutting-edge software development.</h5>

</div>
    </section>
  )
}

export default Hero
