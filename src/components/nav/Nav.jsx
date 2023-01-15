import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'
// import {Link} from 'react-router-dom;'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === "#experience" ? 'active' : ''}><BiBookAlt/></a>
      <a href="#services" onClick={() => setActiveNav('#service')} className = {activeNav === "#service" ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage/></a>

      {/* <Link to = '/' onClick={() => setActiveNav('/')} className={activeNav === "/" ? 'active' : ''}><AiOutlineHome/></Link>
      <Link to = '/about' onClick={() => setActiveNav('#about')} className = {activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></Link>
      <Link to = '/experience' onClick={() => setActiveNav('#experience')} className = {activeNav === "#experience" ? 'active' : ''}><BiBookAlt/></Link>
      <Link to = '/services' onClick={() => setActiveNav('#service')} className = {activeNav === "#service" ? 'active' : ''}><RiServiceLine/></Link>
      <Link to = '/contact'  onClick={() => setActiveNav('#contact')} className = {activeNav === "#contact" ? 'active' : ''}><AiOutlineMessage/></Link> */}

      {/* <a href="/"><AiOutlineHome/></a>
      <a href="/about"><AiOutlineUser/></a>
      <a href="/experience"><BiBookAlt/></a>
      <a href="/services"><RiServiceLine/></a>
      <a href="/contact"><AiOutlineMessage/></a> */}
    </nav>
  )
}

export default Nav