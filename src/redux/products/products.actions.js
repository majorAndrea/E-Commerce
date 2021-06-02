import ProductsActionTypes from "./products.types.js";

export const fetchDataStart = () => ({
  type: ProductsActionTypes.FETCH_DATA_START,
});

export const fetchDataStartAsync = () => ({
  type: ProductsActionTypes.FETCH_DATA_START_ASYNC,
});

export const fetchDataSuccess = (payload) => ({
  type: ProductsActionTypes.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (payload) => ({
  type: ProductsActionTypes.FETCH_DATA_FAILURE,
  payload,
});
