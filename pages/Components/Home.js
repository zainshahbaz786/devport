import React from 'react'
import Expertise from './Expertise'
import IntroPage from './IntroPage'
import SecondPage from './SecondPage'
import Topbar from './Topbar'
import Connect from './Connect'

const Home = () => {
  return (
      <>
     <Topbar/>
    <IntroPage/>
  <SecondPage/>
  <Expertise/>
  <Connect/>
    </>
  )
}

export default Home
