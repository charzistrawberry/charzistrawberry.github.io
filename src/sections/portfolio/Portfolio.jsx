import './portfolio.css'
import github from '../../assets/github.png'
import ensemble from '../../assets/ensemble.png'
import decaf from '../../assets/decaf.png'
import fakeSO from '../../assets/fakeSO.png'
import flappy from '../../assets/flappy.png'
import train from '../../assets/train.jpg'
import EnsembleDroid from '../../assets/EnsembleDroid.pdf'



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={github} alt="github" />
          </div>
          <h3>charzistrawberry.github.io</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/charzistrawberry/charzistrawberry.github.io" className= "btn" target="_blank">Github</a>
          </div>
         
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ensemble} alt="ensemble" />
          </div>
          <h3>EnsembleDroid</h3>
          <div className="portfolio__item-cta">
            <a href="https://ieeexplore.ieee.org/document/10002213" className= "btn" target="_blank">IEEE Xplore</a>
          </div>
         
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={decaf} alt="decaf" />
          </div>
          <h3>Decaf Compiler</h3>
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/charzistrawberry/decaf_compiler" className= "btn" target="_blank">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={fakeSO} alt="fakeSO" />
          </div>
          <h3>Fake Stack Overflow</h3>
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/charzistrawberry/fakeStackOverFlow" className= "btn" target="_blank">Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={flappy} alt="flappy" />
          </div>
          <h3>Flappy Bird Family</h3>
          
          <div className="portfolio__item-cta">
            <a href="https://www.youtube.com/watch?v=_wWUUwku3p0&ab_channel=s.guan" className= "btn" target="_blank">Youtube</a>
          </div>
        
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={train} alt="train" />
          </div>
          <h3>Long Island Railroad Simulation</h3>
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/charzistrawberry/LIRR-Simulator" className= "btn" target="_blank">Github</a>
          </div>
        </article>
      </div>



    </section>
  )
}

export default Portfolio