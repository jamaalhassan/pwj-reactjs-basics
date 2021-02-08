
import React from 'react'
function CartItem({items}) {
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
                  <select value={items.quantity}>
                      <option value="1">Qty:1</option>
                      <option value="2">Qty:2</option>
                      <option value="3">Qty:3</option>
                  </select>
                  <div className="dived">|</div>                    
                  <div className="Delete">
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
