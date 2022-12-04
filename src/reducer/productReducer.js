import { actionType } from "../action/productAction";

export const initialState = {
  loading: false,
  product: [],
  error: false,
  cart:[]
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case actionType.FEATCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionType.FEATCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: false,
      };
    case actionType.FEATCHING_FAILED:
      return {
        ...state,
        loading: false,

        error: true,
      };
    case actionType.ADD_TO_CART:
      return {
        ...state,
        cart:[...state.cart,action.payload]
      };

    default:
      return state;
  }
};
