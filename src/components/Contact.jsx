import React from 'react'
import Typed from 'react-typed';
const Contact = () => {
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
    </>
  )
}

export default Contact;