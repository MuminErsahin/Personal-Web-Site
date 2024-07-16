import { legacy_createStore as createStore } from "redux";
import { reducer } from "./Reducer/reducers"

const myStore = createStore( reducer )

export default myStore