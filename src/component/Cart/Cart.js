import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
  let total = Math.round(0); 
  for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      total = total + product.price;
      
  }

let shipping = 0;
if (total > 35){
    shipping = 0;
}
else if(total > 15){
    shipping = 4.99
}
else if(total > 0){
    shipping = 12.99
}
const tax = (total / 10).toFixed(2);
const grandTotal = (total + shipping + Number(tax)).toFixed(2);
const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}
    return (
        <div>
            <h4 className="bg-danger">Order summary</h4>
            <h5>items ordered: {cart.length}</h5>
            <p>product price: {formatNumber(total)}</p>
            <p><small>shipping cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p> total price: {grandTotal}</p>
            <br/>
           <Link to="/review">  
                <button className="main-button">review order</button>

               
        
         </Link>
        </div>
    );
};

export default Cart;