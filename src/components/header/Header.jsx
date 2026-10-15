import React from 'react'
import '../header/header.css'
import { useCart } from '../pages/CartContext';
import { useNavigate } from 'react-router'

const Header = () => {
const nav = useNavigate();
const { cartCount } = useCart();
  return (
    <header className='header-container'>
        <nav className='nav-container'>
            <div className='logo-wrapper'>
                <h1  onClick={()=>{nav("/")}}>MIGHTEX<span>.</span></h1>
            </div>

            <div className='nav-links-wrapper'>
                 <a href="#collections"  onClick={()=>{nav("/product")}}>COLLECTIONS</a>
                 <a href="#materials">MATERIALS</a>
                 <a href="#studio" onClick={()=>{nav("/product")}}>STUDIO</a>
                 <a href="#about">ABOUT</a>
            </div>
            <div className='icons-wrapper'>
               <p className='search'>
                SE
               </p>
               <div className='cart-wrapper'>
               <p className='cart'onClick={()=>{nav("/cart")}}>
                 CA
               </p>
               {cartCount > 0 && (
        <span className="cart-num">
            {cartCount >= 100 ? "99+" : cartCount}
        </span>
    )}
               </div>
               
            </div>

        </nav>
      
    </header>
  )
}

export default Header
