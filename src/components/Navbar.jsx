import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        // <div>
        //     <nav>
        //         <li><Link to="/" id='logo' className='link'>Hotel Lunar</Link></li>
        //         <ul>
        //             <li><Link to="/" className='link'>Home</Link></li>
        //             <li><Link to="/roomssuites" className='link'>Rooms&Suites</Link></li>
        //             <li><Link to="/facilities" className='link'>Facilities</Link></li>
        //             <li><Link to="/contact" className='link'>Contact</Link></li>
        //             <div className="togglers">
        //                 <span className="toggler"></span>
        //                 <span className="toggler"></span>
        //                 <span className="toggler"></span>
        //             </div>
        //         </ul>
        //     </nav>

        //     </div>
        <nav class="top-nav">
            <div>
                <li><Link to="/Hotel-Lunar/" id='logo' className='link'>Hotel Lunar</Link></li>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li><Link to="/Hotel-Lunar/" className='link'>Home</Link></li>
                <li><Link to="/roomssuites/" className='link'>Rooms&Suites</Link></li>
                <li><Link to="/facilities/" className='link'>Facilities</Link></li>
                <li><Link to="/contact/" className='link'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar