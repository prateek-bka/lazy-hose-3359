import React from 'react'
import { CART_PRODUCT_REQUEST,CART_PRODUCT_SUCCESS,REMOVEALL ,CART_PRODUCT_FAILURE,CART_ADD_PRODUCT_SUCCESS,CART_ITEM_REMOVE, QNT_INC, QNT_DEC} from "./actionType"
import { useEffect } from 'react'
 const getlocaldat=()=>{
  let localdata=JSON.parse(localStorage.getItem("cart-data"))||[];
   return localdata
 }
const initialState={
    isLoading:false,
    cart_products:getlocaldat(),
    isError:false,
    total_amount:"",
    total_item:""
}
// useEffect(()=>{
//   localStorage.setItem("cart-data",JSON.stringify(initialState.cart_products))
// },[initialState.cart_products])
export const reducer = (state=initialState,{type,payload}) => {
  

  switch (type) {
    case CART_PRODUCT_REQUEST :
        return {...state,isLoading:true}
    case CART_PRODUCT_FAILURE:
        return {...state,isLoading:false,isError:true}  
     case CART_ADD_PRODUCT_SUCCESS :
      let check=state.cart_products.find((ele)=>ele.id==payload.id)
      if(check){
        let updateQuantity=state.cart_products.map((ele)=>{
          if(ele.id==payload.id){
            let newAmmount=ele.quantity+1;
            return {
              ...ele,quantity:newAmmount
            }
          }
          else{
            return ele
          }
        })
          localStorage.setItem("cart-data", JSON.stringify (updateQuantity) || [])
        return {...state,isLoading:false,cart_products:updateQuantity,isError:false}
      }
        else{
          localStorage.setItem("cart-data", JSON.stringify ([...state.cart_products,payload]) || [])
          return {...state,isLoading:false,cart_products:[...state.cart_products,payload],isError:false}
        }
        case CART_PRODUCT_SUCCESS:
          return {...state,isLoading:false,cart_products:payload,isError:false}
      case CART_ITEM_REMOVE:
        let updatedCART=state.cart_products.filter((ele)=>ele.id!==payload)
        localStorage.setItem("cart-data", JSON.stringify (updatedCART) || [])
        return { ...state,cart_products:updatedCART}    
      case  QNT_INC:
        let updateQuantity=state.cart_products.map((ele)=>{
          if(ele.id==payload){
            let newAmmount=ele.quantity+1;
            return {
              ...ele,quantity:newAmmount
            }
          }
          else{
            return ele
          }
        })
        localStorage.setItem("cart-data", JSON.stringify (updateQuantity) || [])
        return {...state,isLoading:false,cart_products:updateQuantity,isError:false}
        case  QNT_DEC:
        let updated=state.cart_products.map((ele)=>{
          if(ele.id==payload){
            let newAmmount=ele.quantity-1;
            console.log(newAmmount)
            return {
              ...ele,quantity:newAmmount
            }
          }
          else{
            return ele
          }
        })
        localStorage.setItem("cart-data", JSON.stringify (updated) || [])
        return {...state,isLoading:false,cart_products:updated,isError:false}
        case REMOVEALL:
        
          // localStorage.setItem("cart-data", [])
          
          localStorage.removeItem("cart-data")

          return {...state,isLoading:false,cart_products:[],isError:false}

    default:
    return state
  }
  // useEffect(()=>{
  //   localStorage.setItem("cart-data",JSON.stringify(state.cart_products))
  
  // },[])
}
