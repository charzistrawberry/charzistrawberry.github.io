import React from 'react'
import { BsLink, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__Socials">
        <a href="https://www.linkedin.com/in/sharon-guan-2575b8226/" target ="_blank"><BsLinkedin/></a>
        <a href= "https://github.com/charzistrawberry" target = "_blank"><FaGithub/></a>

    </div>
  )
}

export default HeaderSocials