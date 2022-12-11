import { ADD_TO_CART,REMOVE_TO_CART } from "../actions/actionsType"

const initialState={
    test:"xyz123",
    cart:[]

}
export const ProductReducer=(state=initialState,action)=>{
    const selectedProduct=state?.cart?.find(product=>product.id===action?.payload?.id)
    console.log(selectedProduct,"selected product")
    switch(action.type){
        case ADD_TO_CART:
            if(selectedProduct){
                const newCart=state.cart.filter(ct=>ct.id!==selectedProduct.id)
                selectedProduct.quantity=selectedProduct.quantity+1
                return {...state,cart:[...newCart,selectedProduct]}
            }else{

                return {
                    ...state,
                    cart:[...state.cart,{...action.payload,quantity:1}]
                } 
            }
        case REMOVE_TO_CART:
           
            if(selectedProduct.quantity>1){
                const newCart=state.cart.filter(ct=>ct.id!==selectedProduct.id)
                selectedProduct.quantity=selectedProduct.quantity-1
                return {...state,cart:[...newCart,selectedProduct]}
            }
            return {
                ...state,
                cart:state.cart.filter(cp=>cp.id !==action.payload.id)
            } 
        
        default:
            return state
    }
    
}

