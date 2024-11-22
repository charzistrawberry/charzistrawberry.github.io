import Header from './sections/header/Header';
import Nav from './sections/nav/Nav';
import About from './sections/about/About';
import Experience from './sections/experience/Experience';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';



const App = () => {
  return (
    <main>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </main>
  )
}

export default App