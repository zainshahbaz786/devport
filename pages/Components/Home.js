import React from 'react'
import Expertise from './Expertise'
import IntroPage from './IntroPage'
import SecondPage from './SecondPage'
import Topbar from './Topbar'
import Connect from './Connect'
import Projects from './Projects'
import Aims from './Aims'





const Home = () => {
  return (
      <>
      <section id="Introduction"><Topbar/><IntroPage/><SecondPage/></section>
     
     <section id="Expertise"><Expertise/></section>
     <section id="Aims"><Aims/></section>
    
  
  <section id="Projects"><Projects/></section>

  <section id="ContactUs"><Connect/></section>
  
    </>
  )
}

export default Home
