import React from 'react'

import './Cart.scss'

import cart from '../../Assets/images/cart.png'

export const Cart = () => {
  return (
    <div className="cart">
      <img src={cart} alt="Cart" />
      <div className="cart__counter">0</div>
    </div>
  )
}
