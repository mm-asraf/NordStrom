import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./ActionType";

const initialState = {
  isloading: false,
  products: [],
  iserror: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        products: action.payload,
        iserror: "",
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isloading: false,
        products: [],
        iserror: action.payload,
      };
    default:
      return state;
  }
};
