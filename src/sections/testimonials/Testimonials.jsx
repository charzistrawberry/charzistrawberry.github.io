import './testimonials.css'
import avatar from '../../assets/avatar.jpg'
import ieee from '../../assets/ieee.png'
import sbucomputing from '../../assets/sbucomputing.jpg'
import vipLogo from '../../assets/vipLogo.png'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
  {
    avatar: ieee,
    name: "IEEE Professional Development Chair",
    review: "Led the orchestration and oversight of the IEEE Research Conference Panel, a vital platform for showcasing cutting-edge research and promoting academic excellence within the IEEE community. Communicate with company employers for professional development opportunities. Responsible for professional, academic, social, and technical outreach/collaboration."
  },
  {
    avatar: sbucomputing,
    name: "Stony Brook Computing Society Community Chair",
    review: "Led workshop events on building technical skills and career preparation. Managed collaboration events with other clubs and organizations."
  },
  {
    avatar: vipLogo,
    name: "VIP Team Member",
    review: "Contributed to SBUMaps, a mobile app that helps Stony Brook University students navigate to their designated classes within a specific building. Conducted brief research in Secure Distributed Computation and Learning Networks under Professor Liu"
  },
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>School Involvment</h5>
      <h2>Activities</h2>

      <Swiper className="container testimonials__container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              
              <SwiperSlide key={index}className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className = "client__name">{name}</h5>
              <small className = "client__review">
                {review}
              </small>
            </SwiperSlide>

            )

          })
        }


      </Swiper>

    </section>
  )
}

export default Testimonials