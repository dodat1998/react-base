import * as Types from "../constants/actionType";

const initialState = [];

var finIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};

const products = (state = initialState, action) => {
  var index = -1;
  var { id,product } = action;
  switch (action.type) {
    case Types.FETCH_PRODUCT:
      state = action.products;
      return [...state];
    case Types.ADD_PRODUCT:
      return [...state, action.product];
    case Types.DELETE_PRODUCT:
      index = finIndex(state, id);
      state.splice(index, 1);
      return [...state];
      case Types.UPDATE_PRODUCT:
        index = finIndex(state, product.id);
        state[index] = product;
        return state;
    default:
      return [...state];
  }
};
export default products;
