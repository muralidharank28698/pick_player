import {createStore,applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
import playerReducer from "./playerReducer"

const store = createStore(playerReducer,applyMiddleware(thunk))
export default store;

