import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const productRequest = () => {
  return { type: PRODUCT_REQUEST };
};

export const productSuccess = (payload) => {
  return { type: PRODUCT_SUCCESS, payload };
};
export const productFailure = () => {
  return { type: PRODUCT_FAILURE };
};

export const getProduct = (param) => (dispatch) => {
  dispatch(productRequest());
  return axios
    .get("https://confused-cape-dog.cyclic.app/products", param)
    .then((res) => {
      dispatch(productSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(productFailure());
    });
};
