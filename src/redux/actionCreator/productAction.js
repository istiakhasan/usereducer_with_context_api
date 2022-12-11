import { ADD_TO_CART,REMOVE_TO_CART } from "../actions/actionsType"

export const addToCart=(data)=>{
    return {
        type:ADD_TO_CART,
        payload:data
    }
}
export const removeToCart=(data)=>{
    return {
        type:REMOVE_TO_CART,
        payload:data
    }
}