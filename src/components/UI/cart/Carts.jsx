import React from 'react'
import { ListGroup } from 'reactstrap'
import { Link } from 'react-router-dom';
import CartItem from './CartItem'
import "../../../styles/shopping-cart.css"
import { useDispatch,useSelector } from "react-redux";
import {cartUiActions} from '../../../Store/shopping-cart/cartUiSlice'

const Carts = () => {
const dispatch =useDispatch()
const cartProducts=useSelector(state=>state.carts.CartItem)
const toggleCart =()=>{
  dispatch(cartUiActions.toggle())
}
  return (
    <div className="cart__container">
    <ListGroup className='cart'>
     <div className="cart__close">
       <span onClick={toggleCart}><i className="ri-close-circle-fill"></i></span>
     </div>

     <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>

     <div className="cart__bottom">
      <h6>Subtotal Amount: <span>$124</span></h6>
      <button><Link to="/checkout">Checkout</Link></button>
     </div>

    </ListGroup>
</div>
  )
};

export default Carts
