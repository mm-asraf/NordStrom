import { reducer } from "./products/Reducer";
// import { reducerCategory } from "./Categories/Reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  productData: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
