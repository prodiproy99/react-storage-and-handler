import React from 'react';

const SingleCos = (props) => {
const {id, name, price} = props.cosmetic;
    return (
        <div>
            <h2>Product Name: {name}</h2>
            <p>Product id: {id}</p>
            <p>Product price: ${price}</p>
        </div>
    );
};

export default SingleCos;