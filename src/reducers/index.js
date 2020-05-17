import { combineReducers } from "redux";
import products from "./products";
import productEditing from "./productEditing";

const myReducer = combineReducers({
  products,
  productEditing,
});

export default myReducer;
