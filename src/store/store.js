import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer/reducers"
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
const myStore = createStore( reducer, applyMiddleware(thunk) )

export default myStore