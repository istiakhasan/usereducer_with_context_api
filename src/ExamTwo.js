import React from 'react';
import ProductContext, { useProductContext } from './context/ProductContext';

const ExamTwo = () => {
    const {state:{cart}}=useProductContext()
    console.log(cart,"lol")
    return (
        <div>
            
        </div>
    );
};

export default ExamTwo;