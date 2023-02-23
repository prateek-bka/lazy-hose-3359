import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as  cartReducer} from "./CartReducer/reducer";
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
