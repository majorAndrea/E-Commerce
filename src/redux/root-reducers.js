import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducers from "./user/user.reducers";
import cartReducers from "./cart/cart.reducers";
import productsReducer from "./products/products.reducers";
import checkoutReducer from "./checkout/checkout.reducers";
import reviewsReducer from "./reviews/reviews.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "products", "checkout"],
};

const rootReducer = combineReducers({
  user: userReducers,
  cart: cartReducers,
  products: productsReducer,
  checkout: checkoutReducer,
  reviews: reviewsReducer,
});

export default persistReducer(persistConfig, rootReducer);
