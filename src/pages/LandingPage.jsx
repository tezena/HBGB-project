import React from 'react'
// import NavBar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import OurWorks from '../components/OurWorks'
import Companies from '../components/Companies'
import ServicesLanding from '../components/ServicesLanding'
// import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
    {/* <NavBar /> */}
    <HeroSection />
    <ServicesLanding />
    <OurWorks />
    <Companies />
    {/* <Footer /> */}
    </>
  )
}

export default LandingPage