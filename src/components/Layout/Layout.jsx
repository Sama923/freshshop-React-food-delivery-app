import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routs from "../../Routes/Routers"
import Carts from "../UI/cart/Carts"
import { useSelector } from "react-redux";

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header/>
      
      {showCart && <Carts />}

      <div>
        <Routs />
      </div>
      <Footer/>
      
    </div>
  )
}

export default Layout
