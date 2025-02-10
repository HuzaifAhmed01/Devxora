import React from 'react'
import { PhilosophyVideo } from '../../assets/images'

const Philosophy = () => {
  return (
    <section className=' p-3 py-10 lg:px-12 lg:py-14 w-full h-auto text-white flex  flex-col gap-8 lg:20 text-center'>

      <h2 className='text-4xl lg:text-8xl font-bold lg:pb-14 '>Our Philosophy</h2>
<div className='flex gap-10 items-center justify-center  '>
<div className=' hidden  lg:block  w-xl h-80 rounded-2xl overflow-hidden' >
<video src={PhilosophyVideo} autoPlay loop muted className='w-full h-full object-cover'></video>
</div>

<p className='w-2xl lg:w-xl text-[17px] text-justify leading-6  ' >
In our team, developers work alongside designers, strategists and analysts. Devxora doesn't do cookie-cutter solutions and we build products exactly as they were during the design phase, no short cuts or simplifications.

We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.
</p>

  </div>      
    </section>
  )
}

export default Philosophy
