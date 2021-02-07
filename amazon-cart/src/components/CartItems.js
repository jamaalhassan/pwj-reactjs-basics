  import React from 'react'
  import './CartItems.css';

  function CartItems() {
      return (
      <div className="CartItems">
          <h1>Shopping Cart</h1>
          <hr/>
          <div className="CartItem">
            <div className="CartImage">
                 <img src="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1604517546555-J765GMQHYO74IFMZ2RWQ/ke17ZwdGBToddI8pDm48kFHDcct_fltA3KLnvRyGws9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz_xmy3d2yisJKMB5olewvGU1zvsFHW7wcxXg-c1peyE_IzyNgEDA6BxhwvJ1j-egw/iphone+12.png?format=1000w" alt="iphone" width="200" height="200"/>
            </div>
            <div className="CartInfo">
                <div className="CartTitle">
                    <h1>Apple Pad Pro</h1>
                  <div className="quantity-info">
                    <div className="instock">
                        In Stock
                    </div>                    
                    <div className="Delete">
                        Delete
                    </div>
                    
                  </div>
                </div>
                
                
            </div>
                <div className="CartTotal">
                    $769.00
                </div>
            </div>
      </div>
      
      )
  }
  
  export default CartItems
  