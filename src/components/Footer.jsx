import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    <div className='footer'>

    <div className="address">
        <h1>Hotel Lunar</h1>
            <span>will give you the comfort you deserve</span>
        <h2>Address : Road 12, Peace Avenue,Ado,Ekiti</h2>
        <h2>Phone number : +2349061504648</h2>
        <h2>Email : hotel-lunar@mail.ru</h2>
    </div>

    <div className="footer-nav-links">


        <a className='lg-text'><Link to="/Hotel-Lunar/" className='link'>Home</Link></a>
        <a className='lg-text'><Link to="/roomssuites/" className='link'>Rooms&Suites</Link></a>
        <a className='lg-text'><Link to="/facilities/" className='link'>Facilities</Link></a>
        <a className='lg-text'><Link to="/contact/" className='link'>Contact</Link></a>

    </div>

    <div className="footer-social">
        <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>

    
</div>

</>
  )
  }

export default Footer