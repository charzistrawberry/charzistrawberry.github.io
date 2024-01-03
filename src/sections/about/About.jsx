import './about.css'
import sharon3 from '../../assets/sharon3.jpg'
import { MdComputer } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { MdOutlineScience } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={sharon3} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className = "about__card">
              <MdComputer className="about__icon"/>
              <h5>Major</h5>
              <small>Computer Science</small>

            </article>

            <article className = "about__card">
              <TbSchool className="about__icon"/>
              <h5>Year</h5>
              <small>Senior</small>
            </article>

            <article className = "about__card">
              <MdOutlineScience className="about__icon"/>
              <h5>Program</h5>
              <small>WISE Honors</small>
            </article>
          </div>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam autem similique ad doloremque ut enim cumque vel, atque sed commodi ex at? Maiores, amet veritatis! Facere cupiditate ipsum molestias. 
          </p>

          <a href="#contact" className="btn btn-primary"> Let's Talk</a>

        </div> 
      </div>
    
    </section>
  )
}

export default About