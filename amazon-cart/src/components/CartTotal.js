

import React from 'react'
import './CartTotal.css';

function CartTotal({items}) {
  const TotalPrice = () => {
   let total = items.map((item,index) => + item.price * item.quantity)
   let count = Math.round( total.reduce((a, b) => a + b,) * 100)/100;
    return count;
  }
  const CartQty = () =>{
    let itemsQty = items.map((item,index) => + item.quantity)
    let countQty = Math.round( itemsQty.reduce((a, b) => a + b,) * 100)/100;
    console.log(countQty)
    return countQty;
  }

    return (
      <div className="CartTotal">
        <h1>Subtotal ({CartQty()} Items):
          <span className="CarTotal-price">
            ${TotalPrice()}
          </span>
          <button>Procced Check out</button>
        </h1>
      </div>
    )
}

export default CartTotal
