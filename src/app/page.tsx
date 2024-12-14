import Navbar from '@/components/Navbar'
import MainSection from '@/components/MainSection'
import Faq from '@/components/(Faq)/faq'
import About from '@/components/(About)/about'
import Feature from '@/components/Feature'
import React from 'react'
import Topcategory from '../components/Newstyle'
import Newstyle from '@/components/Newstyle'
import OurProduct from '@/components/Ourproduct'
import Footer from '@/components/Footer'
import Contact from '@/components/(Contact)/contact'


export default function Home() {
  return(
    <div className='m-3'>
      <Navbar/>
      <MainSection />
      <Feature/>
      <Topcategory/>
      <Newstyle/>
      <OurProduct/>
      <About/>
      <Faq/>
      <Contact/>
      <Footer/>
    
    </div>
  )
}