import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Product.css';
import { Link } from 'react-router-dom';

const product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            
            <div>
            <img src={img} alt=""/>
            </div>

            <div>
                <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p> $ {price}</p>
                <br/>
                <p><small>only <b>{stock}</b> left in stock</small></p>
                {props.showAddToCart === true && <button className='main-button'
                    onClick={() => props.handleAddProduct(props.product)}
                >  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>

          
            
        </div>
    );
};

export default product;