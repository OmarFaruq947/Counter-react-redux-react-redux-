import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import counterReducer from "./counterReducer";

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
