

import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({items}) {
  const TotalPrice = () => {
    let total = 0;
     items.forEach((item) => {
      total +=  (item.price * item.quantity)
    })
    return total;
       
  }
  //  let count = Math.round( total.reduce((a, b) => a + b,) * 100)/100;
  
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
          <NumberFormat value={TotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} />
          </span>
          <button>Procced Check out</button>
        </h1>
      </div>
    )
}
export default CartTotal
