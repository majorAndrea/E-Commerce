import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./root-reducers.js";
import { persistStore } from "redux-persist";
import rootSagas from "./root-sagas.js";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);
