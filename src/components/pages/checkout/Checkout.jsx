import React from 'react'
import '../checkout/checkout.css'
import { useNavigate } from 'react-router';
// import Cart from '../cart/Cart.jsx'
import {useCart} from '../CartContext'



const Checkout = (product, quantity) => {
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
        <div className='checkout-container'>
            <div className='checkout-nav-wrapper'>
                <div className='checkout-nav'>
                    <h5>HOME</h5>
                    <span>›</span>
                    <h5>CART</h5>
                    <span>›</span>
                    <h5>CHECKOUT</h5>
                </div>
                <div className='checkout-level'>
                   <section className='checkout-section'>
                    <span className='box'>1</span>
                    <h5>CONTACT</h5>
                    <p className='line'></p>
                   </section>
                
                   <section className='checkout-section'>
                  
                    <span className='box'>2</span>
                    <h5>DELIVERY</h5>
                    <p  className='line'></p>
                   </section>
                   <section className='checkout-section'>
                 
                    <span className='box'>3</span>
                    <h5>PAYMENT</h5>
                   </section>
                </div>
            </div>
            <div className='checkout-details-wrapper'>
                <div className='checkout-input-wrapper'>
                    <h2>Contact Information</h2>
                    <section className='checkout-email'>
                        <label htmlFor="">EMAIL ADDRESS</label>
                        <input type="text" placeholder='your@eaple.com' />
                    </section>
                    <section className='checkout-phone'>
                        <label htmlFor="">PHONE NUMBER</label>
                        <input type="text" placeholder='+234 700 567 7865' />
                    </section>
                    <div className='checkout-name-wrapper'>
                    <section className='checkout-name'>
                        <label htmlFor="">FIRST NAME</label>
                        <input type="text" placeholder='Joe' />
                    </section>
                    <section className='checkout-name'>
                        <label htmlFor="">LAST NAME</label>
                        <input type="text" placeholder='Doe' />
                    </section>
                    </div>
                    <button className='continue-to-delivery-btn' onClick={()=>(
                        nav('/delivery')
                    )}>CONTINUE TO DELIVERY</button>
                   
                </div>
                <div className='checkout-cart-summary-wrapper'>
                    <div className='checkout-cart-box'>
                            <h6 style={{color:"rgb(164,75,16)"}}>YOUR ORDER</h6>
                            <div className='checkout-product-wrapper'>
                                
                                {cart.map((product)=>{
                                     
                                    return <div className='checkout-product-details' key={product.id}>
                                     <section className='checkout-img-wrapper'>
                                         <span className='numbers-of-items'>{product.quantity}</span>
                                         <img src={product.image} alt=""/>
                                     </section>
                                  
                                     <p style={{color:"rgb(104,79,42)"}}>{product.name}</p>
                                     <h5 style={{color:"rgb(164,75,16)"}}>{formatAmount(product.price)}</h5>
                                 </div>
                                })}
                               

                            </div>
                            <div className='checkout-listing'>
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
                            <div className='checkout-total-wrapper'>
                                <h5 style={{color:"rgb(55,35,18)"}}>TOTAL</h5>
                                <h3 style={{color:"white"}}>{formatAmount(total)}</h3>

                            </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Checkout