import React from 'react';
import { addToDb } from '../../utilities/fakedb';

const SingleCos = (props) => {
const {id, name, price} = props.cosmetic;

const addToCart = (id) =>{
      addToDb(id)
}
// const addToCartWithPara = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Product Name: {name}</h2>
            <p>Product id: {id}</p>
            <p>Product price: ${price}</p>
            <button onClick={() => addToCart(id)}>Add To Card</button>
            {/* <button onClick={addToCartWithPara}>Add To Card</button> */}
        </div>
    );
};

export default SingleCos;