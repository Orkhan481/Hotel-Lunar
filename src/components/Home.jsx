import React from 'react';
import Typed from 'react-typed';
import 'swiper/css';
import "swiper/css/bundle";
import "swiper/css/grid";
import { Navigation, Pagination, A11y, Keyboard, Grid } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <>
      <div className='home'>
        <h1 className='text-pink xlg-text'>

          <Typed
            strings={[
              'A MEMORABLE EXPERIENCE.']}
            typeSpeed={60}
          >
          </Typed>
        </h1>
        <button className='btn btn-pink text-white md-text'>Reserve Now</button>
      </div>
      {/* ABOUT START */}
      <div className='about'>
        <div className="about-info">
          <h1 className='xlg-text'>About <span className='text-pink'>Hotel Lunar</span></h1>
          <p className='sm-text'>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
          <br />
          <p className='sm-text'>Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. </p>
          <button className='btn btn-pink text-white'>Read more</button>
        </div>
        <div className="about-img-area">
          <img src='https://res.cloudinary.com/dreqpija0/image/upload/v1657397597/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash_zo3bn6.jpg' alt="" />
        </div>
      </div>
      {/* ABOUT FINISH */}
      {/* EVENTS&WEDDING START */}
      <div className="events">
        <h2 className='xlg-text text-black'>Events & Weddings</h2>
        <p className='lg-text text-black'> Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' <br /> has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a <br /> wake-up call and a message to be our messenger that people are the ones who can change what they <br /> want to change. </p>
      </div>
      {/* EVENTS&WEDDING FINISH */}
      {/* OUR GALERIES START */}

      <div className="our-galeries">
        <h1 className='xlg-text text-pink'>Our Galeries</h1>

        <Swiper className='swiper'
          modules={[Navigation, Pagination, A11y, Keyboard, Grid]}
          keyboard
          grid={{ rows:1 }}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          
        
        >
          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445526/swimming-pool_avjfpj.jpg" />
            </div>
          </SwiperSlide>
          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445474/restaurant_kpqx8r.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400857/room4_gnozdu.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445474/gym_gqydlg.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445387/conference-room_hs0p2z.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445347/spa_z7rpqc.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445248/facilities-bg_s89sdq.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657401038/room-3_rfzpq6.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400943/room-6_wduuok.jpg" />
            </div>
          </SwiperSlide>

          <SwiperSlide className='swipper-slide'>
            <div className="card-image">
              <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657449034/contact-us_yzfm2j.jpg" />
            </div>
          </SwiperSlide>


        </Swiper>

      </div>




      {/* OUR GALERIES FINISH */}

    </>
  )
}

export default Home;