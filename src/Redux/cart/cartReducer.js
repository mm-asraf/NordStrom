import { ADD_TO_CART } from "./ActionType";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totoalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.push(action.payload),
      };
    default:
      return state;
  }
};
