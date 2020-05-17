import * as Types from "../constants/actionType";

const initialState = {};

const productEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_BY_ID:
      return action.product;
    default:
      return state;
  }
};
export default productEditing;
