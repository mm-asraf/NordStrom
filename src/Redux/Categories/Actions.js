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

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchProductsRequest());
  axios
    .get("http://localhost:8000/categories")
    .then((res) => res.data)
    .then((res) => dispatch(fetchProductsSuccess(res)))
    .catch((err) => dispatch(fetchProductsRequest(err)));
};
