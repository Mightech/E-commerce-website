import React from 'react'
import '../checkout/confirmationpage.css'
import { useNavigate } from 'react-router';

const Confirmationpage = () => {
    const nav = useNavigate();
  return (
    <main className='confirmationpage-container'>
        <div className='confirmationpage-wrapper'>
              <div className='confirmation-sucessful-wrapper'>
                <section>✔</section>
                <h5>Order Confirmed</h5>
              </div>
              <div className='confirmation-thankyou-wrapper'>
                <h1>Thank You,</h1>
                <h1>Dear Guest.</h1>
              </div>
              <div className='confirmation-writeup-wrapper'>
                <p className='long-text'>Your order has been received and our team will begin preparation within 24 hours.</p>
                <p>A confirmation has been sent to <span style={{color:"rgb(189, 59, 12)"}}>your email.</span></p>
              </div>
              <div className='confirmation-product-box-wrapper'>
                <div className='confirmation-product-box'></div>

              </div>
              <div className='confirmation-btn' onClick={()=>(nav('/'))}><button>RETURN HOME</button></div>
        </div>
      
    </main>
  )
}

export default Confirmationpage
