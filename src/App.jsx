import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturedProducts from './components/FeaturedProducts'
import SpecialOffer from './components/SpecialOffer'
import AntiAgingCream from './components/AntiAgingCream'
import QualityProducts from './components/QualityProducts'
import StayUpdated from './components/StayUpdated'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='max-w-[2000px] mx-auto'>
      <HeroSection />
      <FeaturedProducts />
      <SpecialOffer />
      <AntiAgingCream />
      <QualityProducts />
      <StayUpdated />
      <AboutUs />
      <Contact />
    </div>
  )
}

export default App
