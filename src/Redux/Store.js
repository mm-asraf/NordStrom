import { reducer } from "./products/Reducer";
import { cartReducer } from "./cart/cartReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  productData: reducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
