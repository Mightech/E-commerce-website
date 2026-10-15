import React from 'react'
import Landingpage from './components/pages/Landingpage.jsx'
import Cart from './components/pages/cart/Cart.jsx'
import Product from './components/pages/product/Product.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import First from './components/pages/First.jsx'
import './App.css'
import Checkout from './components/pages/checkout/Checkout.jsx'
import Delivery from './components/pages/checkout/Delivery.jsx'
import Payment from './components/pages/checkout/Payment.jsx'
import Confirmationpage from './components/pages/checkout/Confirmationpage.jsx'

function App() {
const routes = createBrowserRouter([
{
  element: <First/>,
  children: [
    {
      path: "/",
      element: <Landingpage/>
    },
    {
      path: "/product",
      element: <Product/>
    },
    {
      path: "/cart",
      element: <Cart/>
    }
    
  ]
},
{
  path: '/checkout',
  element: <Checkout/>

},
{
  path: '/delivery',
  element: <Delivery/>

},
{
  path: '/payment',
  element: <Payment/>

},
{
  path: '/confirmationpage',
  element: <Confirmationpage/>

}



])

  return (
    <>
   
      
<RouterProvider router={routes}/>
    </>
  )
}

export default App
