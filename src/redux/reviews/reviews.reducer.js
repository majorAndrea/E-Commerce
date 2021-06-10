import ReviewsActionTypes from "./reviews.types";

const INITIAL_STATE = {
  success: null,
  error: null,
  isFetching: false,
  reviews: [],
};

const reviewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewsActionTypes.REVIEW_ADD_SUCCESS: {
      return {
        ...state,
        success: true,
        error: null,
      };
    }
    case ReviewsActionTypes.REVIEW_ADD_FAILURE: {
      return {
        ...state,
        success: null,
        error: action.payload,
      };
    }
    case ReviewsActionTypes.FETCH_REVIEWS_FROM_DB: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        reviews: action.payload,
      };
    }
    case ReviewsActionTypes.FETCH_REVIEWS_FAILURE: {
      return {
        ...state,
        isFetching: false,
        reviews: [],
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reviewsReducer;
