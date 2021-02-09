
import React from 'react'
import CartItem from './CartItem'
import './CartItem.css'


function CartItems({items,setCart}) {
    const changeItemQty = (Qty,indexed) => {
        let chngQ =  Qty.target.value;
        let selectedQty = items[indexed];
        selectedQty.quantity = chngQ;
        let newItem = [...items];
        setCart(newItem);
    }
    const QtyValue = () => {
        console.log('htmlqty',Option.target)
    }
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
        <hr/>
        {items.map((item,index) =>  <CartItem index={index} items={item} key={index} changeItemQuantity={changeItemQty}/>)}
            {QtyValue()}
          
            
        </div>
    )
}

export default CartItems
