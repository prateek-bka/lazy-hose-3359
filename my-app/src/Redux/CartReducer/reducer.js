import React from 'react'
import { CART_PRODUCT_REQUEST,CART_PRODUCT_SUCCESS ,CART_PRODUCT_FAILURE,CART_ADD_PRODUCT_SUCCESS} from "./actionType"
const initialState={
    isLoading:false,
    cart_products:[],
    isError:false,
}
export const reducer = (state=initialState,{type,payload}) => {
  switch (type) {
    case CART_PRODUCT_REQUEST :
        return {...state,isLoading:true}
    case CART_PRODUCT_FAILURE:
        return {...state,isLoading:false,isError:true}  
     case CART_ADD_PRODUCT_SUCCESS :
        return {...state,isLoading:false,cart_products:[...state.cart_products,payload],isError:false}
        case CART_PRODUCT_SUCCESS:
          return {...state,isLoading:false,cart_products:payload,isError:false}
    
    default:
    return state
  }
}
