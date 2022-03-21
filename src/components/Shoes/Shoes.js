import React from 'react';
import { add, devided, multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first = 22;
    const second = 2;
    const result = multiply(first, second)
    const sum = add(first, second)
    const devide = devided(first, second)
    return (
        <div>
            <h3>This is shoes components</h3>
            <h4>Result: {result} and {sum} and {devide}</h4>
        </div>
    );
};

export default Shoes;