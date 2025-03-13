import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Brief from './Brief'
import FuturaRoboticsFooter from './FuturaRoboticsFooter'
import VideoSection from './VideoSection';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Brief/>
      <VideoSection/>
      <FuturaRoboticsFooter/>
    </>
  )
}

export default App
