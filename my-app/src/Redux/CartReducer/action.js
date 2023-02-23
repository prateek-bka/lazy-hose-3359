import { CART_PRODUCT_REQUEST,CART_PRODUCT_SUCCESS ,CART_PRODUCT_FAILURE,CART_QUANTITY,CART_ADD_PRODUCT_SUCCESS} from "./actionType"

export const getcartSuccess=(payload)=>{
  return {type:CART_PRODUCT_SUCCESS,payload}
}
export const addcartProduct=(payload)=>{
     return {type:CART_ADD_PRODUCT_SUCCESS,payload}
}
export const getcartRequest=()=>{
    return {type:CART_PRODUCT_REQUEST}
}

export const getcartFailure=()=>{
    return {type:CART_PRODUCT_FAILURE}
}
export const updateQuantity=()=>{
    return {type:CART_QUANTITY}
}