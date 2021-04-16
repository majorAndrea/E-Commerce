import ProductsActionTypes from "./products.types.js";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMSg: undefined,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case ProductsActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case ProductsActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
