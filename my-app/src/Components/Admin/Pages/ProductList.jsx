import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../ProductCard'
import { getProduct } from '../api'
const ProductList = () => {
  const [data,setData]=useState([])  
  const [change,setChange]=useState(false)
  const handleChange=()=>{
        setChange((prev)=>!prev)
  } 
  useEffect(()=>{
     getProduct().then((res)=>setData(res)) 
  },[change])

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"40px",borderRadius:"3px",padding:"20px"}}>
          {data.length>0 && data.map((ele)=>(
            <ProductCard key={ele.id} {...ele} handleChange={handleChange}/>
          ))}   
    </div>
  )
}

export default ProductList