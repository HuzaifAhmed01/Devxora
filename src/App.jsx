  import React from 'react'

  import Router from '../Router'
  import SmoothScroll from './utils/SmoothScroll'
import Navbar from './components/Navbar/Navbar'
import Marquee from './components/maquee/Marquee'
import Footer from './components/Footer/Footer'
  // import Navbar from './components/Navbar/Navbar'
  const App = () => {
    return (
      <>
    
      <Navbar/>
  <SmoothScroll>
  <Router/>
  <Marquee text={'Flawless Dev, Smooth UX '} speed={15}/>
  <Footer/>
  </SmoothScroll>
      </>
    )
  }

  export default App
