import React, { createContext, useContext, useReducer, useState } from "react";
import { initialState, productReducer } from "../reducer/productReducer";
const product_context = createContext();
const ProductContext = ({ children }) => {
  
    const [state,dispatch]=useReducer(productReducer,initialState)
    const [count,setCount]=useState(300)
  return <product_context.Provider value={{state,count,dispatch}}>{children}</product_context.Provider>;
};

export const useProductContext = () => {
  const context = useContext(product_context);
  return context;
};
export default ProductContext;
