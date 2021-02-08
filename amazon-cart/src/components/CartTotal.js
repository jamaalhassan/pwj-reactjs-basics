

import React from 'react'
import './CartTotal.css';

function CartTotal({items}) {
  const TotalPrice = () => {
   let total = items.map((item,index) => + item.price * item.quantity)
   let count = Math.round( total.reduce((a, b) => a + b,) * 100)/100;
   console.log(count)
    return count;
  }
    return (
      <div className="CartTotal">
        <h1>Subtotal ({items.length} Items):
          <span className="CarTotal-price">
            ${TotalPrice()}
          </span>
          <button>Procced Check out</button>
        </h1>
      </div>
    )
}

export default CartTotal
