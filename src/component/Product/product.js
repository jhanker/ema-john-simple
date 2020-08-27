import React from 'react';
import './Product.css';

const product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            
            <div>
            <img src={img} alt=""/>
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p> $ {price}</p>
                <br/>
                <p><small>only <b>{stock}</b> left in stock</small></p>
                <button className='main-button'>Add to Cart</button>
            </div>

          
            
        </div>
    );
};

export default product;