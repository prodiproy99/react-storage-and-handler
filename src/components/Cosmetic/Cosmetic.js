import React, { useEffect, useState } from 'react';
import SingleCos from '../SingleCos/SingleCos';
import './Cosmetic.css'
 
/*  const Cosmetics =[
     {id: 1, name: 'Alta', price: 100},
     {id: 2, name: 'Palis', price: 300},
     {id: 3, name: 'Nalis', price: 400},
     {id: 4, name: 'Balis', price: 500},
     {id: 5, name: 'Malis', price: 600},
 ] */

const Cosmetic = () => { 
    const [Cosmetics, setCosmetic] = useState([])
    useEffect( () =>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setCosmetic(data))
    }, [])
    
    return (
        <div>
            <h1>This is my product</h1>
            <div className='products'> 
             {
                 Cosmetics.map(cosmetic => <SingleCos key= {cosmetic.id} cosmetic= {cosmetic}></SingleCos>)
             }
            </div>
        </div>
    );
};

export default Cosmetic;