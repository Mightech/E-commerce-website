import React from 'react'
import '../checkout/delivery.css'
import { useNavigate } from 'react-router';
import {useCart} from '../CartContext'

const Delivery = () => {
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
        <div className='delivery-container'>
            <div className='delivery-nav-wrapper'>
                <div className='delivery-nav'>
                    <h5>HOME</h5>
                    <span>›</span>
                    <h5>CART</h5>
                    <span>›</span>
                    <h5>CHECKOUT</h5>
                </div>
                <div className='delivery-level'>
                   <section className='delivery-section'>
                    <span className='box'>1</span>
                    <h5>CONTACT</h5>
                    <p className='line'></p>
                   </section>
                
                   <section className='delivery-section'>
                  
                    <span className='box'>2</span>
                    <h5>DELIVERY</h5>
                    <p  className='line'></p>
                   </section>
                   <section className='delivery-section'>
                 
                    <span className='box'>3</span>
                    <h5>PAYMENT</h5>
                   </section>
                </div>
            </div>
            <div className='delivery-details-wrapper'>
                <div className='delivery-input-wrapper'>
                    <h2>Delivery</h2>
                    <section className='delivery-email'>
                        <label htmlFor="">STREET ADDRESS</label>
                        <input type="text" placeholder='12 Reus street' />
                    </section>
                    <div className='delivery-name-wrapper'>
                    <section className='delivery-name'>
                        <label htmlFor="">CITY</label>
                        <input type="text" placeholder='Paris' />
                    </section>
                    <section className='delivery-name'>
                        <label htmlFor="">STATE / REGION</label>
                        <input type="text" placeholder='ile-de-france' />
                    </section>
                    </div>
                   
                    <div className='delivery-name-wrapper'>
                    <section className='delivery-name'>
                        <label htmlFor="">POSTAL CODE</label>
                        <input type="text" placeholder='75001' />
                    </section>
                    <section className='delivery-name'>
                        <label htmlFor="">COUNTRY</label>
                        <input type="text" placeholder='United States' />
                    </section>
                    </div>
                    <div className='continue-to-payment-btn'>
                    <button onClick={()=>(nav(-1))} className='payment-back-btn'>BACK</button>
                    <button className='continue-to-delive-btn' onClick={()=> (nav('/payment'))}>CONTINUE TO PAYMENT</button>
                    </div>
                   
                   
                </div>
                <div className='delivery-cart-summary-wrapper'>
                    <div className='delivery-cart-box'>
                            <h6 style={{color:"rgb(164,75,16)"}}>YOUR ORDER</h6>
                            <div className='delivery-product-wrapper'>
                                {cart.map((product)=>{
                                     
                                    return <div className='delivery-product-details' key={product.id}>
                                     <section className='delivery-img-wrapper'>
                                         <span className='numbers-of-items'>{product.quantity}</span>
                                         <img src={product.image} alt=""/>
                                     </section>
                                  
                                     <p style={{color:"rgb(104,79,42)"}}>{product.name}</p>
                                     <h5 style={{color:"rgb(164,75,16)"}}>{formatAmount(product.price)}</h5>
                                 </div>
                                })}
                               

                            </div>
                            <div className='delivery-listing'>
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
                            <div className='delivery-total-wrapper'>
                                <h5 style={{color:"rgb(55,35,18)"}}>TOTAL</h5>
                                <h3 style={{color:"white"}}>{formatAmount(total)}</h3>

                            </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Delivery
