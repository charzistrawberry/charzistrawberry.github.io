import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <footer>
     

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#aboput">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Portfolio</a></li>
        <li><a href="#testimonials">Activities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyreight">
        <small>&copy; Sharon Guan. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer