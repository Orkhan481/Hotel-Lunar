import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
const RoomsSuites = () => {
  return (
    <>
      <div className='rooms-page'>
        <h1 className='xlg-text text-pink'>
        <Typed
                strings={[
                    'OUR ROOMS AND RATE']}
                    typeSpeed={60}
                     >
                </Typed>
          </h1>
      </div>
      <div className='our-rooms'>
{/* ROOM-1 */}
        <div className="rooms">
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400762/room-1_qnuwux.jpg" alt="Room-1" className='room-image'  />
          <h3 className='md-text'>Standard Double Room</h3>
          <div className="room-properties">
            <p className='sm-text'><span className='dott'></span>1 bathroom</p>
            <p className='sm-text'><span className='dott'></span>2 beds</p>
            <p className='sm-text'><span className='dott'></span>2 people</p>
          </div>
          <div className="price">
             <span className='text-pink lg-text'>100,000 per night</span> 
             <button className='btn btn-pink text-white sm-text'> <Link to="/contact" className='link'>Book Now</Link></button>
          </div>
        </div>
{/* ROOM-2 */}
        <div className="rooms">
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400812/room-2_wltrtc.jpg" alt="Room-2" className='room-image' />
          <h3 className='md-text'>Classic Standard Room</h3>
          <div className="room-properties">
            <p className='sm-text'><span className='dott'></span>1 bathroom</p>
            <p className='sm-text'><span className='dott'></span>2 beds</p>
            <p className='sm-text'><span className='dott'></span>2 people</p>
          </div>
          <div className="price">
             <span className='text-pink lg-text'>50,000 per night</span> 
             <button className='btn btn-pink text-white sm-text'><Link to="/contact" className='link'>Book Now</Link></button>
          </div>
        </div>

        {/* ROOM-3 */}
        <div className="rooms">
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657401038/room-3_rfzpq6.jpg" alt="Room-2" className='room-image' />
          <h3 className='md-text'>Classic Double Room</h3>
          <div className="room-properties">
            <p className='sm-text'><span className='dott'></span>1 bathroom</p>
            <p className='sm-text'><span className='dott'></span>2 beds</p>
            <p className='sm-text'><span className='dott'></span>2 people</p>
          </div>
          <div className="price">
             <span className='text-pink lg-text'>150,000 per night </span> 
             <button className='btn btn-pink text-white sm-text'><Link to="/contact" className='link'>Book Now</Link></button>
          </div>
        </div>

        {/* ROOM-4 */}
        <div className="rooms">
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400857/room4_gnozdu.jpg" alt="Room-2" className='room-image' />
          <h3 className='md-text'>Deluxe Suite with balcony view</h3>
          <div className="room-properties">
            <p className='sm-text'><span className='dott'></span>1 bathroom</p>
            <p className='sm-text'><span className='dott'></span>2 beds</p>
            <p className='sm-text'><span className='dott'></span>2 people</p>
          </div>
          <div className="price">
             <span className='text-pink lg-text'>50,000 per night</span> 
             <button className='btn btn-pink text-white sm-text'><Link to="/contact" className='link'>Book Now</Link></button>
          </div>
        </div>
        {/* ROOM-5 */}
        <div className="rooms">
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400829/room-5_qqlrpz.jpg" alt="Room-2" className='room-image' />
          <h3 className='md-text'>Family suite with balcony view</h3>
          <div className="room-properties">
            <p className='sm-text'><span className='dott'></span>1 bathroom</p>
            <p className='sm-text'><span className='dott'></span>2 beds</p>
            <p className='sm-text'><span className='dott'></span>2 people</p>
          </div>
          <div className="price">
             <span className='text-pink lg-text'>150,000 per night</span> 
             <button className='btn btn-pink text-white sm-text'><Link to="/contact" className='link'>Book Now</Link></button>
          </div>
        </div>

        {/* ROOM-6 */}
        <div className="rooms">
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657400943/room-6_wduuok.jpg" alt="Room-2" className='room-image' />
          <h3 className='md-text'>Penthouse suite with balcony view</h3>
          <div className="room-properties">
            <p className='sm-text'><span className='dott'></span>1 bathroom</p>
            <p className='sm-text'><span className='dott'></span>2 beds</p>
            <p className='sm-text'><span className='dott'></span>2 people</p>
          </div>
          <div className="price">
             <span className='text-pink lg-text'>50,000 per night</span> 
             <button className='btn btn-pink text-white sm-text'><Link to="/contact" className='link'>Book Now</Link></button>
          </div>
        </div>

        
        

      </div>

    </>
  )
}

export default RoomsSuites;