import React from 'react'
import '../commision/feedback.css'
import Newletter from './Newletter.jsx'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Feedback = () => {
    const testimonials = [
    {    id: 1,
        text: " The Ember Chair transformed our entire living room. it has a presence - a warth - that photographs simply cannot capture.",
        author: "Claire Fontaine",
        location : "Paris, France"
    },
    {    id: 2,
        text: " The Ember Chair transformed our entire living room. it has a presence - a warth - that photographs simply cannot capture.",
        author: "Marcus Vance",
        location : "London, UK"
    },
    {    id: 3,
        text: " Incredible attention to detail. The minialist aesthetic fits perfectly  into our mordern studio design.",
        author: "Ndubuizu Chibuike",
        location : "Lagos, NGR"
    },
    ]
  return (
    <div className='feedback-container'>
        <div className='feedback-wrapper'>
            <div className='feedback-text-wrapper'>
                <h5>VOICES</h5>
                <h1>What Our Clients Say</h1>
            </div>
            <div className='feedback-slide-wrapper'>
                    <Swiper
                    modules={[Pagination, Autoplay]} 
                    spaceBetween ={50}
                    slidersPerView={1}
                    pagination={{clickable: true}}
                    // autoplay={{delay:5000, disableOnInteraction: false}}
                    
                    className="mySwiper"
                    >
                        {
                            testimonials.map((item)=>(
                                <SwiperSlide key={item.id}>
                                    <div className='slide-content'>
                                        <p className='testimonial-text'>{item.text}</p>
                                        <h4 className='author-name'>{item.author}</h4>
                                        <p className='author-location'>{item.location}</p>

                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        
                    </Swiper>
            </div>
        </div>
        <>
        <Newletter/>
        </>
      
    </div>
  )
}

export default Feedback
