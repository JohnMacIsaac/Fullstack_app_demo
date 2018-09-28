import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import itemsReducer from "./ducks/itemsReducer";

const store = createStore(itemsReducer, applyMiddleware(promiseMiddleware()));

export default store;
