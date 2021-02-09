
import React from 'react'
function CartItem({index,items,changeItemQuantity,deleteItem}) {
    return (
        // <div className="CartItems">
        
        <div className="CartItem">
          <div className="CartImage">
          <img  src={process.env.PUBLIC_URL + './items/' + items.image}  alt="iphone"/>

          </div>
          <div className="CartInfo">
              <div className="CartTitle">
                  <h1>{items.title}</h1>
                  <div className="instock">
                      {items.stock}
                  </div>
                <div className="quantity-info">
                  <select value={items.quantity} onChange={(e)=>changeItemQuantity(e,index)} >
                      <option value="1">Qty:1</option>
                      <option value="2">Qty:2</option>
                      <option value="3">Qty:3</option>
                      <option value="4">Qty:4</option>
                      <option value="5">Qty:5</option>
                      <option value="6">Qty:6</option>
                      <option value="7">Qty:7</option>
                      <option value="8">Qty:8</option>
 
                  </select>
                  <div className="dived">|</div>                    
                  <div className="Delete" onClick={deleteItem.bind(this,index)}>
                      Delete
                  </div>
                  
                </div>
              </div>
              
              
          </div>
              <div className="CartPrice">
                  ${items.price}
              </div>
          </div>
    // </div>
    )
}

export default CartItem
