import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducers from "./user/user.reducers.js";
import cartReducers from "./cart/cart.reducers.js";
import productsReducer from "./products/products.reducers.js";
import checkoutReducer from "./checkout/checkout.reducers.js";

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
});

export default persistReducer(persistConfig, rootReducer);
