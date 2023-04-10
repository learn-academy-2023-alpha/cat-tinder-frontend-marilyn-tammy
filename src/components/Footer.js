import React from 'react'
import hopheart from '../assets/hopheart.png'

const Footer = () => {

  return (
    <> 
        <div className='footer'>
          <div className='footer-logo'>
            <img src={hopheart} alt="Hop Heart Icon" height="30px"/>
          </div>
          <div className='footer-text'>
            <p>&copy; Beer Tinder | Tammy & Marilyn</p>
          </div>
        </div>
    </>
  )
}

export default Footer