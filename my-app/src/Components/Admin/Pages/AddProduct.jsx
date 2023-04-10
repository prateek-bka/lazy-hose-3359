
import React from 'react'
import { useState } from 'react'
import { addProduct } from '../api';
import AdminNavbar from '../AdminNavbar';
const initialState={
  name:"",
  image:"",
  price:0,
  brand:"",
  like:0,
  dislike:0
}
const AddProduct = () => {
  
  const [productDetail,setProductDetail]=useState(initialState)
   const handleChange=(e)=>{
        const {name,value} =e.target;
        setProductDetail((prev)=>{
          return {...prev,[name]:name=== "price" ?  +value :value}
        })
   } 
   
   
   const handleSubmit=(e)=>{
        e.preventDefault();
        addProduct(productDetail).then(()=>{
          alert("Product Added SuccessFull")
        })
       
        setProductDetail(initialState)
   }  
  return (
    <div>
  
         <div style={{width:"30%",margin:"auto",padding:"10px",boxShadow:"rgba(14, 233, 98, 0.87) 0px 2px 8px 0px",textAlign:"center"}}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit} >
              <div>
              <input  onChange={(e)=>handleChange(e)} value={productDetail.name} name="name" type="text" placeholder='Product Name' style={{width:"80%",height:"20px",marginTop:"15px"}}/>
              </div>
              <div>
              <input  onChange={(e)=>handleChange(e)} value={productDetail.image} name="image" type="text" placeholder='Product Image' style={{width:"80%",height:"20px",marginTop:"15px"}}/>
              </div>
              <div>
              <input  onChange={(e)=>handleChange(e)} value={productDetail.price} name="price" type="number" placeholder='Product Price' style={{width:"80%",height:"20px",marginTop:"15px"}}/>
              </div>
              <div>
              <input  onChange={(e)=>handleChange(e)} value={productDetail.brand} name="brand" type="text" placeholder='Product Brand' style={{width:"80%",height:"20px",marginTop:"15px"}}/>
              </div>
              <div>
              <button style={{marginTop:"20px",padding:"8px",background:"#008CBA",color:"white",border:"none",borderRadius:"3px"}}>Add Product</button>
              </div>
            </form>
         </div>
    </div>
  )
}

export default AddProduct