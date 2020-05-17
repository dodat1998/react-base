import * as Types from "./../constants/actionType";
import callApi from "./../utils/apiCaller";

export const fetchProductRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((response) => {
      dispatch(fetchProduct(response.data));
    });
  };
};

export const addProductRequest = (data) => {
  return (dispatch) => {
    return callApi("products", "POST", data).then((response) => {
      dispatch(addProduct(response.data));
    });
  };
};

export const deleteProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((response) => {
      dispatch(deleteProduct(id));
    });
  };
};

export const fetchProduct = (products) => {
  return {
    type: Types.FETCH_PRODUCT,
    products,
  };
};

export const fetchProductByIdRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "GET", null).then((response) => {
      dispatch(fetchProductById(response.data));
    });
  };
};

export const fetchProductById = (product) => {
  return {
    type: Types.FETCH_PRODUCT_BY_ID,
    product,
  };
};

export const addProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product,
  };
};

export const deleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};

export const updateProductRequest = (product) => {
  return (dispatch) => {
    return callApi(`products/${product.id}`, "PUT", product).then((response) => {
      dispatch(updateProduct(response.data));
    });
  };
};

export const updateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product,
  }
}