
import React from 'react'
import CartItem from './CartItem'
import './CartItem.css'


function CartItems({items}) {
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
        <hr/>
        {items.map((item,index) =>  <CartItem items={item} key={index}/>)}
           
          
            
        </div>
    )
}

export default CartItems
