import './testimonials.css'
import avatar from '../../assets/avatar.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data=[
  {
    avatar: avatar,
    name: "James Bond",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio voluptatibus nam a est vero iure! Repellendus excepturi tempora ut quas, aspernatur molestias earum necessitatibus magnam, minus sapiente, perferendis quod"
  },
  {
    avatar: avatar,
    name: "Iron Man",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio voluptatibus nam a est vero iure! Repellendus excepturi tempora ut quas, aspernatur molestias earum necessitatibus magnam, minus sapiente, perferendis quod"
  },
  {
    avatar: avatar,
    name: "Joe Biden",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio voluptatibus nam a est vero iure! Repellendus excepturi tempora ut quas, aspernatur molestias earum necessitatibus magnam, minus sapiente, perferendis quod"
  },
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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