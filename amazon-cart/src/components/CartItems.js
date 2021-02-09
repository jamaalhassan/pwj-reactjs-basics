
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
    const deleteItem = (indexItemDelete) => {
     let newItems = items.filter((value,index) => {
            return index !== indexItemDelete;
        })
        setCart(newItems)        
    }
    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
        <hr/>
        {items.map((item,index) =>  <CartItem index={index} items={item} key={index} changeItemQuantity={changeItemQty} deleteItem={deleteItem}/>)}
          
            
        </div>
    )
}

export default CartItems
