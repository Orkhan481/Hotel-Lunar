import React from 'react'
import Typed from 'react-typed';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yejpvv6', 'template_zwpe5wj', form.current, 'k3_c03PZF_WlQK8Y8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <>
      <div className="contact"><h1 className='text-pink xlg-text'>
        <Typed
          strings={[
            'CONTACT US']}
          typeSpeed={60}
        >
        </Typed>
      </h1>
      </div>

      <div className='reservation'>
        <div className="left-side">
          <div class="map">
            <div class="gmap">
              <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20Peace%20Avenue%20%20,%20Ado%20,Ekiti&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0">
              </iframe><a href="https://fmovies-online.net">
              </a><a href="https://www.embedgooglemap.net"></a>
            </div>
          </div>


          <div className="address ">
            <h1>Hotel Lunar</h1>
            <span>will give you the comfort you deserve</span>
            <h2>Address : Road 12, Peace Avenue,Ado,Ekiti</h2>
            <h2>Phone number : +2349061504648</h2>
            <h2>Email : hotel-lunar@mail.ru</h2>
          </div>
        </div>

        <form className="right-side" ref={form} onSubmit={sendEmail}>
{/*Reserervation Information  */}
          <h1 className='text-pink xlg-text title'>Reservation Information</h1>

          <div className="reservation-information">
          <div className="labels">
          <label className='label'>Room Type:</label>
            <label htmlFor="">Check In Date</label>
            <label htmlFor="">Check Out Date</label>
          </div>

         <div className="inputs">
         <select name="roomtype" id="roomtype" className='select-input'>
              <option value="Standard Double Room">Standard Double Room</option>
              <option value="Classic Standard Room">Classic Standard Room</option>
              <option value="Classic Double Room">Classic Double Room</option>
              <option value="Deluxe Suite with balcony view">Deluxe Suite with balcony view</option>
              <option value="Family suite with balcony view">Family suite with balcony view</option>
              <option value="Penthouse suite with balcony view">Penthouse suite with balcony view</option>
            </select>
                <input type="date" name="checkin" id="checkin" className='date-input'/>
                <input type="date" name="checkout" id="checkout" className='date-input'/>
         </div>
            
         

        

          </div>
{/* Personal Information */}
          <h1 className='text-pink xlg-text title xlg-text'>Personal Information</h1>

          <div className="personal-information">
            <label>Name:</label>
            <input type="text" name="name" id="name" />
            <label>Surname:</label>
            <input type="text" name="surname" id="surname" />
            <label>Mobile:</label>
            <input type="text" name="mobile" id="mobile" />
            <label>Email:</label>
            <input type="email" name="email" /> <br />
            <button className='btn btn-pink md-text'>Reserve</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Contact