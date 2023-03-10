import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Exprience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
        <Nav/>
        <Header/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>

    </>
  )
}

export default App;