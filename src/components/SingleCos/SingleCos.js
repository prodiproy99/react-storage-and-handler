import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const SingleCos = (props) => {
const {id, name, price} = props.cosmetic;

const addToCart = (id) =>{
      addToDb(id)
}
// const addToCartWithPara = () => addToCart(id);
const removeFromCart = id => {
    removeFromDb(id)
}

    return (
        <div className='product'>
            <h2>Product Name: {name}</h2>
            <p>Product id: {id}</p>
            <p>Product price: ${price}</p>
            {/* parameter send korle function diye pass korte hobe */}
            <button onClick={() => addToCart(id)}>Add To Card</button>
            {/* <button onClick={addToCartWithPara}>Add To Card</button> */}
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default SingleCos;