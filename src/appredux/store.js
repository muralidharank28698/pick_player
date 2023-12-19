import {createStore,applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
// import rootReducer from  "./rootReducer";
import playerReducer from "./playerReducer"
import logger from "redux-logger";

const store = createStore(playerReducer,applyMiddleware(thunk))
export default store;


// import { createStore } from "redux";

// // In store we can create a createStore method
// const store = createStore(playerReducer);
// // console.log(store.getState());

// export default store;
