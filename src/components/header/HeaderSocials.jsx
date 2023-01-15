import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ayush-bhatt-214b3b21b" target='_new'><BsLinkedin/></a>
        <a href="https://github.com/ayushbhatt14257" target='_new'><FaGithub/></a>
        <a href="https://www.instagram.com" target='_new'><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials