import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "../features/counter/reducer";

const initialState = {};
const store = createStore(
  combineReducers({
    counter: counterReducer
  }),
  initialState,
  composeWithDevTools()
);

export default store;
