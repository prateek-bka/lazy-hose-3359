import { CART_PRODUCT_REQUEST,CART_PRODUCT_SUCCESS ,CART_PRODUCT_FAILURE,REMOVEALL,CART_QUANTITY,CART_ADD_PRODUCT_SUCCESS,CART_ITEM_REMOVE, QNT_INC, QNT_DEC} from "./actionType"

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
export const cartitemdelete=(payload)=>{
    return {type:CART_ITEM_REMOVE,payload}
}
export const increse=(payload)=>{
    return {type:QNT_INC,payload}
}
export const decrese=(payload)=>{
    return {type:QNT_DEC,payload}
}
export const clearall=()=>{
    return {type:REMOVEALL}
}