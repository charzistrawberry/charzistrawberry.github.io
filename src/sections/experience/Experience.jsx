import './experience.css'
import { BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id = "experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className = "container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>



        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
                </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__cybersecurity">
          <h3>Machine Learning/AI</h3>
          <div className="experience__content">

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Python/R</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Scikit-Learn</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Data Preprocessing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Modeling and Evaluation</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__cybersecurity">
          <h3>Cybersecurity</h3>
          <div className="experience__content">

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Malware Detection</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>IT Auditing</h4>
                <small className="text-light">Experienced</small>
                </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Government Accountability</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className = "experience__details">
              <BsPatchCheckFill className = "experience__details-icon"/>
              <div>
                <h4>Effective Communication</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    
    
    
    
    
    </section>
  )
}

export default Experience