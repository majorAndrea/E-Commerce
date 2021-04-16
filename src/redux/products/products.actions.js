import ProductsActionTypes from "./products.types.js";

export const fetchDataStart = () => ({
  type: ProductsActionTypes.FETCH_DATA_START,
});

export const fetchDataStartAsync = () => ({
  type: ProductsActionTypes.FETCH_DATA_START_ASYNC,
});

// export const fetchDataStartAsync = () => {
//   return async (dispatch) => {
//     const collectionRef = firestore.collection("products");
//     dispatch(fetchDataStart());
//     try {
//       const querySnapshot = await collectionRef.get();
//       const payload = [];
//       querySnapshot.forEach((doc) => {
//         payload.push(doc.data());
//       });
//       dispatch(fetchDataSuccess(payload));
//     } catch (error) {
//       dispatch(fetchDataFailure(error));
//     }
//   };
// };

export const fetchDataSuccess = (payload) => ({
  type: ProductsActionTypes.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchDataFailure = (payload) => ({
  type: ProductsActionTypes.FETCH_DATA_FAILURE,
  payload,
});
