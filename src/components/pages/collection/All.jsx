import React from 'react'
import { useCart } from '../CartContext'
import '../collection/styles.css'

const All = () => {
    const { addToCart } = useCart();

    const allData =[
        {
            id:1,
            img:"/Nike shoe black futuristic.jpeg",
            tag:"BESTSELLER",
            cta:"ADD TO CART",
            productcategory:"SEATING",
            Productname:"Ember Lounge Chair",
            price:"$2,490",
        },
        {
            id:2,
            img:"/Nike shoe black futuristic.jpeg",
            tag:"NEW",
            cta:"ADD TO CART",
            productcategory:"SEATING",
            Productname:"Ashwood Sofa",
            price:"$4,190",
        },
        {
            id:3,
            img:"/Nike shoe black futuristic.jpeg",
            tag:"LIMITED",
            cta:"ADD TO CART",
            productcategory:"DINING",
            Productname:"Charcoal Dining Set",
            price:"$5,850",
        },
        {
            id:4,
            img:"/Nike shoe black futuristic.jpeg",
            tag:"LIMITED",
            cta:"ADD TO CART",
            productcategory:"SEATING",
            Productname:"Hearthside Armchair",
            price:"$1,890",
        },
        {
            id:5,
            img:"/Nike shoe black futuristic.jpeg",
            tag:"BESTSELLER",
            cta:"ADD TO CART",
            productcategory:"DINING",
            Productname:"Timber Dining Table",
            price:"$3,600",
        },
        {
            id:6,
            img:"/Nike shoe black futuristic.jpeg",
            tag:"NEW",
            cta:"ADD TO CART",
            productcategory:"STORAGE",
            Productname:"Dusk Console",
            price:"$1,240",
        },
    ]
  return (
    <div className='all-container' >
        {allData.map((product) => (
             <div className='all-box-wrapper' key={product?.id}>
             <div className='all-img-wrapper'>
             <div className='all-img-holder'>
                 <img src={product?.img} alt="" />
             </div>
             <span className='all-img-tag'>{product?.tag}</span>
             <div className='all-addtocart-wrapper'>
             <button onClick={() => addToCart(product)}>
                                {product.cta}
                            </button>
             </div>
             </div>
             <div className='all-price-section'>
                 <div className='all-product-name-wrapper'>
                     <h6>{product?.productcategory}</h6>
                     <h4>{product?.Productname}</h4>
                 </div>
                 <div className='all-price-wrapper'>
                     <h4>{product?.price}</h4>
                 </div>
             </div>
             
         </div>


        ))}
       
       
      
    </div>
  )
}

export default All
