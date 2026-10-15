import React from 'react'
import './newletter.css'

const Newletter = () => {
  return (
    <div className='newslatter-container'>
        <div className='newsletter-text-wrapper'>
            <h5>THE INNER CIRCLE</h5>
            <h1>First Access to New Pieces</h1>
            <p className='newsletter-text'>Join our circle for early access, behind-the-scenes craft stories, and exclusive commissions.</p>
        </div>
        <div className='newletter-join-info-wrapper'>
            <input type="text" placeholder='your@email.com' />
            <button>JOIN</button>
        </div>
      
    </div>
  )
}

export default Newletter
