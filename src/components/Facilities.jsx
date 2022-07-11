import React from 'react'
import Typed from 'react-typed';
const Facilities = () => {
  return (
    <>
      <div className="facilities text-pink xlg-text">
      <Typed
                strings={[
                    'FACILITIES']}
                    typeSpeed={60}
                     >
                </Typed>
        </div>
      <div className="facilities-list">
        {/* Swimming Pool */}
        <div className='swimming-pool facilities-list-item'>
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445526/swimming-pool_avjfpj.jpg" alt="Swimming Pool" />
          <h3>Swimming Pool</h3>
        </div>
        {/* Gym */}
        <div className='gym facilities-list-item'>
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445474/gym_gqydlg.jpg" alt="Gym" />
          <h3>Gym</h3>
        </div>
        {/* Resturants & Bar */}
        <div className='resturants-bar facilities-list-item'>
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445474/restaurant_kpqx8r.jpg" alt="Resturants Bar" />
          <h3>Resturants & Bar</h3>
        </div>
        {/* Spa & Jaccuzi */}
        <div className='spa-jaccuzi facilities-list-item'>
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445347/spa_z7rpqc.jpg" alt="Spa Jaccuzi" />
          <h3>Spa & Jaccuzi</h3>
        </div>
        {/* Conference Room */}
        <div className='conference-room facilities-list-item'>
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445387/conference-room_hs0p2z.jpg" alt="Conference Room" />
          <h3>Conference Room</h3>
        </div>
        {/* Packing Garage */}
        <div className='packing-garage facilities-list-item'>
          <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1657445440/parking-garage_jnatug.jpg" alt="Packing garage" />
          <h3>Packing Garage</h3>
        </div>

      </div>

      {/* We also offer */}
      <div className="offers">

        <div className="left-side offers-item">
          <h3 className='text-pink lg-text'>We also offer:</h3>
          <p className='text-black md-text'>LIbrary services</p>
          <p className='text-black md-text'>Free Wi-fi</p>
          <p className='text-black md-text'>Adequate safety/ security</p>
          <p className='text-black md-text'>Laundry services</p>
        </div>

        <div className="center offers-item">
              <p className='text-black md-text'>Delicious meals</p>
              <p className='text-black md-text'>Air cooling in all rooms</p>
              <p className='text-black md-text'>Room services</p>
              <p className='text-black md-text'>Ticket books</p>
              
        </div>

        <div className="right-side offers-item">
              <p className='text-black md-text'>Shuffle/ Private transfers</p>
              <p className='text-black md-text'>Neccessities for babies and chidren</p>
        </div>

      </div>
    </>
  )
}

export default Facilities;