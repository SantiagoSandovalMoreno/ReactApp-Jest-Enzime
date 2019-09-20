import { createStore, applyMiddleware } from "redux";
import ReduxThuck from "redux-thunk";
import RootReducer from "./reducers";

export const middlewares = [ReduxThuck];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);
