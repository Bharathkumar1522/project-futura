import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Brief from './Brief'
import FuturaRoboticsFooter from './FuturaRoboticsFooter'
import VideoSection from './VideoSection';
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <>
     <ReactLenis root>
     <Navbar/>
      <Home/>
      <Brief/>
      <VideoSection/>
      <FuturaRoboticsFooter/>
    </ReactLenis>
      
    </>
  )
}

export default App
