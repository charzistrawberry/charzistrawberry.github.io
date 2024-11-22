import './about.css'
import sharon3 from '../../assets/sharon2.jpg'
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
              <h5>Computer Science</h5>
              <small>Student</small>

            </article>

            <article className = "about__card">
              <TbSchool className="about__icon"/>
              <h5>Stony Brook University</h5>
              <small>Senior</small>
            </article>

            <article className = "about__card">
              <MdOutlineScience className="about__icon"/>
              <h5>WISE Honors</h5>
              <small>Program</small>
            </article>
          </div>


          <p>
            As a Computer Science student, I approach my acadmic pursuits with a profound curiousity and unwavering commitment to continuous learning.
            I am adept at tackling challenges, driven by a genuine passion for delving into the intricate intersections of machine learning within the fields of cybersecurity and data analytics.
            This personal website serves as a platform to showcase my academic and professional endeavors, providing a comprehensive insight into my skills, projects, and aspirations!
          </p>

          <a href="#contact" className="btn btn-primary"> Let's Talk</a>

        </div> 
      </div>
    
    </section>
  )
}

export default About