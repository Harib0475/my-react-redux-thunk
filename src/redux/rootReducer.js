import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./product/reducer/productReducer";

const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default reducer;
