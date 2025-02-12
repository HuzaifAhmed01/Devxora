import React from 'react'
import Hero from '../../components/Hero/Hero'
import SeconderyHome from '../../components/showreelSection/ShowreelSection'
import EnhancedWebComp from '../../components/EnhacedWebComp/EnhancedWebComp'
import FeaturedProjects from '../../components/freaturedProjects/FeaturedProjects'
import Philosophy from '../../components/Philosophy/Philosophy'
import AgencyComponent from '../../components/AgencyComponent/AgencyComponent'
import ProjectInquiry from '../../components/projectInquiry/ProjectInquiry'
import Marquee from '../../components/maquee/Marquee'



const Home = () => {
  return (
    <>
    
    <Hero/>
    <SeconderyHome/>
    <EnhancedWebComp/>
    <FeaturedProjects/>
    <Philosophy/>
    <AgencyComponent/>
    <ProjectInquiry/>

      
    </>
  )
}

export default Home
