import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./ActionType";

import axios from "axios";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: payload,
  };
};

export const fetchProductsFailure = () => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
  };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest());
  axios
    .get("http://localhost:8000/products")
    .then((res) => res.json())
    .then((res) => dispatch(fetchProductsSuccess(res)))
    .catch((err) => dispatch(fetchProductsRequest(err)));
};
