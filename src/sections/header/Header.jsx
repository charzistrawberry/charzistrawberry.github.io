import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import sharon2 from '../../assets/headshot.jpg'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sharon Guan</h1>
        <h5 className="text-light">Computer Scientist In The Making</h5>
        <CTA/>
        <HeaderSocials/>


        <div className="me">
          <img src={sharon2} alt="me" />
        </div>

        <a href = "#contact" className = "scroll__down">Scroll Down</a>

        

      </div>
    </header>
  )
}

export default Header