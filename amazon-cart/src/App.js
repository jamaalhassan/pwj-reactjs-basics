import React, {useState} from 'react';
import './App.css';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import  Header  from './components/Header';
import data from './Data'

function App() {
  
  const [cartItems, setcartItems] = useState(data);
  console.log(cartItems)
  return (
  <div className="App">
    <Header title='Amazon Cart'/>
    <div className="App-main">
      
      <CartItems items={cartItems} setCart={setcartItems}/>
      <CartTotal items={cartItems}/>
     
    </div>
  </div>
  
  );
}
export default App;
