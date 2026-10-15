import React from 'react'
import '../commision/commission.css'

const Commission = () => {
  return (
    <div className='commission-container'>
      <div className='commission-wrapper'>
        <div className='bespoke-wrapper'><h5>BESPOKE SERVICE</h5></div>
        <div className='commision-wrapper'>
            <h2>Commission Your</h2>
            <h2 style={{color:"rgb(212,132,59)"}}>Signature Piece</h2>
        </div>
        <div className='commission-btn'>
            <button>BEGIN COMMISSION</button>
        </div>
      </div>
    </div>
  )
}

export default Commission
