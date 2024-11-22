import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href ="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active': ''}> <AiOutlineHome/></a>
      <a href ="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'about' : ''}> <AiOutlineUser/></a>
      <a href ="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'experience' : ''}> <BiBook/></a>
      <a href ="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'services' : ''}> <RiServiceFill/></a>
      <a href ="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'contact' : ''}> <BiMessageSquareDetail/></a>

    </nav>
  )
}

export default Nav