import React from 'react'
import '../checkout/payment.css'
import { useNavigate } from 'react-router';
import {useCart} from '../CartContext'

const Payment = () => {
  const nav = useNavigate();
 const {cart } = useCart();
    
    function formatAmount(value) {
        return `$${value.toLocaleString("en-US")}`;
    }
    
    const subtotal = cart.reduce(
        (sum, product) =>
            sum + product.price * product.quantity,
        0
    );
    const shipping = 0;
    const tax = 534;
    const total = subtotal + shipping + tax;
  
return(
    <div className='payment-container'>
        <div className='payment-nav-wrapper'>
            <div className='payment-nav'>
                <h5>HOME</h5>
                <span>›</span>
                <h5>CART</h5>
                <span>›</span>
                <h5>CHECKOUT</h5>
            </div>
            <div className='payment-level'>
               <section className='payment-section'>
                <span className='box'>1</span>
                <h5>CONTACT</h5>
                <p className='line'></p>
               </section>
            
               <section className='payment-section'>
              
                <span className='box'>2</span>
                <h5>DELIVERY</h5>
                <p  className='line'></p>
               </section>
               <section className='payment-section'>
             
                <span className='box'>3</span>
                <h5>PAYMENT</h5>
               </section>
            </div>
        </div>
        <div className='payment-details-wrapper'>
            <div className='payment-input-wrapper'>
                <h2>Payment</h2>
                <section className='payment-email'>
                    <label htmlFor="">NAME ON CARD</label>
                    <input type="text" placeholder='JOE DOE' />
                </section>
                <section className='payment-email'>
                    <label htmlFor="">CARD NUMBER</label>
                    <input type="text" placeholder='4242 4242 4242 4242' />
                </section>
               
                <div className='payment-name-wrapper'>
                <section className='payment-name'>
                    <label htmlFor="">EXPIRY</label>
                    <input type="text" placeholder='MM/YY' />
                </section>
                <section className='payment-name'>
                    <label htmlFor="">CVV</label>
                    <input type="text" placeholder='...' />
                </section>
                </div>
                <div className='continue-to-payment-btn'>
                <button onClick={()=>(nav(-1))} className='payment-back-btn'>BACK</button>
                <button className='continue-to-delive-btn' onClick={()=> (nav('/confirmationpage'))}>PLACE ORDER - {formatAmount(total)}</button>
                </div>
               
               
            </div>
            <div className='payment-cart-summary-wrapper'>
                <div className='payment-cart-box'>
                        <h6 style={{color:"rgb(164,75,16)"}}>YOUR ORDER</h6>
                        <div className='payment-product-wrapper'>
                            {cart.map((product)=>{
                                 
                                return <div className='payment-product-details' key={product.id}>
                                 <section className='payment-img-wrapper'>
                                     <span className='numbers-of-items'>{product.quantity}</span>
                                     <img src={product.image} alt=""/>
                                 </section>
                              
                                 <p style={{color:"rgb(104,79,42)"}}>{product.name}</p>
                                 <h5 style={{color:"rgb(164,75,16)"}}>{formatAmount(product.price)}</h5>
                             </div>
                            })}
                           

                        </div>
                        <div className='payment-listing'>
                            <section className='subtotal-section'>
                                <h5  style={{color:"rgb(55,35,18)"}}>Subtotal</h5>
                                <h5 style={{color:"rgb(75,52,42)"}}>{formatAmount(subtotal)}</h5>
                            </section>
                            <section className='subtotal-section'>
                                <h5 style={{color:"rgb(55,35,18)"}}>Shipping</h5>
                                <h5 style={{color:"rgb(164,75,16)"}}>free</h5>
                            </section>
                            <section className='subtotal-section'>
                                <h5  style={{color:"rgb(55,35,18)"}}>Tax</h5>
                                <h5 style={{color:"rgb(75,52,42)"}}>{formatAmount(tax)}</h5>
                            </section>

                        </div>
                        <div className='payment-total-wrapper'>
                            <h5 style={{color:"rgb(55,35,18)"}}>TOTAL</h5>
                            <h3 style={{color:"white"}}>{formatAmount(total)}</h3>

                        </div>

                </div>
            </div>
        </div>

    </div>
)
}

export default Payment
