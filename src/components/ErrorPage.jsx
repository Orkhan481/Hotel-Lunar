import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const ErrorPage = () => {
  return (
    <div className='error-page'>
    <h1>Forbidden</h1>
    <span>403</span>
    <h2>We are sorry,but you don't have access to this page or resource</h2>
    <button className='btn'><Link to="/Hotel-Lunar">Back to Home Page</Link></button>
    </div>
  )
}

export default ErrorPage