/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";
import reducer from "./reducer";

const enhancer = applyMiddleware(logger);

const store = createStore(
  reducer,
  compose(
    enhancer,
    autoRehydrate()
  )
);

persistStore(store);

export default store;
